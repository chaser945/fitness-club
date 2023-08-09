import { Routes, Route } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "./components"
import { useEffect, useState } from "react"
import {
  About,
  Blog,
  Classes,
  Contact,
  Gallery,
  GalleryPage1,
  GalleryPage2,
  Home,
  Pricing,
  Schedule,
} from "./pages"
import { useDispatch } from "react-redux"
import {
  setNavbarBlack,
  setNavbarTransparent,
} from "./features/appSlice/appSlice"

const App = () => {
  const dispatch = useDispatch()

  const [y, setY] = useState(window.scrollY)
  // console.log(y)

  const handleNavigation = () => {
    setY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation)
    return () => {
      window.removeEventListener("scroll", handleNavigation)
    }
  }, [y])

  useEffect(() => {
    if (y > 3) {
      dispatch(setNavbarBlack())
    } else {
      dispatch(setNavbarTransparent())
    }
  }, [y])

  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="gallery" element={<Gallery />}>
          <Route index element={<GalleryPage1 />} />
          <Route path="page-2" element={<GalleryPage2 />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="classes" element={<Classes />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
