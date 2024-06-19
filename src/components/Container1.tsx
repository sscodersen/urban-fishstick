import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Container1Type = {
  className?: string;
  sVG?: string;
  emailAndCommunication?: string;
  saveTimeOnEmailCorrespond?: string;
  communicateMoreEffectivel?: string;
  andProfessionalRepliesImp?: string;
  you?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propAlignSelf2?: CSSProperties["alignSelf"];
};

const Container1: FunctionComponent<Container1Type> = ({
  className = "",
  sVG,
  emailAndCommunication,
  saveTimeOnEmailCorrespond,
  communicateMoreEffectivel,
  andProfessionalRepliesImp,
  you,
  propMarginLeft,
  propBackgroundColor,
  propAlignSelf,
  propAlignSelf1,
  propAlignSelf2,
}) => {
  const container1Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const background1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const marginStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const container2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const communicateMoreEffectivelyContainerStyle: CSSProperties =
    useMemo(() => {
      return {
        alignSelf: propAlignSelf2,
      };
    }, [propAlignSelf2]);

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] text-left text-xl text-wwwmaxaime-black-87 font-wwwmaxaime-mulish-regular-14-underline mq450:pt-11 mq450:box-border mq825:max-w-full ${className}`}
      style={container1Style}
    >
      <div className="w-[608px] flex flex-col items-start justify-center max-w-full">
        <div className="flex flex-row items-center justify-start py-0 pr-[306px] pl-0 [row-gap:20px] mq450:pr-5 mq450:box-border mq825:flex-wrap mq825:pr-[153px] mq825:box-border">
          <div
            className="h-12 w-12 rounded-3xl bg-wwwmaxaime-chartreuse-yellow flex flex-col items-center justify-center p-3 box-border"
            style={background1Style}
          >
            <img className="w-6 h-6 relative" loading="lazy" alt="" src={sVG} />
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-0 pl-3">
            <div className="relative font-semibold mq450:text-base">
              {emailAndCommunication}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 text-13xl">
          <div className="self-stretch flex flex-col items-start justify-start">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lgi mq825:text-7xl">
              {saveTimeOnEmailCorrespond}
            </h1>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 text-lg"
          style={marginStyle}
        >
          <div
            className="self-stretch flex flex-col items-start justify-start"
            style={container2Style}
          >
            <div
              className="self-stretch relative leading-[27px]"
              style={communicateMoreEffectivelyContainerStyle}
            >
              <p className="m-0">{communicateMoreEffectivel}</p>
              <p className="m-0">{andProfessionalRepliesImp}</p>
              <p className="m-0">{you}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[64px]">
          <button className="cursor-pointer [border:none] py-2 px-[15px] bg-wwwmaxaime-wisteria rounded-lg flex flex-row items-center justify-center box-border min-w-[64px] whitespace-nowrap hover:bg-plum">
            <div className="relative text-base tracking-[0.46px] leading-[28px] font-semibold font-wwwmaxaime-mulish-regular-14-underline text-wwwmaxaime-nero text-center">
              Add to Chrome — It's Free
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container1;
