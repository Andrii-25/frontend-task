import { useState } from "react";
import Greeting from "../components/Greeting";
import AppLayout from "../components/AppLayout";

export default function MainPage() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <AppLayout
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      selectedKeys={["1"]}
      openKeys={["sub1"]}
    >
      <Greeting />
    </AppLayout>
  );
}
