import styled from "styled-components";
import arrowUp from "./images/arrow_up.svg";

function TopButton() {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button onClick={onClick}>
      <img src={arrowUp} alt="top" />
      <span>TOP</span>
    </Button>
  );
}

export default TopButton;

const Button = styled.button`
  position: fixed;
  right: 145px;
  bottom: 90px;
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(80, 80, 150, 0.5);
  font-size: 11px;
  z-index: 2;

  span {
    margin-top: 4px;
  }
`;
