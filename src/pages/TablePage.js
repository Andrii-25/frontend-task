import { Layout, message } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState, useEffect } from "react";
import { getHeroes } from "../actions/heroes";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sider from "../components/Sider";
import Table from "../components/Table";

export default function TablePage() {
  const contentStyles = {
    width: "91%",
    minHeight: "100vh",
    marginLeft: "9%",
    padding: "50px",
  };

  const dispatch = useDispatch();
  const heroesData = useSelector((state) => state.heroes);

  const [collapsed, setCollapsed] = useState(true);
  let [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      await dispatch(getHeroes(pageNumber));
      if (heroesData.error) {
        message.error(heroesData.error);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [pageNumber]);

  function onNextPage() {
    setPageNumber(++pageNumber);
  }

  function onPreviousPage() {
    setPageNumber(--pageNumber);
  }

  return (
    <Layout>
      <Header onClick={() => setCollapsed(!collapsed)} />
      <Layout>
        <Sider collapsed={collapsed} selectedKeys={["2"]} openKeys={["sub2"]} />
        <Content className="site-layout-background" style={contentStyles}>
          <Table
            data={heroesData}
            onNext={onNextPage}
            onPrevious={onPreviousPage}
            pageNumber={pageNumber}
            isLoading={isLoading}
          />
        </Content>
      </Layout>
    </Layout>
  );
}
