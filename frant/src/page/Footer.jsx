const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#11813e" }}
        className="container-fluid bor-Rad text-white "
      >
        <div className="row ">
          <div className="col-md-8">
            <div className="row mt-3">
              <div className="col text-center ">
                <img
                  className="img-fluid w-50"
                  src="https://www.kisankonnect.in/assets/img/Kisankonnect_logo_footer.png"
                  alt=""
                />
              </div>
              <div className="col">
                <h4>Menu</h4>

                <h6 className="mt-3">Home</h6>
                <h6>About Us</h6>
                <h6>Contact Us</h6>
                <h6>FAQs</h6>
                <h6>Why KisanKonnect?</h6>
              </div>
              <div className="col">
                <h4>Contacts</h4>
                <h5>KisanKonnect Corporate Office</h5>
                <h6>Plot no. C-10, TTC Industrial Estate,</h6>{" "}
                <h6>MIDC, Pawne, Koperkhairne, Navi Mumbai,</h6>
                <h6>Maharashtra - 400705</h6>
                <h6>1800 267 0997</h6>
                <h6>customercare@kisankonnect.in</h6>
              </div>
            </div>
            <div className="col-md-12  mt-3 text-center my-auto">
              <div className="row justify-content-center text-center my-auto">
                <div className="col-12 fs-2 mt-3">DOWNLOAD THE APP</div>
                <div className="col-md-2 text-center my-auto mt-5">
                  <img
                    className="img-fluid"
                    src="https://www.kisankonnect.in/assets/img/App-store.png"
                    alt=""
                  />
                </div>
                <div className="col-md-2 text-center my-auto mt-5">
                  <img
                    className="img-fluid"
                    src="https://www.kisankonnect.in/assets/img/Google-play.png"
                    alt=""
                  />
                </div>
                <div className="col-md-2 text-center my-auto fs-3 mt-5">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  <span className="fw-bold">In</span>
                </div>
              </div>

              <h6 className="mt-5">
                © 2023, KisanKonnect | Privacy Policy | Sitemap | Terms &
                Conditions
              </h6>
            </div>
          </div>
          <div className="col-4 d-none d-md-block">
            <img
              className="text-center w-75"
              src="https://www.kisankonnect.in/assets/img/footer-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
