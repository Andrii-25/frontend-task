import { Row, Col, Button, Tooltip } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export default function Pagination({
  onNext,
  onPrevious,
  currentPage,
  isLast,
  isFirst,
}) {
  const stylesBtn = {
    margin: "3px",
  };

  const stylesCurrPage = {
    margin: "3px",
    pointerEvents: "none",
  };

  const stylesRow = {
    marginTop: "15px",
    marginBottom: "15px",
  };
  return (
    <Row style={stylesRow}>
      <Col span={24}>
        <Tooltip title="Previous">
          <Button
            style={stylesBtn}
            shape="circle"
            icon={<ArrowLeftOutlined />}
            size="large"
            onClick={onPrevious}
            disabled={isFirst ? true : false}
          />
        </Tooltip>
        <Tooltip title="Page">
          <Button style={stylesCurrPage} shape="round" size="large">
            {currentPage}
          </Button>
        </Tooltip>
        <Tooltip title="Next">
          <Button
            style={stylesBtn}
            shape="circle"
            icon={<ArrowRightOutlined />}
            size="large"
            onClick={onNext}
            disabled={isLast ? true : false}
          />
        </Tooltip>
      </Col>
    </Row>
  );
}
