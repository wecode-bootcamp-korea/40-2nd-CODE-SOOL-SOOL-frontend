import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderWrap>
      <div>
        <HeaderTitle>술담화의 전통주를 즐겨보세요</HeaderTitle>
        <HeaderSubTitle>특별한 날 즐기는 술!</HeaderSubTitle>
      </div>
      <HeaderImage>
        <HeaderIcon src="https://cdn-icons-png.flaticon.com/512/5260/5260083.png" />
      </HeaderImage>
    </HeaderWrap>
  );
}

const HeaderPage = styled.div`
  margin: 50%;
`;

const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1144px;
  height: 120px;
  margin: 30px auto;
  padding: 32px 40px;
  border-radius: 10px;
  color: rgb(112, 112, 112);
  text-align: left;
  background-color: rgb(255, 242, 245);
`;

const HeaderTitle = styled.div`
  line-height: 1.2;
  font-size: 20px;
  font-weight: bold;
  color: rgb(62, 62, 62);
`;
const HeaderSubTitle = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: normal;
`;
const HeaderImage = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  position: absolute;
  top: 10px;
  right: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
`;

const HeaderIcon = styled.img`
  width: 50px;
`;

export default Header;
