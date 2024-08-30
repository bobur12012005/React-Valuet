import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Signup from './pages/signup'
import LayoutSign from './LayoutSign/LayoutSign'
import Signin from './pages/Signin'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route element={<LayoutSign />}>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App