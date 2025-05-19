import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddTask from './components/AddTask.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import BrowseTasks from './components/BrowseTasks.jsx';
import SignUp from './pages/SignUp.jsx';
import LoginPage from './pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        Component: Home,
      },
      {
        path:"addTask",
        Component: AddTask,
      },
      {
        path:"browseTasks",
        Component:BrowseTasks,
      },
      {
        path:"loginPage",
        Component: LoginPage,
      },
      {
        path:"signUp",
        Component: SignUp,
      }


    ]
  },
  




  {
    path:"/*",
    Component:ErrorPage,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
