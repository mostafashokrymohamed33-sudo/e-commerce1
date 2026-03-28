'use client'
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/app/redux/features/cartSlice";
export default function cartP(){
    let cart=useSelector(state=>state.cart)
    const [orderconirmed,setOrderConfirmed]=useState(false);
    const dispatch=useDispatch()
    const handelRemoveFromCart=(id)=>{
        dispatch(removeFromCart(id)) 
    }

    const [locations,setLocations]=useState([
        {
            "id": 6057141294435157,
            "name": "2749 Glover Court",
            "description": "Terga adsuesco nulla hic colligo cubo velit arma auxilium adicio.",
            "latitude": 4.629980865379286,
            "longitude": -74.30360118571173
        },
        {
            "id": 6152052523083554,
            "name": "244 Riverside",
            "description": "Vesco coadunatio officiis sumptus vivo debilito abduco sophismata quaerat.",
            "latitude": 4.637184044681447,
            "longitude": -74.24475704575258
        },
        {
            "id": 1664303626208629,
            "name": "577 W Grand Avenue",
            "description": "Suffragium curiositas vespillo carpo subseco.",
            "latitude": 4.659345104890844,
            "longitude": -74.29662700156712
        },
        {
            "id": 351524652297166,
            "name": "265 Dickens Circle",
            "description": "Aestus turba crebro thermae saepe vobis quod vilitas.",
            "latitude": 4.708648166939282,
            "longitude": -74.27185509590765
        },
        {
            "id": 1029917800731351,
            "name": "5961 The Mount",
            "description": "Summa angelus suadeo.",
            "latitude": 4.646492139415831,
            "longitude": -74.26826130463644
        },
        {
            "id": 1506760943041362,
            "name": "9912 Myrtice Via",
            "description": "Textus ceno alo caelum commodo.",
            "latitude": 4.623114285228732,
            "longitude": -74.26887551161468
        },
        {
            "id": 2528611411466700,
            "name": "1866 Sandy Springs",
            "description": "Aranea cunctatio vilitas.",
            "latitude": 4.657441730064681,
            "longitude": -74.33331855479531
        },
        {
            "id": 4491204133794818,
            "name": "398 Stella Branch",
            "description": "Sophismata caveo audentia delego necessitatibus derideo.",
            "latitude": 4.695047380175427,
            "longitude": -74.21911125931456
        },
        {
            "id": 3905638775793801,
            "name": "4276 Mollie Groves",
            "description": "Synagoga coaegresco beneficium vilis cruentus.",
            "latitude": 4.665067132479498,
            "longitude": -74.27767704828972
        },
        {
            "id": 8998014437116283,
            "name": "7050 Scotty Via",
            "description": "Ancilla sortitus ipsum.",
            "latitude": 4.53310832510613,
            "longitude": -74.24161046027876
        }
    ]);
    
    const [locationIndex,setLocationIndex]=useState(0);
    const chosedLocation=locations[locationIndex];
    const minLat=Math.min(...locations.map(l=>l.latitude))
    const maxLat=Math.max(...locations.map(l=>l.latitude))

    const minLng =Math.min(...locations.map(i=>i.longitude))
    const maxLng =Math.max(...locations.map(i=>i.longitude))

    function onSubmitPay(e){
        if(orderconirmed)return
       e.preventDefault();
       setOrderConfirmed(true);
       setTimeout(()=>{
        setOrderConfirmed(false)
       },6000)
    }
    return <div className="cart-page">
        <h1 className="font2">cart content</h1>
        <div className="products">{
            cart.map((ietm,i)=>{
                return <div key={i} className="card">
                    <button onClick={()=>{handelRemoveFromCart(ietm.id)}}>x</button>
                    <Link href={""}>
                    <img src={ietm.images[0]} alt="" />
                    </Link>
                    <div className="title">{ietm.title}</div>
                    <div className="count">items :{ietm.count} price :{ietm.price}$</div>
                    <div className="price">total price :{ietm.price*ietm.count}$</div>
                </div>
            })
            }
        </div>
        <div className="total-cost">
            totla price :
            {
               cart.reduce((acc, item) => acc + (item.count * item.price), 0)
            }$
        </div>
        
        <hr/>
        <h1 className="font2">
            Chose your nearest Location:
        </h1>
        <div className="choased-location">
            <h1>
                {chosedLocation.name}
            </h1>
            <h4>
                {chosedLocation.description}
            </h4>
        </div>
        <div className="location">
            {
                locations.map((ietm,i)=>{
                    const x =((ietm.longitude-minLng)/(maxLng-minLng))*100
                    const y =((ietm.latitude-minLat)/(maxLat-minLat))*100
                    return <div  key={i} style={{left:(x+"%"),top:(y+"%")}} onClick={()=>{setLocationIndex(i)}} className="card">
                        {ietm.name}<br/>
                        <small>
                            {ietm.description}
                        </small>
                    </div>
                })
            }
        </div>
        <div className="confirm-order">
            <h1>confirm order</h1>
            <form action="" onSubmit={(e)=>{onSubmitPay(e)}}>
                <label htmlFor=""></label>
                <input placeholder="Visa Card Number" className="main-input" type="number" required />
                <input placeholder="Card Holder Name" className="main-input" type="text" required />
                <input type="text" placeholder="CVV" required />
                <input type="text" placeholder="DATE MM/YY" required />
                <input className="button" type="submit" value="confirm order" />
            </form>
        </div>
        {
            orderconirmed&&(<div className={"noti"}>
                order confirmed 
                <hr/>
                location : {chosedLocation.name}
            </div>)
        }
    </div>
}