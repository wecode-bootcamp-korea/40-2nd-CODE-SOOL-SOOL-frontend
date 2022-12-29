import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubscribeInfo = () => {
  return (
    <div>
      <SubscribeInfoMain>
        <HeaderFirstTitle>한 달에 한 번, 찾아오는 인생술</HeaderFirstTitle>
        <HeaderSecondTitle>궁금한 담아박스를 구독해 보세요</HeaderSecondTitle>

        <DamaBoxImg
          src="https://cdn-icons-png.flaticon.com/512/6984/6984023.png"
          alt="담아박스 사진"
        />
      </SubscribeInfoMain>
      <CarouselMain>
        <CarouselBox>
          <CarouselTitle>정통주 구독을</CarouselTitle>
          <CarouselTitle>술담아로 시작해야 하는 이유</CarouselTitle>
        </CarouselBox>
        <CarouselImage
          src="https://cdn-icons-png.flaticon.com/512/3783/3783522.png"
          alt="담아박스 사진"
        />
        <BottomGoDamhwaBox>
          <BottomGoDamhwaBoxTitle>
            자, 이제 나만의 '인생술 찾기 여정'을
          </BottomGoDamhwaBoxTitle>
          <BottomGoDamhwaBoxTitle>시작할 준비 되셨나요?</BottomGoDamhwaBoxTitle>
          <BottomCalenderBox>
            <CalenderBoxTitle>담아박스는</CalenderBoxTitle>
            <CalenderBoxTitleBold>
              이번 달 둘째 주 목요일에 도착해요.
            </CalenderBoxTitleBold>
            <CalenderBoxTitleBoldDate>
              1월 결제일과 배송일은?
            </CalenderBoxTitleBoldDate>
            <BottomCalender
              src="https://cdn-icons-png.flaticon.com/512/2628/2628617.png"
              alt="달력사진"
            />
            <BottomCalenderText>
              9일 이후 주문 건은 2월 주문으로 넘어갑니다
            </BottomCalenderText>
          </BottomCalenderBox>
          <GoDamhwaButtonBox>
            <Link to="/Subscribe">
              <GoDamhwaButton>구독하러 가기 {'>'}</GoDamhwaButton>
            </Link>
          </GoDamhwaButtonBox>
        </BottomGoDamhwaBox>
      </CarouselMain>
    </div>
  );
};

const SubscribeInfoMain = styled.div`
  background-color: rgb(247, 247, 247);
  text-align: center;
`;

const HeaderFirstTitle = styled.div`
  padding-top: 50px;
  font-size: 24px;
`;

const HeaderSecondTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5715;
`;
const DamaBoxImg = styled.img`
  width: 364px;
  border-radius: 15px;
  margin: 50px 0px 100px 0px;
`;

const CarouselMain = styled.div`
  margin: auto;
  width: 100%;
`;

const CarouselBox = styled.div`
  margin: 20px 0px;
`;

const CarouselTitle = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.5715;
  color: #0097f3;
`;

const CarouselImage = styled.img`
  ${({ theme }) => theme.mixin.flex(null, 'center', null)};
  width: 370px;
  margin: 10px auto 0px auto;
`;

const BottomGoDamhwaBox = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const BottomGoDamhwaBoxTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.5715;
  color: #ffba00;
`;

const BottomCalenderBox = styled.div`
  margin: 50px auto;
  line-height: 1.5715;
`;

const CalenderBoxTitle = styled.p`
  font-size: 28px;
  color: #707070;
`;

const CalenderBoxTitleBold = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #707070;
`;

const CalenderBoxTitleBoldDate = styled.p`
  margin-top: 50px;
  font-size: 28px;
  font-weight: bold;
  color: #ffba00;
`;

const BottomCalender = styled.img`
  margin: 30px 0px 30px 0px;
  width: 300px;
`;

const BottomCalenderText = styled.p`
  color: #707070;
  font-size: 20px;
`;

const GoDamhwaButtonBox = styled.div`
  margin: 45px auto 130px;
`;

const GoDamhwaButton = styled.button`
  width: 206px;
  height: 46px;
  border: none;
  color: white;
  font-size: 15px;
  background-color: rgb(255, 186, 0);
  border-radius: 5px;
  cursor: pointer;
`;
export default SubscribeInfo;
