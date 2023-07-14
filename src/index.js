import React from 'react';
import ReactDOM from 'react-dom/client';
import './Others/index.css';
//import App from './App';
import Homepage from './Components/Screens/Homepages';
import Contactus from './Components/Screens/Contactus';
import PageNotFound from './Components/Screens/PageNotFound';
import reportWebVitals from './Others/reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';



const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Homepage />,
    errorElement:<PageNotFound />
  },
  {
    path: "/Contact-Us",
    element: <Contactus />,
    errorElement:<PageNotFound />
  }
  ]
 
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
