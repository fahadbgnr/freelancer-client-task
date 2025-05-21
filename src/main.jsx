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
import MyPostedTasks from './components/MyPostedTasks.jsx';
import TaskDetails from './components/TaskDetails.jsx';
import BrowseTaskCard from './components/BrowseTaskCard.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './provider/PrivateRoute.jsx';
import UpdateTaskPage from './components/UpdateTaskPage.jsx';
import BidsPage from './pages/BidsPage.jsx';
import Loder from './pages/Loder.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "addTask",
       element: <PrivateRoute>
        <AddTask></AddTask>
       </PrivateRoute>
      },
      {
        path: "browseTasks",
        loader: () => fetch('https://freelance-task-server.vercel.app/freelancerData'),
        Component: BrowseTasks,
        hydrateFallbackElement: <Loder></Loder>,
      },

      {
        path: "/browseTaskCard/:id",
        loader: () => fetch('https://freelance-task-server.vercel.app/freelancerData'),
        Component: BrowseTaskCard,
        hydrateFallbackElement: <Loder></Loder>,
      },
      {
        path: "/taskDetails/:id",
        element: <PrivateRoute>
          <TaskDetails></TaskDetails>
        </PrivateRoute>
      },


      {
        path: "myPostedTasks",
        element: <PrivateRoute>
          <MyPostedTasks></MyPostedTasks>
        </PrivateRoute>

      },
      {
        path:"/updateTaskPage/:id",
        element: <PrivateRoute>
          <UpdateTaskPage></UpdateTaskPage>
        </PrivateRoute>

      },
      {
        path: "loginPage",
        Component: LoginPage,
      },
      {
        path: "signUp",
        Component: SignUp,
      }


    ]
  },





  {
    path: "/*",
    Component: ErrorPage,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
