import Brands from "../brands/brands";
import Navbar from "../navbar/navbar";
import "./main.css";
const Main = () => {
  return (
    <>
      <div className="main">
        <Navbar></Navbar>
        <main className="text-center pt-12 lg:mt-12">
        <h1 className="text-gray-800 lg:text-7xl text-4.5xl font-black text-center lg:w-hl m-auto pt-11 px-2">Elevate Your Presence with Seamless Design and Innovation.</h1>
        <p className="text-gray-600 lg:text-xl text-base font-medium text-center pt-7 px-2">From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</p>
        <button className="text-gray-50 font-bold text-xl bg-gray-800 w-52 h-14 rounded-lg mt-12">View Pricing</button>
        </main>
      </div>
    </>
  );
};

export default Main;
