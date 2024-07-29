import React, { useState } from 'react'
import Topnavig from './Components/Navbar1'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
export const Register = () => {
    const [data,setData]=useState('')
    let id = localStorage.getItem('id')
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    let handleSubmit=(event)=>{
        // event.preventDefault()

        // if(data.password === data.rpss){
        //     let response=axios.post('http://localhost:5000/people/register',data)
        //     console.log(response)
        //     toast.success('Registered')
        // }
        // else{
        //     toast.error('Invalid')
        // }
        let response=axios.post('http://localhost:5000/people/register',data)
        console.log(response)
    }
  return (
    <>
<ToastContainer/>
<div class="w-full max-w-sm p-4 mt-1 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#" onSubmit={handleSubmit}>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register</h5>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input onChange={handleChange} type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input onChange={handleChange} type="password" name='password' id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div class="mb-5">
           <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
           <input onChange={handleChange} type="password" name='rpass' id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <button 
  type="submit" 
  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xxs sm:text-xs md:text-sm lg:text-base px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Create account
</button>

    </form>
</div>
    </>
  )
}
export default Register
