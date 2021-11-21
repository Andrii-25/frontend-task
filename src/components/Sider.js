import { Menu } from "antd";
import {
  HomeOutlined,
  TableOutlined,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

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
      <Menu.Item key="3" icon={<GithubFilled />}>
        <a href="https://github.com/Andrii-25/frontend-task" target="_blank">
          Github
        </a>
      </Menu.Item>
      <Menu.Item key="4" icon={<LinkedinFilled />}>
        <a href="https://www.linkedin.com/in/andrii-kotsupyr/" target="_blank">
          LinkedIn
        </a>
      </Menu.Item>
    </Menu>
  );
}
