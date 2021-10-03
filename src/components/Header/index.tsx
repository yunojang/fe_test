import { useDispatch } from "react-redux";
import { setSearch } from "store/actions/search";
import styled from "styled-components";
import logo from "../images/logo.png";
import SearchForm from "./SearchForm";

function Header() {
  const dispatch = useDispatch();

  const resetSearch = () => {
    dispatch(setSearch(""));
  };

  return (
    <Container>
      <Content>
        <LogoImg src={logo} alt="logo" onClick={resetSearch} />
        <SearchForm />
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  height: 89px;
  border-bottom: 1px solid #efefef;
  background: #fff;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 1194px;
  height: 100%;
  padding: 22px 0;
  margin: auto;
`;

const LogoImg = styled.img`
  width: 130px;
  height: auto;
  margin-right: 33px;
  cursor: pointer;
`;
