import React,{useState,useEffect} from 'react'
import './recipes.css'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './img/img1.jpg';
import image2 from './img/img2.webp';
import image3 from './img/img3.webp';
import image4 from './img/img4.jpg';

const Recipes = () => {
  
    const[recipes,setsecipes]=useState([])

    const navigate=useNavigate() //navigate 1

    const fetchdata=async()=>{
      const response=await fetch('https://dummyjson.com/recipes') //api fetch karwani hai
      const r=await response.json();//api ko convert karwana hai
      setsecipes(r.recipes)
      console.log("recipes",r.recipes)
      
    }

    useEffect(()=>{
        fetchdata()
    },[])

    const handleclick=(id)=>{   
        navigate(`/singlerecipepage/${id}`) //navigate 2 for next page and pass onclick in map(id)
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };

  return (
    <div>
    <div className='container'>
      <div className='section-1'>
    <Slider {...settings}>
   <div className='abc'>
     <img src={image1}  alt="img1"/>
   </div>
   <div className='abc'>
     <img src={image2} alt="img2"/>
   </div>
   <div className='abc'>
   <img src={image3} alt="img3"/>
   </div>
   <div className='abc'>
   <img src={image4} alt="img4"/>
   </div>

 </Slider>
 </div>
    </div>
        <div className='all-rec'>
        <div className='container'>
            <div className='heading'>
                <h2> Our Recipes  
                {/* <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
    select by cuisine
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" >
    <li><a class="dropdown-item" href="#">Asian</a></li>
    <li><a class="dropdown-item" href="#">Italian</a></li>
    <li><a class="dropdown-item" href="#">American</a></li>
    <li><a class="dropdown-item" href="#">Pakistani</a></li>
  </ul>
</div> */}
                </h2>
            <div className='row'>
        {
      recipes.map((obj)=>{
        return(
            <>
            
            <div className='col-md-4' onClick={()=>handleclick(obj.id)} key={obj.id}> 
                <div className='box'>               
                <img className="images" src={obj.image} alt='abc'/>
                <p > {obj.name}</p>
                
            </div>
            </div>
            </>
        )
      })
    }
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Recipes;