import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Greeting from "../components/Greeting";
import "antd/dist/antd.css";

export default function MainPage() {
  const contentStyles = {
    width: "91%",
    minHeight: "100vh",
    marginLeft: "9%",
    padding: "50px",
  };

  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout>
      <Header onClick={() => setCollapsed(!collapsed)} />
      <Layout>
        <Sider collapsed={collapsed} selectedKeys={["1"]} openKeys={["sub1"]} />
        <Content className="site-layout-background" style={contentStyles}>
          <Greeting />
        </Content>
      </Layout>
    </Layout>
  );
}
