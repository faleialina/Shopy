import { Button } from '@mantine/core';
import { Select } from '@mantine/core';
import { Link } from 'react-router-dom';
import style from './style.module.scss'
import Header from "../../companents/Header/Header";

import Filters from '../../companents/Filters/Filters';
import Search from '../../companents/Search/Search';
import { useGetAllProductsQuery } from '../../service/serviceProduct';


function ShopyPage() {
    // const [searchString, setSearchString] = useState('');
    // const [expression, setExpression] = useState({ category: 'default', priceFrom: '', priceTo: '' });

    const { data } = useGetAllProductsQuery();
   
    

    return (
        <div>
            <Header />
            <Search />
            {/*setSearchString={setSearchString} */}
            {/* <List expression={expression} searchString={searchString} /> */}
            <div className={style.block}>

                <Filters />
                {/* setExpression={setExpression}  */}
              <div className={style.itemBox}>
                    {data?.map((elem, index) => (
                        <div key={index} className={style.item}>
                            <div className={style.img}></div>
                            <h2>{elem.header}</h2>
                            <div className={style.flex}>
                                <p>price</p>
                                <p>{elem.price}</p>
                            </div>
                            <div className={style.flex}>
                               <Link to={`/shopy/${elem._id}`}>  <Button variant="default" >All details</Button></Link> 
                                <Button variant="filled">Add to Cart</Button>
                                {/* onClick={doAdd} */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>


    )


}

export default ShopyPage;