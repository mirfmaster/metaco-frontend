import { Col, Container, Row } from "reactstrap";
import CardExplorer from "./CardExplorer";

export default function TeamExplorer(props) {
  const { data, type } = props;
  return (
    <>
      <Container
        style={{
          backgroundColor: "#252525",
          color: "white",
        }}
      >
        <Row>
          {data.map((item) => {
            return (
              <Col xs={6} md={3} lg={2} key={item.name}>
                <CardExplorer data={item} type={type} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
