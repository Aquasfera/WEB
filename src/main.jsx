import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/styles/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Animals from './pages/Animals.jsx'
import NewPost from './pages/NewPost.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='animals' element={<Animals />}/>
        <Route path='/newPost' element={<NewPost/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
