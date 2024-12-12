/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ExecutionModule = (
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
        id="mask0_3875_3721"
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
      <g mask="url(#mask0_3875_3721)">
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5875 21.4125C4.97917 21.8042 5.45 22 6 22H10.25C10.8023 22 11.25 21.5523 11.25 21V12.7369C11.25 10.8124 13.3333 9.60955 15 10.5718L18.5 12.5925C19.1667 12.9774 20 12.4963 20 11.7265V8.825C20 8.55833 19.95 8.30417 19.85 8.0625C19.75 7.82083 19.6083 7.60833 19.425 7.425L14.575 2.575C14.3917 2.39167 14.1792 2.25 13.9375 2.15C13.6958 2.05 13.4417 2 13.175 2H6C5.45 2 4.97917 2.19583 4.5875 2.5875C4.19583 2.97917 4 3.45 4 4V20C4 20.55 4.19583 21.0208 4.5875 21.4125ZM13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8V4L18 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125Z"
            fill="currentColor"
          />
          <path
            d="M21.5 16.634C22.1667 17.0189 22.1667 17.9811 21.5 18.366L14.75 22.2631C14.0833 22.648 13.25 22.1669 13.25 21.3971V13.6029C13.25 12.8331 14.0833 12.352 14.75 12.7369L21.5 16.634Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(ExecutionModule);
export default ForwardRef;
