'use client'
import Link from "next/link"
import {use, useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/app/redux/features/cartSlice";
import { addToFav } from "@/app/redux/features/favSlice";

export default function profile ({params}) {
    const {id}=use(params)
    const [search,setsaerch]=useState("")
    const [data,setData]=useState([])
    
    const dispatch=useDispatch()
    const handelAddProducttoCart=(item)=>{
        dispatch(addToCart({...item ,count:1}))
    }
    const handelAddProducttoFav=(item)=>{
        dispatch(addToFav(item))
    }
    useEffect (()=>{
        fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setData(res)
        })
    },[])
    return <>
     <div className="category-page">
        <h1 className="font2" style={{padding:"10px"}}>
            all {data[0]?.category?.name} products 
        </h1>
        <div className="search">
            <input value={search} onChange={(e)=>{setsaerch(e.target.value)}}  placeholder={"search obute eny "+data[0]?.category?.name+" borducts"}type="text" />
            <span className="material-symbols-outlined">search</span>
        </div>

        <div className="products">
            {
                data.filter(item=>search==""||item.title.toLowerCase().includes(search.toLowerCase())).map((item,i)=>{
                     return <div key={i} className="card">
                                <Link href={"/productP/"+item.id}>
                                    <img src={item.images[0]} alt="sss" />
                                    <span className="price">
                                        {item.price}$
                                    </span>
                                </Link>
                                <div className="title">{item.title}</div>
                                <button onClick={()=>{handelAddProducttoCart(item)}}>
                                    <span className="material-symbols-outlined">
                                       shopping_cart
                                    </span>
                                </button>
                                <button>
                                    <span onClick={()=>{handelAddProducttoFav(item)}} className="material-symbols-outlined">
                                       favorite
                                    </span>
                                </button>
                                <Link  onClick={()=>{handelAddProducttoCart(item)}} href={"../cartP"} className="buy">buy now </Link>
                            </div>
                })
            }
        </div>
     </div>
    </>
    
}