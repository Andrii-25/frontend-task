import { PageHeader, Button, Tooltip, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function Header({ onClick }) {
  return (
    <PageHeader
      className="site-page-header"
      style={{ backgroundColor: "#1c1e22" }}
      title={
        <Row>
          <Tooltip title="Menu">
            <Button
              onClick={onClick}
              style={{ marginRight: "25px" }}
              type="primary"
              icon={<MenuOutlined />}
            />
          </Tooltip>
          <div style={{ color: "#ffe300" }}>Star Wars</div>
        </Row>
      }
      backIcon={false}
    />
  );
}
