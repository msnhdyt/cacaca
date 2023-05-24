// React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Pages
import { AfterSimpleIndex, CandleIndex, CountDownIndex, HomeIndex, SimpleIndex } from './pages'

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <HomeIndex /> 
  // },
  {
    path: '/',
    element: <CountDownIndex />
  },
  {
    path: 'candle',
    element: <CandleIndex />
  },
  {
    path: 'simple',
    element: <SimpleIndex />
  },
  {
    path: 'after-simple',
    element: <AfterSimpleIndex />
  }
])

const App = () => {
  return <>
    <RouterProvider router={router} />
  </>
}

export { App }