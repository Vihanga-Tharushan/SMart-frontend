import {BrowserRouter, Routes , Route} from 'react-router-dom' 
import HomePage from './Pages/homePage'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen flex bg-amber-100">
          
          <Routes>

            <Route path="/*" element={<HomePage />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/login" element={<h1>login</h1>}/>
            
          </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App
