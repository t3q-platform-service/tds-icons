/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const VersionControl = (
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
      <mask
        id="mask0_5837_10250"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <rect width={24} height={24} fill="currentColor" />
      </mask>
      <g mask="url(#mask0_5837_10250)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7ZM11 8.82929C12.1652 8.41746 13 7.30622 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.30622 7.83481 8.41746 9 8.82929V17.5V20C9 20.5523 9.44772 21 10 21C10.5523 21 11 20.5523 11 20V17.5C11 17.2824 11.0477 17.1969 11.0673 17.1677C11.0889 17.1354 11.1378 17.0813 11.2732 17.0197C11.6018 16.8704 12.0982 16.8134 12.8405 16.7459L12.9213 16.7386C13.5465 16.6822 14.3812 16.607 15.0544 16.301C15.4347 16.1282 15.8155 15.8619 16.0946 15.445C16.1924 15.2989 16.2713 15.1441 16.3325 14.9818C17.8329 14.8164 19 13.5445 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.0155 13.5046 13.9132 14.2767 14.456C14.2615 14.4639 14.245 14.472 14.2268 14.4803C13.8982 14.6296 13.4018 14.6866 12.6595 14.7541L12.5788 14.7614H12.5788C12.117 14.803 11.5409 14.855 11 15.0026V8.82929ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(VersionControl);
export default ForwardRef;
