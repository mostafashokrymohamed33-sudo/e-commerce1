"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function CategoryCard(props){
    const cardREF =useRef(null)
    useEffect(()=>{
        const observer=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add("show")
                }
            })
        },{threshold:0.5})
        if(cardREF.current) observer.observe(cardREF.current)
        return ()=>{
            if(cardREF.current) observer.unobserve(cardREF.current)
        }
    },[])
    
    return <Link ref={cardREF} href={props.url} className={"div"+props.i}>
        <div className="cover"></div>
        {props?.title}
    </Link>
}