import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductInfoSide from './ProductInfoSide';
import ProductCartSide from './ProductCartSide';

const ProductDetail = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`/data/ProductOne.json`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setProductData(data));
  }, []);

  return (
    <DetailWrap>
      <ProductDetailWrap>
        <ProductInfoSide
          name={productData.name}
          price={productData.price}
          description={productData.description}
          capacity={productData.capacity}
          producttypeId={productData.producttypeId}
          imageUrl={productData.imageUrl}
        />
        <ProductCartSide name={productData.name} price={productData.price} />
      </ProductDetailWrap>
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  padding: 20px;
  margin: 30px;
`;

const ProductDetailWrap = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 20px;
  width: 1160px;
  height: 100%;
`;

export default ProductDetail;
