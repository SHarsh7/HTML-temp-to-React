import React, { useState } from "react";
import "./css/styles.css";

function PortfolioItems({ name,img }) {
  const [showModel, setShowModel] = useState(false);

  const Modeldata = () => {
    return (
      <div
        className="portfolio-modal"
        id="portfolioModal1"
        aria-labelledby="portfolioModal1"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                onClick={() => {
                        setShowModel(!showModel);
                      }}
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {name}
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      className="img-fluid rounded mb-5"
                      src={img}
                      alt="..."
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setShowModel(!showModel);
                      }}
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div
        className="portfolio-item mx-auto"
        onClick={() => {
          setShowModel(!showModel);
        }}
      >
        {showModel ? (
          <Modeldata />
        ) : (
          <>
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={img} alt="..." />
          </>
        )}
      </div>
    </div>
  );
}

export default PortfolioItems;
