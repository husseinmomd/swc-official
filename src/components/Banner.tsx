export const Banner = () => {
  return (
    <>
      <div
        style={{
          border: "none",
        }}
        className="container main  "
      >
        <div
          style={{ width: "100%", position: "relative" }}
          className="img mt-5 d-md-flex d-none"
        >
          <img
            className="img1 "
            style={{
              width: "550px",
              position: "absolute",
              right: "100px",
              bottom: "135px",
              marginRight: "-95px",
            }}
            src="/assets/img/man.png"
            alt="hero"
          />

          <img
            style={{ width: "100%" }}
            src="/assets/img/hero1.png"
            alt="hero"
          />
          <div className="heroAnimation">
            <h1 className="brakets ">
              &lt; <span className="blink">_</span> /&gt;
            </h1>
          </div>
        </div>

        {/*        
        <h1 className="text-center">
          Lets Make this Developers <br />
          <span>Directory Better Together</span>
        </h1> */}
      </div>
      <div className="mb-4">
        <hr style={{ backgroundColor: "#999", width: "100%" }} />
      </div>
    </>
  );
};
