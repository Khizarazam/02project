import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center p-4 bg-gray-600 text-white '>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="image" className='w-[300px] h-[300px] rounded-full border-black border-2 '/>
    </div>
  )
}

export default Github

export const gitInfo = async () => {
   const response = await fetch('https://api.github.com/users/Khizarazam')
   return response.json()
}
