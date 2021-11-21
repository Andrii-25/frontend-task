import { Table } from "antd";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Birth Year",
    dataIndex: "birth_year",
    sorter: (a, b) => a.birth_year.length - b.birth_year.length,
  },
  {
    title: "Height",
    dataIndex: "height",
    sorter: (a, b) => a.height - b.height,
  },
  {
    title: "Mass",
    dataIndex: "mass",
    sorter: (a, b) => a.mass - b.mass,
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function TableHeroes() {
  const heroes = useSelector((state) => state.heroes);
  return (
    <Table
      columns={columns}
      dataSource={heroes.results}
      onChange={onChange}
      loading={false}
      size="small"
      pagination={{ position: ["bottomRight"] }}
    />
  );
}
