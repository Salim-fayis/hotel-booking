
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Navbar from './common/Navbar/Navbar';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Destinations from "./components/Destinations/Destinations";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Pages/Home";
import SinglePage from "./SinglePages/SinglePage";
import BlogSingle from './components/Blog/blog-single-page/BlogSingle'
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

function App() {
  return (
    <>
   
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>}  />
      <Route path='/about' exact element={<About/>}  />
      <Route path='/gallery' exact element={<Gallery/>}  />
      <Route path='/destination' exact element={<Destinations/>}  />
      <Route path='/singlepage/:id' exact element={<SinglePage/>}  />
      <Route path='/blog' exact element={<Blog/>}  />
      <Route path='/blogsingle/:id' exact element={<BlogSingle />}  />
      <Route path='/testimonial' exact element={<Testimonial />}  />
      <Route path='/contact' exact element={<Contact />}  />
      <Route path='/sign-in' exact element={<Login />}  />
      <Route path='/register' exact element={<Register />}  />
    </Routes>
    </Router>
    </>
  );
}

export default App;
