import './App.css'
import { Footer } from './components/body/Footer'
import Navbar from './components/body/Navbar'
import { Body } from './components/body/Body'
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
