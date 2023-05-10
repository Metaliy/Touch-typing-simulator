import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { appLayout } from './appLayout'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: appLayout,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
])
