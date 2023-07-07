import { Outlet } from 'react-router-dom'
import { Header } from '../components'

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className='p-4'>
        <Outlet />
      </main>
    </>
  )
}
