import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import fetchJson from "../../utils/fetchJson";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const leaderboardUrl = process.env.REACT_APP_API_URL + "/leaderboard";
  const teamUrl = process.env.REACT_APP_API_URL + "/teams";
  const [leaderboard, setLeaderboard] = useState([]);
  const [teams, setTeams] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  useEffect(async () => {
    fetchLeaderboard();
    let fetchTournaments = await fetchJson(
      "get",
      process.env.REACT_APP_API_URL + "/tournaments"
    );
    setTournaments(fetchTournaments);
  }, []);

  const fetchLeaderboard = async () => {
    let fetchLeaderboard = await fetchJson("get", leaderboardUrl);
    setLeaderboard(fetchLeaderboard);
  };

  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(async () => {
    let withSearch = search ? "?search=" + search : "";
    let fetchData = await fetchJson("get", leaderboardUrl + withSearch);
    setLeaderboard(fetchData);
  }, [search]);

  const [state, setState] = useState({
    openModal: false,
    flagSubmit: false,
    tournament_id: "",
    team_id: "",
    position: "",
  });

  const handleSelect = (key) => (e) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };

  useEffect(async () => {
    let fetchTeams = await fetchJson(
      "get",
      teamUrl +
        "?where=" +
        JSON.stringify({
          tournament_id: state.tournament_id,
        })
    );
    setTeams(fetchTeams);
  }, [state.tournament_id]);

  const handleSubmit = async () => {
    setState({
      ...state,
      flagSubmit: true,
    });
    let { flagSubmit, openModal, ...data } = state;
    let submit = await fetchJson("POST", leaderboardUrl, data);

    fetchLeaderboard();
    setState({
      ...state,
      flagSubmit: false,
      openModal: false,
    });
  };

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
        <Col>
          <div>
            <Button
              color="primary"
              onClick={() => {
                setState({
                  ...state,
                  openModal: !state.openModal,
                });
              }}
            >
              Input Tournament Result
            </Button>
            <Modal
              isOpen={state.openModal}
              toggle={() => {
                setState({
                  ...state,
                  openModal: !state.openModal,
                });
              }}
            >
              <ModalHeader
                toggle={() => {
                  setState({
                    ...state,
                    openModal: !state.openModal,
                  });
                }}
              >
                Input Tournament Result
              </ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label for="exampleSelect">Select Tournaments</Label>
                  <Input
                    id="exampleSelect"
                    name="tournament_id"
                    type="select"
                    onChange={handleSelect("tournament_id")}
                  >
                    <option value="" disabled>
                      Select Tournament Title
                    </option>
                    {tournaments.map((t) => {
                      return (
                        <option value={t.id} key={t.title}>
                          {t.title}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select Teams</Label>
                  <Input
                    id="exampleSelect"
                    name="team_id"
                    type="select"
                    onChange={handleSelect("team_id")}
                  >
                    <option value="">Select Team Name</option>
                    {teams.map((t) => {
                      return (
                        <option value={t.id} key={t.name}>
                          {t.name}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Position</Label>
                  <Input
                    id="exampleSelect"
                    name="position"
                    type="select"
                    onChange={handleSelect("position")}
                  >
                    <option value="">Select rank of the result</option>
                    {state.team_id && (
                      <>
                        <option value="1">[5pt] Position 1</option>
                        <option value="2">[3pt] Position 2</option>
                        <option value="3">[2pt] Position 3</option>
                      </>
                    )}
                  </Input>
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  color={
                    !state.flagSubmit && state.position
                      ? "primary"
                      : "secondary"
                  }
                  onClick={
                    !state.flagSubmit && state.position
                      ? handleSubmit
                      : undefined
                  }
                >
                  Submit
                </Button>
                {/* <Button >Cancel</Button> */}
              </ModalFooter>
            </Modal>
          </div>
        </Col>
      </Row>

      <Table bordered responsive className="bg-light">
        <thead>
          <tr>
            <th style={{ width: "50px" }}>Rank</th>
            <th>Tim / Game ID</th>
            <th>Kapten</th>
            <th>Poin</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((data, index) => {
            return (
              <tr key={data.name}>
                <th scope="row">{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.captain_name}</td>
                <td>{data.total_point ?? 0}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
