import React ,{useState} from 'react'
import facebooklogo from './facebook.jpeg'
import googlelogo from './google.png'
import githublogo from './github.png'
import './Login.css'

const Login = () => {

    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
  const handleFname=(e)=>{
    setFname(e.target.value);
    console.log(e.target.value)
  }
  const handleLname=(e)=>{
    setLname(e.target.value);
    console.log(e.target.value);
  }
 const handleEmail=(e)=>{
    setEmail(e.target.value);
    console.log(e.target.value)
 }
 const handlePassword=(e)=>{
    setPassword(e.target.value);
    console.log(e.target.value)
 }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("First Name:",fname);
    console.log("Last Name:",lname)
    console.log("Your mail id : ",email)
    console.log("Your password is :" ,password)
   }

  return (

      <div className="container">
    <div className="row">
        <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3 mt-4">
            <div className="panel border bg-white">
                <div className="panel-heading">
                    <h3 >Login</h3>
                </div>
                <div className="panel-body p-3">
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                        <div className='input-field'>
                        <label className='form-label-three'>FirstName:</label>
                        <input onChange={handleFname} value={fname} type="text" />
                        </div>
                        </div>
                        <div className='form-group'>
                            <div className='input-field'>
                                <label className='form-label-three'>LastName:</label>
                                <input onChange={handleLname} value={lname} type="text" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-field"> 
                            <label className='form-label-one'>Email:</label>
                            <input onChange={handleEmail} value={email} type="email"  /> </div>
                        </div>
                        <div className="form-group ">
                            <div className="input-field"> 
                            <label className='form-label-two'>Password:</label>
                             <input onChange={handlePassword} value={password} type="password"  /> 
                            </div>
                        </div>
                        
                        <div className="form-inline"> <input type="checkbox" name="remember"  /> 
                        <label className="text-muted">Remember me</label>
                         <a href="#" id="forgot" className="font-weight-bold">Forgot password?</a> </div>
                         <div className='bttn'>
                        <button >Login</button>
                        </div>
                        <div className="text-center pt-3 text-muted">Don't have an account? 
                        <a href="#">Sign up</a> 
                        </div>
                    </form>
                </div>
                <div className="mx-3 my-2 py-2 bordert">
                    <div className="text-center py-3">
                     <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="px-2"> 
                    <img className='logincss' src={facebooklogo} alt="facebook" /> 
                    </a> 
                    <a href="https://www.google.com" target="_blank" rel="noreferrer" className="px-2"> 
                    <img className='logincss' src={googlelogo} alt="google" /> 
                    </a>
                     <a href="https://www.github.com" target="_blank" rel="noreferrer" className="px-2">
                    <img className='logincss' src={githublogo} alt="github"  /> 
                     </a> 
                     </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Login
