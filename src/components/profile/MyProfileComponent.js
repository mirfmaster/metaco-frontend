import { Col, Row } from "reactstrap";

const MyProfileComponent = () => {
  return (
    <div className="_tab-my-profile">
      <Row>
        <Col sm={12} md={12} lg={6}>
          <div class="_component-turney-performance">
            <div class="_top">
              <div class="_turney-performance-title">Performa Turnamen</div>
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
                <div class="_empty-game-text">Tambahkan game favoritmu</div>
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
                <div class="_empty-game-text">Tambahkan keahlianmu</div>
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
                <button type="button" class="btn btn-outline-secondary">
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
  );
};
export default MyProfileComponent;
