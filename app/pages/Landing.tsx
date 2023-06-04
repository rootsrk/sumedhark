import { displayPicture } from "../assets";

export function Landing() {
  return (
    <div className="flex min-h-screen h-fit w-screen">
      <div className="basis-1/3 bg-gray-9 p-8 max-md:basis-full">
        <div className="border border-gray-8 rounded-2xl h-fit p-8">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-2xl h-48 text-center"
              src={displayPicture}
              alt="Sumedha R Kulkarni"
            />
            <h1 className="text-gray-1 text-xl mt-2">
              Hi, I am Sumedha R Kulkarni.
            </h1>
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
      <div className="basis-2/3 bg-gray-9 max-md:hidden p-8 pl-0">
        <p className="text-gray-1 text-xl mt-2">
          I'm a software engineer with a passion for building products that make
          a difference. I'm currently working at
          <a
            href="https://www.joinassembly.com/"
            className="mx-1 text-brand-6 hover:text-brand-4"
          >
            Assembly
          </a>
          as a Senior Software Engineer.
        </p>
        <p className="text-gray-1 text-xl mt-2">
          Based out of Bengaluru, India.
        </p>
      </div>
    </div>
  );
}
