import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FrownOutlined } from "@ant-design/icons";

import { Space } from "./types";
import { RootState } from "store/reducers";
import { SearchState } from "store/reducers/search";
import { BASE_URL } from "utils/api";
import { SPACE_PER_PAGE } from "./constant/page";
import { SPACE_FILE } from "./constant/api";

import ResultHeader from "./ResultHeader";
import SpaceList from "./SpaceList";
import Pager from "./Pager";

function Result() {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
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
      const response = await fetch(`${BASE_URL}/${SPACE_FILE}`);

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

    loadSpaceList()
      .catch((err) => {
        setError(err.message);
        setSpaces([]);
      })
      .finally(() => {
        setPage(1);
      });

    window.scrollTo(0, 0);
  }, [searchText]);

  const sliceSpacesToPage = (spaces: Space[], page: number): Space[] => {
    const start = (page - 1) * SPACE_PER_PAGE;
    const end = start + SPACE_PER_PAGE;

    return spaces.slice(start, end);
  };

  return (
    <Container>
      <ResultHeader search={searchText} count={spaces.length} />

      {error ? (
        <Alert className="error">
          <FrownOutlined />
          <span>{error}</span>
        </Alert>
      ) : (
        <>
          <SpaceList spaces={sliceSpacesToPage(spaces, page)} />
          <Pager totalCount={spaces.length} page={page} setPage={setPage} />
        </>
      )}
    </Container>
  );
}

export default Result;

const Container = styled.main`
  width: 1194px;
  margin: auto;
  margin-top: 67px;
  padding-bottom: 120px;
`;

const Alert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
