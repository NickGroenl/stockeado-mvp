'use client';
import { getUser, verifyUserWorkshop } from "@/app/api/user/call";
import SideBarComponent from "@/components/panel/sidebar";
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import './index.css';
import Select from "react-dropdown-select";
import { getAllClients } from "@/app/api/workshop/clients/call";
import { createVehicleBrand, getAllVehicles, getVehicleBrands } from "@/app/api/workshop/vehicles/call";
import { ClientsModel } from "@/models/workshops/clients.model";
import { VehiclesModel } from "@/models/workshops/vehicles/vehicles.model";
import { toast } from "react-toastify";
import { createInspection, getAllInspections } from "@/app/api/workshop/inspections/call";
import { InspectionsModel } from "@/models/workshops/inspections.model";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { ReturnUnifiedStringDateTime } from "@/utils/hooks";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LoadPage from "@/components/general/loadPage";
import BackButton from "@/components/general/backButton";
import AddVehicle from "@/components/workshops/addvehicle";
import { VehiclesBrandModel } from "@/models/workshops/vehicles/brands.model";
import blueImage from '@/public/images/logo/whiteimage.png';
import { uploadApiImage } from "@/app/api/images/call";

function countTotalTasksPrice(tasks: any[]){
    var count = 0;
    tasks?.map((e) => {
        count = count + (Number(e?.ammount) * Number(e?.price));
    })
    return count;
}
const InspectionWorkshopLayoutPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<UserModel>(null);
    const [vehicles, setVehicles] = useState<VehiclesModel[]>([]);
    const [clients, setClients] = useState<ClientsModel[]>(null);
    const [vehicleBrands, setVehicleBrands] = useState<VehiclesBrandModel[]>([]);

    const [clientSelected, setSelectedClient] = useState<string>(null);
    const [clientName, setClientName] = useState<string>('');
    const [clientLastname, setClientLastName] = useState<string>('');
    const [clientPhone, setClientPhone] = useState<string>('');
    const [clientEmail, setClientEmail] = useState<string>('');
    const [clientBirth, setClientBirth] = useState<string>('');
    const [clientRuc, setClientRuc] = useState<string>('');


    const [vehicleSeleted, setSelectedVehicle] = useState<string>(null);
    const [vehicleBrand, setVehicleBrand] = useState<string>('');
    const [vehicleModel, setVehicleModel] = useState<string>('');
    const [vehicleYear, setVehicleYear] = useState<string>('');
    const [vehiclePlate, setVehiclePlate] = useState<string>('');
    const [vehicleVin, setVehicleVin] = useState<string>('');

    const [dateStart, setDateStart] = useState<string>('');
    const [workerAssigned, setWorker] = useState<string>('');
    const [mileage, setMileage] = useState<string>('');
    const [oil, setOil] = useState<string>('');
    const [fuel, setFuel] = useState<string>('');
    const [brakes, setBrakes] = useState<string>('');
    const [refrigerant, setRefrigerant] = useState<string>('');
    const [tableKey, setTableKey] = useState<number>( Math.random());

    const [tasks, setTasks] = useState<any[]>([{
        service: '',
        item: '',
        price: '',
        ammount: 0,
        
    }]);

    const [observations, setObservations] = useState<string>('');

    const [newScheduler, setNewScheduler] = useState<string>('');
    const [newSchedulerDate, setSchedulerDate] = useState<string>('');
    const [calendars, setCalendars] = useState<any[]>([]);
    
    const [accesories, setAccesories] = useState<any>([]);
    
    const [inspections, setInspections] = useState<InspectionsModel[]>([]);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);
    const [carSelected, setCarSelected]  = useState<Array<any>>([]);
    const [totalPrice, setTotalPrice] = useState<string>('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const onChangeImage = async (event, setImage: any) => {
        event.preventDefault();
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          setImage(fileReader.result);
        };
        fileReader.onerror = (error) => {
          console.log(error);
        };
    }
    const toUser = async () => {
        const userr = await getUser();
        var ownerid = String(userr?._id);
        if(!verifyUserWorkshop(userr, router, '/workshop/inspections')) {
            return;
        }
        if(userr?.role !== 'owner'){
            ownerid = userr?.owner;
        }
        const vehicless = await getAllVehicles(ownerid) ?? [];
        const clientss = await getAllClients(ownerid) ?? [];
        const inspectionsCast = await getAllInspections(ownerid) ?? [];
        
        const vehicleBrandsCast = await getVehicleBrands() ?? [];
        setVehicleBrands(vehicleBrandsCast)
        setClients(clientss);
        setVehicles(vehicless);
        setUser(userr);
        setAccesories([...userr?.accesories?.map((e) => { return {
            value: '',
            label: e
        }})]);
        setInspections(inspectionsCast);
    }
    const buildForm = async () => {
        var message = '';
        if(dateStart === '' || workerAssigned === ''){
            if(message === ''){
                message = message + ' ' + 'Generales';  
            }else message = message + ', ' + 'Generales'
        }
        if(clientName === '' || clientLastname === '' || clientEmail === '' || clientPhone === ''){
            if(message === ''){
                message = message + ' ' + 'Cliente';  
            }else message = message + ', ' + 'Cliente';
        } 
        if(vehicleBrand === '' || vehicleModel === '' || vehiclePlate === '' || vehicleYear === '' || vehicleVin === ''){
            if(message === ''){
                message = message + ' ' + 'Vehículo';  
            } else message = message + ', ' + 'Vehículo'
        } 
        if(mileage === '' || oil === '' || fuel === '' || brakes === '' || refrigerant === ''){
            if(message === ''){
                message = message + ' ' + 'Estado del vehículo';  
            } else message = message + ', ' + 'Estado del vehículo'
        } 
        if(message !== '') return toast.error('Encontramos los siguientes errores en el formulario:' + message);
        setDisabledButton(true);
        var image1Response = '', image2Response = '', image3Response = '', image4Response = '';
        if(image1 !== ''){
            image1Response = await uploadApiImage({
                name: 'inspectionphoto',
                type: 'image/png',
                data: image1 
            }).then(e => {
                return e?._id
            });
        }
        if(image2 !== ''){
            image2Response = await uploadApiImage({
                name: 'inspectionphoto',
                type: 'image/png',
                data: image2 
            }).then(e => {
                return e?._id
            });
        }
        if(image3 !== ''){
            image3Response = await uploadApiImage({
                name: 'inspectionphoto',
                type: 'image/png',
                data: image3 
            }).then(e => {
                return e?._id
            });
        }
        if(image4 !== ''){
            image4Response = await uploadApiImage({
                name: 'inspectionphoto',
                type: 'image/png',
                data: image4 
            }).then(e => {
                return e?._id
            });
        }
        const body = {
            calendars,
            object: {
                dateStart,
                workerAssigned,
                owner: user?.role === 'owner' ? user?._id : user?.owner,
                state: 0,
                totalPrice,
                client: {
                    _id: clientSelected ?? '',
                    name: clientName,
                    lastname: clientLastname,
                    email: clientEmail,
                    phone: clientPhone,
                    birth: clientBirth,
                    ruc: clientRuc
                },
                vehicle: {
                    _id: vehicleSeleted ?? '',
                    brand: vehicleBrand,
                    model: vehicleModel,
                    plate: vehiclePlate,
                    year: vehicleYear,
                    vin: vehicleVin
                },
                imageList: [image1Response ?? '', image2Response ?? '', image3Response ?? '', image4Response ?? ''],
                orders: [],
                mileage,
                oil,
                fuel,
                brakes,
                refrigerant,
                tasks,
                accesories,
                observations,
                createdBy: user?.name + ' ' + user?.lastname
            }
        }
        const response = await createInspection(body);
        if(response !== null){
            toast.success('Creaste una nueva inspección');
            router.push('/workshop/inspections/view?id=' + response?._id);
            
        } else return toast.error('Ocurrio un problema');
        setDisabledButton(false);
    }

    useEffect(() => {
        toUser();
    }, []);

    const editItemTasks = (value: string, index: number) => {
        var tasksCast = tasks;
        tasksCast[index].service = value;
        setTasks(tasksCast);
    }
    return <div>
        {user === null ? <LoadPage/> :
            <SideBarComponent user={user} route='/workshop/inspections' frameContennt={
                <div>
                    <div className="flex between">
                        <h1 className="headerSideBar"> Nuevo informe de inspección</h1>
                        <BackButton route='/workshop/inspections'/>
                    </div>
                    <div className="p1">


                        <div className="flex between">
                            <div>
                                <p className="subtitle mt1" style={{fontWeight: '500'}}>Inspección #{inspections?.length +1}</p>
                            </div>
                            <div className="flex">
                                <p className="subtitle mr1 mt1 hideResponsive">Estado</p>
                                <div className="mt1">
                                    
                                    <button disabled className="btn-disabled-secondary ml1">Sin confirmar</button>
                                </div>
                            </div>
                        </div>


                        <div className="cardWhiteForm mt2">
                            <p className="subsubtitle">Generales</p>
                            <div className="flex between displayBlockResponsive w100">
                                <div className="flex mr1 w100  mt1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <p className="formTitle w100 mr1">Fecha de ingreso</p>
                                    <input onChange={(e) => setDateStart(e.target.value)} value={dateStart} className="inputForm w100  ml1 " type="datetime-local" placeholder=""/>
                                </div>
                                <div className="flex w100 mt1 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <p className="formTitle w100 mr1">Mecanico asignado</p>
                                    <input onChange={(e) => setWorker(e.target.value)} value={workerAssigned} className="inputForm w100 ml1" type="text" placeholder=""/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex between displayBlockResponsive">
                            <div className="cardWhiteForm mt1 w100 mr1">
                                <div className="flex">
                                    <p className="subsubtitle mr1">¿No encuentras tu Marca/Modelo?</p>
                                    <AddVehicle brands={vehicleBrands} setVehicleBrands={setVehicleBrands}/>
                                </div>
                                <div className="flex mt1 between displayBlockResponsiveMin">
                                    <p className="subsubtitle mt1">Vehículo</p>
                                    <Select
                                        closeOnClickInput
                                        style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                                        options={[
                                            {
                                                label: 'Completar',
                                                value: 'other'
                                            },
                                            ...vehicles?.map((e) => {
                                                return {
                                                    label: '#' + e?.plate,
                                                    value: String(e?._id)
                                                }
                                            }
                                        )]}
                                        separator
                                        placeholder="Seleccionar/Buscar"
                                        className="inputForm br05 w100 mt05"
                                        onChange={(values) => {
                                            if(values[0]?.value === 'other') {
                                                setSelectedVehicle(null);
                                                setVehiclePlate('');
                                                setVehicleBrand('');
                                                setVehicleModel('');
                                                setVehicleYear('');
                                                setVehicleVin('');
                                                return;
                                            } else {
                                                const vehicleObject = vehicles?.find(e => String(e._id) === values[0]?.value);
                                                setSelectedVehicle(String(vehicleObject?._id));
                                                setVehiclePlate(vehicleObject?.plate);
                                                setVehicleBrand(vehicleObject?.brand);
                                                setVehicleModel(vehicleObject?.model);
                                                setVehicleYear(vehicleObject?.year);
                                                setVehicleVin(vehicleObject?.vin);
                                                clients?.map(e => {
                                                    const responseVehicle = e?.vehicles?.find((a) =>  a === String(vehicleObject?._id));
                                                    if(responseVehicle?.length > 3){
                                                        setSelectedClient(String(e?._id));
                                                        setClientName(e?.name);
                                                        setClientLastName(e?.lastname);
                                                        setClientEmail(e?.email);
                                                        setClientPhone(e?.phone);
                                                        setClientBirth(e?.birth);
                                                        setClientRuc(e?.ruc);
                                                    }
                                                });
                                                
                                                 
                                            }
                                        } } values={[{value: vehicleSeleted, label: vehicleSeleted === null ? 'Seleccionar/buscar' : '# ' + vehicleBrand + ' ' + vehicleModel}]}                                    />
                                </div>
                                <div className="flex between displayBlockResponsiveMin mt1">
                                    <p className="formTitle mr1">Placa</p>
                                    <input maxLength={7}  pattern="([a-zA-Z]+-)?d{3,6}" required disabled={vehicleSeleted !== null ? true : false} onChange={(e) => {
                                        
                                        setVehiclePlate(e?.target.value);
                                    }} value={vehiclePlate} className="inputForm w100Min" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle">Marca</p>
                                    {
                                        (vehicleSeleted === null) ? <Select
                                        closeOnClickInput
                                        style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                                        options={
                                            
                                            [...vehicleBrands?.map((e) => {
                                                return {
                                                    label: e?.brand,
                                                    value: e?.brand
                                                }
                                            })]}
                                            separator
                                            placeholder="Seleccionar/Buscar"
                                            className="inputForm br05"
                                            onChange={(values) => {
                                                if(values[0]?.value !== 'other') {
                                                    setVehicleBrand(values[0]?.value);
                                                    setCarSelected(vehicleBrands?.find((e) => e?.brand === values[0]?.value)?.models);
                                                    return;
                                                }
                                        } } values={[{value: vehicleBrand, label: vehicleBrand === '' ? 'Seleccionar/buscar' : '# ' + vehicleBrand }]}                                     />
                                        : <select className="inputForm" style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                                        disabled><option># {vehicleBrand}</option></select>
                                    }
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle">Modelo</p>
                                    {
                                        (vehicleSeleted === null) ? <Select
                                        closeOnClickInput
                                        disabled={vehicleSeleted !== null ? true : false}                                        
                                        style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                                        options={
                                            carSelected?.length > 0 ? [...carSelected?.map((e) => {
                                                return {
                                                    label: String(e?.title),
                                                    value: String(e?.title)

                                                }
                                            })] : [{label: 'No encontrado', value: 'other'}]}
                                            separator
                                            placeholder="Seleccionar/Buscar"
                                            className="inputForm br05 w100"
                                            onChange={(values) => {
                                                if(values[0]?.value !== 'other') {
                                                    setVehicleModel(values[0]?.value);
                                                    return;
                                                }
                                        } } values={[{value: vehicleModel, label: vehicleModel === '' ? 'Seleccionar/buscar' : '# ' + vehicleModel }]}                                     />
                                        : <select className="inputForm" style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                                        disabled><option># {vehicleModel}</option></select> 
                                }
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle">Año</p>
                                    {
                                        (vehicleSeleted === null) ? <Select
                                        disabled={vehicleSeleted !== null ? true : false}
                                        closeOnClickInput
                                        style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                                        options={[ ...new Array(74).fill(null).map((_, i) => {
                                                return {
                                                    value: (1950 + (i+1)).toString(),
                                                    label: (1950 + (i+1)).toString(),
                                                }
                                                })
                                            ]}
                                            separator
                                            placeholder="Seleccionar/Buscar"
                                            className="inputForm br05"
                                            onChange={(values) => {
                                                if(values[0]?.value !== 'other') {
                                                    setVehicleYear(values[0]?.value);
                                                    return;
                                                }
                                        } } values={[{value: vehicleYear, label: vehicleYear === '' ? 'Seleccionar/buscar' : '# ' + vehicleYear }]}                                     />
                                : <select className="inputForm" style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                                        disabled><option># {vehicleYear}</option></select> 
                                }
                                </div>
                                <div className="flex between displayBlockResponsiveMin mt1">
                                    <p className="formTitle mr1">VIN</p>
                                    <input disabled={vehicleSeleted !== null ? true : false} onChange={(e) => setVehicleVin(e.target.value)} value={vehicleVin} className="inputForm w100Min" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle mr1">Visita</p>
                                    <input disabled placeholder={vehicleSeleted !== null ? 'Recurrente' : 'Nuevo'} className="inputForm w100Min " type="text"/>
                                </div>
                            </div>
                            <div className="cardWhiteForm mt1 w100">
                                <div className="flex between displayBlockResponsiveMin">
                                    <p className="subsubtitle mr1 mt1">Cliente</p>
                                    <Select
                                        closeOnClickInput
                                        style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}}
                                        options={[
                                            {
                                                label: 'Completar',
                                                value: 'other'
                                            },
                                            ...clients?.map((e) => {
                                            return {
                                                label: e?.name + ' ' + e?.lastname,
                                                value: String(e?._id)
                                            }
                                        })]}
                                        separator
                                        placeholder="Seleccionar/Buscar"
                                        className="inputForm br05 mt05"
                                        onChange={(values) => {
                                            if(values[0]?.value === 'other') {
                                                setSelectedClient(null);
                                                setClientName('');
                                                setClientLastName('');
                                                setClientEmail('');
                                                setClientPhone('');
                                                setClientBirth('');
                                                setClientRuc('');
                                                return;
                                            }
                                            const clientObject = clients?.find(e => String(e._id) === values[0]?.value);
                                            setSelectedClient(String(clientObject?._id));
                                            setClientName(clientObject?.name);
                                            setClientLastName(clientObject?.lastname);
                                            setClientEmail(clientObject?.email);
                                            setClientPhone(clientObject?.phone);
                                            setClientBirth(clientObject?.birth);
                                            setClientRuc(clientObject?.ruc);
                                         } } values={[{value: clientSelected, label: clientSelected === null ? 'Seleccionar/buscar' : '# ' + clientName + ' ' + clientLastname}]}                                     />
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle mr1">Nombre</p>
                                    <input onChange={(e) => setClientName(e.target.value)} value={clientName} disabled={clientSelected !== null ? true : false} className="inputForm w100Min" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle mr1">Apellido</p>
                                    <input onChange={(e) => setClientLastName(e.target.value)} value={clientLastname} disabled={clientSelected !== null ? true : false} className="inputForm w100Min" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle mr1">Celular</p>
                                    <input onChange={(e) => setClientPhone(e.target.value)} value={clientPhone} disabled={clientSelected !== null ? true : false} className="inputForm w100Min" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle mr1">DNI/RUC</p>
                                    <input onChange={(e) => setClientRuc(e.target.value)} value={clientRuc} disabled={clientSelected !== null ? true : false} className="inputForm w100Min" type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle mr1">Fecha de nacimiento</p>
                                    <input value={clientBirth} disabled={clientSelected !== null ? true : false} className="inputForm w100Min" onChange={(e) => setClientBirth(e.target.value)} type="datetime-local" placeholder=""/>
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle mr1">Correo</p>
                                    <input onChange={(e) => setClientEmail(e.target.value)} value={clientEmail} disabled={clientSelected !== null ? true : false} className="inputForm w100Min " type="text" placeholder=""/>
                                </div>
                                <div className="flex between mt1 displayBlockResponsiveMin">
                                    <p className="formTitle mr1">Visita</p>
                                    <input disabled placeholder={clientSelected !== null ? 'Recurrente' : 'Nuevo'} className="inputForm w100Min " type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="cardWhiteForm mt1">
                            <p className="subsubtitle">Estado del vehículo actual</p>
                            <div className="flex between displayBlockResponsive mt1">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between displayBlockResponsiveMin mt1">
                                        <p className="formTitle mr1">Kilometraje</p>
                                        <input onChange={(e) => setMileage(e.target.value)} value={mileage} className="inputForm w100Min" type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between displayBlockResponsiveMin mt1">
                                        <p className="formTitle mr1" >Nivel de aceite</p>
                                        <input onChange={(e) => setOil(e.target.value)} value={oil} className="inputForm w100Min" type="text" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex between displayBlockResponsive">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between displayBlockResponsiveMin mt1">
                                        <p className="formTitle mr1">Nivel de gasolina</p>
                                        <input onChange={(e) => setFuel(e.target.value)} value={fuel} className="inputForm w100Min" type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between displayBlockResponsiveMin mt1">
                                        <p className="formTitle mr1" >Líquido de frenos</p>
                                        <input onChange={(e) => setBrakes(e.target.value)} value={brakes} className="inputForm w100Min" type="text" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex between displayBlockResponsive">
                                <div className="w100 mr1 nPaddingLeftResponsive" style={{paddingRight: '2rem'}}>
                                    <div className="flex between displayBlockResponsiveMin mt1">
                                        <p className="formTitle mr1 ">Refrigerante</p>
                                        <input onChange={(e) => setRefrigerant(e.target.value)} value={refrigerant} className="inputForm w100Min" type="text" placeholder=""/>
                                    </div>
                                </div>
                                <div  className="w100 nPaddingLeftResponsive" style={{ paddingLeft: '2rem'}}>
                                    <div className="flex between displayBlockResponsiveMin mt1">
                                        <p className="formTitle mr1" >Fotos actuales(max 4)</p>
                                        <input disabled className="inputForm" type="text" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardWhiteForm mt1">
                            <p className="subsubtitle">Trabajos a realizar</p>
                            {user.services?.length === 0 ? <div className="flex mt1">
                                <p className="subsubtitle mt1">No encontramos servicios - </p>
                                <Link className="subsubtitle ml1 mt1" href='/configuration' style={{color: '#3662E3'}}>Configura tu inspección digital</Link> 
                            </div>: <></>}
                            <TableContainer key={tableKey} className="mt1 scrollLeftGet" style={{boxShadow: 'none', position: 'relative', overflowAnchor: 'auto'}} component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Servicio</TableCell>
                                        <TableCell align="center">Item</TableCell>
                                        <TableCell align="center">Cantidad</TableCell>
                                        <TableCell align="center">Precio</TableCell>
                                        <TableCell align="center">Total</TableCell>
                                        <TableCell align="center"></TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {tasks?.map((row, index) => {
                                        return <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            style={{borderBottom: '1px solid rgba(0, 0, 0, 0.2)'}}
                                        >
                                            <TableCell component="th" scope="row">
                                                <select value={row.service} onChange={(e) =>  {
                                                    editItemTasks(e?.target?.value, index);
                                                    const scrolls = document.querySelector(".scrollLeftGet")?.scrollLeft;
                                                    setTableKey( Math.random());
                                                    setTimeout(() => document.querySelector(".scrollLeftGet").scrollLeft = scrolls, 20);

                                                }} style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}} className="btn inputForm br05" >
                                                    <option value=''>Seleccionar</option>
                                                    {user?.services?.map((e) => {
                                                        return <option value={e?.name}>{e?.name}</option>
                                                    })}
                                                    
                                                </select>
                                            </TableCell>
                                            <TableCell align="right">
                                                <select onChange={(e) => {
                                                    var tasksCast = tasks;
                                                    tasksCast[index].item = e?.target?.value;
                                                    tasksCast[index].price = user?.services?.find(a => a?.name === tasks[index].service)?.tasks.find(a => a?.name === e?.target?.value)?.price;
                                                    setTasks(tasksCast);
                                                    const scrolls = document.querySelector(".scrollLeftGet")?.scrollLeft;
                                                    setTableKey( Math.random());
                                                    setTimeout(() => document.querySelector(".scrollLeftGet").scrollLeft = scrolls, 20);


                                                }} value={row?.item} style={{color: '#8C95A3', backgroundColor: '#F2F3F5', minWidth: '150px'}} className="btn inputForm br05">
                                                    <option value=''>Seleccionar</option>
                                                    {user?.services?.find(e => e?.name === tasks[index].service)?.tasks?.map((e) => {
                                                        return <option value={e.name}>{e?.name}</option>
                                                    })}
                                                </select>
                                            </TableCell>
                                            <TableCell align="right">
                                                <input onBlur={() => {
                                                    const scrolls = document.querySelector(".scrollLeftGet")?.scrollLeft;
                                                    setTableKey( Math.random());
                                                    setTimeout(() => document.querySelector(".scrollLeftGet").scrollLeft = scrolls, 20);

                                                }} placeholder={row.ammount} onChange={(e) => {
                                                    var tasksCast = tasks;
                                                    tasksCast[index].ammount = Number(e?.target?.value);
                                                    setTotalPrice(countTotalTasksPrice(tasksCast).toFixed(2))
                                                    setTasks(tasksCast);
                                                }} type='number' className="inputForm"></input>
                                            </TableCell>
                                            <TableCell align="right">
                                                <input onBlur={() => {
                                                    const scrolls = document.querySelector(".scrollLeftGet")?.scrollLeft;
                                                    setTableKey( Math.random());
                                                    setTimeout(() => document.querySelector(".scrollLeftGet").scrollLeft = scrolls, 20);

                                                }} type='number' placeholder={Number(row.price).toFixed(2)} onChange={(e) => {
                                                    var tasksCast = tasks;
                                                    tasksCast[index].price = e?.target?.value;
                                                    setTotalPrice(countTotalTasksPrice(tasksCast).toFixed(2))
                                                    setTasks(tasksCast);
                                                    

                                                }} className="inputForm"></input>
                                            </TableCell>
                                            <TableCell align="right">s/. {(Number(row?.price) * Number(row?.ammount)).toFixed(2)}</TableCell>
                                            <TableCell  align="right">
                                                <IonIcon className="btn" name='trash-outline' style={{fontSize: '1rem', border: '0px', color: '#3662E3'}}  onClick={(e) => {
                                                    var tasksCast = tasks;
                                                    tasksCast.splice(index, 1);
                                                    setTotalPrice(countTotalTasksPrice(tasksCast).toFixed(2));
                                                    setTasks(tasksCast);
                                                    const scrolls = document.querySelector(".scrollLeftGet")?.scrollLeft;
                                                    setTableKey( Math.random());
                                                    setTimeout(() => document.querySelector(".scrollLeftGet").scrollLeft = scrolls, 20);

                                                }} />
                                            </TableCell>
                                        </TableRow>
            })} 
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className="flex between">
                                <button className="btn btn-gradient-secondary mt2" onClick={() => {
                                    setTasks([...tasks, {
                                        service: '',
                                        item: '',
                                        price: '',
                                        ammount: 0,
                                        
                                    }])
                                }}>+ Agregar linea</button>
                                    <div className="flex" style={{minWidth: '150px'}}>
                                        <p className="mt2 mr1">Total</p>
                                        <input className="ml1" style={{width: '100px', borderBottom: '1px solid grey'}} value={totalPrice} type='text' onChange={(e) => setTotalPrice(e?.target?.value)} ></input>
                                    </div>
                                </div>
                            <p className="formTitle mt2">Observaciones adicionales</p>
                            <input onChange={(e) => setObservations(e.target.value)} value={observations} className="inputForm mt1 w100" type="text" placeholder=""/>
                        </div>
                        <div className="cardWhiteForm overFlowXResponsive mt1">
                            <div className="flex">
                                <p className="subsubtitle">Recordatorios </p>
                                <IonIcon className="ml1" name="eye-off-outline"/>
                            </div>
                            <div className="inline-items">
                                {calendars?.map((e, index: number) => <div className="item-create mt1 ml1">
                                    <div className="flex">
                                        <p>{e?.description + ' ' + ReturnUnifiedStringDateTime(e?.dateStart)}</p>
                                        <IonIcon onClick={() => {
                                            setCalendars(calendars?.filter((obj, indexx) => index !== indexx))
                                        }} className="icon ml1" name="trash-outline"/>
                                    </div>
                                </div>)}
                            </div>
                            <div className="flex w100">
                                <input onChange={(e) => setSchedulerDate(e.target.value)} value={newSchedulerDate} type="datetime-local" className="inputForm mt1" style={{borderRadius: '.5rem 0rem 0rem .5rem'}}/>
                                <input onChange={(e) => setNewScheduler(e.target.value)} value={newScheduler} className="inputForm mt1 w100" type="text" placeholder="Descripción" style={{borderRadius: '0rem 0rem 0rem 0rem'}}/>
                                <button onClick={() => {
                                    if(clientName !== '' && vehicleBrand !== ''){
                                        if(newScheduler !== '' && newSchedulerDate !== ''){
                                            
                                            setCalendars([{
                                                dateStart: newSchedulerDate,
                                                description: newScheduler,
                                                client: clientSelected ?? '',
                                                vehicle: vehicleSeleted ?? '',
                        
                                            }, ...calendars]);
                                            setSchedulerDate('');
                                            setNewScheduler('');
                                        } else toast.error(' Completa el formulario');
                                    } else toast.error(' Selecciona un cliente/vehículo');
                                    
                                }} className="btn-gradient-secondary mt1" style={{border:'1px solid grey', borderRadius: '0px .5rem .5rem 0rem'}} >Añadir</button>
                            </div>
                        </div>
                        <div className="cardWhiteForm mt1">
                            <p className="subsubtitle">Accesorios</p>
                            {accesories?.length === 0 ? <div className="flex mt1">
                                <p className="subsubtitle mt1">No encontramos accesorios - </p>
                                <Link className="subsubtitle ml1 mt1" href='/configuration' style={{color: '#3662E3'}}>Configura tu inspección digital</Link> 
                            </div>: <></>}
                            <div className="inline-items">
                             {accesories?.map((e, index: number) => {return  <div className="inline-items mt1 ml1">
                                    <div className="flex">
                                        <p className="subsubtitle mt05">{e?.label}</p>
                                        <Checkbox checked={e?.value === 'on' ? true : false} value={e?.value === 'on' ? true : false} onChange={async (e) => {
                                            const checked = e?.target.checked === true ? 'on' : '';
                                            
                                            const newObject = [...accesories];
                                            newObject[index].value = checked;
                                            setAccesories(newObject);
                                            
                                        }} inputProps={{ 'aria-label': '' }}></Checkbox>
                                    </div>
                                </div>})}
                            </div>
                        </div>
                        <div className="card overFlowXResponsive  p2 mt1 w100" >
                                <p className="subsubtitle w100">Subir imagenes</p>
                                <div className="inline-items w100 mt1">
                                    <label className="inline-items" htmlFor="imageLogo"  style={{border: '1px solid grey', cursor: 'pointer'}}>
                                        <img style={{width: '250px', height: '250px'}} className="inline-items" src={image1 !== '' ? image1 : blueImage.src} alt="Logo"/>
                                        <input accept="image" id="imageLogo" onChange={(e) => onChangeImage(e, setImage1)} type='file' placeholder='Subir archivo' style={{
                                            visibility: 'hidden', display: 'none'}}/>
                                    </label>
                                    <label className="inline-items"  htmlFor="imageLogo1" style={{border: '1px solid grey', cursor: 'pointer'}}>
                                        <img style={{width: '250px', height: '250px'}} className="inline-items" src={image2 !== '' ? image2 : blueImage.src} alt="Logo"/>
                                        <input accept="image" id="imageLogo1" onChange={(e) => onChangeImage(e, setImage2)} type='file' placeholder='Subir archivo' style={{
                                            visibility: 'hidden', display: 'none'}}/>
                                    </label>
                                    <label className="inline-items"  htmlFor="imageLogo2"  style={{border: '1px solid grey', cursor: 'pointer'}}>
                                        <img style={{width: '250px', height: '250px'}} className="inline-items" src={image3 !== '' ? image3 : blueImage.src} alt="Logo"/>
                                        <input accept="image" id="imageLogo2" onChange={(e) => onChangeImage(e, setImage3)} type='file' placeholder='Subir archivo' style={{
                                            visibility: 'hidden', display: 'none'}}/>
                                    </label>
                                    <label className="inline-items" htmlFor="imageLogo3"  style={{border: '1px solid grey', cursor: 'pointer'}}>
                                        <img style={{width: '250px', height: '250px'
                                        }} src={image4 !== '' ? image4 : blueImage.src} className="inline-items" alt="Logo"/>
                                        <input accept="image" id="imageLogo4" onChange={(e) => onChangeImage(e, setImage4)} type='file' placeholder='Subir archivo' style={{
                                            visibility: 'hidden', display: 'none'}}/>
                                    </label>
                                </div>
                        </div>
                        <div className="mSidesAuto" style={{width: 'max-content', maxWidth: '100%'}}>
                            <div className="card p2 mt1 flex displayBlockResponsiveMin" >
                                <p className="formTitle mr1">Resultados scanner</p>
                                <div className="btn-upload-pdf ml1">
                                    <p className="mr1">Adjuntar PDF</p>
                                    <svg className="ml1" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289L26.7071 10.2929C26.8946 10.4804 27 10.7348 27 11V16C27 16.5523 26.5523 17 26 17C25.4477 17 25 16.5523 25 16V11.4142L18.5858 5L7 5L7 16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16V5C5 4.46957 5.21071 3.96086 5.58579 3.58579Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C19.5523 3 20 3.44772 20 4V10H26C26.5523 10 27 10.4477 27 11C27 11.5523 26.5523 12 26 12H19C18.4477 12 18 11.5523 18 11V4C18 3.44772 18.4477 3 19 3Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 21C5 20.4477 5.44772 20 6 20H8C8.79565 20 9.55871 20.3161 10.1213 20.8787C10.6839 21.4413 11 22.2043 11 23C11 23.7957 10.6839 24.5587 10.1213 25.1213C9.55871 25.6839 8.79565 26 8 26H7V27C7 27.5523 6.55228 28 6 28C5.44772 28 5 27.5523 5 27V21ZM7 24H8C8.26522 24 8.51957 23.8946 8.70711 23.7071C8.89464 23.5196 9 23.2652 9 23C9 22.7348 8.89464 22.4804 8.70711 22.2929C8.51957 22.1054 8.26522 22 8 22H7V24Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 21C22.5 20.4477 22.9477 20 23.5 20H27C27.5523 20 28 20.4477 28 21C28 21.5523 27.5523 22 27 22H24.5V27C24.5 27.5523 24.0523 28 23.5 28C22.9477 28 22.5 27.5523 22.5 27V21Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 24.5C22.5 23.9477 22.9477 23.5 23.5 23.5H26.5C27.0523 23.5 27.5 23.9477 27.5 24.5C27.5 25.0523 27.0523 25.5 26.5 25.5H23.5C22.9477 25.5 22.5 25.0523 22.5 24.5Z" fill="#A9AEB8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 21C13.25 20.4477 13.6977 20 14.25 20H16C17.0609 20 18.0783 20.4214 18.8284 21.1716C19.5786 21.9217 20 22.9391 20 24C20 25.0609 19.5786 26.0783 18.8284 26.8284C18.0783 27.5786 17.0609 28 16 28H14.25C13.6977 28 13.25 27.5523 13.25 27V21ZM15.25 22V26H16C16.5304 26 17.0391 25.7893 17.4142 25.4142C17.7893 25.0391 18 24.5304 18 24C18 23.4696 17.7893 22.9609 17.4142 22.5858C17.0391 22.2107 16.5304 22 16 22H15.25Z" fill="#A9AEB8"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="center mt1 mSidesAuto">
                            <button className="btn btn-gradient-third displayBlockResponsiveMin w100Min mt1 mr1" onClick={() => buildForm()}>{
                                disabledButton ? <IonIcon name='chevron-collapse-outline' className="rotateItem mt1" color='grey' style={{fontSize: '1rem' }}/> : 'Crear inspección'}</button>
                            <button className="btn-disabled-secondary mt1 displayBlockResponsiveMin w100Min " disabled>Crear orden de servicio</button>
                        </div>
                    </div>
                </div>
            }
            />
        }
    </div>
}
export default InspectionWorkshopLayoutPage;