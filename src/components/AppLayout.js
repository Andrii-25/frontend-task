import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";
import Header from "./Header";
import Sider from "./Sider";

export default function AppLayout({
  children,
  onCollapse,
  collapsed,
  selectedKeys,
  openKeys,
}) {
  const StyledContent = styled(Content)`
    width: 91%;
    min-height: 100vh;
    margin-left: 9%;
    padding: 50px;
  `;
  return (
    <Layout>
      <Header onClick={onCollapse} />
      <Layout>
        <Sider
          collapsed={collapsed}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
        />
        <StyledContent className="site-layout-background">
          {children}
        </StyledContent>
      </Layout>
    </Layout>
  );
}
