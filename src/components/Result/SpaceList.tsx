import { FC } from "react";

import SpaceItem from "./SpaceItem";
import { Space } from "./types";

interface Props {
  list: Space[];
}

const SpaceList: FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map((space) => (
        <SpaceItem key={space.id} space={space} />
      ))}
    </ul>
  );
};

export default SpaceList;
