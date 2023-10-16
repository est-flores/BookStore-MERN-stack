// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App