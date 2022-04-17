import { useState, useRef, useEffect } from "react";
import Active from "./components/Active";
import Logo from "./assets/img/logo.png";
import Flw from "./assets/img/flutterwave.svg";
import Sidebar from "./assets/img/Header-Sidebar.png";
import ScrollImage from "./assets/img/middle-scrollable.png";
import Phone from "./assets/img/Phone.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          <div className="App_Use"></div>
          <img src={Phone} alt="Phone" className="Phone" />
        </div>
      </div>
    </div>
  );
}

export default App;
