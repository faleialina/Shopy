import { Button } from '@mantine/core';
import { Select } from '@mantine/core';
import { Link } from 'react-router-dom';
import style from './style.module.scss'
import Header from "../../companents/Header/Header";
import array from '../../Storage/Storage.json'
import Filters from '../../companents/Filters/Filters';
import Search from '../../companents/Search/Search';


function ShopyPage() {
    // const [searchString, setSearchString] = useState('');
    // const [expression, setExpression] = useState({ category: 'default', priceFrom: '', priceTo: '' });

    const result = array.map(elem => <Link to={`/shopy/${elem.id}`}><div className={style.item}>
        <div className={style.img}></div>
        <h2>{elem.header}</h2>
        <p>{elem.model}</p>
        <p>{elem.BodyType}</p>
        <p>{elem.motor}</p>
        <div className={style.flex}>
            <p>price</p>
            <p>{elem.price}</p>
        </div>
        <div className={style.flex}>
            <Button variant="default">All details</Button>
            <Button variant="filled">Add to Cart</Button>
            {/* onClick={doAdd} */}
        </div>
    </div></Link>)


    return (
        <div>
            <Header />
            <Search />
            {/*setSearchString={setSearchString} */}
            {/* <List expression={expression} searchString={searchString} /> */}
            <div className={style.block}>

                <Filters />
                {/* setExpression={setExpression}  */}
                <div className={style.itemBox}>{result}</div>
            </div>

        </div>


    )
}

export default ShopyPage;