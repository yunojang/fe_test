import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FrownOutlined } from "@ant-design/icons";

import { BASE_URL } from "utils/api";
import { Space } from "./types";
import { RootState } from "store/reducers";

import ResultHeader from "./ResultHeader";
import SpaceList from "./SpaceList";
import { SearchState } from "store/reducers/search";

const SPACE_FILE_NAME = "spaceSample.json";

function Result() {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { searchText } = useSelector<RootState, SearchState>(
    (state) => state.search
  );

  useEffect(() => {
    const filterSpaceToSearch = (space: Space) => {
      const { hostName, venueName, address } = space;
      const searchTextOmitBlink = searchText.replaceAll(" ", "");

      const includeHost = hostName.includes(searchTextOmitBlink);
      const includeVenue = venueName.includes(searchTextOmitBlink);
      const includeAddress = address.includes(searchTextOmitBlink);

      return includeHost || includeVenue || includeAddress;
    };

    const loadSpaceList = async () => {
      const response = await fetch(`${BASE_URL}/${SPACE_FILE_NAME}`);

      if (!response.ok) {
        throw response.statusText;
      }

      const result = await response.json();
      const list: Space[] = result.venueList;

      const filtedSpaces = list.filter(filterSpaceToSearch);

      if (filtedSpaces.length < 1) {
        throw TypeError("검색 결과가 없습니다.");
      }

      setSpaces(filtedSpaces);
      setError(null);
    };

    loadSpaceList().catch((err) => {
      setError(err.message);
      setSpaces([]);
    });
  }, [searchText]);

  return (
    <Container>
      <ResultHeader search={searchText} count={spaces.length} />

      {error ? (
        <Alert className="error">
          <FrownOutlined />
          <span>{error}</span>
        </Alert>
      ) : (
        <SpaceList spaces={spaces} />
      )}
    </Container>
  );
}

export default Result;

const Container = styled.main`
  width: 1194px;
  margin: auto;
  margin-top: 67px;
`;

const Alert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  width: 100%;
  padding-top: 60px;
  text-align: center;
  font-weight: bold;

  svg {
    font-size: 76px;
  }

  &.error {
    color: #888;
  }
`;
