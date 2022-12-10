import {
  Route,
  Routes
} from 'react-router-dom'
import Home from '@src/views/Home'
import Product from '@src/views/Product'
import { AuthPage } from '@src/views/AuthPage'
import NotFound from '@src/views/NotFound'
import { RequireAuth } from '@src/components/RequireAuth'

export const RouteView = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<AuthPage />} />
    <Route path='/products' element={
      <RequireAuth>
        <Product />
      </RequireAuth>}
    />
    <Route path='*' element={<NotFound />} />
  </Routes>
)
