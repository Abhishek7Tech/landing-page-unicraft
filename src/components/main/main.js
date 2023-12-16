import Brands from "../brands/brands";
import Navbar from "../navbar/navbar";
import "./main.css";
const Main = () => {
  return (
    <>
      <div className="main">
        <Navbar></Navbar>
        <main className="text-center">
        <h1 className="text-gray-800 text-7xl font-black text-center w-hl m-auto pt-11">Elevate Your Presence with Seamless Design and Innovation.</h1>
        <p className="text-gray-600 text-xl font-medium text-center pt-7">From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</p>
        <button className="text-gray-50 font-bold text-xl bg-gray-800 w-52 h-14 rounded-lg mt-12">View Pricing</button>
        </main>
      </div>
    </>
  );
};

export default Main;
