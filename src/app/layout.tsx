import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import telefono from '../../public/images/telefono.png'
import mensaje from '../../public/images/mesaje.png'
import facebook from '../../public/images/facebook.png'
import BancoGuayaquil from '../../public/images/BANCO DE GUAYAQUIL_Mesa de trabajo 1.png'
import Rejoj from '../../public/images/HORARIO_Mesa de trabajo 1.png'
import ubicacion from '../../public/images/UBICACION_Mesa de trabajo 1.png'
import Telefono from '../../public/images/TELEFONO_Mesa de trabajo 1.png'
import BPichincha from '../../public/images/BANCO PICHINCHA_Mesa de trabajo 1.png'
import Mail from '../../public/images/INFO_Mesa de trabajo 1.png'
import BPacifico from '../../public/images/BANCO DEL PACIFICO_Mesa de trabajo 1.png'
import instagram from '../../public/images/instagran.png'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TesisTap',
  description: 'Elaboracion de Tesis y Homologaciones ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div className=' flex items-center justify-between  md:flex md:items-center md:justify-between md:px-0'> 
        <div className='flex items-center w-72'>
          <Image src={Logo} alt='logo' className='hidden sm:inline w-96 mr-4' />
          <h1 className='text-left font-bold' style={{color:'#28348A', lineHeight:'27px', fontSize:'26px'}}>TESIS CON ASESORÍA PROFESIONAL</h1>
          </div>
          <div>
        
          <div className='flex items-center justify-end ml-32'>
          <div className='flex items-center mr-5'>
            <Image src={telefono} alt='telefono' className='w-10' />
            <a style={{ textDecoration:'none'}} href='https://wa.me/message/KHOU4UISGXDND1' target='_blank' ><span>095 981 3106</span></a>
          </div>
          <div className='flex items-center mr-5'>
            <Image src={mensaje} alt='Correo' className='w-10' />
            <span>tesistap@outlook.com</span>
          </div>
          <div className='flex items-center'>
            <a href='https://www.facebook.com/TESISTAP' target='_blank' className='mr-1'>
              <Image src={facebook} alt='Facebook' className='w-10'/>
            </a>
            <a href='' target='_blank' className='mr-1'>
              <Image src={instagram} alt='Instagram' className='w-10' />
            </a>
          </div>
          </div>
        <nav className='flex items-center justify-between text-white py-2' style={{backgroundColor:'#28348A', borderRadius:'32px 0px 0px 0px'}}>
          <Link href='./' className='ml-3'>
            <span>
              Inicio
            </span>
          </Link>
          <Link href='/Nosotros' className='ml-3'>
            <span>
              Nosotros
            </span>
          </Link>
          <Link href='/' className='ml-3' >
            <span>
              Servicios
            </span>
          </Link>
          <Link href='/' className='ml-3' >
            <span>
              Homologacion
            </span>
          </Link>
          <Link href='/' className='ml-3' >
            <span>
              Preguntas Frecuentes
            </span>
          </Link>
          <Link href='/' className='ml-3 mr-3' >
            <span>
              Contacto
            </span>
          </Link>
        </nav>
        </div>
        </div>
        {children}
        <footer style={{width:"100%", height:"100%", backgroundColor:"#002334"}} className='flex justify-between'>
    <div >
        <div className='flex items-center mb-2' >
            <div>
                <Image src={Rejoj} alt='Horarios de atencion' width={50}/>
            </div>
            <div>
        <h4 style={{color:"red"}}>HORARIOS DE ATENCIÓN</h4>
        <span style={{fontWeight:700,color:"white"}}>Lunes-Viernes/08H30-17H30</span><br/>
        <span style={{fontWeight:700,color:"white"}}>Sabados/08H30-14H30</span>
        </div></div>
        <div className='flex items-center mb-2' >
            <div>
            <Image src={ubicacion} alt='Horarios de atencion' width={45}/>
            </div>
            <div>
            <span style={{fontWeight:700,color:"white"}}>Av, Franciso de Orellana 1200-Av. Plaza Dañin</span><br/>
            <span style={{fontWeight:700,color:"white"}}>Guayaquil-Ecuador</span>
        </div></div>
        <div className='flex items-center mb-2' >
        <div >
            <Image src={Telefono} alt='Horarios de atencion' width={45}/>
            </div>
            <div>
            <span style={{fontWeight:700,color:"white"}}>096 046 6868</span><br/>
            <span style={{fontWeight:700,color:"white"}}>095 981 3106</span>
        </div></div>
        <div className='flex items-center mb-2'>
            <div>
            <Image src={Mail} alt='Horarios de atencion' width={45}/>
            </div>
            <div><span style={{fontWeight:700,color:"white"}}>tesistap@gmail.com</span>
        </div></div>
        
    </div>
        <div className='flex flex-col justify-between'>
            <div className='flex flex-row justify-start' >
        <div style={{textAlign:'center'}} className="flex flex-col">
        <span style={{color:"red", fontSize:"16px"}}>SERVICIO AL CLIENTE</span>
        <Link style={{color:'white', textDecoration:'none', fontWeight:700}} href='./'>
            I N I C I O
        </Link>
        <a style={{color:'white', textDecoration:'none', fontWeight:700}} href='/Nosotros' target='_blank'>
    N O S O T R O S
        </a>
        <a style={{color:'white', textDecoration:'none', fontWeight:700}} href='#'>
        S E R V I C I O S
        </a>
        <a  style={{color:'white', textDecoration:'none', fontWeight:700}} href='#'>
        H O M O L O G A C I O N
        </a>
        <a  style={{color:'white', textDecoration:'none', fontWeight:700}} href='#' >
       P R E G U N T A S  F R E C U E N T E S
        </a>
        <a  style={{color:'white', textDecoration:'none', fontWeight:700}} href='#'>
    C O N T A C T O
        </a>
        </div>
        </div>
        <div className='flex flex-col justify-center'>
        <div style={{textAlign:'center'}} className='flex flex-col'>
        <span style={{color:'red', fontSize:'20px'}}>FORMAS DE PAGO</span>
        <span style={{color:'white', fontWeight:500}}>Transferencias Bancarias</span>
        </div>
        <div className='flex'>
        <Image src={BPichincha} alt='Horarios de atencion' width={60}/>
        <Image src={BPacifico} alt='Horarios de atencion' width={60}/>
        <Image src={BancoGuayaquil} alt='Horarios de atencion' width={60}/>
        </div>
        </div>
        </div>
    </footer>
    <div  style={{backgroundColor:'red', width:'100%'}}>
            {/* <div>
            <Image src={Logo} alt='Horarios de atencion' width={45}/>
            </div> */}
            <div className='flex justify-center'><span style={{fontWeight:700,color:"white", textAlign:'center'}}> Copyright 2023 TesisTap - Todos los derechos reservados.</span>
        </div></div>
        </body>
    </html>
  )
}
