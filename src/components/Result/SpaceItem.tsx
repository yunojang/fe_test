import { FC } from "react";
import styled from "styled-components";
import { formatPrice } from "utils/format";
import { Space } from "./types";

interface Props {
  space: Space;
}

const SpaceItem: FC<Props> = ({ space }) => {
  const {
    imageUrl,
    hostName,
    venueName,
    address,
    type,
    minHour,
    pricePerHour,
  } = space;

  return (
    <SpaceLi>
      <SpaceImg src={imageUrl} alt={hostName} />
      <Description>
        <p>
          <Title>
            {hostName} / {venueName}
          </Title>
          <span>{type}</span>
        </p>
        <Address>{address}</Address>
      </Description>
      <PriceContainer>
        <p>
          <b>{formatPrice(pricePerHour * minHour)}원</b> / {minHour}시간
        </p>
        <PricePerHour>(시간당 {formatPrice(pricePerHour)}원)</PricePerHour>
      </PriceContainer>
    </SpaceLi>
  );
};

export default SpaceItem;

const SpaceLi = styled.li`
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid #efefef;
`;

const SpaceImg = styled.img`
  height: 200px;
  border-radius: 4px;
`;

const Description = styled.div`
  flex-grow: 1;
  padding-left: 36px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Address = styled.p`
  color: #878787;
  margin-top: 8px;
  font-size: 14px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 187px;
  color: #232323;
`;

const PricePerHour = styled.p`
  margin-top: 10px;
  font-size: 13px;
`;
