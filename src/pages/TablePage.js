import { message } from "antd";
import { useState, useEffect } from "react";
import { getHeroes } from "../actions/heroes";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import Table from "../components/Table";

export default function TablePage() {
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
    <AppLayout
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      selectedKeys={["2"]}
      openKeys={["sub2"]}
    >
      <Table
        data={heroesData}
        onNext={onNextPage}
        onPrevious={onPreviousPage}
        pageNumber={pageNumber}
        isLoading={isLoading}
      />
    </AppLayout>
  );
}
