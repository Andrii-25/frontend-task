import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Table from "../components/Table";
import "antd/dist/antd.css";

export default function MainPage() {
  const styles = {
    width: "91%",
    height: "100%",
    marginLeft: "9%",
    padding: "50px",
  };

  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Content className="site-layout-background" style={styles}>
          <Table />
        </Content>
      </Layout>
    </Layout>
  );
}
