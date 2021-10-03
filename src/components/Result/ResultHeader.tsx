import { FC } from "react";
import styled from "styled-components";

interface Props {
  search: string;
  count: number;
}

const Header: FC<Props> = ({ search, count }) => {
  return (
    <HeaderContainer>
      <SearchContent>
        {search.trim() === "" ? "모든" : `'${search}'`} 공간 검색 결과
      </SearchContent>
      <TotalResult>총 {count}개</TotalResult>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  padding-bottom: 21.5px;
  border-bottom: 1px solid #d8dee5;
  font-size: 17px;

  span + span {
    margin-left: 10px;
  }

  &::before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 26px;
    height: 1px;
    content: "";
    background: #677294;
  }
`;

const SearchContent = styled.span`
  color: #232323;
  font-weight: bold;
`;

const TotalResult = styled.span`
  color: #5e5e5e;
`;
