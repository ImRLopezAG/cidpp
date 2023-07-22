export const Footer = (): JSX.Element => {
  return (
    <footer className='border-y-4 border-y-blue-800 p-2 mt-2 relative bottom-0'>
      <div className='flex flex-row justify-start gap-4 items-start'>
        <div className='flex flex-row justify-center gap-3 items-center'>
          <h2 className='text-xl text-[#0071bc]'>Telefono: </h2>
          <p className='text-xl'>+1 809-594-3211</p>
        </div>
        <div className='flex flex-row justify-center gap-3 items-center'>
          <h2 className='text-xl text-[#0071bc]'>Email:</h2>
          <a
            href='mailto:contacto@cidpp.com'
            className='text-xl underline hover:text-[#0071bc]'
          >
            contacto@cidpp.com
          </a>
        </div>
        <div className='flex flex-row justify-center gap-2 items-center'>
          <h2 className='text-xl text-[#0071bc]'>Direccion: </h2>
          <p className='text-xl'>Av. Abraham Lincoln 1005, Santo Domingo</p>
        </div>
        <div className='flex flex-row justify-center gap-2 items-center'>
          <h2 className='text-xl text-[#0071bc]'>TikTok: </h2>
          <a
            href='https://www.tiktok.com/@cidpp6?_t=8e7uTW63CHm&_r=1'
            className='text-xl underline hover:text-[#0071bc]'
          >
            @cidpp6
          </a>
        </div>
        <div className='flex flex-row justify-center gap-2 items-center'>
          <h2 className='text-xl text-[#0071bc]'>Instagram: </h2>
          <a
            href='https://instagram.com/cidpp_1?igshid=OGQ5ZDc2ODk2ZA=='
            className='text-xl underline hover:text-[#0071bc]'
          >
            @cidpp_1
          </a>
        </div>
      </div>
    </footer>
  )
}
