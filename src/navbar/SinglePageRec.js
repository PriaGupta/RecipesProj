import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
        <a class="btn btn-primary" href="/">back</a>
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


      {/* <div className='page'>
        <div className='SinglePage'>
      <img src={singleRecipe.image}/>
      <div className='recipe-inner'>
        <h3>{singleRecipe.name}</h3>
        <div className='quality-all'>
       <div className='quality'>
        <h5>Cuisine:</h5>
        <p> {singleRecipe.cuisine}</p>
        <h5>MealType:</h5>
        <p> {singleRecipe.mealType}</p>
        <h5>Ingredients</h5>
        {singleRecipe?.ingredients?.map((obj,index)=>{
        console.log("obj",obj)
        return(
            <p>{obj}</p>
        )
       })} 
      <h5>Rating: </h5>
      <p>{singleRecipe.rating}</p>
      </div>
      </div>
      </div>
      </div>
      </div> */}
       </section>
    </div>
  )
}

export default SinglePageRec
