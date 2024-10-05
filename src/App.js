import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Tours from "./pages/Tours/Tours";
import TourDetails from "./pages/Tours/TourDetails";
import Booking from "./pages/Booking/Booking";
import NotFound  from "./pages/404/404";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        
       <Route path="/contact-us" element={<Contact />} />
     
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour-details/:id" element={<TourDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* <Route path="/tour-details" element={<TourDetails />} /> */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
