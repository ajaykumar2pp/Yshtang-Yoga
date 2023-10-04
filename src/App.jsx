import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import TeamPage from "./pages/TeamPage"
import EventPage from "./pages/EventPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import PricePage from "./pages/PricePage"
import BlogSinglePage from "./pages/BlogSinglePage"
import Footer from "./components/Footer"

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/team' element={<TeamPage />} />
    <Route path='/event' element={<EventPage />} />
    <Route path='/blog' element={<BlogPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/price' element={<PricePage />} />
    <Route path='/single-blog' element={<BlogSinglePage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
