import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import axios from 'axios';

const ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY;
const token = localStorage.getItem('token');

function Receipt() {
  const INIT_STATE = {
    name: '',
    specific: '',
    phone: '',
  };
  const [formData, setFormData] = useState(INIT_STATE);
  const inputMessage = {
    name: { message: '이름을 입력해주세요' },
    address: { message: '도로명주소를 찾아주세요' },
    specificAddress: { message: '상세주소(동/호수)를 입력해주세요 ' },
    phone: { message: '전화번호를 입력해주세요' },
  };
  const onChangeInput = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const scriptUrl =
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);
  const [tableAddress, setTableAddress] = useState('');

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      setTableAddress(fullAddress);
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const [purchase, setPurchase] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/purchase.json', {
      headers: {
        Accept: 'application / json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setPurchase(data);
      });
  }, []);

  const purchaseButton = [
    { id: 1, label: '신용카드' },
    { id: 2, label: '가상계좌' },
    { id: 3, label: '카카오페이' },
    { id: 4, label: '네이버페이' },
  ];
  const [selectedValue, setSelectedValue] = useState('');
  const toggleActive = e => {
    setSelectedValue(e.target.innerText);
    return e.target.value;
  };

  const [disable, setDisable] = useState(true);
  const buttonChnage = () => {
    if (disable === true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const purchaseInfo = {
    next_redirect_pc_url: '',
    tid: '',
    params: {
      cid: 'TC0ONETIME',
      partner_order_id: 'partner_order_id',
      partner_user_id: 'partner_user_id',
      item_name: '술담아주식회사',
      quantity: 1,
      total_amount: 39000,
      vat_amount: 0,
      tax_free_amount: 0,
      approval_url: 'http://localhost:3000',
      fail_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000',
    },
  };

  const goToKakaoPay = () => {
    const { params } = purchaseInfo;
    axios({
      url: 'https://kapi.kakao.com/v1/payment/ready',
      method: 'POST',
      headers: {
        Authorization: `KakaoAK ${ADMIN_KEY}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      params,
    })
      .then(
        fetch(`http://10.58.52.138:8000/products/detail`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
          body: JSON.stringify({
            id: product.id,
            quantity: value,
          }),
        })
      )
      .then(response => {
        const {
          data: { next_redirect_pc_url },
        } = response;
        window.location.assign(`${next_redirect_pc_url}`);
      });
  };

  return (
    <ReceiptSection>
      <ReceiptTitle>주문 / 결제</ReceiptTitle>
      <ReceiptContent>
        <ReceiptChart>
          <ReceiptChartTitle>배송지</ReceiptChartTitle>
          <ReceiptAddress>
            <Label>수령인</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={onChangeInput}
              placeholder={inputMessage.name.message}
            />
          </ReceiptAddress>
          <ReceiptAddress>
            <Label>주소</Label>
            <Input
              value={tableAddress}
              onClick={handleClick}
              onChange={onChangeInput}
              placeholder={inputMessage.address.message}
            />
          </ReceiptAddress>
          <ReceiptAddress>
            <Label>상세주소</Label>
            <Input
              name="specific"
              value={formData.specific}
              onChange={onChangeInput}
              placeholder={inputMessage.specificAddress.message}
            />
          </ReceiptAddress>
          <ReceiptAddress>
            <Label>휴대전화</Label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={onChangeInput}
              placeholder={inputMessage.phone.message}
            />
          </ReceiptAddress>
        </ReceiptChart>
        <ReceiptChart>
          <ReceiptChartTitle>주문 예정 상품</ReceiptChartTitle>
          {purchase.map(
            ({ producttypeId, name, price, imageUrl, capacity }) => (
              <ReceiptAddress key={producttypeId}>
                <PurchaseBoxWrap>
                  <PurchaseImage src={imageUrl} alt="1" />
                  <PurchaseContentWrap>
                    <PurchaseContentName>{name}</PurchaseContentName>
                    <PurchaseContent>[{capacity}]</PurchaseContent>
                    <PurchaseContent>
                      {Intl.NumberFormat('ko-KR').format(price)}원 / 수량1개
                    </PurchaseContent>
                  </PurchaseContentWrap>
                </PurchaseBoxWrap>
              </ReceiptAddress>
            )
          )}
        </ReceiptChart>
        <ReceiptChart>
          <ReceiptChartTitle>결제 방법</ReceiptChartTitle>
          <PurchaseType>
            {purchaseButton.map(item => (
              <PurchaseTypeButton
                key={item.id}
                value={item.label}
                onClick={event => toggleActive(event, item.id)}
              >
                {item.label}
              </PurchaseTypeButton>
            ))}
          </PurchaseType>
        </ReceiptChart>
        <ReceiptChart>
          <ReceiptChartTitle>계산서</ReceiptChartTitle>
          <ReceiptAddress>
            <Label>결제방법</Label>
            <Purchase>{selectedValue}</Purchase>
          </ReceiptAddress>
          <ReceiptAddress>
            <Label>총 결제금액</Label>
            <Purchase>39000원</Purchase>
          </ReceiptAddress>
        </ReceiptChart>
        <ReceiptChart>
          <AgreeWrap>
            <AgreeInput type="checkbox" onClick={buttonChnage} />
            <AgreeText>전통주 구매자의 정보수집 ・ 이용 (필수)</AgreeText>
          </AgreeWrap>
        </ReceiptChart>
        <PurchaseButton disabled={disable} onClick={goToKakaoPay}>
          39,000원 구매하기
        </PurchaseButton>
      </ReceiptContent>
    </ReceiptSection>
  );
}

const ReceiptSection = styled.section`
  width: 100%;
  max-width: 1150px;
  height: 100%;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 10px;
  margin: 30px auto;
  padding: 40px 60px 50px;
`;

const ReceiptTitle = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', null)};
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(255, 222, 168);
`;

const ReceiptContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  margin-top: 20px;
`;

const ReceiptChart = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 30px 20px;
  border: 1px solid rgb(238, 238, 238);
`;

const ReceiptChartTitle = styled.div`
  ${({ theme }) => theme.mixin.flex(null, 'space-between', 'center')};
  margin-bottom: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(217, 217, 217);
  font-weight: bold;
`;

const ReceiptAddress = styled.div`
  display: flex;
  width: 100%;
`;

const Label = styled.label`
  margin: 7px auto 0 0;
`;

const Input = styled.input`
  width: 230px;
  height: 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid rgb(208, 208, 208);
  border-radius: 5px;
`;

const PurchaseBoxWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const PurchaseImage = styled.img`
  max-width: 60px;
  height: 100%;
`;

const PurchaseContentWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('column', null, 'flex-start')};
  margin-left: 15px;
  text-align: left;
`;

const PurchaseContentName = styled.div`
  margin: 5px 0;
  line-height: 15px;
  color: rgb(112, 112, 112);
  font-weight: bold;
`;

const PurchaseContent = styled.div`
  margin: 5px 0;
  line-height: 15px;
  color: rgb(187, 187, 187);
`;

const PurchaseType = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const PurchaseTypeButton = styled.button`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  flex-basis: 30%;
  width: 100%;
  height: 40px;
  margin: 6px 5.5px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 5px;
  color: rgb(112, 112, 112);
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  :focus {
    border: 1px solid rgb(255, 186, 6);
    background-color: rgb(254, 248, 239);
    color: rgb(255, 186, 6);
  }
`;

const AgreeWrap = styled.div`
  display: flex;
`;

const AgreeInput = styled.input`
  display: flex;
  width: 20px;
  height: 20px;
`;

const AgreeText = styled.div`
  display: flex;
  margin: 7px 0 0 10px;
`;

const Purchase = styled.div`
  width: 230px;
  height: 30px;
  margin: 7px 10px 20px 0;
  box-sizing: border-box;
  text-align: right;
`;

const PurchaseButton = styled.button`
  ${({ theme }) => theme.mixin.flex(null, 'center', 'center')};
  width: 335px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  background-color: rgb(0, 151, 243);
  color: white;
  cursor: pointer;
  :disabled {
    background-color: rgb(238, 238, 238);
    color: gray;
  }
`;

export default Receipt;
