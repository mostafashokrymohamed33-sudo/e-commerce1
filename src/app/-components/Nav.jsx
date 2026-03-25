'use client'

import Link from "next/link"
import { useSelector } from "react-redux"

export default function Nav (){
    const cart=useSelector(state=>state.cart)    
    console.log(cart)
    return <nav>
              <h3 className="font2">logo.com</h3>
              <div className="links">
                <Link href={"/"}>
                  Home
                </Link>
                <Link href={"../shopP"}>
                  Shop
                </Link>
                <a href="https://me-me-me-beige.vercel.app/">Contact </a>
              </div>
              <div className="links">
                <Link href={"../cartP"}>
                    <span className="num">{cart.length}</span>
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </Link>
                <Link href={"./profile/3"}>
                  <span className="material-symbols-outlined">
                    person
                  </span>
                </Link>
              </div>
            </nav>
}