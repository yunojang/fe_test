import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "store/actions/search";
import styled from "styled-components";
import searchIcon from "../images/search.png";

function SearchForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim().length < 2) {
      alert("두글자 이상 입력해주세요");
      return;
    }

    dispatch(setSearch(value));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder="무슨 행사를 진행하시나요?"
        onChange={onChange}
        value={value}
      />
      <SearchButton />
    </FormContainer>
  );
}

export default SearchForm;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  width: 536px;
  border: 1px solid #0077ed;
  border-radius: 4px;
  height: 100%;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 9px 20px;
  font-size: 16px;
  border: 0;

  &::placeholder {
    color: #b9b9b9;
  }
`;

const SearchButton = styled.button`
  width: 48px;
  height: 100%;
  background: url(${searchIcon}) no-repeat center;
`;
