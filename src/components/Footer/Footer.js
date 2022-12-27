import React from 'react';
import styled from 'styled-components';
import {
  COMPANYINFO_DATA,
  COMPANYINFO_ICON,
  COMPANYINFO_MID_MENU,
} from './companyInfo';

const Footer = () => {
  return (
    <FooterMainWrapper>
      <FooterMainWrap>
        <div>
          <FooterMain>
            <div>
              <FooterMainMenuName>담아컴퍼니 주식회사</FooterMainMenuName>
              <FooterMainMenu>고객센터 : 070 - 1234 - 5678</FooterMainMenu>
              <FooterMainMenu>평일 10:00 - 18:00, 주말 휴무</FooterMainMenu>
            </div>
            <FooterMainIconList>
              {COMPANYINFO_ICON.map(conpanyIcon => {
                return (
                  <li key={conpanyIcon.id}>
                    <FooterMainIcon
                      src={conpanyIcon.src}
                      alt={conpanyIcon.alt}
                    />
                  </li>
                );
              })}
            </FooterMainIconList>
          </FooterMain>
          <FooterMidMenuList>
            {COMPANYINFO_MID_MENU.map(conpanyMidMenu => {
              return (
                <FooterMidMenuListItem key={conpanyMidMenu.id}>
                  {conpanyMidMenu.name}
                </FooterMidMenuListItem>
              );
            })}
          </FooterMidMenuList>
          <FooterBottomMenuList>
            {COMPANYINFO_DATA.map(conpanyData => {
              return (
                <FooterBottomMenuListItem key={conpanyData.id}>
                  {conpanyData.name}
                </FooterBottomMenuListItem>
              );
            })}
          </FooterBottomMenuList>
        </div>
        <FooterBottomCommentBox>
          <FooterBottomComment>
            술담아는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가
            등록한 상품정보 및 거래에 대해 술담화는 책임을 지지 않습니다.
            <br />
            고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
            NICE구매안전 (에스크로) 서비스를 이용하실 수 있습니다.
          </FooterBottomComment>
        </FooterBottomCommentBox>
        <FooterLastComment>서비스가입사실 확인</FooterLastComment>

        <FooterBottomIcon
          src="https://cdn-icons-png.flaticon.com/512/3444/3444393.png"
          alt="물음표 아이콘"
        />
      </FooterMainWrap>
    </FooterMainWrapper>
  );
};

const FooterMainWrapper = styled.div`
  padding: 30px 20px 50px 20px;
  border-top: 1px solid rgb(224, 224, 224);
  position: relative;
`;

const FooterMainWrap = styled.div`
  margin: auto 50px;
  text-align: left;
`;

const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterMainMenuName = styled.p`
  font-weight: bold;
  margin-bottom: 16px;
`;

const FooterMainMenu = styled.p`
  font-size: 13px;
  margin-bottom: 8px;
  color: #323232;
`;
const FooterMainIconList = styled.ul`
  display: flex;
`;

const FooterMainIcon = styled.img`
  margin-left: 10px;
  width: 35px;
  cursor: pointer;
`;

const FooterMidMenuList = styled.ul`
  display: flex;
  margin: 24px auto;
`;

const FooterMidMenuListItem = styled.li`
  font-weight: bold;
  font-size: 12px;
  margin-right: 20px;
  line-height: 21px;
  cursor: pointer;
`;

const FooterBottomMenuList = styled.div`
  display: flex;
  font-size: 12px;
  color: #707070;
  line-height: 21px;
`;

const FooterBottomMenuListItem = styled.p`
  margin-right: 10px;
`;

const FooterBottomCommentBox = styled.div`
  margin: 15px 0px 10px 0px;
`;

const FooterBottomComment = styled.p`
  font-size: 12px;
  color: #b2b2b2;
  line-height: 16px;
`;

const FooterLastComment = styled.p`
  font-size: 12px;
  color: #b2b2b2;
  line-height: 16px;
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const FooterBottomIcon = styled.img`
  width: 70px;
  position: absolute;
  right: 60px;
  bottom: 30px;
  cursor: pointer;
`;
export default Footer;
