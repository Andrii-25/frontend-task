import { Menu } from "antd";
import { HomeOutlined, TableOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

export default function Sider({ collapsed, selectedKeys, openKeys }) {
  const styles = {
    height: "100%",
    position: "fixed",
    maxWidth: "9%",
    backgroundColor: "#3b4045",
  };

  return (
    <Menu
      defaultSelectedKeys={selectedKeys}
      defaultOpenKeys={openKeys}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      style={styles}
    >
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<TableOutlined />}>
        <Link to="/table">Table</Link>
      </Menu.Item>
    </Menu>
  );
}
