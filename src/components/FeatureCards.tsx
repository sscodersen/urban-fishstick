import { FunctionComponent } from "react";
import Container2 from "./Container2";
import Container1 from "./Container1";

export type FeatureCardsType = {
  className?: string;
};

const FeatureCards: FunctionComponent<FeatureCardsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[95px] box-border max-w-full shrink-0 text-left text-xl text-wwwmaxaime-black-87 font-wwwmaxaime-mulish-regular-14-underline lg:pb-[26px] lg:box-border mq825:pb-5 mq825:box-border mq1400:pb-10 mq1400:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start shrink-0 [debug_commit:0448091] max-w-full">
        <Container2
          sVG="/svg-12.svg"
          summarization="Summarization"
          saveTimeOnLongArticlesAnd="Save time on long articles and videos,"
          getKeyIdeasInstantly="get key ideas instantly"
          summarizePDFsYouTubeVideo="Summarize PDFs, YouTube videos, reports, and webpages in seconds."
          getInstantAnswersByChatti="Get instant answers by chatting with research papers, videos, and"
          articlesUnderstandComplex="articles. Understand complex concepts explained in simple terms."
          container="/container@2x.png"
        />
        <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[72px] pr-[84px] pl-5 box-border min-h-[618px] max-w-full shrink-0 z-[1] mt-[-24px] mq825:pr-[21px] mq825:pb-[47px] mq825:box-border mq1400:pr-[42px] mq1400:box-border">
          <div className="w-full flex flex-col items-start justify-start py-0 px-0 box-border max-w-[1312px] mq1400:max-w-full">
            <div className="w-[1408px] flex flex-row flex-wrap items-center justify-center max-w-[108%] shrink-0">
              <div className="h-[545.8px] flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] mq825:pt-11 mq825:box-border mq825:max-w-full">
                <img
                  className="w-[608px] flex-1 relative max-h-full object-cover max-w-full"
                  alt=""
                  src="/container-1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] ml-[-2px] mq825:max-w-full">
                <div className="w-[608px] flex flex-col items-start justify-center max-w-full">
                  <div className="flex flex-row items-center justify-start py-0 pr-[373px] pl-0 [row-gap:20px] mq450:pr-5 mq450:box-border mq825:flex-wrap mq825:pr-[186px] mq825:box-border">
                    <div className="h-12 w-12 rounded-3xl bg-wwwmaxaime-blue-romance flex flex-col items-center justify-center p-3 box-border">
                      <img
                        className="w-6 h-6 relative"
                        alt=""
                        src="/svg-13.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-3">
                      <div className="relative font-semibold mq450:text-base">
                        Writing assistance
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-13xl">
                    <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
                      <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi mq825:text-7xl">
                        Write better in a few clicks - Be
                      </h1>
                      <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi mq825:text-7xl">
                        professional, clear, convincing
                      </h1>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 text-lg">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[27px]">
                        <p className="m-0">
                          Generate human-like and SEO-optimized articles and
                          blog posts.
                        </p>
                        <p className="m-0">
                          Improve and polish your writing with AI-powered
                          grammar and style
                        </p>
                        <p className="m-0">
                          suggestions. Craft compelling emails, social media
                          posts, reports,
                        </p>
                        <p className="m-0">presentations, and more.</p>
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
            </div>
          </div>
        </div>
        <Container2
          sVG="/svg-14.svg"
          summarization="Research"
          saveTimeOnLongArticlesAnd="Research 10x faster with AI-powered"
          getKeyIdeasInstantly="chat"
          summarizePDFsYouTubeVideo="Find reliable answers fast by chatting with all the best AI models in one"
          getInstantAnswersByChatti="place. Get credible and up-to-date AI answers with real-time web"
          articlesUnderstandComplex="access, knowledge, and citations."
          container="/container-2@2x.png"
          propMarginTop="-24px"
          propBackgroundColor="#fff6d6"
          propDisplay="inline-block"
          propMinWidth="87px"
          propMinWidth1="68px"
        />
        <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[72px] pr-[84px] pl-5 box-border min-h-[618px] max-w-full shrink-0 z-[3] mt-[-24px] mq825:pr-[21px] mq825:pb-[47px] mq825:box-border mq1400:pr-[42px] mq1400:box-border">
          <div className="w-full flex flex-col items-start justify-start py-0 px-0 box-border max-w-[1312px] mq1400:max-w-full">
            <div className="w-[1408px] flex flex-row flex-wrap items-center justify-center max-w-[108%] shrink-0">
              <div className="h-[545.8px] flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] mq825:pt-11 mq825:box-border mq825:max-w-full">
                <img
                  className="w-[608px] flex-1 relative max-h-full object-cover max-w-full"
                  alt=""
                  src="/container-3@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] ml-[-2px] mq825:max-w-full">
                <div className="w-[608px] flex flex-col items-start justify-center max-w-full">
                  <div className="flex flex-row items-center justify-start py-0 pr-[442px] pl-0 [row-gap:20px] mq450:pr-5 mq450:box-border mq825:flex-wrap mq825:pr-[221px] mq825:box-border">
                    <div className="h-12 w-12 rounded-3xl bg-wwwmaxaime-mercury flex flex-col items-center justify-center p-3 box-border">
                      <img
                        className="w-6 h-6 relative"
                        alt=""
                        src="/svg-15.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-3">
                      <div className="relative font-semibold inline-block min-w-[106px] mq450:text-base">
                        Translation
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-13xl">
                    <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
                      <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi mq825:text-7xl">
                        Break language barriers with AI-
                      </h1>
                      <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lgi mq825:text-7xl">
                        powered translation
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-lg">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[27px]">
                        <p className="m-0">
                          Translate between languages for articles and
                          documents. Access
                        </p>
                        <p className="m-0">
                          information in any language. Get writing help with
                          accurate and natural-
                        </p>
                        <p className="m-0">
                          sounding translations across multiple languages.
                        </p>
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
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[72px] pr-[84px] pl-5 box-border min-h-[618px] max-w-full shrink-0 z-[4] mt-[-24px] mq825:pr-[21px] mq825:pb-[47px] mq825:box-border mq1400:pr-[42px] mq1400:box-border">
          <div className="w-full flex flex-col items-start justify-start py-0 px-0 box-border max-w-[1312px] mq1400:max-w-full">
            <div className="w-[1408px] flex flex-row flex-wrap items-center justify-center max-w-[108%] shrink-0">
              <Container1
                sVG="/svg-16.svg"
                emailAndCommunication="Email and communication"
                saveTimeOnEmailCorrespond="Save time on email correspondence"
                communicateMoreEffectivel="Communicate more effectively and efficiently. Let AI draft personalized"
                andProfessionalRepliesImp="and professional replies, improve tone, check spelling and grammar for"
                you="you."
              />
              <div className="h-[545.8px] flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] ml-[-2px] mq825:max-w-full">
                <img
                  className="w-[608px] flex-1 relative max-h-full object-contain max-w-full"
                  alt=""
                  src="/container-4@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[72px] pr-[84px] pl-5 box-border min-h-[618px] max-w-full shrink-0 z-[5] mt-[-24px] mq825:pr-[21px] mq825:pb-[47px] mq825:box-border mq1400:pr-[42px] mq1400:box-border">
          <div className="w-full flex flex-col items-start justify-start py-0 px-0 box-border max-w-[1312px] mq1400:max-w-full">
            <div className="w-[1408px] flex flex-row flex-wrap items-center justify-center max-w-[108%] shrink-0">
              <div className="h-[545.8px] flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] mq825:pt-11 mq825:box-border mq825:max-w-full">
                <img
                  className="w-[608px] flex-1 relative max-h-full object-cover max-w-full"
                  alt=""
                  src="/container-5@2x.png"
                />
              </div>
              <Container1
                sVG="/svg-17.svg"
                emailAndCommunication="Code assistance"
                saveTimeOnEmailCorrespond="Boost your coding productivity"
                communicateMoreEffectivel="Get help understanding code and technical concepts, debug errors faster,"
                andProfessionalRepliesImp="generate code snippets and templates, and learn new programming"
                you="languages with ease."
                propMarginLeft="-2px"
                propBackgroundColor="#e0f2fe"
                propAlignSelf="unset"
                propAlignSelf1="unset"
                propAlignSelf2="unset"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[72px] pr-[84px] pl-5 box-border min-h-[618px] max-w-full shrink-0 z-[6] mt-[-24px] mq825:pr-[21px] mq825:pb-[47px] mq825:box-border mq1400:pr-[42px] mq1400:box-border">
          <div className="w-full flex flex-col items-start justify-start py-0 px-0 box-border max-w-[1312px] mq1400:max-w-full">
            <div className="w-[1408px] flex flex-row flex-wrap items-center justify-center max-w-[108%] shrink-0">
              <div className="flex-1 flex flex-col items-end justify-start pt-24 px-0 pb-0 box-border min-w-[335px] max-w-[704px] mq825:max-w-full">
                <div className="w-[608px] flex flex-col items-start justify-center max-w-full">
                  <div className="flex flex-row items-center justify-start py-0 pr-[374px] pl-0 [row-gap:20px] mq450:pr-5 mq450:box-border mq825:flex-wrap mq825:pr-[187px] mq825:box-border">
                    <div className="h-12 w-12 rounded-3xl bg-wwwmaxaime-turbo1 flex flex-col items-center justify-center p-3 box-border">
                      <img
                        className="w-6 h-6 relative"
                        alt=""
                        src="/svg-18.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-3">
                      <div className="relative font-semibold mq450:text-base">
                        Browser extension
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 text-13xl">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lgi mq825:text-7xl">
                        Works where you work
                      </h1>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 text-lg">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[27px]">
                        <p className="m-0">
                          MaxAI works across all the apps and sites you use. No
                          copying, no
                        </p>
                        <p className="m-0">pasting, no context switching.</p>
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
                  alt=""
                  src="/container-6@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
