import { FC } from "react";

import SpaceItem from "./SpaceItem";
import { Space } from "./types";

interface Props {
  spaces: Space[];
}

const SpaceList: FC<Props> = ({ spaces }) => {
  return (
    <ul>
      {spaces.map((space) => (
        <SpaceItem key={space.id} space={space} />
      ))}
    </ul>
  );
};

export default SpaceList;
