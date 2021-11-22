import { Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHeroes } from "../actions/heroes";
import Pagination from "./Pagination";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Birth Year",
    dataIndex: "birth_year",
    key: "birth_year",
    sorter: (a, b) => a.birth_year.length - b.birth_year.length,
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
    sorter: (a, b) => a.height - b.height,
  },
  {
    title: "Mass",
    dataIndex: "mass",
    key: "mass",
    sorter: (a, b) => a.mass - b.mass,
  },
];

export default function TableHeroes({ data }) {
  const dispatch = useDispatch();
  let [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isFirst, setFirst] = useState(false);
  const [isLast, setLast] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      if (data.results.length === 0) {
        setFirst(true);
        setLast(true);
      }
      if (data.next === null) {
        setLast(true);
      }
      if (pageNumber === 1) {
        setFirst(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [pageNumber, data.next]);

  async function onNextPage() {
    try {
      setLoading(true);
      setPageNumber(++pageNumber);
      await dispatch(getHeroes(pageNumber));
      if (isFirst) {
        setFirst(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function onPreviousPage() {
    try {
      setLoading(true);
      setPageNumber(--pageNumber);
      await dispatch(getHeroes(pageNumber));
      if (isLast) {
        setLast(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={data.results}
        loading={isLoading}
        size="small"
        pagination={false}
      />
      <Pagination
        onNext={onNextPage}
        onPrevious={onPreviousPage}
        currentPage={pageNumber}
        isLast={isLast}
        isFirst={isFirst}
      />
    </>
  );
}
