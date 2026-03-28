'use client'

import { useState } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { removeFromfav } from "../redux/features/favSlice";

export default function Fav (){
    const favorets=useSelector(state=>state.fav);
    const dispatch=useDispatch();
    function HandelRemoveFromFave(item){
        dispatch(removeFromfav(item))
    }
    const [activ,setActiv]=useState(false);
    return <div className="favorets">
        <button className={"up "+activ} onClick={()=>{setActiv(prev=>!prev)}}>
            <span className="material-symbols-outlined">favorite</span>
        </button>
        <div  className={"products "+activ}>
            {
                favorets.map((item,i)=>{return <div key={i} className="card">
                    
                    <Link href={`../productP/${item.id}`} >
                        <img  src={item.images[0]} alt="" />
                    </Link>
                    <div className="title">
                        {item.title}  <button onClick={()=>{HandelRemoveFromFave(item)}} ><span className="material-symbols-outlined">close</span> </button>
                    </div>
                </div> })
            }
        </div>
    </div>
}