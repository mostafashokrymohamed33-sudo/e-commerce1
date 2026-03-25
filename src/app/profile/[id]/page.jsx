'use client'
import { use, useEffect, useState } from "react"

export default function profile () {
    const [data,setData]=useState(null)
    useEffect (()=>{
        fetch("https://api.escuelajs.co/api/v1/users/1")
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setData(res)
        })
    },[])
    return <>
     <div className="profile-progile">
        <div className="infos =">
            <div className="user-card">
                <img src={data?.avatar} alt="" />
                <div>
                    <h3 className="font2">
                        {data?.name}
                    </h3>
                    <span>
                        {data?.email}
                    </span>
                </div>
            </div>
            <button>
                Edit Profile
            </button>
            <button>
                logout
            </button>
        </div>
        
     </div>
    </>
    
}