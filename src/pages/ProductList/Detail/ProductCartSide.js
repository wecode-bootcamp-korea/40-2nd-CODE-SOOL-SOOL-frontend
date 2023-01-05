import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProductCartSide = props => {
  const { name, price } = props;
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const onCart = () => {
    //TODO:장바구니 담는 로직(fetch) api 입력
    fetch('http://10.58.52.128:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        quantity: count,
        price: price,
      }),
    }).then(response => {
      if (response.ok === true) {
        if (
          window.confirm('장바구니에 담았습니다. 장바구니로 이동하시겠습니까?')
        ) {
          navigate('/cart');
        } else return;
      }
    });

    const plusCount = () => {
      setCount(prev => prev + 1);
    };

    const minusCount = () => {
      if (setCount === 1) {
        alert('최소 주문수량은 1개 입니다');
      } else {
        setCount(prev => prev - 1);
      }
    };

    return (
      <ProductCartWrap>
        <ProductCart>
          <ProductQuantityWrap>
            수량
            <ProductQuantity>
              <MinusCount onClick={minusCount}>-</MinusCount>
              <Count>{count}</Count>
              <PlusCount onClick={plusCount}>+</PlusCount>
            </ProductQuantity>
          </ProductQuantityWrap>

          <TotalPriceWrap>
            총 상품가격
            <TotalPrice>{[price * count].toLocaleString()}원</TotalPrice>
          </TotalPriceWrap>
          <DeliveryWrap>
            <TruckImg src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5UlEQVR4nO2WO08CQRCAr7IS3AXfj0rtNBYmFuov8E9ZiDiLWtiYWFgbY9AYE+0llnYm1gIz4qvwUdlgBhQPOLg7c5E7Ml8yzc3sbL6dvctZliAIgiAIQvhQhq60oXIHIxeIiO6sRCVExE6np9GVE9GGVpShQqs6ZbCkgPZi6WIy1CKqjUS9EN0mzVMstCLa37qd7hAB/IyZwnR0RKC42Pg6KKD96hXDo8iIWA4kzd2oAvyo1GRwKbIijDaYqvsziKpIYuc5roGeuKZvg+YjK8JowLVqHe6GXkQDLlstSMD9QrWGrsMvYjwE0Et3iBgqd5VIrqMiQJeBiIQFvVWciLwISyjAi0BEgrrnQfTSImLZThHwLLGdH0tAYVwZPG9+OZ3zjhNx6+UxlKGDwfXSEIcyeNiUByo2bc5/lva727ioVd5JxK2X1+hdp4GfPv2pxxGHmnRtcwX4yg/59Bo355xb3i7SrvYv0Z96HHES4UlUJFZven5PEei4OkY8r2xa9yXBrFu+biI+atuhgU6/+xwOZB6GOWpXC+jEcVE88zCpgNDh/iHn3PJ+enkXKc0qg+/NffCDcy0XxtP5KT6x36uEWfvGbnk/vTzLbN7P8IQV4BsHf0DURmHObx9BEARBEATr//kCVytJ9jRTD9UAAAAASUVORK5CYII=" />
            본 양조장 상품 무료배송!
          </DeliveryWrap>
          <GiftButton>
            <GiftImg src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nO2YMU4DMRBFLUDQ0dJSp6WM4Bbbho7O/v8E+ALkDjkAXIKEjgtACkpEhegokIxG8ooVECvNZr3Sf9JI3plx5L/2d6R1rge898fe+8k/+YnV3BgIIZyR/CD5+LtmOatZj6udGOMhgFeSieR5mwdwYTkAb977IzcGSMYs5LaTu8tCrl2tAFiQvIwxHthzCOGE5CfJLwCnFja2nNWsx3ptjs11NUBymt++xTOAWdM0+1mc7cCNRR4vcm1mvZ1506F1uM6bXbcLA/BEcp6f33PYeJ5rbd+6u5NVEGPcA9B0F1qIF5JXvQkg+bDFIqoIAKuSkDSmcLsUsovf/oOEUDuSdLQoj3BUt9ZyLNcvgPuNQkStsPKj5SSE2pGko0V55AfdWtT1m/Q/UkIeoTyS5JES8gjlkSSPlJBHKI8keaREH18FB/mKAmA19GK5OZZbCxFCCFcr3zasvogNJrHhAAAAAElFTkSuQmCC" />
            선물하기
          </GiftButton>

          <CartButton onClick={onCart}>장바구니 담기</CartButton>
        </ProductCart>
      </ProductCartWrap>
    );
  };
};

const ProductCartWrap = styled.div`
  position: sticky;
  top: 10px;
  width: 35%;
  max-height: 100vh;
  padding: 30px 10px;
`;

const ProductCart = styled.div`
  width: 100%;
  max-height: 100vh;
  padding: 30px 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px 0px;
  border-radius: 10px;
  font-weight: bold;
  color: rgb(112, 112, 112);
`;

const ProductQuantityWrap = styled.div`
  display: grid;
  gap: 20px;
`;

const ProductQuantity = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid rgb(224, 224, 224);
  text-align: left;
  font-size: 13px;
`;

const MinusCount = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  width: 30%;
  height: 100%;
  border-right: 1px solid rgb(224, 224, 224);
  cursor: pointer;
  font-size: 30px;
`;

const Count = styled.div``;

const PlusCount = styled(MinusCount)`
  border-left: 1px solid rgb(224, 224, 224);
  cursor: pointer;
`;

const TotalPriceWrap = styled.div``;

const TotalPrice = styled(ProductQuantity)`
  justify-content: center;
`;

const DeliveryWrap = styled(ProductQuantity)`
  justify-content: left;
  padding: 10px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #1189e6;
`;
const TruckImg = styled.img`
  margin-right: 10px;
  width: 25px;
`;
const CartButton = styled.button`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  width: 100%;
  height: 55px;
  background-color: #0697f3;
  border-radius: 7px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const GiftButton = styled(CartButton)`
  margin-bottom: 20px;
  background-color: white;
  border: 1px solid #b2b2b2;
  color: #707070;
`;

const GiftImg = styled(TruckImg)``;

export default ProductCartSide;
