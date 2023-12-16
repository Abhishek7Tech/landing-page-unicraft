import Main from "./components/main/main";
import Brands from "./components/brands/brands";
import WorkSection from "./components/work/work-section";
import Steps from "./components/steps/steps";
import Testimonials from "./components/testimonials/testimonials";
import PricingCard from "./components/pricing-card/pricing-card";
import Questions from "./components/questions/questions";
function App() {
  return (
    <div className="App">
      <Main></Main>
      <Brands></Brands>
      <WorkSection></WorkSection>
      <Steps></Steps>
      <Testimonials></Testimonials>
      <PricingCard></PricingCard>
      <Questions></Questions>
    </div>
  );
}

export default App;
