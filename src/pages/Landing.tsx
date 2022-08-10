import logo from "./../assets/srk.png";
import ProfilePicture from "./../assets/sumedha.png";
// import { useNavigate } from "react-router-dom";

export const Landing = () => {
  // const navigate = useNavigate();
  return (
    <div className="h-screen overflow-hidden">
      <header>
        <div
          className="flex"
          onClick={() => {
            //  navigate("/")
          }}
        >
          <img
            className="h-14 border-solid rounded-full	p-2 border-2 ml-6 mt-4"
            src={logo}
            alt="srk logo"
            role="button"
          />
          <div className="p-8 text-sm">+91 7406789329</div>
          <div className="p-8 text-sm">|</div>
          <div className="p-8 text-sm">hello@sumedhark.com</div>
          <div className="p-8 text-sm">|</div>
          <div className="p-8 text-sm">sumedha.rk.05@gmail.com</div>
        </div>
      </header>
      <main>
        <div className="pt-1 flex justify-between">
          <div className="">
            <p className="p-12 pb-0 text-6xl">Hello!</p>
            <p className="p-12 pb-8 text-8xl">
              I am
              <span className="text-blue-900"> Sumedha :)</span>
            </p>
            <p className="pl-12 text-2xl">
              I'm a Senior Frontend developer based out of{" "}
            </p>
            <p className="pl-12 text-2xl">Bangalore, India.</p>
          </div>
          <div className="flex">
            <img
              className="h-full"
              src={ProfilePicture}
              alt="my profile picture"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
