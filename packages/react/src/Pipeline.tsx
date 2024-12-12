/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Pipeline = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.7.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 6C9 5.44772 9.44772 5 10 5H14C14.5523 5 15 5.44772 15 6V12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12V6ZM11 7V11H13V7H11Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 20C15 20.5523 15.4477 21 16 21H20C20.5523 21 21 20.5523 21 20V10.2727C21 7.68704 18.8328 6 16.7059 6H15V8H16.7059C17.8731 8 19 8.93114 19 10.2727V19H17V11.9091C17 11.334 16.6794 10.8652 16.394 10.5861C16.1025 10.3012 15.6302 10 15.0588 10H15V20Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 3.44772 9 4V6H10V8H8.90909C8.51464 8 8.07388 7.83152 7.73156 7.56051C7.3496 7.25811 7 6.75321 7 6.05882V5H5V7.70588C5 8.8731 5.93114 10 7.27273 10H10V12H7.27273C4.68704 12 3 9.83278 3 7.70588V4Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Pipeline);
export default ForwardRef;
