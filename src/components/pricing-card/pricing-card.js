import "./pricing.css";
import PrincingData from "./pricing-card-data";
import AvailableTick from "../../utils/images/available-tick.png";
import UnavailableTick from "../../utils/images/unavailable-tick.png";
import ProfessionalAvailableTick from "../../utils/images/professional-available-tick.png";

const PricingCard = () => {
  return (
    <section className="pricing mt-6 mb-12">
      <h1 className="font-bold text-6xl pt-12 pb-4 text-center text-gray-800">
        Pricing made for collaborative support.
      </h1>
      <p className="text-gray-500 text-xl font-medium max-w-2xl text-center m-auto pt-4 pb-4">
        Plain is made for your entire company. Only pay for users that actually
        message customers. Everyone else is free, forever.
      </p>
      <div className="flex justify-evenly max-w-6.5xl m-auto">
        {PrincingData.map((plan) => {
          const planName = plan.name;
          return (
            <div
              className={`${plan.bg} rounded-2xl border-1 px-6 py-10 ${
                planName === "Professional" ? "mt-8" : "mt-10"
              } w-90`}
            >
              <h2
                className={`${
                  planName === "Professional"
                    ? "text-slate-50"
                    : "text-neutral-800"
                } font-bold text-1xl`}
              >
                {planName}
              </h2>
              <p
                className={`${
                  planName === "Professional"
                    ? "text-gray-100"
                    : "text-gray-500"
                }`}
              >
                {plan.details}
              </p>
              <div className="flex items-center">
                <h3
                  className={`${
                    planName === "Professional"
                      ? "text-gray-50"
                      : "text-gray-800"
                  } font-medium text-5.5xl`}
                >
                  ${plan.price}{" "}
                </h3>
                <span
                  className={`${
                    planName === "Professional"
                      ? "text-gray-50"
                      : "text-gray-600"
                  } text-base font-normal pl-2`}
                >
                  / Month
                </span>
              </div>

              <div>
                <button
                  className={`${
                    planName === "Professional"
                      ? "bg-gray-50"
                      : "border-gray-600"
                  } rounded-lg border-1 w-84 h-11 mt-6 mb-6`}
                >
                  Get Started Now
                </button>
              </div>
              <ul>
                {plan.features.map((feature, idx) => { 
                  return (
                    <li className="flex gap-2 items-center mt-2 mb-2" key={idx}>
                      { feature.available  ? (
                        <img src={feature.for === "Professional" ? ProfessionalAvailableTick : AvailableTick} alt="available" className="h-4 w-4"></img>
                      ) : (
                        <img src={UnavailableTick} alt="unavailable" className="h-4 w-4"></img>
                      )}
                      {feature.available ? (
                        <span
                          className={`${
                            plan.name === "Professional"
                              ? "text-gray-50"
                              : "text-gray-800"
                          } ml-4 text-base`}
                        >
                          {feature.feature}
                        </span>
                      ) : (
                        <span className="ml-4 text-gray-400 text-base">
                          {feature.feature}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingCard;
