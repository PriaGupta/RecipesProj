import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import './recipes.css';

const SinglePageRec = () => {

     const params=useParams()
     console.log("param",params)

     const [singleRecipe,setSingleRecipe]=useState([])

     const singlerecipe=async()=>{
     const response= await fetch(`https://dummyjson.com/recipes/${params.id}`)
     const res=await response.json();
     console.log("data=",res)
     setSingleRecipe(res)
     }
     useEffect(()=>{
        singlerecipe()
     },[params.id])

  return (
    <div>
      <section class="singlepage-section">
        <Link class="btn btn-primary" to="/">back</Link>
        <h3 className='singlepage-heading'>{singleRecipe.name}</h3>
             <div className='recipe-image'>
              <img src={singleRecipe.image} alt=""/>
             </div>
             <div className='recipe-inner'>
              <p><span className='recipes-tag'>Cuisine: </span>{singleRecipe.cuisine}</p>
        
              <p><span className='recipes-tag'>Tags: </span>  
              {singleRecipe?.tags?.map((obj,index)=>{
        console.log("obj",obj)
        return(
            <p>{obj}</p>
        )
       })}</p>
              <p><span className='recipes-tag'>MealType: </span>{singleRecipe.mealType}</p>
              <p><span className='recipes-tag'>Ratings: </span>{singleRecipe.rating}</p>
             </div>

       </section>
    </div>
  )
}

export default SinglePageRec
