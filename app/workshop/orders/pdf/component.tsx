'use client';
import blueImage from '@/public/images/logo/blueimage.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserModel } from '@/models/user.model';
import { FunctionComponent } from 'react';
import { ReturnUnifiedStringDateTime } from '@/utils/hooks';
import { InspectionsModel } from '@/models/workshops/inspections.model';
import { OrderWorkshopModel } from '@/models/workshops/orders.model';
import '../../inspections/pdf/index.css';
import { createArrayToTable } from '../../inspections/pdf/component';
function countTotalTasksPrice(tasks: any[]){
    var count = 0;
    tasks?.map((e) => {
        count = count + (Number(e?.ammount) * Number(e?.price));
    })
    return count;
}
type ViewPDFOrderPageType = {
    tasks: any[];
    user: UserModel;
    inspection: OrderWorkshopModel;
    index: number;
    indexLength: number
}
const ViewPDFOrderPage: FunctionComponent<ViewPDFOrderPageType> = ({tasks, user, inspection, index, indexLength}) => {
    return <div className="inspectionPdfView p1">
        <div className="flex w100">
            <div className="w100">
                <h1 className="fz1"  style={{fontWeight: '600'}}>{user?.nameShop}</h1>
                <p className="fz1" >{user?.direction}</p>
                <p className="fz1" >RUC: {user?.ruc}</p>
                <p className="fz1" >Celular: {user?.phone}</p>
            </div>
            <div className="w100">
                <img style={{border: '1px solid grey', marginLeft: 'auto', marginRight: 'auto'}} src={user?.imageLogo !== '' ? user?.imageLogo : blueImage.src} width='100px' height='100px'/>

            </div>
            <div className="w100 right">
                <h1 className="title fz1" style={{fontWeight: '600'}}>Cotización</h1>
                <p className="fz1" >N 00{(indexLength - (index+1))+1}</p>
                <div className="flex">
                    <p className="subtitle fz1" style={{marginLeft: 'auto'}}>Fecha emisión:</p>
                    <p className="ml1 fz1">{ReturnUnifiedStringDateTime(new Date().toString())}</p>
                </div>
                <div className="flex">
                    <p className="subtitle fz1" style={{marginLeft: 'auto'}}>Asesor:</p>
                    <p className="ml1 fz1" >{user?.name + ' ' + user?.lastname}</p>
                </div>
                <div className="flex">
                    <p className="subtitle fz1" style={{marginLeft: 'auto'}}>Mecanico:</p>
                    <p className="ml1 fz1">{inspection?.workerAssigned}</p>
                </div>
            </div>
        </div>
        <div className="w100 mt1 center">
            <h1 className="mt1" style={{color: 'grey', fontSize: '1.5rem'}}>Cotización</h1>
        </div>
        <div className="p1 mt1">
            <div className="flex between">
                <div className="mt05">
                    <div className="flex">
                        <p className="subtitle fz1">Cliente:</p>
                        <p className="ml1 fz1">{inspection?.client?.name + ' ' + inspection?.client?.lastname}</p>
                    </div>
                    <div className="flex mt05" >
                        <p className="subtitle fz1">DNI/RUC:</p>
                        <p className="ml1 fz1">{inspection?.client?.ruc}</p>
                    </div>
                    
                </div>
                <div className="mt05" style={{marginLeft: '3rem'}}>
                    <div className="flex">
                        <p className="subtitle fz1">Vehículo:</p>
                        <p className="ml1 fz1">{inspection?.vehicle?.brand + ' ' + inspection?.vehicle?.model + ' ' + inspection?.vehicle?.plate}</p>
                    </div>
                    <div className="flex mt05">
                        <p className="subtitle fz1">Celular:</p>
                        <p className="ml1 fz1">{inspection?.client?.phone}</p>
                    </div>
                </div>
                <div className="mt05">
                    <div className="flex">
                        <p className="subtitle fz1">Correo:</p>
                        <p className="ml1 fz1">{inspection?.client?.email}</p>
                    </div>
                    
                </div>
            </div>

            {createArrayToTable(inspection?.tasks)?.map((e) => {
                const items = inspection?.tasks?.filter((a) => a.service === e);
                

                return <div>
                    <h1 className="mt2 fz1">{e}</h1>
                     <TableContainer className="mt1" style={{boxShadow: 'none', backgroundColor: 'transparent'}} component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="fz1"  align="left">Item</TableCell>
                                    <TableCell className="fz1"  align="center">Cantidad</TableCell>
                                    <TableCell className="fz1"  align="center">Precio</TableCell>
                                    <TableCell className="fz1"  align="center">Total</TableCell>
                                    <TableCell className="fz1"  align="center"></TableCell>
                                </TableRow>
                                </TableHead>
                                    <TableBody>
                                        {items?.map((row, index) => {
                                                return <TableRow
                                                    key={index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    style={{borderBottom: '1px solid rgba(0, 0, 0, 0.2)'}}
                                                >
                                                
                                                    <TableCell className="fz1"  align="left">
                                                        {row.item}
                                                        </TableCell>
                                                        <TableCell className="fz1"  align="center">
                                                            {Number(row.ammount) === 0 ? '' : row.ammount}</TableCell>
                                                        <TableCell className="fz1"  align="center">
                                                            {Number(row.price) === 0 ? '' : ('s/. ' + Number(row.price).toFixed(2))}</TableCell>
                                                <TableCell className="fz1"  align="right">{Number(row.price) === 0|| Number(row.ammount) === 0 ? '' : ('s/. ' + (Number(row?.price) * Number(row?.ammount)).toFixed(2))}</TableCell>
                            </TableRow>
                        })} 
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            })}
            <div className="flex between">
                <p></p>
                <p className="mt2 mr1 fz1">
                    <span style={{marginRight: '2rem'}}>Total</span>  {countTotalTasksPrice(inspection?.tasks).toFixed(2) === '0.00' ? '__________' : ('s/. ' + countTotalTasksPrice(inspection.tasks).toFixed(2))}
                </p>
            </div>

            <div className="w100 center" style={{marginTop: '8rem', marginBottom: '7rem'}}>
                <div className="flex w100" style={{justifyContent: 'center'}} >
                    <div  style={{width: '200px'}}>
                        <p className="w100" style={{height: '2px', background: 'black'}}/>
                        <p className="mt05 fz1">Elaborado por</p>
                    </div>
                    <div style={{width: '200px', marginLeft: '3rem'}}>
                        <p className="w100" style={{height: '2px', background: 'black'}}/>
                        <p className="mt05 fz1">Firma del cliente</p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', marginTop: '1rem', whiteSpace: 'pre-wrap'}}>
                <p style={{width: '100%', padding: '1rem', marginTop: '1rem', borderTop: '1px solid rgba(0, 0, 0, 0.2)'}}>{String(user?.footerpdf).replace("\n", "\r\n") === 'undefined' ? '' : String(user?.footerpdf).replace("\n", "\r\n")}</p>
            </div>
            {user?.image === '' ? '' : 
            <div className='mt1'>
                <img src={user?.image}/>
            </div>}
        </div>
    </div>
}

export default ViewPDFOrderPage;