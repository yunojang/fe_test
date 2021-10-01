import styled from "styled-components";

function SearchForm() {
  return (
    <form>
      <SearchInput type="text" placeholder="무슨 행사를 진행하시나요?" />
    </form>
  );
}

export default SearchForm;

const SearchInput = styled.input`
  height: 47px;
  width: 536px;
  border: 1px solid #0077ed;
  border-radius: 4px;
  padding: 9px 20px;
  font-size: 18px;
`;
