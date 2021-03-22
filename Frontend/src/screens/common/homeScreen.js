import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";
import first9 from "../../image/first9.png";
import B1 from "../../image/Blue and Purple Casual Corporate App Development Startup Facebook Post.png";
import B2 from "../../image/Blue and Purple Casual Corporate App Development Startup Facebook Post (2).png";
import B3 from "../../image/Blue and Purple Casual Corporate App Development Startup Facebook Post (3).png";
import cam from "../../image/camera.png";
import cam1 from "../../image/camera (1).png";
import cam2 from "../../image/camera (2).png";
import cam3 from "../../image/camera (3).png";

import AIX from "../../image/iphone8.png";
import AI11 from "../../image/iphone11.png";
import AI12M from "../../image/iphone12mini.png";
import AI12 from "../../image/iphone12.png";

import bose1 from "../../image/bose1.png";

import cl1 from "../../image/company-logo (1).png";
import cl2 from "../../image/company-logo (2).png";
import cl3 from "../../image/company-logo (3).png";
import cl4 from "../../image/company-logo (4).png";
import cl5 from "../../image/company-logo (5).png";

const HomeScreen = (props) => {
  const allProductStore = useSelector((state) => state.allProductStore);
  const { response, loading, error } = allProductStore;

  if (response != null) {
    const cartItems = response.data;
    console.log(cartItems);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect");
    dispatch(getProductList());
  }, []);

  const addToCartHandler = (p) => {
    console.log("in addToCartHandler :" + p);
    dispatch(addToCart(p.prod_id, "1"));
    props.history.push("/cart");
  };

  return (
    <div>
      <div class="header">
        <div class="container"></div>
        <div
          className="row"
          style={{ color: "#000000", background: "#ffd5d7" }}
        >
          <div
            className="col-2"
            style={{ paddingTop: "25px", paddingBottom: "2px" }}
          >
            <h1>
              Transforming Shopping <br />
              Into An Experience.
            </h1>
            <br />
            <p style={{ color: "#000000" }}>
              <b>
                Latest Online Gadgets at TechNeo Electronics where you can get
                latest mobiles, laptops, designs of phone covers, screen
                protector, selfie sticks and much more gaming equipment at
                affordable prices.{" "}
              </b>
            </p>
            <a href="" className="btn1">
              <b>Explore Now</b>
            </a>
          </div>
          <div className="col-2">
            <img src={first9}></img>
          </div>
        </div>
      </div>

      {/* featured categories  */}

      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={B1} />
            </div>
            <div className="col-3">
              <img src={B2} />
            </div>
            <div className="col-3">
              <img src={B3} />
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}
        {/* --------------------------feature product-------- */}

        <div className="small-container">
          <h1 className="title1">Product List</h1>

          <div className="row">
            {response &&
              response.data &&
              response.data.length > 0 &&
              response.data.map((p) => {
                {
                  console.log("image url");
                  console.log("http://localhost:4000/" + p.photo);
                }
                return (
                  <div className="col-4">
                    <img
                      src={"http://localhost:4000/" + `${p.photo}`}
                      className=" cover rounded mx-auto d-block img-fluid"
                      alt="Image Loading Failed"
                      width="300px"
                      height="300px"
                    />
                    <div className="card-body">
                      <div>
                        <Link to={`/productdetails/${p.prod_id}`}>
                          <h4>
                            <strong>{p.prod_title}</strong>
                          </h4>
                        </Link>
                      </div>
                      <br />
                      <div className="rating">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>{" "}
                      <br />
                      <p style={{ textAlign: "center" }}>Rs - {p.prod_price}</p>
                      <button
                        onClick={() => addToCartHandler(p)}
                        className="btn2 "
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>

       
        </div>

        {/* ------------------------offer----------------- */}

        <div className="offer">
          <div className="small-container">
            <div className="row">
              <div className="col-2">
                <img src={bose1} />
              </div>
              <div className="col-2">
                <h4>Exclusively Avalaible on TechNeo Electronics</h4>
                <h1>Bose Wireless Headphone</h1>
                <small>
                  Bose SoundSport Free, True Wireless Earbuds, (Sweatproof
                  Bluetooth Headphones for Workouts and Sports), Midnight
                  Blue/Citron, Up to 5 hours of play time with each charge and
                  an additional 10 hours with the included charging case
                </small>
                <br />
                <a href="" className="btn2">
                  <b>Buy Now</b>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* -------------testimonials--------------- */}

        <div className="testimonials">
          <br />
          <br />
          <h1 className="title1">Testimonials</h1>

          <div className="small-container">
            <div className="row">
              <div className="col-3">
                <i
                  className="fa fa-quote-left"
                  aria-hidden="true"
                  style={{ size: "100px" }}
                ></i>
                <p>
                  TechNeo Electronics is a very good online shopping website. I
                  am using TechNeo Electronics since 7 years and I have bought
                  so many products. Recently, I have bought a smartphone worth
                  rupees 4000 which I have found defective product.
                </p>{" "}
                <br />
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
                <br />
                <h4>Jay Mehata</h4>
              </div>

              <div className="col-3">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <p>
                  I had ordered a TV, Laptop, Mobile from TechNeo Electronics.
                  In my experience that is a good comment. The product is all
                  good but expensive but not as expensive as Amazon. The
                  delivery boy is Friendly.
                </p>{" "}
                <br />
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>{" "}
                <br />
                <h4>Sakshi Roy</h4>
              </div>
              <div className="col-3">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <p>
                  I purchased many things from TechNeo Electroics as campare to
                  other online sites/apps it has fast delivery that I like the
                  most. the items they deliver always packed very safely. the
                  details of items shown in TechNeo Electroics app is also good.
                </p>{" "}
                <br />
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>{" "}
                <br />
                <h4>Vishwas Jain</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------Brands-------------------- */}

      <div className="brands1">
        <div className="brands">
          <div className="small-container">
            <div className="row">
              <div className="col-5">
                <img src={cl5} />
              </div>

              <div className="col-5">
                <img src={cl4} />
              </div>

              <div className="col-5">
                <img src={cl3} />
              </div>
              <div className="col-5">
                <img src={cl2} />
              </div>

              <div className="col-5">
                <img src={cl1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
