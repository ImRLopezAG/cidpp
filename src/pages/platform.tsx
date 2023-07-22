import { Video } from '../components'

export const Platform = (): JSX.Element => {
  return (
    <section className='flex flex-col justify-center [&>h1]:items-center'>
      <h1 className='text-4xl font-bold text-[#0071bc] mb-3'>
        Plataforma de cursos
      </h1>
      <p className='text-xl mb-3'>
        Este es un adelanto de los cursos que estarán disponibles en la
        plataforma. Si quieres recibir una notificación cuando estén disponibles
        puedes suscribirte a mi lista de correo.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <Video
          keyframe='fUgxxhI_bvc'
          title='De Novato a Ninja: Aprende TypeScript - curso intensivo (#1)'
        />
        <Video
          keyframe='L1ZSk-vPVKI'
          title='De Novato a Ninja: Aprende TypeScript - curso intensivo (#2)'
        />
        <Video
          keyframe='ZpY5KdGQvwI'
          title='Tutorial TypeScript con Node.js y Express.'
        />
        <Video
          keyframe='OPBLIXRsJPU'
          title='#1 Introducción al AI SDK de Next.js 13 | proyecto Chat-GPT'
        />
        <Video
          keyframe='Z-xKSQQt3Iw'
          title='#2 Introducción al AI SDK de Next.js 13 | proyecto Chat-GPT'
        />
        <Video
          keyframe='soJU2_SKy1I'
          title='#3 Introducción al AI SDK de Next.js 13 | proyecto Chat-GPT'
        />
        <Video
          keyframe='5l4DssYvO4U'
          title='#4 Introducción al AI SDK de Next.js 13 | proyecto Chat-GPT'
        />
      </div>
    </section>
  )
}
