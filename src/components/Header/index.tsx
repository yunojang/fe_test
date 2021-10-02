import styled from "styled-components";
import logo from "../images/logo.png";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <Container>
      <Content>
        <LogoImg src={logo} alt="logo" />
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
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 1182px;
  height: 100%;
  padding: 22px 0;
  margin: auto;
`;

const LogoImg = styled.img`
  height: 19px;
  margin-right: 33px;
  cursor: pointer;
`;
