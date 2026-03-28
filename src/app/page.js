'use client'
import Link from "next/link";
import CategoryCard from "./-components/-categorycard";
import { use, useEffect, useState } from "react";

export default function Home(prmas) {
  const[categories,setCategpries]=useState([])
  const {id}=use
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/categories").then(res=>res.json())
    .then(res=>{
      console.log(res)
      setCategpries(res)
    })
  },[])
  return (
    <div  className={"home-page"}>
      <div className="intro">
        <h1 className="font2 ">
          NEW WINTER <br></br> COLLECTION
        </h1>
        <div>
          50% OFF 2026
        </div>
        <div className="small">
            The standard chunk of Lorem ipsum used since the is reproduced below for those interested. Sections 1.10.32 and 11033 from de Finibus Bonorum et Malorum.
        </div>
        <Link className="font2" href={"../shopP"}>
          Shop Now
        </Link>
      </div>
      <div className="categories">
        {
          categories.length<4?"":categories.slice(0, 4).map((item,i)=>{
            return <CategoryCard key={i} i={i+1} url={`/categoryP/${item.id}`} image={item?.image} title={item?.name}/>
          })
        }
      </div>
    </div>
  );
}
