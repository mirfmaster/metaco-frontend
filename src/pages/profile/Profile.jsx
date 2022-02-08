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
import {
  AccountComponent,
  MyProfileComponent,
  MyTeamComponent,
  TeamExplorer,
} from "../../components";
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

  const [state, setState] = useState({
    activeTab: "profile",
  });

  const handleActiveTab = (key) => {
    setState({
      ...state,
      activeTab: key,
    });
  };

  const isActiveTab = (key) => {
    return key == state.activeTab;
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
                        {profile.team_members?.roles}
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
                    class={"_button" + (isActiveTab("profile") ? " hidup" : "")}
                    onClick={() => handleActiveTab("profile")}
                  >
                    My Profile
                  </a>
                  <a
                    class={"_button" + (isActiveTab("myteam") ? " hidup" : "")}
                    onClick={() => handleActiveTab("myteam")}
                  >
                    My Team
                  </a>
                  <a
                    class={"_button" + (isActiveTab("account") ? " hidup" : "")}
                    onClick={() => handleActiveTab("account")}
                  >
                    Account
                  </a>
                </div>
              </div>
              <div className="_main-content">
                {isActiveTab("profile") ? (
                  <MyProfileComponent />
                ) : isActiveTab("myteam") ? (
                  <MyTeamComponent />
                ) : (
                  <AccountComponent profile={profile} />
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
