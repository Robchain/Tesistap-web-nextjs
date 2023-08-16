import Image from "next/image";
import { Slides } from "../../components/Slides";
import mision from '../../../public/images/imagen pegada 800x382.jpg'
import vision from '../../../public/images/imagen pegada 2084x1173.jpg'
import  { Metadata } from "next";
 export const metadata : Metadata = {
  title: 'TesisTap | Nosotros',
  description: 'Nosotros TesisTap',
  }
export default function PageNosotros(){
  
    return(<>
    <Slides/>
    <div style={{backgroundColor:'#f0f0f0'}} className='md:px-40'>
    <div className='flex items-center justify-center py-3 flex-col'>
      <span style={{color:'#28348A', fontSize:'20px', textAlign:'center', fontWeight:'400',lineHeight:'24px'}}>QUIENES SOMOS</span>
<p style={{textAlign:'justify', fontWeight:'400', lineHeight:'19px', fontSize:'16px'}}>
TAP es una organización que brinda servicios de asesoría educativa, profesional, enfocado en soluciones académicas para estudiantes, desarrollo y sustentación de su tesis, trabajo de grado, uso de las Tecnologías de la Información y la Comunicación que permiten validar sus competencias profesionales.
</p>
      </div>
      <div className="flex" style={{fontSize:'16px'}}>
      <div className="mr-3" >
        <div style={{backgroundColor:'#fff'}} className="mb-3 flex">
            <Image style={{height:'8rem'}} className="inline-block" alt="Mision" src={mision}/>
            <div>
            <span>MISIÓN</span>
            <p style={{color:'#7F7F7F'}}>
            Brindar servicios de calidad y contribuir con la preparación académica que lleve al éxito a los futuros profesionales en las distintas áreas, mediante Asesoría Profesional y Personalizada.
            </p>
            </div>
        </div>
        <div style={{backgroundColor:'#fff'}} className="mb-3 flex">
        <Image style={{height:'9.9rem'}} className="" alt="Vision" src={vision} />
          <div>
              <span>VISIÓN</span>
            <p style={{color:'#7F7F7F'}}>TAP busca ser reconocida y admirada como una empresa sólida, confiable, orientada al cliente; líder en el manejo y asesoramiento de trabajos investigativos.</p>
        <span>NUESTROS VALORES</span>
        <p style={{color:'#7F7F7F'}}>
        Compromiso, Responsabilidad, Resolución, Integridad, Respeto
        </p>
        </div>
        </div>
        </div>
        <div style={{color:'#0071BC', lineHeight:'22px', fontWeight:'400'}}>
            <li style={{listStyleType:'circle'}}>
                Asesoría Tesis Maestrías
                </li>
                <li style={{listStyleType:'circle'}}>Asesoría Monografías</li>
<li  style={{listStyleType:'circle'}}>Asesoría Proyectos</li>
<li  style={{listStyleType:'circle'}}>Investigación Estadísticas Encuestas</li>
<li  style={{listStyleType:'circle'}}>Capacitación y Nivelación Académica</li>
<li  style={{listStyleType:'circle'}}>Corrección de Estilo Normas APA,Vancouver, entre otras</li>
<li  style={{listStyleType:'circle'}}>Redacción y Corrección de Tesis</li>
        </div>
      </div>
    </div>
    </>)
}