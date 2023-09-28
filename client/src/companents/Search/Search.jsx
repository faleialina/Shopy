import React, { useState } from 'react';
import { Input, Button } from '@mantine/core';
import style from './style.module.scss';
import { IconSearch } from '@tabler/icons-react';
import data from '../../Storage/category.json'
import { useEffect } from 'react';

const filterCars = (inputText, listOfCars) => {
  if (!inputText) { return listOfCars }
  return listOfCars.filter(({ category }) =>
    category.toLowerCase().includes(inputText.toLowerCase()))
}




function Search() {
  const [input, setInput] = useState('');
  const [categoryItem, setcategoryItem] = useState(data);


  useEffect(() => {
    const Debounse = setTimeout(() => {
      const filteredCars = filterCars(input, data)
      setcategoryItem(filteredCars)
    }, 300);
    return () => clearTimeout(Debounse);
  }, [input])

  return (
    <div className={style.wrapper}>
      <Input
        value={input}
        size="xl"
        className={style.searchInp}
        icon={<IconSearch />}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Your vacancy"
        rightSection={
          <Button onClick={() => setcategoryItem(input)} className={style.searchBtn}>
            Поиск
          </Button>
        }

      />
      <ul>{categoryItem.map((category, index) => {
        return <li key={index}></li>
      })}</ul>
    </div>
  );
}

export default Search;