// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { PrivateIconProps } from '../../base';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'MT flag',
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
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="evenodd" strokeWidth="1pt">
        <path d="M320 0h320v480H320z" fill="#ce0000" />
        <path d="M0 0h320v480H0z" fill="#fff" />
      </g>
      <g transform="translate(-12.4 -30.8) scale(1.5986)">
        <path
          d="M104.8 108c0 .9-.9 1.5-2 1.5-1.2 0-2-.6-2-1.4 0-.8.8-1.5 2-1.5 1.1 0 2 .7 2 1.5z"
          fill="#f1eeee"
          fillRule="evenodd"
        />
        <path
          d="M40.7 101v37.2H78c0 6.2 6.2 12.4 12.4 12.4v37.2h37.3v-37.2c6.2 0 12.4-6.2 12.4-12.4h37.2V101H140c0-6.2-6.2-12.4-12.4-12.4V51.4H90.4v37.2c-6.3 0-12.5 6.2-12.5 12.4z"
          fill="#c00"
          fillRule="evenodd"
        />
        <path
          d="M42 102.2V137h37.2c0 6.2 6.2 12.4 12.4 12.4v37.2h34.7v-37.1c6.2 0 12.4-6.2 12.4-12.4H176v-34.8h-37.2c0-6.2-6.2-12.4-12.4-12.4V52.6H91.6v37.2c-6.2 0-12.4 6.2-12.4 12.4z"
          fill="#ffe600"
          fillRule="evenodd"
        />
        <path
          d="M43.2 103.5v32.2h37.2c0 6.2 6.2 12.4 12.4 12.4v37.2h32.3v-37.2c6.2 0 12.4-6.2 12.4-12.4h37.2v-32.2h-37.2c0-6.2-6.2-12.4-12.4-12.4V53.9H92.8V91c-6.2 0-12.4 6.2-12.4 12.4z"
          fill="#707070"
          fillRule="evenodd"
        />
        <path
          d="M44.5 104.7v29.8h37.2c0 6.2 6.2 12.4 12.4 12.4V184h29.7v-37.2c6.2 0 12.4-6.2 12.4-12.4h37.2v-29.8h-37.2c0-6.2-6.2-12.4-12.4-12.4V55.1H94.1v37.2c-6.2 0-12.4 6.2-12.4 12.4H44.4z"
          fill="#a0a0a0"
          fillRule="evenodd"
        />
        <g fillRule="evenodd">
          <path
            d="M94.4 89.2c2.1 2.2.4 7.5-4 11.9s-9.6 6-11.8 4c-2.2-2.3-.4-7.6 4-12s9.6-6 11.8-3.9"
            fill="#d0d0d0"
          />
          <path
            d="M91.7 91.8c2.2 2.2 1.6 6.3-1.3 9.3s-7 3.5-9.2 1.3c-2.2-2.2-1.6-6.3 1.3-9.2s7-3.5 9.2-1.4"
            fill="gray"
          />
          <path
            d="M80.8 98.4l.8-.8 3.5 1.7-1.7-3.5.9-.9 3.5 7zm5.2-5.2l1-1 5.2 5.4-.9.8z"
            fill="#d0d0d0"
          />
        </g>
        <g fillRule="evenodd">
          <path
            d="M139.3 105c-2.2 2.2-7.5.4-11.8-4s-6.2-9.6-4-11.8c2.2-2.2 7.5-.4 11.9 4s6 9.6 4 11.8z"
            fill="#d0d0d0"
          />
          <path
            d="M136.7 102.4c-2.2 2.2-6.3 1.6-9.2-1.3s-3.5-7-1.4-9.2c2.2-2.2 6.4-1.6 9.3 1.3s3.5 7 1.3 9.2"
            fill="gray"
          />
          <path
            d="M130.1 91.4l.9.9-1.8 3.5 3.5-1.8 1 1-7.1 3.4zm5.3 5.3l.8.8-5.2 5.3-.9-.9z"
            fill="#d0d0d0"
          />
        </g>
        <g fillRule="evenodd">
          <path
            d="M123.5 150c-2.2-2.2-.4-7.5 4-11.9s9.6-6.1 11.8-4c2.2 2.2.4 7.5-4 11.9s-9.6 6.1-11.8 4"
            fill="#d0d0d0"
          />
          <path
            d="M126.2 147.3c-2.2-2.2-1.6-6.3 1.3-9.2s7-3.5 9.2-1.3c2.2 2.2 1.6 6.3-1.3 9.2s-7 3.5-9.3 1.3z"
            fill="gray"
          />
          <path
            d="M137.1 140.7l-.9 1-3.5-1.8 1.8 3.5-.9.8-3.5-7zM132 146l-1 .9-5.2-5.3.9-.9z"
            fill="#d0d0d0"
          />
        </g>
        <g fillRule="evenodd">
          <path
            d="M78.6 134.2c2.2-2.2 7.5-.4 11.8 3.9s6.1 9.7 4 11.8c-2.2 2.2-7.5.5-11.9-3.9s-6-9.7-4-11.8z"
            fill="#d0d0d0"
          />
          <path
            d="M81.2 136.8c2.2-2.2 6.3-1.6 9.2 1.3s3.5 7 1.3 9.2c-2.1 2.2-6.3 1.6-9.2-1.3s-3.5-7-1.3-9.2"
            fill="gray"
          />
          <path
            d="M87.8 147.8l-.9-1 1.8-3.4-3.5 1.7-1-.9 7.1-3.5-3.5 7zm-5.3-5.3l-.8-.9 5.2-5.2.9.8z"
            fill="#d0d0d0"
          />
        </g>
        <path
          d="M269.3 414.6c0 41-34.1 74.4-76.2 74.4S117 455.7 117 414.6s34.1-74.4 76.2-74.4 76.2 33.3 76.2 74.4z"
          fill="none"
          stroke="#707070"
          strokeWidth="1pt"
          transform="matrix(.34191 0 0 .35003 43 -25.5)"
        />
        <path
          d="M269.3 414.6c0 41-34.1 74.4-76.2 74.4S117 455.7 117 414.6s34.1-74.4 76.2-74.4 76.2 33.3 76.2 74.4z"
          fill="none"
          stroke="#707070"
          strokeWidth="1pt"
          transform="matrix(.2605 0 0 .26669 58.6 9)"
        />
        <path
          d="M100.3 140.7a1.2 1.2 0 11-2.5 0 1.2 1.2 0 012.5 0m19.8 0a1.2 1.2 0 11-2.5 0 1.2 1.2 0 012.5 0m-12 0v1.3h-1.6c-1.7 0-1.7 1.3 0 1.3h1.6v1.2c0 1.4 1.5 1.5 1.6.1v-1.4h1.7c1.7 0 1.7-1.2 0-1.2h-1.6v-1.3c0-1.3-1.7-1.3-1.7 0"
          fill="#d0d0d0"
          fillRule="evenodd"
        />
        <path
          d="M102.8 122.3v.8s-.4.5-2.9.7c-2.5.2-2.9 0-2.9 0 .1.7.6 1.9.4 3.3.1 1.7-.4 3.2-.4 3.2 0 .1-.3.2-.8.1.4-.4.4-1.4.4-3 0-1.4-1.5-3.7-1.2-4.3.3-.6 7.4-.8 7.4-.8zm9.8-2.6l6.5-.1s1 2 .9 3c0 1-.4 2-.8 1.5-.5-.5.2-.4.3-1.5 0-1.2-.8-2.3-.8-2.3s-1.8.7-4.4.6c-2.6-.2-1.4-1.2-1.7-1.2z"
          fill="#d0d0d0"
          fillRule="evenodd"
          stroke="#707070"
          strokeWidth={0.1}
        />
        <path
          d="M113.4 121.6c2.4-.1 4 .2 4 .2s1 2 1 3c-.1 1-.4 2-.9 1.5-.4-.4.2-.3.3-1.5 0-1.1-.8-2.3-.8-2.3s-1.7.7-4.3.6c-2.6-.2-1.8-.3-2.1-.4-.3 0-.4.8-4.3.9-4 0-6-.9-6-.9s-.4.6-2.8.8h-3c.1.6.6 1.8.5 3.3 0 1.6-.5 3.2-.5 3.2h-.7c.4-.3.3-1.4.4-2.9 0-1.5-1.6-3.7-1.3-4.4.4-.6 2.2 0 2.5-.3.3-.4-1.6-2.7-1.2-4.8.3-2.1 2.4-1.5 4.9-1.5 2.5.1 8 .8 9.4 0 1.4-.7.8-3.4 2-5.1a4.1 4.1 0 013.3-1.5c.9 0 2 3 2 3.7l-.3.4h-.4v.3c-1 .1-1.1-.8-1.7-1.4-.2 1 .8 4.4.8 6.6 0 1.8-.7 2.6-.8 2.5z"
          fill="#d0d0d0"
          fillRule="evenodd"
          stroke="#707070"
          strokeWidth={0.1}
        />
        <path
          d="M105.5 118.4c0 .7-3.1 2.4-3.4 3-.2.7.8 1 .5 1.4-.3.4-.6.2-.7.3l-1.2-2.5s3-1.4 2.9-2c-.1-.6-2.2-1-2.6-2.4s-.2-4.3-.5-4.9c-.3-.6-4-1.2-4-2 0-1 3.8-3.4 4.2-3.8.4-.4.8.4.4.7-.4.4-3.3 2.7-3.3 3 0 .4 2.4.8 3.2.8.9 0 1.3-.4 1.3-.8 0-.3-.9-.3-.9-1s.5-1.2 1.3-1.2c.4 0 1.2.5 1.2 1.1s-.7.7-.8 1.1c-.1.5.8.8 1.6.8s3.6 2.1 4 2.5c.5.3.9.3.5.7-.4.4-.2.8-.6.4a1.5 1.5 0 01-.4-.7c0-.3-3-1.8-3.5-1.5-.4.4 0 4.8 0 5.2 0 .7.9.7.8 1.8z"
          fill="#d0d0d0"
          fillRule="evenodd"
          stroke="#707070"
          strokeWidth={0.1}
        />
        <path d="M100.3 109.9h5v5.1h-5z" fill="#a7a7a7" fillRule="evenodd" />
        <rect
          fill="gray"
          fillRule="evenodd"
          height={0.4}
          rx={0.5}
          ry={0.2}
          transform="matrix(.55442 .83223 -.88237 .47055 0 0)"
          width={30.6}
          x={138.6}
          y={-25.7}
        />
        <path
          d="M180.7 42.5a7 7 0 11-14.2 0 7 7 0 0114.2 0z"
          fill="#d0d0d0"
          fillRule="evenodd"
          stroke="#707070"
          strokeWidth="1pt"
          transform="matrix(.11563 0 0 .10345 80.7 101.5)"
        />
        <path
          d="M115.9 112.5c0 .3-2 .7-4.1.7-2.2 0-4.1-.4-4.1-.7 0-.3 1.9.5 4 .5 2.3 0 4.2-.8 4.2-.5"
          fill="gray"
          fillRule="evenodd"
        />
        <path d="M100.7 115h4.1v1.5h-4z" fill="#a7a7a7" fillRule="evenodd" />
        <path
          d="M114 111.4c-.4.8-.7 1.3-.8 1.2 0 0 .2-.8.6-1.5l.8-1.2c.1.1-.2.8-.6 1.5m1 2l-.8.5a3.2 3.2 0 01.8-.9c.5-.4.9-.6.9-.5l-.8.8z"
          fill="gray"
          fillRule="evenodd"
        />
        <path
          d="M114.6 112.4l.5 1.2-.8-1-.5-1.2zm-.4 3.2s-1.2.2-2.8.2-2.9-.1-2.9-.2l2.9-.2c1.6 0 2.8 0 2.8.2m-9.4-.4c0 .1-.9.2-2 .2-1.2 0-2 0-2-.2 0 0 .8-.2 2-.2 1.1 0 2 .1 2 .2"
          fill="gray"
          fillRule="evenodd"
        />
        <path
          d="M95.8 128s.7 1.6 3.6 1.6c2.8 0 3.8-.5 2.7-1.3s-3.4-.6-3 .1c.2.8-.9 1-1.1.5-.3-.5-1.3-2.1.5-2.2 1.9-.1 5.8-.7 6.8.4s-1.1 2 .5 2.3c1.5.2 1.8-.3 4.5-.4 2.7-.2 3.8.5 4.7.4 1 0 .8-1.7 0-2-.7-.5-2.1-.6-2.5-1-.3-.5-1.3 0-1.2-.6 0-.5 1.4.3 1.4.1l.2-.2h-.3l.1-.2-.2.1.1-.2s-.3.2-.3 0h-.2c.2-.2.1-.2 0-.3h-.3v-.3c-.2 0-.2 0-.3.2v-.5c0-.1.2-.2.5-.2.7 0 1 .8 1.3.8.2 0 .5-.8 1.4-.5l1.5.6c.5.3-.3.6 0 1s2.1 1.7 1.6 3.2c-.5 1.4-2 1.6-2 2.2-.2.6 4.3.4 5.4.6a3 3 0 011.9 1.2l-2 .1s-1-.5-3.5-.6c-2.5 0-3.4-1-4.4-1.2l-4 .2-3-.3c-.6-.1-4.2 1.6-4.2 2h-2.4s.3-.9 1.7-1c1.3-.2 2.7-.8 2.6-1.2l.4-2.6c0-.6.6-1 .5-1.2-.1-.4-1.7-.7-3.2-.7-1.5 0-3.1.1-3.4.4-.2.4 0 1.5.3 1.3.3 0-.1-.8.2-.9a6.8 6.8 0 012-.3c.8 0 2.1.7 2.1 1 0 .1.4.8-.2 1.1a8.2 8.2 0 01-3.1.4 7.5 7.5 0 01-3-.8c-.4-.3-.7-1-.7-1.1z"
          fill="#d0d0d0"
          fillRule="evenodd"
          stroke="gray"
          strokeWidth={0.1}
        />
        <path d="M114 125.5a.3.3 0 11-.6 0 .3.3 0 01.6 0" fillRule="evenodd" />
        <path
          d="M129.5 120.8l1.6.3 2.7-1.8-.2 1-1.4.9-.8.4.5.8.9 1.4-.2 1-1.7-2.9-1.6-.3zm-2.7-11.8l3-1.4-.8-1.8.4-.2 2 4.4-.3.2-.9-1.9-3 1.5zm-4.8-5.8l2.8-2.6.6.6v4.4l2.2-2 .5.6-2.8 2.6-.6-.6v-4.4l-2.2 2zm-12.4-5l.5-3.8h.8l-.5 3.5 3 .3v.5zm-6.1.6l-.7-3.8.8-.2.6 3.4 3-.6v.5zm-11.3 5.5l-.3-.3 2-1.6 1 1a5.7 5.7 0 01-.8 1.2 5.7 5.7 0 01-.9 1 5.2 5.2 0 01-1.4.8c-.5.1-1 .2-1.3 0a1.6 1.6 0 01-1-.5 1.7 1.7 0 01-.3-1c0-.4.1-.9.4-1.3.2-.4.6-.8 1-1.1a4.8 4.8 0 011.1-.7l.9-.2c.2 0 .5 0 .7.2l-.4.5a1.3 1.3 0 00-.6-.1l-.6.1a3.2 3.2 0 00-.7.5c-.3.2-.6.4-.7.7a2 2 0 00-.4.6v.5c0 .3.1.6.3.8l.7.5 1-.1a4.1 4.1 0 002.1-2l-.4-.6zm-.1 27.7l-3.2 2.3-2.4-3.4.4-.3 2 2.7.9-.7-1.6-2.3.3-.2 1.7 2.3 1.4-1zm-4.7-5c.5-.1.8-.4 1-.9v-1.5a2.6 2.6 0 00-.9-1.3c-.3-.3-.8-.4-1.2-.3a1.4 1.4 0 00-.8.5c-.1.2-.3.5-.3.8l.1 1.1c.2.6.4 1 .8 1.4.3.3.8.4 1.3.2m.3.8a1.7 1.7 0 01-1.7-.4 3.7 3.7 0 01-1.1-1.8c-.2-.6-.2-1-.2-1.6s.2-.8.4-1.1a1.6 1.6 0 011-.7 1.6 1.6 0 011 .1c.4.2.7.4 1 .8a4.5 4.5 0 01.8 3 2.3 2.3 0 01-.4 1.1c-.2.3-.5.5-.8.6m.3-7.8h-4v-2.8l.2-1.2.4-.7a.8.8 0 01.6-.2c.3 0 .5.1.7.4.1.3.3.7.3 1.3a2.5 2.5 0 01.7-1.1l1.1-1v1l-.8.7-.6.6a1.7 1.7 0 00-.3.4 1.6 1.6 0 000 .4v.4l-.1 1H88zm-2.2-.9v-1.7a4 4 0 000-.9 1 1 0 00-.2-.4.5.5 0 00-.3-.2c-.2 0-.4.1-.5.3l-.2 1v2zm10.7-16.9v-4.5l.8-.5 4.1 2-.8.5-1.2-.6-2.1 1.3v1.4zm.7-2.3l1.8-1-1-.6a8.3 8.3 0 01-.9-.5l.1.8zm18.6-1.2L120 97l.7.5-.3 4.6-.7-.6.1-1.3-2-1.5-1.3.5zm2.4-.2l1.7 1.2v-1.2a8.4 8.4 0 01.2-1 3.7 3.7 0 01-.7.5zm10.3 14.3l3.8-.9.6 2.7.2 1.2-.2.7a.8.8 0 01-.5.4c-.3 0-.6 0-.8-.2a2.8 2.8 0 01-.7-1.2 2.5 2.5 0 010 .5l-.4.8-.8 1.2-.2-1 .6-1 .4-.6a1.6 1.6 0 00.2-.8 3.7 3.7 0 00-.1-.5l-.2-.9-1.7.4zm2.3.3l.4 1.7c0 .3.2.6.3.8 0 .2.2.3.3.4l.4.1c.1 0 .3-.2.3-.4a2.1 2.1 0 000-1l-.5-1.9z"
          fill="#d0d0d0"
        />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const MTFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

MTFlagIcon.displayName = 'MTFlagIcon';
