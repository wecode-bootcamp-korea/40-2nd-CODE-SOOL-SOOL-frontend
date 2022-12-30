import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PickSlider from 'react-slick';
import { settings, pickSettings } from './Arrow';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/data/category.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://10.58.52.56:3000/products`, {
      headers: {
        Accept: 'application / json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      });
  }, []);

  return (
    <MainSection>
      <Banner>
        <BannerList>
          <BannerSpec>전체상품</BannerSpec>
          <BannerSpec>신상품</BannerSpec>
          <BannerSpec>이벤트</BannerSpec>
          <BannerSpec>베스트</BannerSpec>
          <BannerSpec>담화배송</BannerSpec>
        </BannerList>
      </Banner>
      <Slider {...settings}>
        <SliderContent>
          <SliderImg
            src="https://velog.velcdn.com/images/dbakkerus/post/b17e671c-8ec4-44d5-8543-230a897dc0ee/image.png"
            alt="1"
          />
        </SliderContent>
        <SliderContent>
          <SliderImg
            src="https://velog.velcdn.com/images/dbakkerus/post/29e461da-b3f7-40d3-98cf-2046a7dde381/image.png"
            alt="2"
          />
        </SliderContent>
        <SliderContent>
          <SliderImg
            src="https://velog.velcdn.com/images/dbakkerus/post/6fa71241-e006-4d4f-85a5-70f9ca830150/image.png"
            alt="3"
          />
        </SliderContent>
      </Slider>
      <Category>
        <CategoryList>
          {category.map(({ categoryId, name, imageUrl }) => (
            <CategorySpec key={categoryId}>
              <CategoryImg src={imageUrl} alt="사진" />
              {name}
            </CategorySpec>
          ))}
        </CategoryList>
      </Category>
      <Pick>
        <PickBanner>
          <PickImg
            src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/LSNb-1664090420321-sommelier%20pick.png"
            alt="men"
          />
          <BannerTitle>
            <UpText>이번 주 술담아 PICK</UpText>
            <DnText>이 술은 어때요?</DnText>
          </BannerTitle>
          <PickMore>더보기</PickMore>
        </PickBanner>
        <PickSliderWrap>
          <PickSlider {...pickSettings}>
            {product.map(
              ({ product_type_id, name, price, image_url, description }) => (
                <PickContent key={product_type_id}>
                  <PickProductImg
                    src={image_url}
                    alt="product-img"
                    onClick={() =>
                      navigate(`/productdetail/${product_type_id}`)
                    }
                  />
                  <PickWrapper>
                    <PickTitle>{name}</PickTitle>
                    <PickPrice>{Number(price).toLocaleString()}원</PickPrice>
                    <PickRate>4.6 | 리뷰 7782</PickRate>
                    <PickDesc>{description}</PickDesc>
                  </PickWrapper>
                </PickContent>
              )
            )}
          </PickSlider>
        </PickSliderWrap>
      </Pick>
    </MainSection>
  );
}

const MainSection = styled.section`
  background-color: white;
`;

const Banner = styled.div`
  margin: 0px auto;
  padding: 0px 70px;
  border-bottom: 1px solid rgb(243, 243, 243);
`;

const BannerList = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'flex-start', 'baseline')};
  max-width: 1150px;
  height: 35px;
  margin: 0px auto;
  padding: 0px;
`;

const BannerSpec = styled.div`
  display: block;
  line-height: 15px;
  height: 100%;
  padding: 10px 40px 0 0;
  color: rgb(112, 112, 112);
  font-size: 15px;
  font-weight: bold;
`;

const SliderContent = styled.div`
  display: block;
  height: 400px;
`;

const SliderImg = styled.img`
  width: 100%;
  height: 380px;
`;

const Category = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', null)};
  width: 100%;
  border-bottom: 1px solid rgb(240, 240, 240);
`;

const CategoryList = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'center', null)};
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
`;

const CategorySpec = styled.div`
  ${({ theme }) => theme.mixin.flex('column', null, null)};
  position: relative;
  width: 80px;
  margin: 30px 15px;
  text-align: center;
  cursor: pointer;
`;

const CategoryImg = styled.img`
  width: 44px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Pick = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 50px auto 100px;
  text-align: center;
  font-weight: bold;
`;

const PickBanner = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 0px 80px;
`;

const PickImg = styled.img`
  width: 45px;
`;

const BannerTitle = styled.div`
  text-align: left;
`;

const UpText = styled.div`
  margin: 5px 0 10px 0;
  font-size: 22px;
`;

const DnText = styled.div`
  font-size: 17px;
  color: rgb(255, 180, 59);
`;

const PickMore = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'flex-end', 'flex-end')};
  flex-grow: 1;
  color: rgb(22, 144, 255);
`;

const PickSliderWrap = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 50px;
  list-style: none;
  overflow: hidden;
`;

const PickContent = styled.div`
  display: block;
  height: 500px;
  text-align: center;
`;

const PickProductImg = styled.img`
  display: flex;
  width: 80%;
  height: 330px;
  margin: auto;
  border-radius: 10px;
  cursor: pointer;
`;

const PickWrapper = styled.div`
  display: block;
  margin-left: 30px;
`;

const PickTitle = styled.div`
  height: 40px;
  margin-top: 15px;
  margin-bottom: 30px;
  color: rgb(62, 62, 62);
  font-size: 17px;
  font-weight: 900;
  text-align: left;
`;

const PickPrice = styled.div`
  ${({ theme }) => theme.mixin.flex(null, null, 'flex-end')};
  height: 25px;
  margin-bottom: 5px;
  color: rgb(62, 62, 62);
  font-weight: 650;
`;

const PickRate = styled.div`
  ${({ theme }) => theme.mixin.flex(null, null, 'flex-end')};
  height: 17.5px;
  margin-bottom: 20px;
  color: rgb(164, 164, 164);
  font-weight: 500;
`;

const PickDesc = styled.div`
  ${({ theme }) => theme.mixin.flex(null, null, 'flex-end')};
  height: 17.5px;
  margin-right: 30px;
  padding-top: 40px;
  color: rgb(164, 164, 164);
  font-weight: 500;
  border-top: 1px solid #f1f1f1;
`;

export default Main;
