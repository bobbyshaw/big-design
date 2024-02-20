// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { PrivateIconProps } from '../../base';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'AR flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useId();
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-labelledby={titleId}
      ref={svgRef}
      viewBox="0 0 640 480"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M0 0h640v480H0z" fill="#74acdf" />
      <path d="M0 160h640v160H0z" fill="#fff" />
      <g id="ARFlagIcon__c" transform="translate(-64) scale(.96)">
        <path
          d="M396.8 251.3l28.5 62s.5 1.2 1.3.9c.8-.4.3-1.6.3-1.6l-23.7-64m-.7 24.2c-.4 9.4 5.4 14.6 4.7 23-.8 8.5 3.8 13.2 5 16.5 1 3.3-1.2 5.2-.3 5.7 1 .5 3-2.1 2.4-6.8-.7-4.6-4.2-6-3.4-16.3.8-10.3-4.2-12.7-3-22"
          fill="#f6b40e"
          id="ARFlagIcon__a"
          stroke="#85340a"
          strokeWidth={1.1}
        />
        <use
          height="100%"
          transform="rotate(22.5 400 250)"
          width="100%"
          xlinkHref="#ARFlagIcon__a"
        />
        <use height="100%" transform="rotate(45 400 250)" width="100%" xlinkHref="#ARFlagIcon__a" />
        <use
          height="100%"
          transform="rotate(67.5 400 250)"
          width="100%"
          xlinkHref="#ARFlagIcon__a"
        />
        <path
          d="M404.3 274.4c.5 9 5.6 13 4.6 21.3 2.2-6.5-3.1-11.6-2.8-21.2m-7.7-23.8l19.5 42.6-16.3-43.9"
          fill="#85340a"
          id="ARFlagIcon__b"
        />
        <use
          height="100%"
          transform="rotate(22.5 400 250)"
          width="100%"
          xlinkHref="#ARFlagIcon__b"
        />
        <use height="100%" transform="rotate(45 400 250)" width="100%" xlinkHref="#ARFlagIcon__b" />
        <use
          height="100%"
          transform="rotate(67.5 400 250)"
          width="100%"
          xlinkHref="#ARFlagIcon__b"
        />
      </g>
      <use height="100%" transform="rotate(90 320 240)" width="100%" xlinkHref="#ARFlagIcon__c" />
      <use height="100%" transform="rotate(180 320 240)" width="100%" xlinkHref="#ARFlagIcon__c" />
      <use height="100%" transform="rotate(-90 320 240)" width="100%" xlinkHref="#ARFlagIcon__c" />
      <circle cx={320} cy={240} fill="#f6b40e" r={26.7} stroke="#85340a" strokeWidth={1.4} />
      <path
        d="M329 234.3c-1.7 0-3.5.8-4.5 2.4 2 1.9 6.6 2 9.7-.2a7 7 0 00-5.1-2.2zm0 .4c1.8 0 3.5.8 3.7 1.6-2 2.3-5.3 2-7.4.4 1-1.4 2.4-2 3.8-2z"
        fill="#843511"
        id="ARFlagIcon__h"
        strokeWidth={1}
      />
      <use
        height="100%"
        transform="matrix(-1 0 0 1 640.2 0)"
        width="100%"
        xlinkHref="#ARFlagIcon__d"
      />
      <use
        height="100%"
        transform="matrix(-1 0 0 1 640.2 0)"
        width="100%"
        xlinkHref="#ARFlagIcon__e"
      />
      <use height="100%" transform="translate(18.1)" width="100%" xlinkHref="#ARFlagIcon__f" />
      <use
        height="100%"
        transform="matrix(-1 0 0 1 640.2 0)"
        width="100%"
        xlinkHref="#ARFlagIcon__g"
      />
      <path
        d="M316 243.7a1.8 1.8 0 101.8 2.9 4 4 0 002.2.6h.2c.6 0 1.6-.1 2.3-.6.3.5.9.7 1.5.7a1.8 1.8 0 00.3-3.6c.5.2.8.6.8 1.2a1.2 1.2 0 01-2.4 0 3 3 0 01-2.6 1.7 3 3 0 01-2.5-1.7c0 .7-.6 1.2-1.3 1.2-.6 0-1.2-.6-1.2-1.2s.3-1 .8-1.2zm2 5.4c-2.1 0-3 2-4.8 3.1 1-.4 1.8-1.2 3.3-2 1.4-.8 2.6.2 3.5.2.8 0 2-1 3.5-.2 1.4.8 2.3 1.6 3.3 2-1.9-1.2-2.7-3-4.8-3-.4 0-1.2.2-2 .6z"
        fill="#85340a"
      />
      <path
        d="M317.2 251.6c-.8 0-1.8.2-3.4.6 3.7-.8 4.5.5 6.2.5 1.6 0 2.5-1.3 6.1-.5-4-1.2-4.9-.4-6.1-.4-.8 0-1.4-.3-2.8-.2"
        fill="#85340a"
      />
      <path
        d="M314 252.2h-.8c4.3.5 2.3 3 6.8 3s2.5-2.5 6.8-3c-4.5-.4-3.1 2.3-6.8 2.3-3.5 0-2.4-2.3-6-2.3"
        fill="#85340a"
      />
      <path d="M323.7 258.9a3.7 3.7 0 00-7.4 0 3.8 3.8 0 017.4 0" fill="#85340a" />
      <path
        d="M303.4 234.3c4.7-4.1 10.7-4.8 14-1.7a8 8 0 011.5 3.4c.4 2.4-.3 4.9-2.1 7.5l.8.4c1.6-3.1 2.2-6.3 1.6-9.4l-.6-2.3c-4.5-3.7-10.7-4-15.2 2z"
        fill="#85340a"
        id="ARFlagIcon__e"
        strokeWidth={1}
      />
      <path
        d="M310.8 233c2.7 0 3.3.6 4.5 1.7 1.2 1 1.9.8 2 1 .3.2 0 .8-.3.6-.5-.2-1.3-.6-2.5-1.6s-2.5-1-3.7-1c-3.7 0-5.7 3-6.1 2.8-.5-.2 2-3.5 6.1-3.5"
        fill="#85340a"
        id="ARFlagIcon__d"
        strokeWidth={1}
      />
      <use height="100%" transform="translate(-18.4)" width="100%" xlinkHref="#ARFlagIcon__h" />
      <circle cx={310.9} cy={236.3} fill="#85340a" id="ARFlagIcon__f" r={1.8} strokeWidth={1} />
      <path
        d="M305.9 237.5c3.5 2.7 7 2.5 9 1.3 2-1.3 2-1.7 1.6-1.7-.4 0-.8.4-2.4 1.3-1.7.8-4.1.8-8.2-.9"
        fill="#85340a"
        id="ARFlagIcon__g"
        strokeWidth={1}
      />
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const ARFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

ARFlagIcon.displayName = 'ARFlagIcon';
