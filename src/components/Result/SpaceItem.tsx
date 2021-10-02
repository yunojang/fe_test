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
        <Title>
          <span className="name">
            {hostName} / {venueName}
          </span>
          <span>
            {type === "approval" && <Type className={type}>승인</Type>}
            {type === "realtime" && <Type className={type}>실시간</Type>}
          </span>
        </Title>
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
  display: flex;
  align-items: center;

  .name {
    font-weight: bold;
  }
`;

const Type = styled.span`
  margin-left: 12px;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 10px;
  font-size: 10px;
  color: white;

  &.approval {
    background: #5ac7ff;
  }

  &.realtime {
    background: #0077ed;
  }
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
