import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData() ;
    // const [ data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Saurabhsawant77')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })

    // }, [])
    
  return (
    <div className="text-center p-4 m-3 bg-gray-400 text-white text-3xl">
    Github Followers: {data.id}
    <div className="flex justify-center items-center p-4">
        <img src={data.avatar_url} alt="Avatar" className="p-4 bg-center" width={300} height={300}/>
    </div>
</div>
  )
}

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Saurabhsawant77')
    return response.json();
}