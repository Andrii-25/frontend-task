import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState, useEffect } from "react";
import { getHeroes } from "../actions/heroes";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Table from "../components/Table";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";

export default function TablePage() {
  const contentStyles = {
    width: "91%",
    minHeight: "100vh",
    marginLeft: "9%",
    padding: "50px",
  };

  const [collapsed, setCollapsed] = useState(true);

  const dispatch = useDispatch();
  const heroesData = useSelector((state) => state.heroes);

  useEffect(async () => {
    try {
      await dispatch(getHeroes(1));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Layout>
      <Header onClick={() => setCollapsed(!collapsed)} />
      <Layout>
        <Sider collapsed={collapsed} />
        <Content className="site-layout-background" style={contentStyles}>
          <Table data={heroesData} />
        </Content>
      </Layout>
    </Layout>
  );
}
