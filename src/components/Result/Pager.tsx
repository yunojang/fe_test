import React, { FC, useEffect } from "react";
import styled from "styled-components";

import arrowLeft from "../images/arrow_left.svg";
import arrowRight from "../images/arrow_right.svg";
import { SPACE_PER_PAGE } from "./constant/page";

interface Props {
  totalCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pager: FC<Props> = ({ totalCount, page, setPage }) => {
  const totalPage: number = Math.ceil(totalCount / SPACE_PER_PAGE);
  const pageList = [];

  for (let i = 1; i <= totalPage; i++) {
    pageList.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const decreasePage = () => {
    if (page <= 1) {
      return;
    }

    setPage(page - 1);
  };

  const increasePage = () => {
    if (page >= totalPage) {
      return;
    }

    setPage(page + 1);
  };

  return (
    <PagerUl>
      <li>
        <PageButton onClick={decreasePage}>
          <img src={arrowLeft} alt="prevpage" />
        </PageButton>
      </li>

      {pageList.map((p) => (
        <li
          key={p}
          className={p === page ? "now" : ""}
          onClick={() => setPage(p)}
        >
          {p}
        </li>
      ))}

      <li>
        <PageButton onClick={increasePage}>
          <img src={arrowRight} alt="nextpage" />
        </PageButton>
      </li>
    </PagerUl>
  );
};

export default React.memo(Pager);

const PagerUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  height: 34px;
  margin-top: 40px;
  font-size: 15px;
  color: #5e5e5e;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 100%;
    cursor: pointer;
  }

  li.now {
    background: #325cbc;
    border-radius: 50%;
    color: white;
  }
`;

const PageButton = styled.button`
  width: 100%;
  height: 100%;

  img {
    padding-top: 4px;
    width: 7px;
    height: auto;
  }
`;
