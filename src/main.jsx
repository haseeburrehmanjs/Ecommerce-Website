import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import SingalProduct from './pages/SingalProduct'
import HomePage from './pages/Home'

let router = createBrowserRouter([
    {
        path: '',
        element : <Layout/>,
        children : [
            {
                path : '',
                element: <HomePage/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'product',
                element: <Product/>
            },
            {
                path: 'product/:id',
                element: <SingalProduct/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <Layout/>
    </RouterProvider>
)
