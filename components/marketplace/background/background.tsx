'use client';

import Image from 'next/image';
import backgroundImage from '../../../public/images/logo/background.jpeg';
import './index.css';
import { TypeBrands } from '@/models/brands';
import IonIcon from '@reacticons/ionicons';
import Modal from 'react-responsive-modal';
import { useState } from 'react';
const BackgroundImage = () => {
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    return <div>
        <div className="background" style={{backgroundImage: `url(${backgroundImage.src})`,}}>
                <div style={{zIndex: 99}}>
                    <h1> ¿No encuentras lo que necesitas?</h1>
                    <p>Ingresa una solicitud de cotización y recibe ofertas personalizadas.</p>
                    <button onClick={() => setOpen(true)}>Ingresar solicitud</button>
                </div>
            </div>





        <Modal closeIcon={<IonIcon name="close" color='white' />} styles={{
        modal : {borderRadius: '1rem', maxWidth: '500px', padding: '0rem', backgroundColor: 'rgb(245, 243, 243)', zIndex: 56},
        closeIcon: {color: 'white !important'},
        overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
      }}  open={open} center onClose={() => setOpen(false) }>
        <p style={{background: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)', width: '100%', padding: '1rem', color:'white'}}>Envia tu solicitud</p>
        <div style={{padding: '.5rem'}}>
          <p className="dark:text-body-color-dark mb-8 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
          Recibe tus cotizaciones por Whatsapp con un link de pago directo o <a style={{color: '#3662E3'}} href="#">crea tu cuenta</a> para conectar con proveedores
                </p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <select className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
            {TypeBrands.map((e, index) => <option key={index} value={index+1}>{e}</option>)}

          </select>
          <select className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}>
            <option value={-1}>Medio de pago</option>
            <option value={-1}>Efectivo</option>
            <option value={-1}>Billetera virtual</option>
            <option value={-1}>Online</option>


         

          </select>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <input placeholder="Whatsapp" className="border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>
            <input placeholder="Placa(Opcional)" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent'}}></input>


          </div>

          <p className="dark:text-body-color-dark mb-1 text-base ml-4 mt-4 !leading-relaxed text-body-color sm:text-xl md:text-xl" style={{color: '#3662E3'}}>
          Items</p>
          
          <div style={{backgroundColor: 'white', borderRadius: '.5rem', padding: '1rem', margin: '1rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem'}}>
              <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
              Nombre</p>
              <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
              Cantidad</p>
              <button></button>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
              <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
              Nombre</p>
              <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
              6</p>
              <button style={{color: 'orange'}}><IonIcon name="pencil-outline" color='orange'/></button>
            </div>


            <div style={{paddingTop: '.5rem', display: 'flex', justifyContent: 'space-between'}}>
              <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
              Nombre</p>
              <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
              8</p>
              <button style={{color: 'orange'}}><IonIcon name="pencil-outline" color='orange'/></button>
            </div>

            <div style={{textAlign: 'right', width: '100%'}}>
            <button onClick={() => setOpenAdd(!openAdd)} style={{marginTop: '.5rem', color: 'grey'}}>
              
              <IonIcon name="add"/>
              Añadir
            </button>
            </div>


          </div>
          

          
          
        </div>
        <div style={{textAlign: 'center',}}>
            <button style={{background: '#1366D9', color: 'white', padding: '.5rem', margin: '.5rem', borderRadius: '.5rem', fontWeight: '500'}} className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">Enviar solicitud</button>
          </div>
      </Modal>



      <Modal closeIcon={<IonIcon name="close"/>} styles={{
        modal : {borderRadius: '1rem', minWidth: '300px', padding: '0rem'},
        closeIcon: {color: 'white !important'},
        overlay: {backgroundColor: 'rgba(220, 217, 217, 0.5)'}
      }}  open={openAdd} center onClose={() => setOpenAdd(false) }>
        <p style={{background: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)', width: '100%', padding: '1rem', color:'white'}}>Nuevo producto</p>
        <div style={{margin: '2rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <input placeholder="Nombre"  className="border-stroke dark:text-body-color-dark dark:shadow-two  rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent', width: '70%'}}></input>
            <input placeholder="Cantidad" type='number' className="border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" style={{background: 'transparent', width: '30%'}}></input>

            
          </div>
          <div style={{textAlign: 'right',}}>
            <button style={{background: 'green', color: 'white', padding: '.5rem', margin: '.5rem', borderRadius: '.5rem'}} className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80">Añadir</button>
          </div>
          
        </div>
      </Modal>
    </div>

    
    
    
    
    
    
    
    
    
}
export default BackgroundImage;