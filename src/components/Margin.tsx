import { FunctionComponent } from "react";

export type MarginType = {
  className?: string;
};

const Margin: FunctionComponent<MarginType> = ({ className = "" }) => {
  return (
    <div
      className={`mt-[-6046.3px] self-stretch flex flex-row items-start justify-center py-0 px-5 box-border min-h-[64px] shrink-0 [debug_commit:0448091] max-w-full text-left text-xl text-wwwmaxaime-black-87 font-wwwmaxaime-mulish-regular-14-underline ${className}`}
    >
      <div className="w-[1312px] flex flex-row items-start justify-between py-4 pr-5 pl-4 box-border max-w-[1312px] min-h-[64px] gap-[20px] mq1400:max-w-full">
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-8 h-8 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/logosvg@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <a className="[text-decoration:none] relative font-extrabold text-[inherit] inline-block min-w-[97px] mq450:text-base">
                  MaxAI.me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-[152.9px] relative hidden" />
        <div className="flex flex-row items-start justify-start gap-[0.3px] max-w-full text-center text-base lg:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-4 box-border min-w-[80px]">
              <div className="rounded-lg flex flex-row items-start justify-start py-3 pr-3 pl-4 box-border gap-[3px] min-w-[64px]">
                <a className="[text-decoration:none] relative tracking-[0.46px] leading-[24px] font-medium text-[inherit] inline-block min-w-[78px]">
                  Industries
                </a>
                <img
                  className="h-6 w-6 relative object-contain min-h-[24px]"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-4 box-border min-w-[80px]">
              <div className="rounded-lg flex flex-row items-start justify-start py-3 pr-[11px] pl-4 box-border gap-[3px] min-w-[64px]">
                <a className="[text-decoration:none] relative tracking-[0.46px] leading-[24px] font-medium text-[inherit] inline-block min-w-[69px]">
                  Features
                </a>
                <img
                  className="h-6 w-6 relative object-contain min-h-[24px]"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 pb-0 pr-[15px] pl-0 text-left">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start py-0 pr-0 pl-4">
                <div className="flex flex-col items-start justify-start py-0 px-4">
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[52px]">
                      Pricing
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-0 pl-4 z-[1] ml-[-0.9px]">
                <div className="flex flex-col items-start justify-start py-0 px-4">
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[119px]">
                      Learning-center
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[14.4px] pb-0 pr-[15px] pl-0 text-left">
            <div className="flex flex-row items-end justify-start gap-[3.2px]">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <img
                  className="w-5 h-5 relative"
                  alt=""
                  src="/english-container.svg"
                />
              </div>
              <a className="[text-decoration:none] relative leading-[25.6px] font-medium text-[inherit] inline-block min-w-[54.1px]">
                English
              </a>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-5 bg-wwwmaxaime-wisteria rounded-lg flex flex-row items-start justify-start box-border gap-[12px] min-w-[64px] whitespace-nowrap max-w-full hover:bg-plum">
            <img
              className="h-8 w-8 relative min-h-[32px]"
              alt=""
              src="/svg-2.svg"
            />
            <div className="relative text-lg tracking-[0.51px] leading-[32px] font-semibold font-wwwmaxaime-mulish-regular-14-underline text-wwwmaxaime-nero text-center">
              Add to Chrome — It's Free
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Margin;
