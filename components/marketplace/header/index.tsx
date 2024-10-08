"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import './index.css';
import IonIcon from "@reacticons/ionicons";
import { Popover } from "react-tiny-popover";
import LogoFavicon from '../../../public/images/favicon.png';
import { TypeBrands } from "@/models/brands";
import { CartProps } from "@/models/orders.model";
import Cookie from 'universal-cookie';
import { findProduct } from "@/app/api/marketplacee/call";
type HeaderMarketPlaceProps = {
  cartItems: CartProps[];
  setCart: any
}

export const getTotalPrice = (cartItems: CartProps[], deliveried: boolean, priceDeliveried: number) => {
  var price: number = 0;
  if(deliveried) price = priceDeliveried;
  cartItems?.map((e) => {
    price = price + (Number(e?.item?.priceSelling) * e?.ammount);
  })
      return String(price);
}
const HeaderMarketPlace: FunctionComponent<HeaderMarketPlaceProps> = ({cartItems, setCart}) => {
  const router = useRouter();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [keywordFind, setKeyword] = useState<string>('');
  const findProductAndSet = async () => {
    if(keywordFind?.length > 3){
      var keywordCast = keywordFind?.replace(/%20/g, " ");
      router.push("/marketplace/searchus?name=" + String(keywordCast));  
    }
  }
  return (
    <div style={{zIndex: 55, width: '100%'}}>
      <header
        style={{zIndex: 55, width: '100%'}}
        className={`header left-0 top-0 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="py-8 px-4">
              <img onClick={() => router.push("/dashboard")} style={{cursor: 'pointer', display: 'none', width: '50px'}} className="showResponsive" src={LogoFavicon.src} alt='logo'/>
              <Link
                href="/dashboard"
                className={`header-logo block w-full hideResponsive`}
              >
                <Image
                  src="/images/logo/color.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/white.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="input-search">
                <IonIcon name="search-outline" className="iconinput hideResponsive"/>
                <input value={keywordFind} onChange={(e) => setKeyword(e.target.value)} placeholder="Busca por nombre de producto" type='text'/>
                <button onClick={() => findProductAndSet()}>
                    Buscar
                </button>


            </div>
            <div className="cart cartResponsive" onClick={() => router.push('/signin')}>
                <IonIcon style={{fontSize: '1.2rem'}} name="person-outline"/>
                <p>Cuenta</p>
            </div>
            <Popover
                    containerStyle={{
                        minWidth: '350px',
                        backgroundColor: 'white',
                        padding: '1rem',
                        border: '1px solid rgba(0, 0, 0, 0.2)',
                        borderRadius: '0rem 0rem .5rem .5rem'
                    }}
                    isOpen={isPopoverOpen}
                    positions={['bottom', 'left', 'right', 'top']} // preferred positions by priority
                    content={
                    <div style={{marginTop: '1.5rem'}}>

                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem'}}>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Imagen</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Nombre</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Cantidad</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Precio</p>
                          <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                          Action</p>
                          
                        </div>
                        {cartItems?.length === 0 ? <p style={{textAlign: 'center', color: 'grey'}}>Todavia no añadiste nada</p> : ''}

                        {cartItems?.map((e, index) => {
                          const nameString = e?.item?.name +  ' ' + e?.item?.model;
                          return <div key={index}>
                          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(220, 220, 220, .3)'}}>
                            <img style={{width: '35px', maxHeight: '35px'}} src={e?.item?.image} alt='Product Image' />
                            <p style={{maxWidth: '100px',}} className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            {nameString.substring(0, 30)}...
                            </p>
                            <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            {String(e?.ammount)}</p>
                            <p className="dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm" >
                            s/. {Number(e?.item?.priceSelling).toFixed(2)}</p>
                            <button onClick={() => {
                                setCart(cartItems.filter((obj, indexx) => index !== indexx));
                                sessionStorage.setItem('cart', JSON.stringify(cartItems.filter((obj, indexx) => index !== indexx)))

                            }} style={{color: '#ff6347'}}><IonIcon name="trash-outline" color='#ff6347'/></button>
                          </div>
                          </div>
                        })}

                        


                        
                      </div>
                      <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{fontSize: '1.1rem'}}>Total</p>
                        <p>s/. {Number(getTotalPrice(cartItems, false, 0)).toFixed(2)}</p>
                      </div>
                      <button onClick={() => router.push('/marketplace/payment')} style={{padding: '.5rem', textAlign: 'center', width:'100%', background: 'linear-gradient(180deg, #127FFF 0%, #3662E3 100%)', color: 'white'}}>Ir a pagar</button>
                    </div>
                }
                    >
                    
                    <div className="cart cartResponsive" style={{marginLeft: '1rem', marginRight: '1rem'}} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                        <div style={{position: 'relative', width: 'max-content'}}>
                          <div style={{
                            position: 'absolute',
                            right: '-.5rem',
                            top: '-.5rem',
                            fontSize: '.85rem',
                            borderRadius: '100%',
                            background: 'rgba(0,0,0, 0.1)', 
                            width: '1.2rem',
                            height: '1.2rem',
                            fontWeight: '500',
                            color: '#3662E3'
                          }}>
                          {' ' + (cartItems?.length ?? 0) + ' '}
                          </div>
                          <IonIcon style={{fontSize: '1.2rem'}} name="cart-outline"/>
                          <p>Carrito</p>
                        </div>
                    </div>
              </Popover>
              
            
            
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderMarketPlace;
