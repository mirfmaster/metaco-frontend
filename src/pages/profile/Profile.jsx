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
import "./profile.css";
import { useParams } from "react-router-dom";
import { RiEditFill } from "react-icons/ri";

const Profile = (props) => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  useEffect(async () => {
    let fetchData = await fetchJson(
      "get",
      process.env.REACT_APP_API_URL + "/users/" + params.profileId
    );
    console.log(fetchData);
    setProfile(fetchData);
  }, []);

  const fetchData = async () => {};

  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(async () => {
    fetchData();
  }, [search]);

  const [state, setState] = useState({
    activeTab: "profile",
  });

  useEffect(async () => {
    await fetchData();
  }, [state.type]);

  const handleActiveTab = (key) => {
    setState({
      ...state,
      activeTab: key,
    });
  };

  const isActiveTab = (key) => {
    return key == state.activeTab ? " hidup" : "";
  };
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={7}>
          <div className="_component-profile-bio">
            <Row>
              <Col sm={12} md={4} lg={4}>
                <div className="_profile-picture">
                  <img
                    class="_image"
                    src="https://metaco.gg/images/profile/default-profile-picture.png"
                    alt="profile-picture"
                    draggable="false"
                  />
                </div>
              </Col>
              <Col sm={12} md={8} lg={8}>
                <div className="_profile-name">
                  <div class="_inline-comp">
                    <div class="_name">{profile.name}</div>
                    <div class="_btn-edit">
                      <RiEditFill />
                    </div>
                  </div>
                  <div class="_nameTag">{profile.email}</div>
                  <div class="_about">About</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={12} md={12} lg={5}>
          <div className="_wrapper_squad">
            <Row>
              <Col sm={6} md={6} lg={6}>
                <div className="_component_squad">
                  <div className="_squad-title">Team Kamu</div>
                  <div className="_squad-content">
                    <div className="_empty-squad">
                      <div className="_empty-text">Buat Team</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <div className="_component-squad">
                  <div className="_squad-title">Posisi</div>
                  <div className="_squad-content">
                    <div className="_empty-position">
                      <div className="_empty-position-text">
                        <img
                          className="_empty-position-logo"
                          src="https://metaco.gg/images/profile/capt-icon.svg"
                          alt="capt"
                        />
                        Captain
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <div className="_component-profile-content">
            <div className="_profile-content">
              <div className="_menu-tab">
                <div class="_button-tab">
                  <a
                    class={"_button" + isActiveTab("profile")}
                    onClick={() => handleActiveTab("profile")}
                  >
                    My Profile
                  </a>
                  <a
                    class={"_button" + isActiveTab("myteam")}
                    onClick={() => handleActiveTab("myteam")}
                  >
                    My Team
                  </a>
                  <a
                    class={"_button" + isActiveTab("account")}
                    onClick={() => handleActiveTab("account")}
                  >
                    Account
                  </a>
                </div>
              </div>
              <div className="_main-content">
                <div className="_tab-my-profile">
                  <Row>
                    <Col sm={12} md={12} lg={6}>
                      <div class="_component-turney-performance">
                        <div class="_top">
                          <div class="_turney-performance-title">
                            Performa Turnamen
                          </div>
                        </div>
                        <div class="_bottom">
                          <div class="_blue-box">
                            <div class="_point">
                              <div class="_score">70</div>
                              <div class="_name">Penampilan</div>
                            </div>
                            <img
                              class="_vertical-line"
                              src="https://metaco.gg/images/profile/vertical-line.png"
                              alt="line"
                            />
                            <div class="_point">
                              <div class="_score">33</div>
                              <div class="_name">3 Besar</div>
                            </div>
                            <img
                              class="_vertical-line"
                              src="https://metaco.gg/images/profile/vertical-line.png"
                              alt="line"
                            />
                            <div class="_point">
                              <div class="_score">20</div>
                              <div class="_name">Juara Satu</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="_component-games">
                        <div class="_games-title">Games</div>
                        <div class="_games-content">
                          <div class="_games-comp">
                            <div class="_add-game">
                              <img
                                class="_icon-add"
                                src="https://metaco.gg/images/profile/plus.png"
                                alt="add game"
                              />
                            </div>
                            <div class="_empty-game-text">
                              Tambahkan game favoritmu
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="_component-games">
                        <div class="_games-title">Keahlian</div>
                        <div class="_games-content">
                          <div class="_games-comp">
                            <div class="_add-game">
                              <img
                                class="_icon-add"
                                src="https://metaco.gg/images/profile/plus.png"
                                alt="add game"
                              />
                            </div>
                            <div class="_empty-game-text">
                              Tambahkan keahlianmu
                            </div>
                          </div>
                        </div>
                        <div class="_component-badge">
                          <div class="_badge-title">
                            Kumpulan Badges{" "}
                            <img
                              style={{ cursor: "pointer" }}
                              src="https://metaco.gg/images/profile/info.svg"
                              alt="info"
                            />{" "}
                          </div>
                          <div class="_badge-content">
                            <div class="_wrapper-image-badge">
                              <img
                                class="_image-badge"
                                src="https://metaco.gg/images/profile/lock-badge.png"
                                alt="badge"
                                draggable="false"
                              />
                              <div class="_text-badge">?</div>
                            </div>
                            <div class="_wrapper-image-badge">
                              <img
                                class="_image-badge"
                                src="https://metaco.gg/images/profile/lock-badge.png"
                                alt="badge"
                                draggable="false"
                              />
                              <div class="_text-badge">?</div>
                            </div>
                            <div class="_wrapper-image-badge">
                              <img
                                class="_image-badge"
                                src="https://metaco.gg/images/profile/lock-badge.png"
                                alt="badge"
                                draggable="false"
                              />
                              <div class="_text-badge">?</div>
                            </div>
                            <div class="_wrapper-image-badge">
                              <img
                                class="_image-badge"
                                src="https://metaco.gg/images/profile/lock-badge.png"
                                alt="badge"
                                draggable="false"
                              />
                              <div class="_text-badge">?</div>
                            </div>
                            <div class="_wrapper-image-badge">
                              <img
                                class="_image-badge"
                                src="https://metaco.gg/images/profile/lock-badge.png"
                                alt="badge"
                                draggable="false"
                              />
                              <div class="_text-badge">?</div>
                            </div>
                          </div>
                        </div>
                        <div class="_component-certificate">
                          <div class="_certificate-title">E-CERTIFICATE</div>
                          <div class="_certificate-content">
                            <button
                              type="button"
                              class="btn btn-outline-secondary"
                            >
                              <img
                                src="https://metaco.gg/images/profile/download.png"
                                alt="download"
                              />
                              DOWNLOAD E-CERTIFICATE
                            </button>
                          </div>
                        </div>
                        {/* <Col sm={12} md={12} lg={6}>

                        </Col> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
