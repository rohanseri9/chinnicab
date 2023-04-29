import React,{useState} from 'react';
 import { useNavigate, useNavigation } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.email.value==="rohanseri9@gmail.com"){
          navigate('/employees');
        }else{
          alert("failes");
        }
      };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">


      <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                   Sign in
                </h1>
     
        <div className="mt-6form">
          <div className="mb-2">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id='username'
              className='"block text-sm font-semibold text-gray-800"'
           
            />
          </div>
        
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id='email'
          
         
            ></input>
          </div>
         
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id='password'
           
            />
          </div>
          
        <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'>login</button>
        </div>
      </form>
    </div>
    </div>
    
    
  )
}

export default Login