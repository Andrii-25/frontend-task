import { Menu } from "antd";
import { HomeOutlined, TableOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export default function Sider({ collapsed }) {
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      style={{
        height: "100vh",
        position: "fixed",
        maxWidth: "200px",
        backgroundColor: "#1c1e22",
      }}
    >
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<TableOutlined />}>
        Table
      </Menu.Item>
    </Menu>
  );
}
