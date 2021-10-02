import { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "utils/api";

import ResultHeader from "./ResultHeader";
import SpaceList from "./SpaceList";
import { Space } from "./types";

const SPACE_FILE_NAME = "spaceSample.json";

function Result() {
  const [spaceList, setSpaceResult] = useState<Space[]>([]);

  useEffect(() => {
    const loadSpaceList = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${SPACE_FILE_NAME}`);

        if (!response.ok) {
          throw response.statusText;
        }

        const result = await response.json();
        const list = result.venueList;

        if (list.length < 1) {
          throw "검색 결과가 없습니다.";
        }

        setSpaceResult(list);
      } catch (err) {
        console.error(err);
      }
    };

    loadSpaceList();
  }, []);

  return (
    <Container>
      <ResultHeader />
      <SpaceList list={spaceList} />
    </Container>
  );
}

export default Result;

const Container = styled.main`
  width: 1180px;
  margin: auto;
  margin-top: 67px;
`;
