import './App.css'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import { Body } from './components/Body'
import { NavProvider } from './Context/NavContext'

function App() {


  return (
    <>
      <NavProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Body />
          </main>
          <Footer />
        </div>
      </NavProvider>
    </>
  )
}

export default App
