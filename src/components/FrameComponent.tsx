import { FunctionComponent } from "react";
import Container from "./Container";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[223px] box-border max-w-full shrink-0 text-center text-29xl text-wwwmaxaime-black-87 font-wwwmaxaime-mulish-regular-14-underline mq825:pb-[94px] mq825:box-border mq1400:pb-[145px] mq1400:box-border ${className}`}
    >
      <div className="w-[1312px] flex flex-col items-end justify-start gap-[16px] max-w-[1312px] shrink-0 [debug_commit:0448091] mq1400:max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <h1 className="m-0 relative text-inherit tracking-[-0.01px] font-bold font-inherit mq450:text-10xl mq825:text-19xl">
            MaxAI in numbers
          </h1>
        </div>
        <div className="w-[1344px] flex flex-col items-start justify-start max-w-[103%] shrink-0 text-left text-21xl">
          <div className="self-stretch flex flex-row items-start justify-center max-w-full [row-gap:20px] lg:flex-wrap">
            <div className="flex-[0.9524] flex flex-col items-start justify-center pt-8 pb-0 pr-0 pl-8 box-border min-w-[437px] max-w-[672px] lg:w-full mq825:max-w-full mq825:min-w-full">
              <div className="self-stretch rounded-2xl bg-wwwmaxaime-athens-gray overflow-hidden flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch bg-wwwmaxaime-turbo flex flex-col items-start justify-start p-6 box-border max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-5xl mq825:text-13xl">
                      100% privacy friendly
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 text-base text-wwwmaxaime-black-60">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="relative leading-[24px]">
                        <p className="m-0">
                          MaxAI.me ensures minimal data collection and fortified
                          security. We're unaware
                        </p>
                        <p className="m-0">
                          of your browsing/chatting details or data beyond login
                          essentials.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[368px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
                    <div className="self-stretch box-border flex flex-col items-start justify-start pt-0 px-0 pb-[7px] max-w-full border-b-[1px] border-solid border-wwwmaxaime-black-87">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full mq450:flex-wrap">
                        <input
                          className="w-[calc(100%_-_24px)] [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-col items-start justify-start font-wwwmaxaime-mulish-regular-14-underline text-base text-wwwmaxaime-black-87 min-w-[218px] max-w-full"
                          placeholder="Explore our privacy commitment at MaxAI.me"
                          type="text"
                        />
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          alt=""
                          src="/svg-19.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[431px] flex flex-col items-start justify-start p-4 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/container-7@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border min-w-[437px] max-w-[672px] text-37xl text-wwwmaxaime-wisteria lg:w-full mq825:max-w-full mq825:min-w-full">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
                  <Container
                    m="1M+"
                    professionals="professionals"
                    whoTrustMaxAIAroundTheWor="who trust MaxAI around the world"
                    container="/container-8.svg"
                  />
                  <Container
                    m="13K+"
                    professionals="5-star ratings"
                    whoTrustMaxAIAroundTheWor="on Chrome Web Store"
                    container="/container-9@2x.png"
                    propMinWidth="218px"
                    propMarginLeft="unset"
                    propDisplay="unset"
                    propMinWidth1="unset"
                    propAlignSelf="stretch"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
                  <Container
                    m="#1"
                    professionals="product of the week"
                    whoTrustMaxAIAroundTheWor="on Product Hunt"
                    container="/container-10@2x.png"
                    propMinWidth="218px"
                    propMarginLeft="unset"
                    propDisplay="inline-block"
                    propMinWidth1="68px"
                    propAlignSelf="stretch"
                  />
                  <Container
                    m="9"
                    professionals="hours"
                    whoTrustMaxAIAroundTheWor="average time saved per week"
                    container="/container-11@2x.png"
                    propMinWidth="218px"
                    propMarginLeft="unset"
                    propDisplay="inline-block"
                    propMinWidth1="34px"
                    propAlignSelf="stretch"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-start justify-start max-w-[1344px] text-37xl text-wwwmaxaime-dodger-blue mq1400:max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-center py-0 pr-1 pl-0 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start pt-8 pb-0 pr-0 pl-8 box-border min-w-[134px] max-w-[336px]">
                <div className="flex-1 rounded-2xl bg-wwwmaxaime-athens-gray flex flex-col items-start justify-start pt-6 px-6 pb-[24.1px] box-border gap-[34.6px] min-h-[295px] mq450:gap-[17px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <b className="relative mq450:text-15xl mq825:text-26xl">
                      60M+
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl">
                      <b className="self-stretch relative mq450:text-base">
                        AI generations
                      </b>
                      <div className="self-stretch relative text-base text-wwwmaxaime-black-87">
                        used by MaxAI users per month
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[85.3px] relative max-w-full overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/container-12@2x.png"
                  />
                </div>
              </div>
              <div className="h-[327px] flex-1 flex flex-row items-start justify-start pt-8 pb-0 pr-0 pl-8 box-border min-w-[134px] max-w-[336px] ml-[-1.3px] text-wwwmaxaime-chateau-green">
                <div className="self-stretch flex-1 rounded-2xl bg-wwwmaxaime-athens-gray flex flex-col items-start justify-start pt-6 px-6 pb-[24.1px] box-border gap-[4px] min-h-[295px]">
                  <b className="relative inline-block min-w-[121px] mq450:text-15xl mq825:text-26xl">
                    98%
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 text-xl">
                    <b className="flex-1 relative mq450:text-base">users</b>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[10.6px] text-base text-wwwmaxaime-black-87">
                    <div className="relative">
                      improved productivity after using
                    </div>
                    <div className="relative inline-block min-w-[48px]">
                      MaxAI
                    </div>
                  </div>
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/container-13@2x.png"
                  />
                </div>
              </div>
              <div className="h-[327px] flex-1 flex flex-row items-start justify-start pt-8 pb-0 pr-0 pl-8 box-border min-w-[134px] max-w-[336px] ml-[-1.3px] text-wwwmaxaime-wisteria">
                <div className="self-stretch flex-1 rounded-2xl bg-wwwmaxaime-athens-gray flex flex-col items-start justify-start pt-6 px-6 pb-[24.1px] box-border gap-[4px] min-h-[295px]">
                  <b className="relative mq450:text-15xl mq825:text-26xl">
                    65K+
                  </b>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[10.6px] text-base text-wwwmaxaime-black-87">
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 text-xl text-wwwmaxaime-wisteria">
                      <b className="flex-1 relative mq450:text-base">
                        companies
                      </b>
                    </div>
                    <div className="relative">
                      are using MaxAI to 10X their work
                    </div>
                    <div className="relative inline-block min-w-[88px]">
                      productivity
                    </div>
                  </div>
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/container-14@2x.png"
                  />
                </div>
              </div>
              <Container
                m="58"
                professionals="languages"
                whoTrustMaxAIAroundTheWor="supported for AI translations"
                container="/container-15.svg"
                propMinWidth="134px"
                propMarginLeft="-1.3px"
                propDisplay="inline-block"
                propMinWidth1="68px"
                propAlignSelf="stretch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
