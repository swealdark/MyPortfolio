import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Proyects from './components/proyects';
import Contact from './components/contact';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<h1>Error</h1>
  },
  {
    path:'/about',
    element:<About/>,
  },
  {
    path:'/proyects',
    element:<Proyects/>,
  },
  {
    path:'/contact',
    element:<Contact/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
