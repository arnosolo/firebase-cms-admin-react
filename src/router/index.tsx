import {
  Route,
  Routes
} from 'react-router-dom'
import Home from '@src/views/Home'
import Product from '@src/views/Product'
import NotFound from '@src/views/NotFound'

export const RouteView = () => (
    <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<NotFound />} />
    </Routes>
)
