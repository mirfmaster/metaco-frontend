import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import fetchJson from "../../utils/fetchJson";
import "bootstrap/dist/css/bootstrap.min.css";
import { TeamExplorer } from "../../components";
import "./explorer.css";

const Explorer = () => {
  const leaderboardUrl = process.env.REACT_APP_API_URL + "/leaderboard";
  const [data, setData] = useState([]);
  useEffect(async () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let fetchData;
    let searchQuery = search ? "?search=" + search : "";
    if (state.type == "team") {
      fetchData = await fetchJson("get", leaderboardUrl + searchQuery);
    } else {
      fetchData = await fetchJson(
        "get",
        `http://127.0.0.1:3030/users${searchQuery}`
      );
    }

    setData(fetchData);
  };

  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(async () => {
    fetchData();
  }, [search]);

  const [state, setState] = useState({
    type: "team",
  });

  useEffect(async () => {
    await fetchData();
  }, [state.type]);

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <InputGroup>
            <Input
              placeholder="Search by Game ID/Captain Name"
              onChange={handleInput}
            />
            <InputGroupText>Search</InputGroupText>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button
            color={state.type == "team" ? "primary" : "secondary"}
            onClick={() => setState({ ...state, type: "team" })}
          >
            Team
          </Button>

          <Button
            style={{ marginLeft: "30px" }}
            color={state.type == "player" ? "primary" : "secondary"}
            onClick={() => setState({ ...state, type: "player" })}
          >
            Player
          </Button>
        </Col>
      </Row>
      <TeamExplorer data={data} type={state.type} />
    </Container>
  );
};

export default Explorer;
