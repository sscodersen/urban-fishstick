import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContainerType = {
  className?: string;
  m?: string;
  professionals?: string;
  whoTrustMaxAIAroundTheWor?: string;
  container?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Container: FunctionComponent<ContainerType> = ({
  className = "",
  m,
  professionals,
  whoTrustMaxAIAroundTheWor,
  container,
  propMinWidth,
  propMarginLeft,
  propDisplay,
  propMinWidth1,
  propAlignSelf,
}) => {
  const container3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      marginLeft: propMarginLeft,
    };
  }, [propMinWidth, propMarginLeft]);

  const mStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const whoTrustMaxAIStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start pt-8 pb-0 pr-0 pl-8 box-border min-w-[218px] max-w-[336px] text-left text-37xl text-wwwmaxaime-wisteria font-wwwmaxaime-mulish-regular-14-underline ${className}`}
      style={container3Style}
    >
      <div className="flex-1 rounded-2xl bg-wwwmaxaime-athens-gray flex flex-col items-start justify-start pt-6 px-6 pb-[24.1px] box-border gap-[34.6px] min-h-[295px] mq450:gap-[17px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <b
            className="relative inline-block min-w-[116px] mq450:text-15xl mq825:text-26xl"
            style={mStyle}
          >
            {m}
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl">
            <b className="self-stretch relative mq450:text-base">
              {professionals}
            </b>
            <div
              className="relative text-base text-wwwmaxaime-black-87"
              style={whoTrustMaxAIStyle}
            >
              {whoTrustMaxAIAroundTheWor}
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-[85.3px] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={container}
        />
      </div>
    </div>
  );
};

export default Container;
