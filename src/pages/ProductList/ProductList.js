import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FILTER_DATA } from './Filter/filterData';
import Product from './Components/Product';
import Header from './Components/Header';
import Filter from './Filter/Filter';
import styled from 'styled-components';

function ProductList() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [currentOpt, setCurrentOpt] = useState();

  // const { value, id } = useParams();
  useEffect(() => {
    fetch('/data/product.json')
      .then(res => res.json())
      .then(res => {
        setProducts(res);
      });
  }, []);
  const urlValue = searchParams.get(currentOpt);

  useEffect(() => {
    fetch(`http://10.14.1.213:8000/produts/listing?${currentOpt}=${urlValue}`)
      .then(res => res.json())
      .then(res => setProducts(res.getProducts));
  }, []);

  return (
    <>
      <Header />
      <FilterWrap>
        {/* TODO: 실제 서버에서 받아오는 데이터 넣기*/}
        {/* {filterData.map(info => {
          const isCurrent = info.name === currentOpt;

          return (
            <Filter
              key={info.id}
              name={info.name}
              isCurrent={isCurrent}
              sortFilter={sortFilter}
              handleClick={() => setCurrentOpt(isCurrent ? '' : info.name)}
            />
          );
        })} */}

        {FILTER_DATA.map(info => {
          return (
            <Filter
              key={info.id}
              name={info.name}
              englishName={info.englishName}
              options={info.options}
              // handleClick={() => setCurrentOpt(isCurrent ? '' : info.name)}
            />
          );
        })}
      </FilterWrap>

      <Line />
      <ProductListBar>
        <ProductTotal>
          <ProductTotalNumber>{products.length}</ProductTotalNumber>
          건의 결과가 있어요
        </ProductTotal>

        <SelectWrap>
          <Select>
            <option value="newProduct">신상품</option>
            <option value="highPriceProduct">높은가격</option>
            <option value="lowPriceProduct">낮은가격</option>
            <option value="bestProduct">인기상품</option>
          </Select>
          <SelectIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmUlEQVR4nO2TUQqAIBBEu//F1H9B/fQArgcQ3RghKChso6AP59Md5+mgC3+sZQJGmhX9uKJSCscYubV2uRkzeOAVA6y1rJRi7/0pBGuYwQOvGJBzZmNMD3DOca31EB5C6DOtNaeU5IArSBOEDwEQEfWgra6tFqxh9soryrub3D25CLCHSMLF/4CIbtXyGPBEEzDUrGiozytaAa144ou37/mzAAAAAElFTkSuQmCC" />
        </SelectWrap>
      </ProductListBar>
      <ProductCardWrap>
        {products &&
          products.map(product => {
            return (
              <li key={product.id}>
                <Product
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  alcohol={product.alcohol}
                  sparklingID={product.sparklingID}
                  imageUrl={product.imageUrl}
                />
              </li>
            );
          })}
      </ProductCardWrap>
    </>
  );
}

const Line = styled.div`
  border-top: 10px solid #fff2f5;
`;

const ProductListBar = styled.div`
  font-size: 13px;
  width: 100%;
  margin: 30px auto;
  padding: 0px;
  align-items: center;
  color: rgb(62, 62, 62);
  position: relative;
  display: flex;
  max-width: 1144px;
  height: 50px;
  justify-content: space-between;
`;

const ProductTotal = styled.div`
  display: flex;
`;

const ProductTotalNumber = styled.p`
  font-size: 15px;
  font-weight: bolder;
`;

const SelectWrap = styled.div`
  align-items: flex-end;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.5em;
`;

const Select = styled.select`
  color: #7d7d7d;
  appearance: none;
  border-radius: 0px;
  cursor: pointer;
  font: inherit;
  border: 0px;
  box-sizing: content-box;
  background: none;
  width: 60px;
  height: 1.5em;
  &:focus {
    outline: none;
  }
`;

const SelectIcon = styled.img`
  position: absolute;
  right: 0px;
  top: calc(43% - 0.5em);
  width: 18px;
  height: 18px;
`;

const ProductCardWrap = styled.ul`
  padding: 30px;
  max-width: 1144px;
  margin: 30px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;
const FilterWrap = styled.ul`
  display: grid;
  align-content: center;
  grid-gap: 1px;
  grid-template-columns: repeat(6, 1fr);
  max-width: 1144px;
  height: 120px;
  justify-content: space-between;
  margin: 30px auto;
  padding: 32px 40px;
  border-radius: 10px;
  color: rgb(112, 112, 112);
  text-align: left;
  display: grid;
`;

export default ProductList;
