import { FC } from "react";
import styled from "styled-components";
import { Space } from "./types";

interface Props {
  space: Space;
}

const SpaceItem: FC<Props> = ({ space }) => {
  const { hostName, venueName, address } = space;
  return (
    <SpaceLi>
      <div>{hostName}</div>
      <div>{venueName}</div>
      <div>{address}</div>
    </SpaceLi>
  );
};

export default SpaceItem;

const SpaceLi = styled.li`
  padding: 30px 0;
`;
