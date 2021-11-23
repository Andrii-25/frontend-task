import { Row, Col, Button, Tooltip } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styled from "styled-components";

export default function Pagination({
  onNext,
  onPrevious,
  currentPage,
  isLast,
  isFirst,
  isLoading,
}) {
  const SwitchButton = styled(Button)`
    margin: 3px;
  `;

  const PageIndicator = styled(Button)`
    margin: 3px;
    pointer-events: none;
  `;

  const Wrapper = styled(Row)`
    margin-top: 15px;
    margin-bottom: 15px;
  `;

  return (
    <Wrapper>
      <Col span={24}>
        <Tooltip title="Previous">
          <SwitchButton
            shape="circle"
            icon={<ArrowLeftOutlined />}
            size="large"
            onClick={onPrevious}
            disabled={isFirst || isLoading ? true : false}
          />
        </Tooltip>
        <Tooltip title="Page">
          <PageIndicator shape="round" size="large">
            {currentPage}
          </PageIndicator>
        </Tooltip>
        <Tooltip title="Next">
          <SwitchButton
            shape="circle"
            icon={<ArrowRightOutlined />}
            size="large"
            onClick={onNext}
            disabled={isLast || isLoading ? true : false}
          />
        </Tooltip>
      </Col>
    </Wrapper>
  );
}
