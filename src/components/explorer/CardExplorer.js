import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function CardExplorer(props) {
  const { data, type } = props;
  return (
    <div>
      <Card className="card-explorer">
        <CardBody className="card-explorer__body">
          <CardImg
            className="card-explorer__image"
            alt={"Profile " + data.name}
            src={
              (data.logo || data.picture) ??
              "https://metaco.gg/images/default-image-reward-thumb.svg"
            }
          />
          <CardSubtitle className="card-explorer__name" tag="h6">
            {data.name}
          </CardSubtitle>
          {type == "team" && (
            <>
              <CardText className="card-explorer__game">
                Juara {data.title}
              </CardText>
              <CardText className="card-explorer__points">
                {data.total_point ?? 0} Point
              </CardText>
            </>
          )}
          <Link to={"/profile/" + data.id}>
            <Button className="card-explorer__button">LIHAT PROFILE</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
