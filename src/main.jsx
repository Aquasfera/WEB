import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/styles/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { BrowserRouter, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Animals from './pages/aquapedia/Animals.jsx'
import AnimalDetail from './pages/aquapedia/AnimalDetail.jsx'
import AboutUs from './pages/aquapedia/AboutUs.jsx'
import Aquapedia from './pages/aquapedia/Aquapedia.jsx'
import Maps from './pages/aquapedia/Maps.jsx'

import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'

import PersonalProfile from './pages/aquagram/PersonalProfile.jsx'
import Feed from './pages/aquagram/Feed.jsx'
import PersonalPost from './pages/aquagram/PersonalPost.jsx'
import NewPost from './pages/aquagram/NewPost.jsx'

import Aquagram from './pages/aquagram/Aquagram.jsx'
import FAQ from './pages/aquapedia/FAQ.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/aquapedia',
    element: <Aquapedia/>,
    children: [
      {
        path:'/aquapedia', 
        element:<Maps/>

      },
      {
        path:'/aquapedia/:sea',
        element:<Animals />
      },
      {
        path:'/aquapedia/:sea/:name',
        element:<AnimalDetail />
      }
    ],
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/aquagram',
    element: <Aquagram/>,
    children: [
      {
        path:'/aquagram', 
        element:<Feed/>

      },
      {
        path:'/aquagram/personal-profile',
        element:<PersonalProfile />
      },
      {
        path:'/aquagram/personal-post',
        element:<PersonalPost />
      },
      {
        path:'/aquagram/newPost',
        element:<NewPost />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
   /*  <BrowserRouter>
      <Routes>
        
      
        <Route path='/' element={<App />} />  
        <Route path='*' element={<Navigate replace to={'/'}/>}/>
        
        <Route path='/aquapedia' element={<Aquapedia/>}>
          <Route path='/aquapedia' element={<Maps/>} />
          <Route path='/aquapedia/:sea' element={<Animals />} />
          <Route path='/aquapedia/:sea/:name' element={<AnimalDetail />} />
          <Route path='/aquapedia/faqs' element={<FAQ />}/>
          <Route path='/aquapedia/about-us' element={<AboutUs />}/>
        </Route>
        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/aquagram' element={<Aquagram/>}>
          <Route path='/aquagram' element={<Feed />} />
          <Route path='/aquagram/personal-profile' element={<PersonalProfile />} />
          <Route path='/aquagram/personal-post/:postId' element={<PersonalPost />} />
          <Route path='/aquagram/newPost' element={<NewPost/>} />
        </Route>
      </Routes>
    </BrowserRouter> */
)