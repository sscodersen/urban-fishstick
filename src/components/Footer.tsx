import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-wwwmaxaime-nero box-border flex flex-row items-start justify-center py-0 px-5 shrink-0 [debug_commit:0448091] max-w-full z-[1] mt-[-85.5px] text-left text-xl text-wwwmaxaime-wisteria font-wwwmaxaime-mulish-regular-14-underline border-t-[1px] border-solid border-wwwmaxaime-black-8 ${className}`}
    >
      <div className="w-[1312px] flex flex-col items-start justify-start pt-12 px-4 pb-20 box-border gap-[80px] max-w-[1312px] mq450:gap-[20px] mq825:gap-[40px] mq825:pt-[105.5px] mq825:pb-[52px] mq825:box-border mq1400:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[48px] max-w-full mq825:gap-[24px]">
          <div className="w-[300px] flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border min-w-[300px] max-w-[300px]">
            <div className="flex flex-row items-center justify-start py-0 pr-[163px] pl-0 gap-[8px] text-wwwmaxaime-black-87 mq450:pr-5 mq450:box-border">
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-8 h-8 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/logosvg-1@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative font-extrabold inline-block min-w-[97px] mq450:text-base">
                  MaxAI.me
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0 text-base">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="self-stretch relative tracking-[0.17px] leading-[24px]">
                    #1 AI productivity tool
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 text-xs text-wwwmaxaime-black-87">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[18px]">
                      <p className="m-0">
                        AI chat, rewriter, summary, instant reply, reading
                      </p>
                      <p className="m-0">
                        assistant, prompts, search, art, and translator.
                      </p>
                      <p className="m-0">
                        Powered by GPT-4, Claude 3, Gemini 1.5.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0 text-5xl">
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-[100px] pl-0 mq450:pr-5 mq450:box-border">
                <img
                  className="h-12 w-[22px] relative object-contain"
                  alt=""
                  src="/svg-33@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-2">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="flex flex-row items-center justify-start py-0 px-[25px]">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg-4.svg"
                        />
                        <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                          <b className="relative inline-block min-w-[58px] mq450:text-lgi">
                            2024
                          </b>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start text-base text-wwwmaxaime-black-87">
                        <div className="relative">Top 50 genAI apps</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                  <div className="overflow-hidden flex flex-col items-start justify-center">
                    <img
                      className="w-[22px] h-12 relative object-cover"
                      alt=""
                      src="/frame-5@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center min-w-[606px] max-w-full text-wwwmaxaime-black-87 mq825:min-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
              <div className="flex-1 flex flex-row items-start justify-start pt-8 px-8 pb-0 box-border min-w-[93px] max-w-[233px]">
                <div className="w-[136.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[72px] box-border gap-[24px] min-w-[136.94px]">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <div className="relative tracking-[0.15px] leading-[32px] font-extrabold inline-block min-w-[88px] mq450:text-base mq450:leading-[26px]">
                      Products
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-base">
                    <div className="flex flex-row items-center justify-start py-0 px-0">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[0.17px] leading-[24px] whitespace-nowrap">
                          MaxAI for Chrome
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                      <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative tracking-[0.17px] leading-[24px] inline-block min-w-[116px]">
                            MaxAI for Edge
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                      <div className="flex flex-row items-center justify-start py-0 pr-[7px] pl-0">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative tracking-[0.17px] leading-[24px] inline-block min-w-[129px]">
                            AI prompt library
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-8 px-8 pb-0 box-border min-w-[93px] max-w-[233px] ml-[-1.3px]">
                <div className="w-[159.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[108px] box-border gap-[24px] min-w-[159.19px]">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <div className="relative tracking-[0.15px] leading-[32px] font-extrabold inline-block min-w-[100px] mq450:text-base mq450:leading-[26px]">
                      Resources
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-base">
                    <div className="flex flex-row items-center justify-start py-0 pr-[30px] pl-0">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[0.17px] leading-[24px] inline-block min-w-[129px]">
                          Affiliate program
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                      <div className="flex flex-row items-center justify-start py-0 px-0">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative tracking-[0.17px] leading-[24px] whitespace-nowrap">
                            Free online PDF tools
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-64 flex-1 flex flex-row items-start justify-start pt-8 px-8 pb-0 box-border min-w-[93px] max-w-[233px] ml-[-1.3px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.15px] leading-[32px] font-extrabold inline-block min-w-[96px] mq450:text-base mq450:leading-[26px]">
                      Follow Us
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start py-0 pr-[26px] pl-0 text-base">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.17px] leading-[24px] inline-block min-w-[70px]">
                        X/Twitter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start pt-8 px-8 pb-0 box-border min-w-[93px] max-w-[233px] ml-[-1.3px]">
                <div className="w-[85.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[108px] box-border gap-[24px] min-w-[85.78px]">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <div className="relative tracking-[0.15px] leading-[32px] font-extrabold inline-block min-w-[46px] mq450:text-base mq450:leading-[26px]">
                      Help
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-base">
                    <div className="flex flex-row items-center justify-start py-0 px-0">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[0.17px] leading-[24px] inline-block min-w-[86px] whitespace-nowrap">
                          How to use
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                      <div className="flex flex-row items-center justify-start py-0 pr-1 pl-0">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative tracking-[0.17px] leading-[24px] inline-block min-w-[81px]">
                            Contact us
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full text-sm text-wwwmaxaime-black-87 mq825:gap-[15px]">
          <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 border-b-[1px] border-solid border-wwwmaxaime-black-12" />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start max-w-full [row-gap:20px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px">
              <div className="relative tracking-[0.47px] leading-[19.99px] inline-block min-w-[124px] whitespace-nowrap">
                © 2024 MaxAI.me
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start min-w-[89px] max-w-full">
              <div className="flex flex-col items-start justify-start">
                <a className="[text-decoration:underline] relative text-[inherit] inline-block min-w-[90px]">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-0 pl-6">
              <div className="flex flex-col items-start justify-start">
                <a className="[text-decoration:underline] relative text-[inherit] inline-block min-w-[107px]">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
