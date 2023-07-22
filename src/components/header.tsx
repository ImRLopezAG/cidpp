import { NavLink } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <header className='border-y-4 border-y-blue-800 p-2 mt-2'>
      <nav className='flex-1 flex justify-between items-center'>
        <ul className='flex gap-10 [&>li>a]:rounded-md  [&>li>a]:text-lg'>
          <li>
            <NavLink to='/' className='hover:text-[#0071bc]'>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/services' className='hover:text-[#0071bc]'>
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='hover:text-[#0071bc]'>
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='hover:text-[#0071bc]'>
              Sobre Nosototros
            </NavLink>
          </li>
          <li>
            <NavLink to='/platform' className='hover:text-[#0071bc]'>
              Plataforma Virtual
            </NavLink>
          </li>
        </ul>
        <div className='flex items-center grow-1'>
          <img src='/logo.png' alt='logo' className='h-8 w-full' />
        </div>
      </nav>
    </header>
  )
}
