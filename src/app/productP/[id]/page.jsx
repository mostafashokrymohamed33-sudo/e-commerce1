"use client"

import { use, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/features/cartSlice";
import Link from "next/link";

export default function ProductP({ params }) {

    const [data, setData] = useState(null);
    const [focusedImage,setFocusedImage]=useState(null);
    const { id } =use(params)
    useEffect(() => {
        console.log(id)
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res => res.json())
        .then(res => {
        console.log(res)
        setData(res)
        setFocusedImage(res?.images[0])
      })
    }, [])
    const [count,setCount]=useState(1);
    const dispatch=useDispatch();
    const handleAddToCart = () => {
       if(data) dispatch(addToCart({...data,count:count})); 
    };
    return <div className="product-page">
        <div className="product">
            <img style={{width:'30vw'}} src={focusedImage} alt="" />
            <div className="grid-images">
                {
                    data?.images.map((item,i)=>{
                        return <img onMouseMove={()=>{setFocusedImage(item)}} key={i} src={item}/>
                    })
                }
            </div>
            <div>
                <h1>{data?.title}</h1>
                <span >{data?.price}$</span>
                <h5>
                    {
                     data?.description
                    }
                </h5>
                <Link  onClick={()=>{handleAddToCart()}} href={"../cartP"} className="buy">buy now </Link>
                <button onClick={()=>{handleAddToCart()}}>
                    add to the cart 
                </button>
                <input type="number" value={count} placeholder="item count" onChange={(e)=>{setCount(e.target.value)}}/>
            </div>
        </div>
    </div>
}