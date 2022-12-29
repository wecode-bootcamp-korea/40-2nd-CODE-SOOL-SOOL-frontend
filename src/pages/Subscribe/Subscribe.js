import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Subscribe = () => {
  const { pathname } = useLocation();
  const navigete = useNavigate();

  const [userInfo, setUserInfo] = useState({
    index: 1,
    name: '',
    address: '',
  });

  const getUserInfo = ({ target }) => {
    setUserInfo({ ...userInfo, [target.name]: target.value });
  };
  const PRICE = 39000;

  const puchaseNotice = e => {
    window.confirm(`${e.target.innerHTML}로 결제하시겠습니까?`)
      ? alert('결제가 완료되었습니다.')
      : alert('결제가 취소되었습니다.');
  };

  const totalPrice = PRICE * userInfo.index;

  const goToBack = () => {
    navigete(-1);
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  const submitSubscribe = e => {
    fetch('http://10.58.52.213:3000/subscribe/user', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        quantity: userInfo.index,
        name: userInfo.name,
        address: userInfo.address,
        totalPrice: totalPrice,
      }),
    });

    alert('구독을 완료했습니다');
    navigete('/');
  };

  let token = localStorage.getItem('token') || '';

  return (
    <div>
      <Backbutton onClick={goToBack}>뒤로가기</Backbutton>
      <SubscribeTitle>매월 몇 개의 담아박스가 필요하세요?</SubscribeTitle>
      <SubscribeTitleBox>
        <SubscribeTitleImage
          src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
          alt="담아박스 이미지"
        />
        <RigntTextWapper>
          <p>담아박스</p>
          <SelectBox>
            <SelectBoxIcon>x</SelectBoxIcon>
            <SelectBoxList
              value={userInfo.index}
              name="index"
              onChange={getUserInfo}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </SelectBoxList>
          </SelectBox>
          <RigntTextSecondText>
            매월 <span>{totalPrice.toLocaleString()}</span>원
          </RigntTextSecondText>
          <RigntTextDetailText>
            매월 셋째주 월요일마다 자동결제돼요!
          </RigntTextDetailText>
        </RigntTextWapper>
      </SubscribeTitleBox>
      <AddressBoxWapper>
        <AddressPlusBox>
          <AddressPlusBoxTitle>구독 배송지를 선택해주세요</AddressPlusBoxTitle>
          <AddressPlusBoxButton>배송지 추가</AddressPlusBoxButton>
        </AddressPlusBox>
        <AddressInfoBox>
          <AddressInfo>
            <AddressInfoInput
              onChange={getUserInfo}
              name="name"
              placeholder="이름"
              value={userInfo.name}
            />
            <AddressInfoInput type="text" placeholder="전화번호" />
            <AddressInfoInput
              onChange={getUserInfo}
              name="address"
              type="text"
              placeholder="주소"
            />
          </AddressInfo>
          <AddressInfoActionBox>
            <p>
              선택
              <input type="checkBox" />
            </p>
            <AddressInfoAditButton>수정</AddressInfoAditButton>
          </AddressInfoActionBox>
        </AddressInfoBox>
      </AddressBoxWapper>
      <PayBox>
        <PayTitle>결제방법</PayTitle>
        <PayNaverButton onClick={puchaseNotice}>네이버페이</PayNaverButton>
        <PayKakaoButton onClick={puchaseNotice}>카카오페이</PayKakaoButton>
        <PayCardButton onClick={puchaseNotice}>신용카드</PayCardButton>
      </PayBox>
      <SubmitButtonBox>
        <SubmitButton onClick={submitSubscribe}>구독하기</SubmitButton>
      </SubmitButtonBox>
    </div>
  );
};

const Backbutton = styled.button`
  width: 100px;
  height: 40px;
  margin: 20px auto;
  margin-top: 50px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: rgb(255, 186, 0);
  cursor: pointer;
  border-radius: 10px;
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
`;

const SubscribeTitle = styled.p`
  color: #ffba00;
  text-align: center;
  margin-top: 30px;
`;

const SubscribeTitleBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  padding: 137px 0px 90px;
`;

const SubscribeTitleImage = styled.img`
  width: 181px;
  margin-right: 86px;
`;

const RigntTextWapper = styled.div`
  ${({ theme }) => theme.mixin.flex('column', 'center', 'flex-end')};
`;

const SelectBox = styled.div`
  margin-top: 14px;
`;

const SelectBoxIcon = styled.span`
  color: #b2b2b2;
  font-size: 13px;
  margin: 10px 10px 0px 0px;
`;

const SelectBoxList = styled.select`
  font-size: 15px;
  width: 70px;
  text-align: right;
  color: #b2b2b2;
  border: none;
  border-radius: 4px;
  outline: none;
  height: 29px;
  line-height: 29px;
`;

const RigntTextSecondText = styled.p`
  margin-top: 30px;
  color: rgb(112, 112, 112);
  font-weight: bold;
`;

const RigntTextDetailText = styled.p`
  color: rgb(178, 178, 178);
  font-size: 13px;
  margin-top: 9px;
  font-weight: bold;
  margin-top: 9px;
`;

const AddressBoxWapper = styled.div`
  width: 1024px;
  height: 390px;
  padding: 30px 60px;
  margin: 0px auto;
`;

const AddressPlusBox = styled.div`
  width: 315px;
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  margin: auto;
  padding: 38px 20px 28px;
`;

const AddressPlusBoxTitle = styled.p`
  color: #ffba00;
`;

const AddressPlusBoxButton = styled.button`
  width: 80px;
  height: 33px;
  background-color: #ffba00;
  color: white;
  font-size: 13px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const AddressInfoBox = styled.div`
  width: 355px;
  padding: 30px 20px;
  margin: 0px auto 12px auto;
  border: 0.5px solid rgb(224, 224, 224);
  background-color: rgb(255, 255, 255);
`;

const AddressInfo = styled.div`
  ${({ theme }) => theme.mixin.flex('column', null, null)};
  margin-bottom: 20px;
`;

const AddressInfoInput = styled.input`
  padding: 10px;
  margin-bottom: 8px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 2px;
`;

const AddressInfoActionBox = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  margin-top: 20px;
`;

const AddressInfoAditButton = styled.p`
  color: #ffba00;
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;

const PayBox = styled.div`
  ${({ theme }) => theme.mixin.flex('column', 'center', 'center')};
`;
const PayTitle = styled.p`
  font-weight: 500;
  color: rgb(112, 112, 112);
  margin: 30px auto 20px auto;
`;

const PayNaverButton = styled.button`
  width: 150px;
  height: 45px;
  margin-bottom: 20px;
  font-size: 15px;
  background-color: white;
  color: rgb(40, 203, 26);
  border: 1px solid rgb(40, 203, 26);
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: rgb(40, 203, 26);
    color: white;
  }
  &:focus {
    background-color: rgb(40, 203, 26);
    color: white;
  }
`;

const PayKakaoButton = styled.button`
  width: 150px;
  height: 45px;
  margin-bottom: 20px;
  font-size: 15px;
  background-color: white;
  color: rgb(255, 186, 0);
  border: 1px solid rgb(255, 186, 0);
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: rgb(255, 186, 0);
    color: white;
  }
  &:focus {
    background-color: rgb(255, 186, 0);
    color: white;
  }
`;

const PayCardButton = styled.button`
  width: 150px;
  height: 45px;
  margin-bottom: 20px;
  font-size: 15px;
  background-color: white;
  color: rgb(0, 151, 243);
  border: 1px solid rgb(0, 151, 243);
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: rgb(0, 151, 243);
    color: white;
  }
  &:focus {
    background-color: rgb(0, 151, 243);
    color: white;
  }
`;

const SubmitButtonBox = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', null)};
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 45px;
  margin-bottom: 100px;
  font-size: 15px;
  background-color: rgb(255, 186, 0);
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;

export default Subscribe;
