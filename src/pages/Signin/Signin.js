import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function Signin() {
  return (
    <SignInSection>
      <Title>로그인</Title>
      <Form>
        <SignInContainer>
          <Name>이메일</Name>
          <Insert placeholder="이메일을 입력해주세요" />
          <Name>비밀번호</Name>
          <Insert placeholder="비밀번호를 입력해주세요" />
          <SignInButton>로그인</SignInButton>
          <UpNavigateButton>
            <Link to="/signup">회원가입(최대 4000p 적립)</Link>
          </UpNavigateButton>
          <a href={KAKAO_AUTH_URI}>
            <KakaoImg
              src="https://velog.velcdn.com/images/dbakkerus/post/32c3003d-1120-427c-9d48-bf7d8ba2c76c/image.png"
              alt="카카오로그인"
            />
          </a>
        </SignInContainer>
      </Form>
    </SignInSection>
  );
}

const SignInSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px 90px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: rgb(255, 186, 0);
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  ${({ theme }) => theme.mixin.flex(null, 'center', null)};
`;

const SignInContainer = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  width: 100%;
  margin: 0 auto;
  max-width: 335px;
  padding: 40px 50px 30px;
  flex-direction: column;
`;

const Name = styled.div`
  text-align: center;
  color: rgb(112, 112, 112);
  font-weight: bold;
  margin-bottom: 20px;
`;

const Insert = styled.input`
  width: 100%;
  height: 30px;
  display: inline-flex;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  border: none;
  border-bottom: 2px solid rgb(148, 148, 148);
  color: rgb(171, 171, 171);
`;

const SignInButton = styled.button`
  box-sizing: border-box;
  width: 150px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  color: rgb(178, 178, 178);
  margin-top: 20px;
  border: 1px solid rgb(178, 178, 178);
  font-weight: bold;
  font-size: 20px;
`;

const UpNavigateButton = styled.button`
  width: 180px;
  height: 20px;
  border: none;
  background-color: white;
  color: rgb(30, 143, 215);
  margin-top: 25px;
  font-weight: bold;
  font-size: 15px;
`;

const KakaoImg = styled.img`
  width: 100%;
  height: 50px;
  margin-top: 50px;
`;

export default Signin;
