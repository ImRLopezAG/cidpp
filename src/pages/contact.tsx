export const Contact = (): JSX.Element => {
  return (
    <section className='flex flex-col justify-center [&>h1]:items-center'>
      <h1 className='text-4xl font-bold text-[#0071bc] mb-3'>Contáctanos</h1>
      <div className='flex'>
        <p className='text-xl mb-3'>
          Si tiene alguna pregunta, no dude en contactarnos. Nuestro equipo de
          expertos se pondrá en contacto con usted dentro de un día hábil.
        </p>
        <img src='img/contacto.webp' alt='contact' className=' h-96' />
      </div>
      <h2 className='text-2xl font-bold text-[#0071bc] mb-3'>
        Obtenga información sobre nuestros servicios
      </h2>
      <form className='flex flex-col gap-4 items-center mb-5'>
        <div className='flex w-full gap-3 items-start'>
          <div className='flex flex-col w-1/2 justify-center gap-2 items-start'>
            <label htmlFor='name' className='text-xl'>
              Nombre:
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='border-2 w-full border-[#0071bc] rounded-md p-1'
            />
          </div>
          <div className='flex flex-col w-1/2 justify-center gap-2 items-start'>
            <label htmlFor='email' className='text-xl'>
              Email:
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='border-2 w-full border-[#0071bc] rounded-md p-1'
            />
          </div>
        </div>
        <div className='flex flex-col w-full justify-center gap-2 items-start'>
          <label htmlFor='message' className='text-xl'>
            Mensaje:
          </label>
          <textarea
            name='message'
            id='message'
            className='border-2 w-full border-[#0071bc] rounded-md p-1'
            rows={5}
          />
        </div>
        <button
          type='submit'
          className='bg-[#0071bc] text-white rounded-md p-1 w-1/2 hover:bg-[#005faa]'
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
