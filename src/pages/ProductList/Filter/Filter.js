import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';
import styled from 'styled-components';

function Filter(props) {
  const { name, englishName, options } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = e => {
    setIsOpen(!isOpen);
  };
  return (
    <FilterWrap onClick={toggleDropDown}>
      <p>{name} </p>
      {isOpen && <FilterDropdown options={options} englishName={englishName} />}
      <FilterIconWrap>
        {isOpen ? (
          <FilterIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlElEQVR4nO2QQQoDIQxFc/+LqXtBXXoA4wHEpETGodAWFcZFwQ/ZaPhPH/DmwAGMchT9mSJEbLMFkHNmYwxrrTml9CwgX+VKqTYrkCEAEVuhFHvv23TIjC6YfblzjmutTEQcQpj+CayU96xAfgKstbcWIvq4l7OuS3aXAaUUjjF+LX+HyI7sLgOeChzAKEfRMNsVvQDh/+KLitu06AAAAABJRU5ErkJggg==" />
        ) : (
          <FilterIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmUlEQVR4nO2TUQqAIBBEu//F1H9B/fQArgcQ3RghKChso6AP59Md5+mgC3+sZQJGmhX9uKJSCscYubV2uRkzeOAVA6y1rJRi7/0pBGuYwQOvGJBzZmNMD3DOca31EB5C6DOtNaeU5IArSBOEDwEQEfWgra6tFqxh9soryrub3D25CLCHSMLF/4CIbtXyGPBEEzDUrGiozytaAa144ou37/mzAAAAAElFTkSuQmCC" />
        )}
      </FilterIconWrap>
    </FilterWrap>
  );
}

const FilterWrap = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 12px 12.7px 11px 10px;
  border: 1px solid rgb(244, 244, 244);
  border-radius: 5px;
  color: #939393;
  background-color: white;
`;

const FilterIconWrap = styled.div`
  margin-left: 30px;
`;

const FilterIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export default Filter;
