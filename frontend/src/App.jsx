import { useState} from 'react'
import { lazy } from 'react'
import Auth from './components/Auth'
import {BrowserRouter,Route,Routes,Router} from 'react-router-dom'
const Home  = lazy(()=> import('./components/Home'))
const Chat  = lazy(()=> import('./components/Chat'))
const NotFound = lazy(()=>import('./components/NotFound'))
import ProtectedRoute from './utils/ProtectedRoute'
function App() {
  const [count, setCount] = useState(0)
  let user=true
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<ProtectedRoute user={user} />}>
      <Route path='/' element={<Home />} />
      <Route path='/chat/:chatId' element={<Chat />} />

      </Route>
      <Route path='/login' element={<ProtectedRoute user={!user} redirect='/'>
        <Auth />
        </ProtectedRoute>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
