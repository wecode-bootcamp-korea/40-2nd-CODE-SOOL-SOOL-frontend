import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import CartReceipt from './CartReceipt';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const accessToken = localStorage.getItem('token') ?? '';

  const totalSumPrice = cartList.reduce(
    (sum, current) => sum + current.price * current.quantity,
    0
  );

  const itemPlusCount = id => {
    const next = cartList.map(cartItem => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartList(next);
  };

  const itemMinusCount = id => {
    const next = cartList.map(cartItem => {
      if (cartItem.id === id) {
        if (cartItem.quantity === 1) {
          return { ...cartItem, quantity: 1 };
        } else {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
      }
      return cartItem;
    });
    setCartList(next);
  };

  const getCartData = () => {
    const data = fetch(`/data/purchase.json`, {
      method: 'GET',
      headers: { authorization: accessToken },
    })
      .then(response => response.json())
      .then(res => setCartList(res));
  };
  useEffect(() => {
    getCartData();
  }, []);

  //TODO:삭제 api 입력
  const deleteItem = id => {
    fetch(`/carts/${id}`, {
      method: 'DELETE',
      headers: {
        // authorization: accessToken,
      },
    }).then(res => {
      if (res.status === 204) {
        alert('상품이 장바구니에서 삭제되었습니다');
        setCartList(cartList.filter(cartList => id !== cartList.cartId));
      } else {
        alert('다시 시도해주세요');
      }
    });
  };

  return (
    <CartPageWrap>
      <CartWrap>
        <CartTopSide>
          <CartBar>
            <CheckAll>
              <CheckAllButton type="checkbox" defaultChecked />
              <CheckText>
                모두 선택 ({cartList.length}/{cartList.length})
              </CheckText>
            </CheckAll>
            <CheckOne>
              <CheckOneButton>선택삭제</CheckOneButton>
            </CheckOne>
          </CartBar>
          <div />
        </CartTopSide>

        <CartLeftSide>
          <ListHeader>
            담화배송{' '}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVR4nMVVzUrDQBDOzb8HEEGameAjqVfrxYN9gz6B9NajOEPBm/E1vFj0BQR3WkFELeJZD5VpoiTprtlolw6EJbs73zczOz9RtAwBw/vBwLceT9dB6GXz6XwjCIFaj8JTNLQXhkDockYgnC4MVMOiFisoCH8oQb6muq/nNj0UOq4FVwAQfs2ttn6g55WQtcacgOFPXYN4gMK93IBeLUFFMc0U6cJ1Z/shXUNDkywZ+M0VQjtB5skU73nXdScRPiyGMBZqN62D59/qAISGpXcydOtN8O1FdS+WwapaOgf+kwg01HO914isNeYEhU/qMq2Qce8o1PfKLhxxR1PRB3iOSPVG3FmuB0XZueuvzIrS8JXD4hswfOSVsnXtGioPDcLX0SLbdSzULlt/duANjkLdvJK7LnfLlUwT/f9T07M1uX/1Il8PGnfTomjsfUcm+swDq2KocRlCvgDrfawzaHmVXgAAAABJRU5ErkJggg==" />
          </ListHeader>
          <CartItemList>
            {cartList.map(cart => (
              <CartItem
                // cartQuantity={cartQuantity}
                itemPlusCount={itemPlusCount}
                itemMinusCount={itemMinusCount}
                key={cart.id}
                {...cart}
                deleteItem={deleteItem}
              />
            ))}
          </CartItemList>
        </CartLeftSide>
        <CartRightSide>
          <CartReceipt
            key={cartList.id}
            price={cartList.price}
            totalSumPrice={totalSumPrice}
            quan
          />
        </CartRightSide>
      </CartWrap>
    </CartPageWrap>
  );
};

const CartPageWrap = styled.div`
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const CartWrap = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1024px;
  height: 100%;
  padding: 20px;
  margin: 30px;
`;

const CartTopSide = styled.div`
  grid-column: 1 / 3;
`;
const CartLeftSide = styled.div`
  background-color: rgb(255, 255, 255);
  width: 590px;
  min-height: 100%;
  padding: 30px 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 3px 0px;
  border-radius: 10px;
`;

const ListHeader = styled.div`
  color: #21df9d;
  font-size: 18px;
  font-weight: bolder;
  padding: 0px 0px 20px 10px;
  border-bottom: 1px solid grey;
`;

const CartItemList = styled.ul``;

const CartRightSide = styled.div``;

const CartBar = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  width: 590px;
  padding: 10px;
`;

const CheckAll = styled.div`
  display: flex;
  align-items: center;
`;

const CheckAllButton = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const CheckText = styled.span`
  margin-left: 10px;
  color: #6f6f6f;
`;

const CheckOne = styled.div``;

const CheckOneButton = styled.button`
  appearance: none;
  border: 0px;
  background-color: transparent;
  color: rgb(0, 151, 243);
  font-size: 14px;
  cursor: pointer;
`;

export default Cart;
