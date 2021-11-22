import { Typography, Image, Row } from "antd";
import img from "../star-wars.jpg";

export default function Greeting() {
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning!";
    } else if (hour < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  }

  const apiLink = <a href="https://swapi.dev/">public API</a>;

  return (
    <>
      <Typography.Title>
        {`${getGreeting()} `}
        Welcome to React app that gets data of Star Wars heroes and displays
        them in a table using {apiLink}.
      </Typography.Title>
      <Row>
        <Image preview={false} height={350} src={img} />
      </Row>
    </>
  );
}
