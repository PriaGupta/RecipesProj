import Navbar from'./Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import {Home} from './navbar/Home';
import Login from "./pages/Login";
import About from './navbar/About';
import Recipes from './navbar/Recipes';
import SinglePageRec from './navbar/SinglePageRec';
import Contact from './navbar/Contact';
import Footer from './navbar/Footer';
import './Navbar.css';
import './pages/Login.css';
import './navbar/recipes.css';

function App() {
  return (
    <>   
    <BrowserRouter>
    {/* call navbar & footer outside the routes to show them fixed */}
    <Navbar/> 
    <Routes> 

      <Route exact path='/' element={<Recipes/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/recipees' element={<Recipes/>}/> */}
      <Route path='/singlerecipepage/:id' element={<SinglePageRec/>}/>
      <Route path='/contact' element={<Contact/>}/> 
   </Routes>
   <Footer/> 
   
    </BrowserRouter>
</>
  );
}

export default App;
