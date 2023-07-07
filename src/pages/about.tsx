export const About = (): JSX.Element => {
  return (
    <section className='flex flex-col items-center justify-center '>
      <h1 className='text-[#0071bc] text-5xl text-bold mb-4'>
        Capacitación Integral para el Desarrollo Personal y Profesional
      </h1>
      <div className='flex flex-row items-center justify-center gap-5'>
        <section className='w-1/2 [&>p]:mb-3'>
          <p className='text-justify'>
            Nuestros fundadores, <strong>Erwing Coss</strong>,{' '}
            <strong>Ángel López</strong> y <strong>Christian Santos</strong>,
            reconocieron que había una debilidad en la concentración y la falta
            de material de algunos estudiantes y compañeros, para fortalecer
            este reconocimiento optaron por hacer mapas de empatía en el lado
            este – oeste de santo domingo y así dar con unas necesidades
            específicas de la comunidad.
          </p>
          <p className='text-justify'>
            Impulsados por su pasión compartida por el bienestar y el
            crecimiento personal, estos fundadores decidieron unir fuerzas y
            abordar estas necesidades identificadas. Así nació la idea de crear
            una empresa que ofreciera una solución integral y personalizada para
            aquellos que buscan mejorar su vida personal y profesional. Juntos,
            estos fundadores comenzaron a desarrollar y dar forma a la idea del
            proyecto de Capacitación Integral para el Desarrollo Personal y
            Profesional. Se basaron en su experiencia y conocimiento para
            diseñar una propuesta de valor sólida y diferenciada que pudiera
            satisfacer las necesidades de su comunidad.
          </p>
          <p className='text-justify'>
            Realizaron investigaciones exhaustivas, analizaron el mercado y
            llevaron a cabo mapas de empatía para comprender las necesidades y
            deseos de las personas en Santo Domingo Oeste / Este. Esta
            investigación respaldó aún más la viabilidad y relevancia de su
            proyecto.
          </p>
        </section>
        <img src='img/004.jpg' className='bg-[#0071bc] w-1/2 h-80' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-[#0071bc] text-4xl text-bold mb-4'>
          Mision, Vision y Valores
        </h2>
        <section className='flex flex-row items-center justify-center [&>div]:p-3'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-[#0071bc] text-2xl text-bold mb-4'>Mision</h3>
            <p className='text-justify'>
              Nuestra <strong>misión</strong> es brindar una capacitación
              integral para el desarrollo personal y profesional, a través de
              servicios de atención psicológica y programas de desarrollo de
              habilidades, con el objetivo de mejorar el bienestar emocional y
              proporcionar a las personas las herramientas necesarias para
              acceder a oportunidades laborales.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-[#0071bc] text-2xl text-bold mb-4'>Vision</h3>
            <p className='text-justify'>
              Nuestra <strong>visión</strong> es convertirnos en el referente
              principal en capacitación integral para el desarrollo personal y
              profesional en la localidad. Aspiramos a expandir nuestra
              influencia a nivel nacional, estableciendo alianzas estratégicas y
              colaborando con expertos en diferentes áreas. Buscamos generar un
              impacto positivo en la comunidad, fomentando el crecimiento
              personal y profesional de los individuos, y contribuyendo al
              desarrollo socioeconómico de la región.
            </p>
          </div>
        </section>
        <section className='flex flex-row items-center justify-center [&>div]:p-3'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-[#0071bc] text-2xl text-bold mb-4'>Valores</h3>
            <ul>
              <li className='text-justify'>
                <strong>Excelencia:</strong> Nos comprometemos a brindar
                servicios de alta calidad, basados en la excelencia profesional
                y la mejora continua. Buscamos superar las expectativas de
                nuestros clientes y garantizar su satisfacción.
              </li>
              <li className='text-justify'>
                <strong>Integridad:</strong> Actuamos con honestidad, ética y
                transparencia en todas nuestras interacciones. Mantenemos la
                confidencialidad y el respeto hacia nuestros clientes, creando
                un entorno seguro y confiabl
              </li>
              <li className='text-justify'>
                <strong>Empatía:</strong> Valoramos y comprendemos las necesidades emocionales y
                profesionales de nuestros clientes. Nos esforzamos por
                establecer una conexión empática, brindando un trato cálido,
                comprensivo y respetuoso.
              </li>
              <li className='text-justify'>
                <strong>Innovación:</strong> Buscamos constantemente nuevas formas de mejorar
                nuestros servicios y adaptarnos a las demandas cambiantes del
                mercado. Fomentamos la creatividad, la investigación y la
                implementación de soluciones innovadoras.
              </li>
              <li className='text-justify'>
                <strong>Colaboración:</strong> Trabajamos en equipo, promoviendo la colaboración
                y el intercambio de conocimientos. Establecemos alianzas
                estratégicas con profesionales y organizaciones afines, buscando
                sinergias para lograr un mayor impacto.
              </li>
              <li className='text-justify'>
                <strong>Responsabilidad social:</strong> Nos comprometemos a contribuir al
                bienestar de la comunidad y a promover la igualdad de
                oportunidades. Buscamos generar un impacto positivo en la
                sociedad a través de nuestras acciones y programas de
                responsabilidad social corporativa.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  )
}
