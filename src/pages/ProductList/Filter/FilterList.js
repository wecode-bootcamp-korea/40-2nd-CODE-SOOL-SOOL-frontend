import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import styled from 'styled-components';

function FilterList() {
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetch('/data/filter.json')
      .then(res => res.json())
      .then(res => {
        setFilterList(res);
      });
  }, []);

  return (
    <FilterListWrap>
      {filterList &&
        filterList.map(filter => {
          return (
            <li key={filter.id}>
              <Filter
                key={filter.id}
                name={filter.name}
                option={filter.option}
              />
            </li>
          );
        })}
    </FilterListWrap>
  );
}

const FilterListWrap = styled.ul`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
  align-content: center;
  max-width: 1144px;
  height: 120px;
  margin: 30px auto;
  padding: 32px 40px;
  border-radius: 10px;
  color: rgb(112, 112, 112);
  text-align: left;
`;

export default FilterList;
