import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

function Loading() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get('code');
  const bodyData = {
    grant_type: 'authorization_code',
    client_id: REST_API_KEY,
    redirect_uri: 'http://localhost:3000/oauth/callback/kakao',
    code: code,
  };
  const queryStringBody = Object.keys(bodyData)
    .map(
      getAccessToken =>
        encodeURIComponent(getAccessToken) +
        '=' +
        encodeURI(bodyData[getAccessToken])
    )
    .join('&');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: queryStringBody,
    })
      .then(res => res.json())
      .then(data => {
        const TOKEN = data.access_token;
        fetch('http://10.58.52.213:3000/auth/signin', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: TOKEN,
          },
        })
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('token', data.accessToken);
            setTimeout(() => {
              navigate('/');
            }, 3000);
          });
      });
  }, [queryStringBody, navigate]);
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <LoadingImg
        src="https://devtalk.kakao.com/uploads/default/original/2X/8/8d3426581b592b46157de64b919d4378b504d346.gif"
        alt="로딩중"
        width="5%"
      />
    </Background>
  );
}

const Background = styled.div`
  position: relative;
  height: 100%;
  background: #ffffffb7;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25% 0;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
`;

const LoadingImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default Loading;
