import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { Button } from '@mantine/core';
import { useState } from 'react';
// import Basket from '../Basket/Basket';

function Header() {
    const [cartOpen, setCartOpen] = useState(false)

    
    return (
        <div className={style.wrapper}>
            <h1>Shopy</h1>
            <div className={style.btns}>
                <Button variant="filled" radius="xl"><Link to={'/shopy'}>Multiplays</Link ></Button>
                <Button variant="default" radius="xl"><Link to={'/shopy/:id'}>Your Product</Link ></Button>
                {/* <Basket/> */}
            </div>
            <Button onClick={() => setCartOpen(cartOpen = !cartOpen)} variant="filled" radius="xl" className={style.shopCartButton}>Cart</Button>
            {/* <Button onClick={()=>setCartOpen(cartOpen=!cartOpen)} variant="filled" radius="xl" className={`shopCartButton ${cartOpen &&'active'}`} >Cart</Button> */}
            {cartOpen && (<div className={style.shopCart}></div>)}
        </div >
    )
}

export default Header;