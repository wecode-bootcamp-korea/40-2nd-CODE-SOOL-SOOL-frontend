import React from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <SearchMain>
      <SearchBoxStyle>
        <SearchInput type="search" placeholder="🔍 무엇을 찾고 계신가요?" />
        <SearchInputButton>취소</SearchInputButton>
      </SearchBoxStyle>
      <SearchRemove>
        <SearchRemoveWapper>
          <SearchRemoveBox>
            <SearchRemoveBoxRecent>최근 검색</SearchRemoveBoxRecent>
            <SearchRemoveBoxButton>모두 지우기</SearchRemoveBoxButton>
          </SearchRemoveBox>
          <SearchRemoveBoxNoData>
            최근 검색한 내역이 없습니다.
          </SearchRemoveBoxNoData>
        </SearchRemoveWapper>
      </SearchRemove>
    </SearchMain>
  );
};

const SearchMain = styled.div`
  height: 100%;
`;

const SearchBoxStyle = styled.div`
  max-width: 1144px;
  display: flex;
  text-align: center;
  margin: 20px auto 0px;
  padding: 0px 69px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: rgb(242, 242, 242);
  border: none;
  border-radius: 6px;
  color: rgb(62, 62, 62);
  padding: 0px 7px 0px 16px;
  font-size: 14px;
  outline: none;
`;

const SearchInputButton = styled.button`
  border: none;
  color: #0097f3;
  background-color: white;
  margin-left: 14px;
  white-space: nowrap;
  cursor: pointer;
`;

const SearchRemove = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px 0px 100px;
`;

const SearchRemoveWapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 0px 69px;
  max-width: 1144px;
`;

const SearchRemoveBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchRemoveBoxRecent = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const SearchRemoveBoxButton = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #707070;
  cursor: pointer;
`;

const SearchRemoveBoxNoData = styled.div`
  color: #707070;
  font-size: 13px;
`;
export default Search;
