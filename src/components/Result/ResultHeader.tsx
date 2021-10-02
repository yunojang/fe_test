import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <SearchContent>'00' 공간 검색 결과</SearchContent>
      <TotalResult>총 19개</TotalResult>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  padding-bottom: 21.5px;
  border-bottom: 1px solid #d8dee5;

  span + span {
    margin-left: 10px;
  }
`;

const SearchContent = styled.span`
  color: #232323;
  font-weight: bold;
`;

const TotalResult = styled.span`
  color: #5e5e5e;
`;
