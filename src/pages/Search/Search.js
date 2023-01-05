import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchItem from './component/SearchItem/searchItem';

const Search = () => {
  const [productList, setProductList] = useState([]);
  const [inputWord, setInputWord] = useState(''); //inputvalue 저장

  const inputLength = inputWord.length;

  const inputWordSearch = e => {
    setInputWord(e.target.value);
  }; //inputvalue 저장

  const filteredItem = productList.filter(alcohol =>
    alcohol.name.toLowerCase().includes(inputWord.toLocaleLowerCase())
  );

  useEffect(() => {
    fetch(`http://10.58.52.56.:3000/products/name?productName=${inputWord}`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <SearchMain>
      <SearchBoxStyle>
        <SearchInput
          onChange={inputWordSearch}
          type="search"
          placeholder="🔍 무엇을 찾고 계신가요?"
        />
        <SearchInputButton>검색</SearchInputButton>
        <SearchInputRemoveButton>취소</SearchInputRemoveButton>
      </SearchBoxStyle>
      <ProductItemListUl>
        {inputLength === 0 ? (
          <SearchItem />
        ) : (
          filteredItem.map(product => (
            <Link key={product.id} to={`/productdetail/${product.id}`}>
              <ProductItemList key={product.productName}>
                {product.name}
              </ProductItemList>
            </Link>
          ))
        )}
      </ProductItemListUl>
    </SearchMain>
  );
};

const SearchMain = styled.div`
  height: 100%;
  margin-bottom: 150px;
`;

const SearchBoxStyle = styled.div`
  max-width: 1144px;
  display: flex;
  text-align: center;
  margin: 20px auto 0px;
  padding: 0px 69px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: rgb(242, 242, 242);
  border: none;
  border-radius: 6px;
  color: rgb(62, 62, 62);
  padding: 0px 7px 0px 16px;
  font-size: 14px;
  outline: none;
`;

const SearchInputButton = styled.button`
  border: none;
  color: #0097f3;
  background-color: white;
  margin-left: 14px;
  white-space: nowrap;
  cursor: pointer;
`;

const SearchInputRemoveButton = styled.button`
  border: none;
  color: #0097f3;
  background-color: white;
  margin-left: 14px;
  white-space: nowrap;
  cursor: pointer;
`;

const ProductItemListUl = styled.ul`
  max-width: 1144px;
  padding: 0px 69px 0px 69px;
  margin: 20px auto 0px auto;
`;

const ProductItemList = styled.li`
  margin-top: 5px;
  color: #707070;
  font-size: 15px;
`;

export default Search;
