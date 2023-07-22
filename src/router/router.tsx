import { createBrowserRouter } from 'react-router-dom'
import { App } from './app'
import { About, Contact, Home, Platform, Services } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/platform',
        element: <Platform />
      }
    ]
  }
])
