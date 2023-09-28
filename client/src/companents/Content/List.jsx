import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Pagination } from '@mantine/core';
import Item from './Item';
import storage from '../../storage/storage.json';

function List({ searchString, expression }) {
  const pageSize = useRef(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredStorage, setFilteredStorage] = useState(storage);

  const filterHeader = useCallback(() => {
    if (!searchString && expression.category === 'default' && !expression.priceFrom && !expression.priceTo) {
      return storage;
    }

    return storage.filter(
      ({ header, category, price }) =>
        header.toLowerCase().includes(searchString.toLowerCase()) &&
        (expression.industry === 'default' || category === expression.industry) &&
        (!expression.priceFrom || price.split(' ')[2] >= expression.priceFrom) &&
        (!expression.priceTo || price.split(' ')[2] <= expression.priceTo)
    );
  }, [searchString, expression]);

  useEffect(() => {
    setFilteredStorage(filterHeader());
  }, [searchString, expression, filterHeader]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredStorage, searchString, expression]);

  const paginatedList = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize.current;
    const endIndex = startIndex + pageSize.current;
    return filteredStorage.slice(startIndex, endIndex);
  }, [filteredStorage, currentPage]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div>
      {paginatedList.map((el, index) => (
        <Item key={index} headerItem={el} />
      ))}

      <Pagination total={Math.ceil(filteredStorage.length / pageSize.current)} value={currentPage} onChange={handlePageChange} position="center" />
    </div>
  );
}

export default List;