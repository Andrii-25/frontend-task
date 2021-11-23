import { Table } from "antd";
import Pagination from "./Pagination";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Birth Year",
    dataIndex: "birth_year",
    key: "birth_year",
    sorter: (a, b) => a.birth_year.localeCompare(b.birth_year),
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

export default function TableHeroes({
  data,
  onNext,
  onPrevious,
  pageNumber,
  isLoading,
}) {
  const isFirstPage = pageNumber === 1;
  const isLastPage = data.next === null || data.length === 0;

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
        onNext={onNext}
        onPrevious={onPrevious}
        currentPage={pageNumber}
        isLast={isLastPage}
        isFirst={isFirstPage}
        isLoading={isLoading}
      />
    </>
  );
}
