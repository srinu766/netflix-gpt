import React from 'react'
import Browse from "./components/Browse";
import Login from './components/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
    
    const AppRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
  return (

    <div>
     <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body
