import Image from "next/image";
import facebook from "../public/picture/facebook1.svg";
import Head from "next/head";
export default function Home() {
  return (
<>
      <Head>
        <title>Facebook Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
      {/* Left side */}
      <div className="text-center md:text-left text-2xl w-full md:w-1/2 px-4 md:px-11 mb-8 md:mb-0">
        <Image src={facebook} width={300} height={100} alt="facebook logo" className="mx-auto md:mx-0" />
        <p className="mt-4 md:mt-0 text-xl md:text-2xl md:ml-8">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      {/* Right side */}
      <div className="bg-white shadow-sm  flex flex-col p-6 rounded-xl w-full md:w-1/3">
        <input
          className="my-2 border shadow-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border  shadow-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
        />
        <button className="my-2 bg-blue-600 py-2 rounded-md text-lg font-bold text-white hover:bg-blue-700">
          Log In
        </button>
        <p className="text-blue-600 text-sm text-center my-2 hover:underline cursor-pointer">
          Forgotten password?
        </p>
        <hr className="my-2" />
        <button className="my-2 bg-green-500 py-3 px-5 mx-auto rounded-md text-lg font-bold w-fit text-white hover:bg-green-600">
          Create an account
        </button>
        </div>
        </div>
    </>
  );
}