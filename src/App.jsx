import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import TeamPage from "./pages/TeamPage"
import EventPage from "./pages/EventPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import PricePage from "./pages/PricePage"
import BlogSinglePage from "./pages/BlogSinglePage"

function App() {


  return (
    <>
    <BrowserRouter>
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
    </BrowserRouter>
    
    </>
  )
}

export default App
