import "./contact-us.css";
import Tweeter from "../../utils/images/twitter.png";
import Facebook from "../../utils/images/facebook.png";
import Hands from "../../utils/images/hands.png";
import Linkedin from "../../utils/images/linkedin.png";
import Github from "../../utils/images/github.png";
import Dribble from "../../utils/images/dribble.png";

const ContactUs = () => {
  const Socials = [Tweeter, Facebook, Hands, Linkedin, Github, Dribble];
  return (
    <div className="contact-us">
      <section className="mt-12 mb-8 text-center">
        <h1 className="text-4.5xl md:text-7xl text-gray-900 font-black px-2 pt-12">
          No long-term contracts.
        </h1>
        <h1 className="text-4.5xl md:text-7xl text-gray-900 font-black px-2 pt-2">
          No catches. Simple.
        </h1>
        <p className="text-xl text-gray-500 font-medium pt-6 pb-4">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <div className="mt-4 mb-2">
          <button className="rounded-lg bg-gray-800 h-15 w-54 text-gray-50 font-bold text-xl">
            Contact us
          </button>
        </div>
      </section>
      <footer className="mt-16 mb-4 border-t-1 border-gray-300 w-max-7.5xl mx-4 md:mx-8 m-auto">
        <h2 className="font-bold text-2xl text-gray-700 mt-5 lg:mt-4 mb-3">
          UniCraft
        </h2>
        <p className="font-medium text-lg leading-5 text-gray-400">
          Design amazing digital experiences that <br></br> create more happy in
          the world.
        </p>
        <div className="flex justify-between mt-4 pb-4">
          <small className="text-gray-400 font-normal text-base">
            © 2077 Untitled UI. All rights reserved.
          </small>
          <ul className="flex flex-wrap justify-evenly">
            {Socials.map((social, idx) => {
              return (
                <li key={idx} className="px-1 py-1 text-center">
                  <img
                    className="w-6 h-6"
                    src={social}
                    alt="tweeter-logo"
                  ></img>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
