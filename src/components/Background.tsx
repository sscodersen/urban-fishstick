import { FunctionComponent } from "react";

export type BackgroundType = {
  className?: string;
};

const Background: FunctionComponent<BackgroundType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-[111.2px] px-5 pb-28 box-border bg-[url('/public/background1@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:0448091] max-w-full text-center text-29xl text-wwwmaxaime-black-87 font-wwwmaxaime-mulish-regular-14-underline mq825:pt-[72px] mq825:pb-[73px] mq825:box-border ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start max-w-[1312px] mq1400:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-5 pb-[0.8px] box-border max-w-full shrink-0">
            <h1 className="m-0 w-[438.4px] h-[116px] relative text-inherit tracking-[-0.01px] leading-[57.6px] font-bold font-inherit flex items-center justify-center max-w-full mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[46px]">
              Get started for free
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border max-w-full shrink-0 z-[1] text-lg">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
              <div className="w-[517.3px] h-[54px] relative tracking-[-0.01px] leading-[27px] flex items-center justify-center max-w-full">
                Use personalized 1-click AI anywhere to save hours every day.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[64px] shrink-0 max-w-full text-wwwmaxaime-nero">
            <div className="self-stretch rounded-lg bg-wwwmaxaime-wisteria flex flex-row items-center justify-center py-12 pr-6 pl-5 box-border min-w-[64px] [row-gap:20px] max-w-full mq825:flex-wrap">
              <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0">
                <img className="w-20 h-20 relative" alt="" src="/svg-32.svg" />
              </div>
              <h1 className="m-0 relative text-inherit tracking-[1.37px] leading-[84px] font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[50px] mq825:text-19xl mq825:leading-[67px]">
                Add to Chrome — It's Free
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
