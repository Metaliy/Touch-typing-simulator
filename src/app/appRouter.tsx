import { createBrowserRouter } from 'react-router-dom'
import { EducationPage } from '@/pages/EducationPage'
import { MainPage } from '@/pages/MainPage'
import { ResultPage } from '@/pages/ResultPage'
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
      {
        path: '/education',
        element: <EducationPage />,
      },
      {
        path: '/statistics',
        element: <ResultPage />,
      },
    ],
  },
])
