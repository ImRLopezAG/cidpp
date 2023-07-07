import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

export const Home = (): JSX.Element => {
  return (
    <div>
      <section className='flex flex-col items-center justify-center '>
        <h1 className='text-[#0071bc] text-5xl text-bold mb-4'>
          Capacitación Integral para el Desarrollo Personal y Profesional
        </h1>
        <AwesomeSlider
          bullets={false}
          animation='cubeAnimation'
          className='h-96 w-1/2'
          media={[
            {
              source: 'img/004.jpg'
            },
            {
              source: 'img/006.jpg'
            },
            {
              source: 'img/007.jpg'
            }
          ]}
        />
      </section>
      <section className='flex flex-col items-center justify-center '>
        <h2 className='text-[#0071bc] text-4xl text-bold mb-4'>
          Capacitaciones
        </h2>
        <div className='flex flex-row items-center justify-center gap-5'>
          <section className='w-1/2 [&>p]:mb-3 [&>p]:text-justify'>
            <p>
              ¡Bienvenidos a nuestra página web! En Capacitación Integral para
              el Desarrollo Personal y Profesional, nos enorgullece ofrecer una
              amplia gama de servicios diseñados para mejorar tu bienestar
              emocional y potenciar tu desarrollo profesional. Nuestro enfoque
              único combina atención psicológica especializada, recursos
              educativos y programas de orientación laboral para brindarte una
              experiencia integral y transformadora.
            </p>
            <p>
              En nuestro espacio seguro, te brindamos la oportunidad de abordar
              trastornos y preocupaciones emocionales con nuestro equipo de
              psicólogos y terapeutas altamente capacitados. Aquí encontrarás
              apoyo, asesoramiento y terapias individuales y grupales para
              ayudarte a superar los desafíos y alcanzar una vida equilibrada y
              plena.
            </p>
            <p>
              Además, nos dedicamos a potenciar tus habilidades profesionales.
              Nuestros programas de orientación laboral están diseñados para
              ayudarte a identificar tus fortalezas, establecer metas claras y
              adquirir las habilidades necesarias para destacarte en el mercado
              laboral actual. Con contenido educativo y didáctico de alta
              calidad, cubrimos una amplia gama de temas, desde habilidades
              blandas hasta técnicas de búsqueda de empleo y desarrollo de
              currículum.
            </p>
          </section>
          <img src='img/005.jfif' className='bg-[#0071bc] w-1/2 h-80' />
        </div>
      </section>
    </div>
  )
}
