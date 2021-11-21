import { PageHeader } from "antd";
import "antd/dist/antd.css";

export default function Header() {
  return (
    <PageHeader
      className="site-page-header"
      style={{ backgroundColor: "#272b30" }}
      onBack={() => null}
      title={<div style={{ color: "#ffe300" }}>Star Wars Heroes</div>}
      backIcon={false}
    />
  );
}
