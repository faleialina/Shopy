import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

function Item({ headerItem }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const found = favorites.find(({ id }) => id === headerItem.id);
    setIsSaved(!!found);
  }, [headerItem.id]);

  const handleSaveToggle = () => {
    if (isSaved) {
      removeFromFavorites(headerItem.id);
    } else {
      addToFavorites(headerItem);
    }
  };

  const addToFavorites = (item) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = [...favorites, item];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsSaved(true);
  };

  const removeFromFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsSaved(false);
  };

  return (
    <div className={style['wrapper']}>
      <div className={style['item']}>
        <Link to={`/shopy/${headerItem.id}`}>
          <div className={style['content']}>
            <h2 className={style['vacancy-h']}>{headerItem.header}</h2>

            <div className={style['flex']}>
              <p className={style['salary']}>{headerItem.price}</p>
              <p>{headerItem.model}</p>
            </div>

            <div className={style['location']}>
              {/* <div className={style['img']}> </div> */}
              <p>{headerItem.motor}</p>
            </div>
          </div>
        </Link>

        <div onClick={handleSaveToggle} className={style[isSaved ? 'save' : 'dsave']}></div>
      </div>
    </div>
  );
}

export default Item;