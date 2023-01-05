import React from 'react';
import styled from 'styled-components';

const CartReceipt = props => {
  const { totalSumPrice } = props;
  return (
    <CartReceiptWrap>
      <CartReceiptBox>
        <CartReceiptTitle>계산서</CartReceiptTitle>
        <ReceiptPriceWrap>
          <ReceiptTitles>
            총 상품금액 <br />
            <br /> 총 배송비
          </ReceiptTitles>
          <ReceiptPrice>
            {totalSumPrice.toLocaleString()}원 <br />
            <br /> 무료 배송
          </ReceiptPrice>
        </ReceiptPriceWrap>
        <ReceiptButton>구매하기</ReceiptButton>
      </CartReceiptBox>
    </CartReceiptWrap>
  );
};

const CartReceiptWrap = styled.div`
  position: sticky;
  top: 100px;
  width: 100%;
  max-height: 100vh;
  padding: 0px 10px;
`;
const CartReceiptBox = styled.div`
  width: 100%;
  max-height: 100vh;
  padding: 40px 20px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px 0px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  color: rgb(112, 112, 112);
`;

const CartReceiptTitle = styled.div`
  color: #4c4c4c;
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
  font-size: 18px;
`;

const ReceiptPriceWrap = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  padding: 20px 0px;
`;

const ReceiptTitles = styled.div``;
const ReceiptPrice = styled.div``;
const ReceiptButton = styled.button`
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

export default CartReceipt;
