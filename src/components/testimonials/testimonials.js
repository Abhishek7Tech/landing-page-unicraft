import Avatar from "../../utils/images/Avatar.png";
import SisyPhus from "../../utils/images/sisyphus.png";
const Testimonials = () => {
  return (
    <section className="mt-12 p-2 mb-6 text-center m-auto bg-gray-50">
      <img src={SisyPhus} alt="sisyphus-company-logo" className="pt-12 pb-2 m-auto"></img>
      <h1 className="font-bold text-5xl max-w-7.5xl m-auto pt-8 pb-2 text-gray-800">
        We’ve been with unicraft to kick start every new project and can’t
        imagine working without it.
      </h1>
      <div className="pb-16">
        <img src={Avatar} alt="Candice Wu Image" className="pt-6 pb-4 m-auto"></img>
        <h2 className="text-lg font-medium">Candice Wu</h2>
        <span className="text-gray-500 text-base pt-2">Product Manager, Sisyphus</span>
      </div>
    </section>
  );
};

export default Testimonials;
