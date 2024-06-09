import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Home from './pages/home'
import Comic from './pages/comic'

const Root = () => {

  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Fatal Error occurred</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/comic',
        element: <Comic />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}