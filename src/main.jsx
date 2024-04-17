import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/styles/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Animals from './pages/Animals.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Feed from './pages/Feed.jsx'
import PersonalPost from './pages/PersonalPost.jsx'
import NewPost from './pages/NewPost.jsx'
import PersonalProfile from './pages/PersonalProfile.jsx'
import AnimalDetail from './pages/AnimalDetail.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />  
        <Route path='/*' element={<Navigate replace to={'/'}/>}/>
        <Route path='map' element={' '} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/animals' element={<Animals />} />
        <Route path='/animals/:name' element={<AnimalDetail/>}/>
        <Route path='/feed' element={<Feed />} />
        <Route path='/personal-post' element={<PersonalPost />} />
        <Route path='/personal-profile' element={<PersonalProfile />} />
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/newPost' element={<NewPost/>}/>
        <Route path='*' element={<Navigate replace to={'/'}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)