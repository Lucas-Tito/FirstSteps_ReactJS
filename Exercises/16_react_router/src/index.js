import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import{ createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/Home';
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';
import ContactDetails from './routes/ContactDetails';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path: "/contact/:id",
        element: <ContactDetails/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);

