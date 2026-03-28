'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/features/cartSlice";
import { addToFav  } from "@/app/redux/features/favSlice";

export default function shop (){
    const [products,setProducts]=useState([]);
    const [categoryAr,setCategories]=useState([]);
    const [catrgoriId,setcategoryID]=useState(1000);
    const [search,setSearch]=useState("");

    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products").then(res=>res.json())
        .then(res=>{console.log(res);setProducts(res)})
        .catch(er=>{console.error(er)})
        fetch("https://api.escuelajs.co/api/v1/categories").then(res=>res.json())
        .then(res=>{console.log(res);setCategories(res)})
    },[])
    useEffect(()=>{
        console.log(search)
    },[search])
    const dispatch=useDispatch()
    const handelAddProducttoCart=(item)=>{
        dispatch(addToCart({...item ,count:1}))
       
    }
    const handelAddProducttoFav=(item)=>{
        dispatch(addToFav(item))
    }

    return <div className="shop-page">
        <aside>
            <button onClick={()=>{setcategoryID(1000)}}>all</button>
            {
                categoryAr.map((item,i)=>{
                    return <button onClick={()=>{setcategoryID(item.id)}} key={i} className="category">{item.name}</button>
                })
            }
        </aside>
        <main>
            <form className="search true">
                <input value={search} type="text" onChange={(e)=>{setSearch(e.target.value)}} />
                <button>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </form>
            <div className="grid">
                {
                    products.filter(item=>((catrgoriId==1000 || catrgoriId==item.category.id)&&(search==""||item.title.toLowerCase().includes(search.toLowerCase())))).map((item,i)=>{
                        return <div key={i} className="card">
                                <Link href={"/productP/"+item.id}>
                                    <img src={item.images[0]} alt="sss" />
                                    <span className="price">
                                        {item.price}$
                                    </span>
                                </Link>
                                <div>{item.title}</div>
                                <button onClick={()=>{handelAddProducttoCart(item)}}>
                                    Add to Cart
                                    <span className="material-symbols-outlined">
                                       shopping_cart
                                    </span>
                                </button>
                                <button onClick={()=>{handelAddProducttoFav(item)}}>
                                    Add to fav
                                    <span className="material-symbols-outlined">
                                       favorite
                                    </span>
                                </button>
                                <Link  onClick={()=>{handelAddProducttoCart(item)}} href={"./cartP"} className="buy">buy now </Link>
                            </div>
                    })
                }
            </div>
        </main>
    </div>
}