import Header from "../../companents/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Button } from '@mantine/core';
// import style from './style.module.scss'
 import { useGetAllProductsQuery } from "../../service/serviceProduct";

function ProductPage() {

    
    const { _id } = useParams()
    const  {all } = useGetAllProductsQuery();
    const [data, setData] = useState({})


    useEffect(() => {
        const result = all.filter(elem => elem._id == _id)
    //     console.log(result);
    //     setData(result[0])
    }, [])


    return (
        <div>
            <Header/>
          
            {/* <div className={style.item}>
                <div className={style.img}></div>
                <h2>{data.header}</h2>
                
                    <p>price</p>
                    <p>{data.price}</p>
                </div>
                <div className={style.flex}>
                    <Button variant="default">Details</Button>
                    <Button variant="filled">Add to Cart</Button>
                </div> */}
            </div>
      
    )
}

export default ProductPage;