import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EditorPage from './pages/EditorPage'
import Home from './pages/Home'

function App() {

  return (
    <>
    <div>
      <Toaster></Toaster>
    </div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/editor/:roomId' element={<EditorPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
