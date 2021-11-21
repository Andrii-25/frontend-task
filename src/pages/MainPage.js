import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Table from "../components/Table";
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
        <Sider collapsed={collapsed} />
        <Content className="site-layout-background" style={contentStyles}>
          <Table />
        </Content>
      </Layout>
    </Layout>
  );
}
