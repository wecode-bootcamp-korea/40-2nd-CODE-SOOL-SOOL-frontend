import React from 'react';
import styled from 'styled-components';

const ProductInfo = props => {
  const { name, price, description, producttypeId, capacity, imageUrl } = props;

  return (
    <Detail>
      <ProductInfoWrap>
        <ProductInfoImg>
          <ProductImg src={imageUrl} alt={name} />
        </ProductInfoImg>
        <ProductInfoText>
          <ProductInfoName>{name}</ProductInfoName>
          <ProductInfoDescription>
            {description} #특별한 날에 한잔
          </ProductInfoDescription>
          <ProductInfoRating>
            <Rating src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
            <Rating src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
            <Rating src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
            <Rating src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
            <Rating src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
          </ProductInfoRating>
          <ProductInfoType>주종 : {producttypeId}</ProductInfoType>
          <ProductInfoCapacity>용량 : {capacity}</ProductInfoCapacity>
          <ProductInfoPrice>
            판매가격:
            <ProductPrice>{price}</ProductPrice>
          </ProductInfoPrice>
          <ProductManual>
            유통기한 : 제조일로부터 30일
            <br />
            <br />
            보관방법 : 냉장보관
          </ProductManual>
        </ProductInfoText>
      </ProductInfoWrap>

      <ProductDescriptionImg>
        <DescriptionImg src="https://velog.velcdn.com/images/dbakkerus/post/e2e93370-ceb5-4846-ac52-5a762081a191/image.png" />
      </ProductDescriptionImg>
    </Detail>
  );
};

const Detail = styled.div``;

const ProductDescriptionImg = styled.div`
  width: 100%;
  min-height: 100%;
  padding-right: 30px;
`;

const DescriptionImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const ProductInfoImg = styled.div`
  width: 330px;
  height: 410px;
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;
const ProductInfoText = styled.div`
  padding: 30px;
`;
const ProductInfoName = styled.div`
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: 30px;
  color: #8b8b8b;
`;
const ProductInfoDescription = styled.div`
  margin-bottom: 10px;
  font-weight: bolder;
  font-size: 22px;
  color: rgb(255, 186, 0);
`;

const ProductInfoRating = styled.ul`
  margin-top: 10px;
  margin-bottom: 35px;
`;

const Rating = styled.img`
  width: 30px;
  margin-right: 5px;
`;

const ProductInfoCapacity = styled.div`
  margin-bottom: 50px;
  font-weight: bolder;
  color: #898989;
`;
const ProductInfoPrice = styled(ProductInfoCapacity)`
  font-weight: bolder;
  color: #757575;
`;
const ProductPrice = styled.div`
  margin-top: 10px;
  font-size: 35px;
`;
const ProductInfoType = styled(ProductInfoCapacity)`
  margin-bottom: 10px;
`;

const ProductManual = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #0697f3;
`;

export default ProductInfo;
