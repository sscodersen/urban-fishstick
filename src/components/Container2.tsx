import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Container2Type = {
  className?: string;
  sVG?: string;
  summarization?: string;
  saveTimeOnLongArticlesAnd?: string;
  getKeyIdeasInstantly?: string;
  summarizePDFsYouTubeVideo?: string;
  getInstantAnswersByChatti?: string;
  articlesUnderstandComplex?: string;
  container?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Container2: FunctionComponent<Container2Type> = ({
  className = "",
  sVG,
  summarization,
  saveTimeOnLongArticlesAnd,
  getKeyIdeasInstantly,
  summarizePDFsYouTubeVideo,
  getInstantAnswersByChatti,
  articlesUnderstandComplex,
  container,
  propMarginTop,
  propBackgroundColor,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const containerStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const backgroundStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const summarizationStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const getKeyIdeasStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-0 pb-[72px] pr-[84px] pl-5 box-border min-h-[618px] max-w-full shrink-0 text-left text-xl text-wwwmaxaime-black-87 font-wwwmaxaime-mulish-regular-14-underline mq825:pr-[21px] mq825:pb-[47px] mq825:box-border mq1400:pr-[42px] mq1400:box-border ${className}`}
      style={containerStyle}
    >
      <div className="w-full flex flex-col items-start justify-start py-0 px-0 box-border max-w-[1312px] mq1400:max-w-full">
        <div className="w-[1408px] flex flex-row flex-wrap items-center justify-center max-w-[108%] shrink-0">
          <div className="flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] mq450:pt-[62px] mq450:box-border mq825:max-w-full">
            <div className="w-[608px] flex flex-col items-start justify-center max-w-full">
              <div className="flex flex-row items-center justify-start py-0 pr-[405px] pl-0 [row-gap:20px] mq450:pr-5 mq450:box-border mq825:flex-wrap mq825:pr-[202px] mq825:box-border">
                <div
                  className="h-12 w-12 rounded-3xl bg-wwwmaxaime-bright-turquoise1 flex flex-col items-center justify-center p-3 box-border"
                  style={backgroundStyle}
                >
                  <img className="w-6 h-6 relative" alt="" src={sVG} />
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-0 pl-3">
                  <div
                    className="relative font-semibold mq450:text-base"
                    style={summarizationStyle}
                  >
                    {summarization}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-13xl">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
                  <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi mq825:text-7xl">
                    {saveTimeOnLongArticlesAnd}
                  </h1>
                  <h1
                    className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi mq825:text-7xl"
                    style={getKeyIdeasStyle}
                  >
                    {getKeyIdeasInstantly}
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 text-lg">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[27px]">
                    <p className="m-0">{summarizePDFsYouTubeVideo}</p>
                    <p className="m-0">{getInstantAnswersByChatti}</p>
                    <p className="m-0">{articlesUnderstandComplex}</p>
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
          <div className="h-[545.8px] flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] ml-[-2px] mq825:max-w-full">
            <img
              className="w-[608px] flex-1 relative max-h-full object-cover max-w-full"
              loading="lazy"
              alt=""
              src={container}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container2;
