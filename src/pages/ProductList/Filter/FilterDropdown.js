import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function FilterDropdown({ englishName, options, isCurrent }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectOption = (e, optionName, optionId) => {
    e.stopPropagation();
    searchParams.set(optionId, optionName);
    setSearchParams(searchParams);
  };
  return (
    <DropdownWrap>
      {options.map(filter => {
        return (
          <Option
            htmlFor="checkbox"
            key={filter.id}
            onClick={e =>
              selectOption(e, filter.optionName, filter.englishName)
            }
          >
            <OptionCheckBox>
              <CheckBox type="checkbox" id="checkbox" />
            </OptionCheckBox>
            <OptionName>{filter.option}</OptionName>
          </Option>
        );
      })}
    </DropdownWrap>
  );
}

const Option = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionCheckBox = styled.div``;

const CheckBox = styled.input`
  width: 26px;
  height: 26px;
`;

const OptionName = styled.div`
  font-size: 18px;
  color: #6c6c6c;
`;

const DropdownWrap = styled.div`
  display: grid;
  position: absolute;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  width: 350px;
  padding: 15px;
  top: 41px;
  left: -1px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  background-color: rgb(255, 255, 255);
  z-index: 1;
`;

export default FilterDropdown;
