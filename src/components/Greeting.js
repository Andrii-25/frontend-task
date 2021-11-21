import { Typography, Image, Row, Col } from "antd";
import { useEffect, useState } from "react";
import img from "../star-wars.jpg";

export default function Greeting() {
  const [hour, setHour] = useState(null);

  function getHour() {
    const date = new Date();
    const currentHour = date.getHours();
    setHour(currentHour);
  }

  useEffect(() => {
    getHour();
  }, []);

  const apiLink = <a href="https://swapi.dev/">public API</a>;

  return (
    <>
      <Typography.Title>
        {hour < 12 ? "Good Morning! " : "Good evening! "}
        Welcome to React app that gets data of Star Wars heroes and displays
        them in a table using {apiLink}.
      </Typography.Title>
      <Row>
        <Image preview={false} height={350} src={img} />
      </Row>
    </>
  );
}
