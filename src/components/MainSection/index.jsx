import { withRouter } from "react-router-dom";
import { Container } from "./styles";

const MainSection = ({ history }) => {
  return (
    <Container>
      <div className="main-section">
        <div className="main-section-middle">
          <div className="ms-m-image">
            <img src="" alt="" />
          </div>
          <div className="ms-m-description">
            <h2>Designed for fashion. Crafted for sport.</h2>
            <p>
              We make products that effortlessly transition from day to night.
            </p>
            <button
              className="button is-black"
              id="shop-now"
              onClick={() => history.push("/products")}
            >
              STUDIO BAG
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(MainSection);
