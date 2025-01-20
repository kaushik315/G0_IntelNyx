import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, dataservices } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const [visibleServices, setVisibleServices] = useState(3); // Default limit

  useEffect(() => {
    // Adjust services based on screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleServices(2); // Show 2 items on small screens
      } else if (window.innerWidth < 1024) {
        setVisibleServices(3); // Show 3 items on medium screens
      } else {
        setVisibleServices(4); // Show 4 items on large screens
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize); // Listen for resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="h_bg-image order-1 order-lg-2 h-100">
            {/* Limited Services Display */}
            <div className="mb-5 po_items_ho services-section">
              {dataservices.slice(0, visibleServices).map((data, i) => (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link}>view project</a>
                  </div>
                </div>
              ))}
            </div>

            {/* More Services Button */}
            <div className="text-center mt-3 more-services-container">
              <Link to="/services">
                <button className="more_services_btn">More Services</button>
              </Link>
            </div>
          </div>

          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/services" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      Our Services
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Us
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
