import React, { useState } from 'react';
import style from './style.module.scss';
import { Input, Button } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import storage from '../../storage/category.json';

function Filters({ setExpression }) {
    const [navigation, setNavigation] = useState({ category: 'default', priceFrom: '', priceTo: '' });

    function changeFiltersState(event) {
        const { name, value } = event.target;
        setNavigation((prevNavigation) => ({
            ...prevNavigation,
            [name]: value === 'default' ? '' : value,
        }));
    }

    function setDefault() {
        setNavigation({ category: 'default', priceFrom: '', priceTo: '' });
        setExpression({ category: 'default', priceFrom: '', priceTo: '' });
    }

    return (
        <div className={style.wrapper}>
            <div className={style.flex}>
                <h2>Filter</h2>
                <p onClick={setDefault}>Reset everything</p>
            </div>

            <div className={style.category}>
                <h3>Car brand</h3>
                <Input
                    size="lg"
                    name="category"
                    component="select"
                    value={navigation.category}
                    onChange={changeFiltersState}
                    rightSection={<IconChevronDown />}
                >
                    <option value="default">Select car brand</option>
                    {storage.map((el, index) => (
                        <option key={index} value={el.category}>
                            {el.category}
                        </option>
                    ))}
                </Input>
            </div>

            <div className={style.price}>
                <h3>Price</h3>

                <div className={style.selectors}>
                    <Input
                        value={navigation.priceFrom}
                        type="number"
                        size="lg"
                        className={style['search-inp']}
                        placeholder="from"
                        name="priceFrom"
                        onChange={changeFiltersState}
                    />
                    <Input
                        value={navigation.priceTo}
                        type="number"
                        size="lg"
                        className={style['search-inp']}
                        placeholder="to"
                        name="priceTo"
                        onChange={changeFiltersState}
                    />
                </div>
            </div>

            <Button onClick={() => setExpression(navigation)} className={style.btn} size="lg">
                Apply
            </Button>
        </div>
    );
}

export default Filters;