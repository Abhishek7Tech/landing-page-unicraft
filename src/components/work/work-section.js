import Frame1 from "../../utils/images/Frame 1.png";
import Frame2 from "../../utils/images/Frame 2.png";
import Frame3 from "../../utils/images/Frame 3.png";
import Frame4 from "../../utils/images/Frame 4.png";
import Frame5 from "../../utils/images/Frame 5.png";

const WorkSection = () => {
  return (
    <section className="hidden lg:block lg:text-center lg:mt-4 lg:mb-6">
      <div className="flex justify-between">
        <img src={Frame1} alt="work-testimonial" className="max-w-x"></img>
        <img src={Frame2} alt="work-testimonial" className="max-w-x"></img>
        <img src={Frame3} alt="work-testimonial" className="max-w-x"></img>
        <img src={Frame4} alt="work-testimonial" className="max-w-x"></img>
        <img src={Frame5} alt="work-testimonial" className="max-w-x"></img>
      </div>
        <button className="text-gray-600 text-xl font-bold rounded-lg border-1 border-gray-600 w-72 h-14 mt-14 mb-4 hover:-translate-y-1 hover:bg-gray-700 hover:text-gray-50 hover:ease-in hover:duration-100 hover:delay-100">
          View recent work
        </button>
    </section>
  );
};

export default WorkSection;
