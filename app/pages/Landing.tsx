import { assemblyLogo, displayPicture } from "../assets";

export function Landing() {
  return (
    <div className="flex h-screen w-screen">
      <div className="basis-1/4 bg-gray-9 p-8">
        <div className="border border-gray-8 rounded-2xl h-[900px] p-8">
          <img
            className="rounded-2xl mt-4"
            src={displayPicture}
            alt="Sumedha R Kulkarni"
          />

          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-gray-1 text-xl">
              Hi, I am Sumedha R Kulkarni.
            </h1>
            <p className="text-gray-1 text-sm mt-4 text-center">
              I'm a software engineer with a passion for building products that
              make a difference.
            </p>
            <p className="text-gray-1 text-sm mt-4 text-center">
              I'm currently working at
              <a
                href="https://www.joinassembly.com/"
                className="mx-1 text-brand-6 hover:text-brand-4"
              >
                <img
                  className="inline-block h-6 mx-1 rounded-full"
                  src={assemblyLogo}
                  alt="Assembly"
                />
                Assembly
              </a>
              as a Senior Software Engineer.
            </p>
            <p className="text-gray-1 text-sm mt-4">
              Based out of Bengaluru, India
            </p>
            <h2 className="text-gray-1 text-xs mt-4">hello@sumedhark.com</h2>
            <div className="border border-gray-7 text-gray-1 text-center text-xs rounded h-12 w-full my-6">{`<social media link buttons here>`}</div>
            <p className="text-gray-6 text-xs mt-4">
              © 2023 Sumedha R Kulkarni. All rights reserved.
            </p>
          </div>
          <button className="bg-primary-6 text-gray-10 rounded-full px-4 py-2 mt-4 w-full">
            Reach out
          </button>
        </div>
      </div>
      <div className="basis-3/4 bg-gray-9"></div>
    </div>
  );
}
