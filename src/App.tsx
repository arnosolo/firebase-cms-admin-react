import { BrowserRouter as Router } from 'react-router-dom'
import PageHeader from '@src/components/PageHeader'
import { RouteView } from './router'
import SideBar from '@src/components/SideBar'

function App () {
  return (
    <Router>
      <div className="App">
      <PageHeader />
        <div className='flex gap-6 py-6 px-4 md:px-6 bg-lightViolet'>
          <div className='lt-md:hidden'>
            <div className='py-6 pl-8 pr-8 bg-white rounded-2xl'>
              <SideBar />
            </div>
          </div>
          <RouteView />
        </div>
      </div>
    </Router>
  )
}

export default App