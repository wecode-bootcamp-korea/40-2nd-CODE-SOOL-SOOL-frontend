import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Product(props) {
  const { id, name, description, price, imageUrl } = props;

  const productPrice = Number(price).toLocaleString();

  return (
    <ProductCard>
      <ProductImage src={imageUrl} alt={name} />
      {/* // <Link to={`/productdetail/${id}`}/> */}
      <ProductCardInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>{productPrice}원</ProductPrice>
        <PickRate>
          <StarImage src="https://www.sooldamhwa.com/images/components/atoms/star.png" />
          4.6 | 리뷰 7782
        </PickRate>
        <Description>{description}</Description>
      </ProductCardInfo>
    </ProductCard>
  );
}

const ProductCard = styled.div`
  color: rgb(112, 112, 112);
  text-align: left;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  margin: auto;
  border-radius: 10px; ;
`;
const ProductCardInfo = styled.div`
  margin-top: 20px;
`;

const ProductName = styled.div`
  color: rgb(62, 62, 62);
  line-height: 1.2;
  font-size: 16px;
  font-weight: bold;
`;
const ProductPrice = styled(ProductName)`
  margin-top: 10px;
  font-weight: bolder;
  font-size: 14px;
`;

const StarImage = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`;

const PickRate = styled.div`
  display: flex;
  align-items: flex-end;
  height: 17.5px;
  color: #858585;
  font-size: 12px;
  font-weight: 500;
`;

const Description = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid;
  border-color: #f1f1f1;
  font-size: 16px;
  font-weight: normal;
`;

export default Product;
