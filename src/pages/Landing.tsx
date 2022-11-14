import { useCallback, useState } from "react";
import logo from "./../assets/srk.png";
import ProfilePicture from "./../assets/sumedha.png";
// import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="h-screen">
      <div className="pt-1 h-full flex absolute justify-between">
        <div className="row">
          <div
            className="flex columns-6"
            onClick={() => {
              //  navigate("/")
            }}
          >
            <img
              className="h-12 border-solid rounded-full	p-2 border-2 ml-6 mt-4"
              src={logo}
              alt="srk logo"
              role="button"
            />
            <div className="p-6 text-sm">+91 7406789329</div>
            <div className="p-6 text-sm">|</div>
            <div className="p-6 text-sm">hello@sumedhark.com</div>
            <div className="p-6 text-sm">|</div>
            <div className="p-6 text-sm">sumedha.rk.05@gmail.com</div>
          </div>
          <div className="flex flex-col align-center">
            <p className="p-6 pb-0 text-6xl">Hello!</p>
            <p className="p-6 pb-6 text-7xl">
              I am
              <span className="text-8xl text-blue-900"> Sumedha :)</span>
            </p>
            <p className="pl-6 lg-text-2xl">
              I'm a Senior Frontend developer based out of{" "}
            </p>
            <p className="pl-6 sm-text-4xl lg-text-2xl">Bangalore, India.</p>
          </div>
        </div>
        <div className="lg-relative bottom-lg-0  lg">
          <img className="" src={ProfilePicture} alt="my profile picture" />
        </div>
      </div>
    </div>
  );
};

const SecondPage = () => {
  return <div className="h-screen"></div>;
};

export const Landing = () => {
  const [activePageNumber, setActivePageNumber] = useState(1);
  // const navigate = useNavigate();
  const renderPage = useCallback(() => {
    switch (activePageNumber) {
      case 2:
        return <SecondPage />;

      case 1:
      default:
        return <FirstPage />;
    }
  }, [activePageNumber]);

  return (
    <div className="" onScroll={() => {}}>
      {renderPage()}
    </div>
  );
};
