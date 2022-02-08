const CardLeaderboard = ({ data, position }) => {
  return (
    <>
      <div class="_list-table">
        <table class="_table-winner">
          <tbody>
            <tr>
              <td class="pl-3" width="100px" align="center">
                {position == 1 ? (
                  <WinnerLogo position={1} />
                ) : position == 2 ? (
                  <WinnerLogo position={2} />
                ) : position == 3 ? (
                  <WinnerLogo position={3} />
                ) : (
                  position
                )}
              </td>
              <td width="100px">
                <img
                  src={
                    "https://metaco.gg/images/default-image-reward-thumb.svg"
                  }
                  className="_team-logo"
                />
              </td>
              <td width="450px" style={{ textAlign: "left", paddingLeft: 12 }}>
                {data.name}
              </td>
              <td style={{ textAlign: "left", paddingLeft: 12 }}>
                {data.captain_name}
              </td>
              <td width="80px">{data.total_point ?? 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const WinnerLogo = ({ position, alt = "dummy" }) => {
  console.log(position);
  return (
    <img
      class="_winner-logo"
      width="100px"
      src={`https://metaco.gg/images/leaderboard/${position}.png`}
      alt={alt}
    />
  );
};

export default CardLeaderboard;
