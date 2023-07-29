import { useNavigate } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  const navigation = useNavigate();

  function goToNextPage() {
    navigation("/Products");
  }
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src="/Assets/image1.jpeg" className="card-img" alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New Season Arrivals
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <button onClick={goToNextPage}> Products</button>
      <Products />
    </div>
  );
};

export default Home;
