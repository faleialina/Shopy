import Header from "../../companents/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from '@mantine/core';
import array from '../../Storage/Storage.json'
import style from './style.module.scss'

function ProductPage() {
    const { id } = useParams()
    const [data, setData] = useState({})


    useEffect(() => {
        const result = array.filter(elem => elem.id == id)
        console.log(result);
        setData(result[0])
    }, [])


    return (
        <div>
            <Header />
            <div className={style.item}>
                <div className={style.img}></div>
                <h2>{data.header}</h2>
                <p>{data.model}</p>
                <p>{data.BodyType}</p>
                <p>{data.motor}</p>
                <div className={style.flex}>
                    <p>price</p>
                    <p>{data.price}</p>
                </div>
                <div className={style.flex}>
                    <Button variant="default">Details</Button>
                    <Button variant="filled">Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;