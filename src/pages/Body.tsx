import { FunctionComponent } from "react";
import Margin from "../components/Margin";
import FrameComponent1 from "../components/FrameComponent1";
import SocialProof from "../components/SocialProof";
import FeatureCards from "../components/FeatureCards";
import FrameComponent from "../components/FrameComponent";
import Testimonials from "../components/Testimonials";
import Background from "../components/Background";
import Footer from "../components/Footer";

const Body: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start pt-[1778px] px-0 pb-[3416.8px] box-border leading-[normal] tracking-[normal]">
      <section className="h-[4238px] flex-1 bg-wwwmaxaime-nero overflow-y-auto flex flex-col items-start justify-start pt-[4173px] px-0 pb-16 box-border relative gap-[1px] max-w-full lg:h-auto mq825:pt-[484px] mq825:box-border mq1400:pt-[745px] mq1400:pb-5 mq1400:box-border">
        <Margin />
        <FrameComponent1 />
        <SocialProof />
        <FeatureCards />
        <FrameComponent />
        <Testimonials />
        <div className="self-stretch h-[1054.5px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[432.5px] box-border [debug_commit:0448091] max-w-full mq825:h-auto mq825:pb-[183px] mq825:box-border mq1400:pb-[281px] mq1400:box-border">
          <Background />
          <Footer />
        </div>
        <div className="w-full h-px absolute !m-[0] top-[-1690px] right-[0px] left-[0px] box-border overflow-hidden shrink-0 border-b-[1px] border-solid border-wwwmaxaime-black-12" />
      </section>
    </div>
  );
};

export default Body;
