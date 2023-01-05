import React, { useState } from 'react';
import styled from 'styled-components';

const CartItem = props => {
  const {
    id,
    name,
    price,
    capacity,
    imageUrl,
    deleteItem,
    itemPlusCount,
    itemMinusCount,
    quantity,
    cartQuantity,
  } = props;

  const [cartItemCount, setCartItemCount] = useState(quantity);

  // const itemPlusCount = () => {
  //   setCartItemCount(prev => prev + 1);
  // };

  // const itemMinusCount = () => {
  //   if (setCartItemCount === 1) {
  //     alert('최소 주문수량은 1개 입니다');
  //   } else {
  //     setCartItemCount(prev => prev - 1);
  //   }
  // };

  return (
    <CartItemWrap>
      <CartItemCheckWrap>
        <CartItemCheck type="checkbox" defaultChecked />
      </CartItemCheckWrap>

      <CartItemBox>
        <CartItemInfo>
          <CartItemImage>
            <ItemImg src={imageUrl} alt={name} />
          </CartItemImage>
          <CartItemDelete>
            <CartItemName>{name}</CartItemName>
            <DeleteButton onClick={e => deleteItem(id)}>X</DeleteButton>
          </CartItemDelete>
          <ItemCapacityBox>
            <CartItemCapacity>
              [{capacity}] {name}
            </CartItemCapacity>
            <CapacityIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVR4nO3UTQqDMBCG4VzCUk87fB/JxXRVq5tm0eNUAsFFKGr+dvOC6CbzMItojKZpWqtITiRXEXnUzgozSG4A5jvwQvJH0tfgEfVhFoDX5QHn3ADgE/GvtXbMRdMZIvIsOpiDF6M1eDVagjdDc/Dm6B28G3qGd0f/3c34Pr5b/HBOS7bsu2la2A7AOzzdN9U0TTNJO7RJ1rMQcB7JAAAAAElFTkSuQmCC" />
          </ItemCapacityBox>
        </CartItemInfo>

        <QuantityWrap>
          <CartItemQuantity>
            <ItemMinusCount onClick={() => itemMinusCount(id)}>
              -
            </ItemMinusCount>
            <Count>{quantity}</Count>
            <ItemPlusCount onClick={() => itemPlusCount(id)}>+</ItemPlusCount>
          </CartItemQuantity>
          <EachCartItemPrice>
            <EachTotalPrice>
              {(price * quantity).toLocaleString()}원
            </EachTotalPrice>
          </EachCartItemPrice>
        </QuantityWrap>
      </CartItemBox>
    </CartItemWrap>
  );
};

//카트 체크박스 (좌))
const CartItemWrap = styled.div`
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  margin-top: 15px;
`;
const CartItemCheckWrap = styled.div``;
const CartItemCheck = styled.input`
  margin-top: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const CartItemBox = styled.div`
  width: 100%;
  display: grid;
`;

//카트 아이템 사진 및 정보(우-상단)
const CartItemInfo = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

const CartItemImage = styled.div`
  grid-row: span 2 / auto;
  width: 80px;
  height: 99px;
  margin: 10px;
  border-radius: 17px;
  overflow: hidden;
`;

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CartItemDelete = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  margin-top: 20px;
  grid-column: 2 / 2;
  font-size: 18px;
  font-weight: bolder;
`;

const CartItemName = styled.p``;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ItemCapacityBox = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  height: 40px;
  grid-column: 2 / 2;
  margin-top: 30px;
  padding: 14px 0px 0px 10px;
  background-color: #f4f4f4;
  border-radius: 8px; ;
`;

const CapacityIcon = styled.img`
  width: 26px;
  padding: 0px 8px 5px 0px;
`;

const CartItemCapacity = styled.p`
  height: 27px;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  color: #828282;
`;

//수량 조정 및 총가격(우-하단)
//1-수량조정 버튼
const QuantityWrap = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  width: 100%;
`;
const CartItemQuantity = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  width: 110px;
  height: 30px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid rgb(224, 224, 224);
  font-size: 13px;
`;
const ItemMinusCount = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  width: 30px;
  height: 100%;
  border-right: 1px solid rgb(224, 224, 224);
  cursor: pointer;
  font-size: 30px;
  color: #8f8f8f;
`;
const ItemPlusCount = styled(ItemMinusCount)`
  border-left: 1px solid rgb(224, 224, 224);
  cursor: pointer;
`;
const Count = styled.p``;

//수량 조정 및 총가격(우-하단)
//2-가격합산
const EachCartItemPrice = styled.div``;
const EachTotalPrice = styled.p`
  color: #505050;
`;

export default CartItem;
