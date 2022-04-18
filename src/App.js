import { useState, useRef, useEffect } from "react";
import ActiveLine from "./components/Active";
import DisabledLine from "./components/Disabled";
import Logo from "./assets/img/logo.png";
import Flw from "./assets/img/flutterwave.svg";
import Sidebar from "./assets/img/Header-Sidebar.png";
import ScrollImage from "./assets/img/middle-scrollable.png";
import Sdk from "./assets/img/SDK_Dash.png";
import Phone from "./assets/img/Phone.png";
import Facebook from "./assets/img/FB.png";
import Instagram from "./assets/img/IG.png";
import LinkedIn from "./assets/img/In.png";
import Twitter from "./assets/img/Tw.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowRight } from "react-icons/hi";

function App() {
  const [Active, setActive] = useState(1);

  const ImageRef = useRef();

  gsap.registerPlugin(ScrollTrigger); //register the plugin

  useEffect(() => {
    gsap.fromTo(
      ImageRef.current,
      {
        y: "0%",
        ease: "linear",
        scrollTrigger: {
          trigger: document.querySelector("#ScrollImage"),
          scrub: true,
        },
      },
      {
        y: "-50%",
        ease: "linear",
        scrollTrigger: {
          trigger: document.querySelector("#ScrollImage"),
          scrub: true,
        },
      }
    );
  }, []);

  //Check which tab is active
  const tab = (index) => {
    if (index === Active) {
      return true;
    }
  };

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector(".App_Container"),
  //     getDirection: true,
  //   });
  //   scroll.on("call", () => {
  //     gsap.to(ImageRef.current, { duration: 5, y: `-40%` });
  //   });
  // });
  return (
    <div className="App">
      <nav className="App_Nav">
        <img src={Logo} alt="logo" className="App_NavLogo" />
        <div className="App_NavLink">
          <a href=".">Products</a>
          <a href=".">Pricing</a>
          <a href=".">Developers</a>
          <a href=".">Company</a>
        </div>
        <div className="App_NavButton">
          <button name="login" className="Btn_White">
            Login
          </button>
          <button name="login" className="Btn_Blue">
            Sign Up
          </button>
        </div>

        {/* For mobile only */}
        <div className="App_NavButton_Mobile">
          <div className="Line_Short"></div>
          <div className="Line_Long"></div>
        </div>
      </nav>

      {/* Main container */}
      <div className="App_Container">
        <h1 className="Hero_Text">One integration,</h1>
        <h1 className="Hero_Text">
          access to <span className="Hero_Color">all businesses</span>
        </h1>
        <h4 className="Hero_Text_Small">
          Send money to anyone; Fund your account; Pay for items from any
          business - all available on Thepeer
        </h4>
        <div className="Hero_Partner">
          Official business partner{" "}
          <img src={Flw} alt="flutterwave" className="Flw_Logo" />
        </div>

        <div className="Hero_Image" id="Hero">
          <img src={Sidebar} alt="Sidebar" className="Hero_Image_Side" />
          <img
            src={ScrollImage}
            alt="Main"
            className="Hero_Image_Main"
            id="ScrollImage"
            ref={ImageRef}
            data-scroll
            data-call="scroll"
          />
        </div>

        <div className="Hero_Connect">
          <h2>
            Connecting the world, one{" "}
            <span className="Hero_Color">business</span> to the other
          </h2>

          <h4 className="Hero_Text_Small">
            See how your customers would use Thepeer on your application
          </h4>
        </div>

        <div className="App_Use_Main">
          <div className="App_Use">
            {/* First tab */}
            <div className="App_Single" onClick={() => setActive(1)}>
              {tab(1) ? <ActiveLine /> : <DisabledLine />}
              <div className="App_Text">
                <h1 style={tab(1) ? { color: "#0066ff" } : { color: "#000" }}>
                  Send money to other businesses
                </h1>
                {tab(1) && (
                  <p>
                    We enable your customers to send money without hassle to
                    other business apps of their choice with your business
                    getting settled instantly. It is that simple.
                  </p>
                )}
              </div>
            </div>
            {/* Second tab */}
            <div className="App_Single" onClick={() => setActive(2)}>
              {tab(2) ? <ActiveLine /> : <DisabledLine />}
              <div className="App_Text">
                <h1 style={tab(2) ? { color: "#0066ff" } : { color: "#000" }}>
                  Link your account
                </h1>
                {tab(2) && (
                  <p>
                    Your customers can link their various accounts on other
                    businesses with ease. With this, each customer is able to
                    allow the apps interact with each other seamlessly.
                  </p>
                )}
              </div>
            </div>
            {/* Third Tab */}
            <div className="App_Single" onClick={() => setActive(3)}>
              {tab(3) ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="9.5" stroke="#0066FF"></circle>
                  <circle cx="10" cy="10" r="5" fill="#0066FF"></circle>
                </svg>
              ) : (
                <div className="Disabled_Selector">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="9.5" stroke="#0066FF"></circle>
                    <circle cx="10" cy="10" r="5" fill="#0066FF"></circle>
                  </svg>{" "}
                </div>
              )}
              <div className="App_Text">
                <h1 style={tab(3) ? { color: "#0066ff" } : { color: "#000" }}>
                  Direct charge
                </h1>
                {tab(3) && (
                  <p>
                    Let your customers pay anywhere and anytime at their
                    convenience. Direct charge are now easier with Thepeer and
                    our platform encourages customers to structure payments on
                    their own schedule.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div>
            <img src={Phone} alt="Phone" className="Phone" />
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="Gray_Container">
        <div className="Gray_Section">
          <h1>
            We help you understand your customers beyond your platform, so you
            can serve them better.{" "}
            <span className="App_Gray">
              Customer behaviour is changing rapidly and our platform supports
              insight-driven approaches to building technology solutions.
            </span>
          </h1>
          <div className="CTA">
            <h2>Begin onboarding for free</h2>
            <HiArrowRight size={35} className="CTA_Arrow" />
          </div>
        </div>
      </div>

      {/* Get you started */}
      <div className="Blue_Container">
        <div className="Blue_Section">
          <h1>
            Let’s get you started.
            <br />
            Create an account today.
          </h1>
          <h3>
            Start accepting payments from your customers with your business
            having access to send, direct charge, link and recurring payment
            products
          </h3>
          <a href=".">Get started for free</a>

          <img src={Sdk} alt="SDK" />
        </div>
      </div>

      <footer>
        <div className="Footer_Container">
          <div className="Footer_Brand">
            <h2>Thepeer</h2>
            <h3>&copy;2022. Peerstack Technologies Inc. All rights reserved</h3>
            <div className="Footer_Icons">
              <a href=".">
                <img src={Facebook} alt="Footer Icon" />
              </a>
              <a href=".">
                <img src={Instagram} alt="Footer Icon" />
              </a>
              <a href=".">
                <img src={LinkedIn} alt="Footer Icon" />
              </a>
              <a href=".">
                <img src={Twitter} alt="Footer Icon" />
              </a>
            </div>
            <a href="mailto:support@thepeer.co" className="Footer_Mail">
              support@thepeer.co
            </a>
          </div>

          <div className="Footer_Links">
            <div>
              <h2>Products</h2>
              <a href=".">Send</a>
              <a href=".">Direct charge</a>
            </div>
            <div>
              <h2>Company</h2>
              <a href=".">About us</a>
              <a href=".">Careers</a>
              <a href=".">Blog</a>
            </div>
            <div>
              <h2>Developers</h2>
              <a href=".">API documentation</a>
              <a href=".">Status</a>
            </div>
            <div>
              <h2>Legal</h2>
              <a href=".">Terms of service</a>
              <a href=".">Privacy policy</a>
              <a href=".">Cookie policy</a>
              <a href=".">End user agreement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
