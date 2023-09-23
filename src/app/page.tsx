
import Image from 'next/image'
import { Slides } from '../components/Slides'
import Link from 'next/link'
import imagen1 from '../../public/images/trabajo de titulacion.jpg'
import imagen2 from '../../public/images/correciones 2.jpg'
import imagen3 from '../../public/images/propuesta.jpg'
import imagen4 from '../../public/images/asesoramiento 2.jpg'
import imagen5 from '../../public/images/tesis con tema aprobado-01.jpg'
import imagen6 from '../../public/images/tesis completa.jpg'
import imagen7 from '../../public/images/tesisavanzada-01.jpg'
import imagen8 from '../../public/images/desarrolloporcapitulos-01.jpg'
import imagen9 from '../../public/images/zona print.jpg'

export default function Home() {
  return (
    <>
    <Slides/>
    <div style={{backgroundColor:'#fff'}} className='sm:px-48'>
      <div className='flex items-center justify-center py-3'>
      <span style={{color:'#28348A', fontSize:'20px', textAlign:'center', fontWeight:'400',lineHeight:'24px'}}>CONOCE NUESTROS SERVICIOS</span>
      </div>
    <div className='flex justify-evenly items-start'>
    <div className='m-4' style={{backgroundColor:'#fff'}}>
      <Image alt='Trabajo de titulacion' src={imagen1}/>
      <div className='p-3'>
      <span className='py-4' style={{ fontWeight:'500'}}>TRABAJO DE TITULACIÓN</span>
      <div className='mb-6' style={{color:'#7F7F7F', fontWeight:'500', fontSize:'15px'}}>
          <li>Pregrado</li>
          <li>Posgrado</li>
          <li>Monografias</li>
          <li>Ensayos</li>
          <li>Papers</li>
          <li>Artículos científicos</li>
          <li>Planes de negocios</li>
          <li>Estudios de Casos</li>
      </div>
      <Link  href={''} style={{color:'#008FA8'}}>
      MÁS INFORMACIÓN
      </Link></div>
    </div>
    <div className='m-4' style={{backgroundColor:'#fff'}}>
      <Image alt='Trabajo de titulacion' src={imagen2} style={{width:'100%'}}/>
      <div className='p-3'>
      <span className='py-4' style={{ fontWeight:'500'}}>CORRECCIONES</span>
      <div className='mb-6' style={{color:'#7F7F7F', fontWeight:'500', fontSize:'15px'}}>
          <li>Corrección de capítulos</li>
          <li>Formatos con Normas APA</li>
          <li>Formatos con Normas Vancouver</li>
          <li>Corrección de plagio</li>
      </div>
      <Link  href={''} style={{color:'#008FA8'}}>
      MÁS INFORMACIÓN
      </Link>
      </div>
    </div>
    <div className='m-4' style={{backgroundColor:'#fff'}}>
      <Image alt='Trabajo de titulacion' src={imagen3} />
      <div className='p-3'>
      <span className='py-4' style={{ fontWeight:'500'}}>PROPUESTAS ACADEMICAS</span>
      <div className='mb-6' style={{color:'#7F7F7F', fontWeight:'500', fontSize:'15px'}}>
          <li>Planificaciones pedagógicas</li>
          <li>Manuales</li>
          <li>Guías didácticas</li>
          <li>Talleres</li>
          <li>Planes de acción</li>
          <li>Multimedia interactivo</li>
          <li>Identidad Corporativa</li>
          <li>Financiamientos</li>
      </div>
      <Link  href={''} style={{color:'#008FA8'}}>
      MÁS INFORMACIÓN
      </Link>
      </div>
    </div>
    <div className='m-4 md:w-80' style={{backgroundColor:'#fff'}}>
      <Image alt='Trabajo de titulacion' src={imagen4}  />
      <div className='p-3'>
      <span className='py-4' style={{ fontWeight:'500'}}>ASESORAMIENTO PERSONALIZADAS</span>
      <div className='mb-6' style={{color:'#7F7F7F', fontWeight:'500', fontSize:'15px'}}>
          <p style={{textAlign:"justify",lineHeight:'17px'}}>
          Como cliente de TAP usted tendrá acceso a consultorías gratuitas durante la realización de su proyecto de titulación y preparación escénica para su sustentación.
          </p>
          </div>
      
      <Link  href={''} style={{color:'#008FA8'}}>
      MÁS INFORMACIÓN
      </Link>
      </div>
    </div>
    </div>
    <div className='flex items-start justify-evenly'>
    <div className='flex flex-col items-center lg:mx-3'>
<Image alt='' src={imagen5}/>
 
<a   href='https://wa.me/message/KHOU4UISGXDND1' target='_blank' className='
 xl:w-40 xl:my-5 xl:p-2' style={{borderRadius:'50px',color:'#fff', backgroundColor:'#229585', textAlign:'center'}}> <span className='p-3'>Contáctenos</span></a>
      </div>
      <div className='flex flex-col items-center lg:mx-3'>
  <Image alt='' src={imagen6}/>
  <a href='https://wa.me/message/KHOU4UISGXDND1' target='_blank' className='xl:w-40 xl:my-5 xl:p-2' style={{borderRadius:'50px',color:'#fff', backgroundColor:'#435198', textAlign:'center'}}> Contáctenos</a>
  </div>
  <div className='flex flex-col items-center lg:mx-3'>
  <Image alt='' src={imagen7}/>
  <a href='https://wa.me/message/KHOU4UISGXDND1' target='_blank' className='xl:w-40 xl:my-5 xl:p-2' style={{borderRadius:'50px',color:'#fff', backgroundColor:'#853889',textAlign:'center'}}> <span className='p-3'>Contáctenos</span></a>
  </div>
  <div className='flex flex-col items-center lg:mx-3'>
  <Image alt='' src={imagen8}/>
  <a href='https://wa.me/message/KHOU4UISGXDND1' target='_blank' className='xl:w-40 xl:my-5 xl:p-2' style={{ borderRadius:'50px',color:'#fff', backgroundColor:'#ef9500', textAlign:'center'}}> <span className='p-3'>Contáctenos</span></a>
  </div>
    </div>
    <div className='flex items-start justify-center'>
      <Link href={''} style={{ position:'relative', zIndex:'219px', borderRadius:'50px',color:'#fff', backgroundColor:'#ef9500', textAlign:'center'}}> <Image src={imagen9} alt='Homolagción de títulos'/></Link>
    </div>
    </div>
   
    </>
  )
}
