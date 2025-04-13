import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ExamplePresentations from "@/components/ExamplePresentations";
import Testimonials from "@/components/Testimonials";
import RequestForm from "@/components/RequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Benefits />
      <ExamplePresentations />
      <Testimonials />
      <RequestForm />
      <Footer />
    </div>
  );
};

export default Index;
