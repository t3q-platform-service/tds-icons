/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Balance = (
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
        id="mask0_3875_3731"
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
      <g mask="url(#mask0_3875_3731)">
        <path
          d="M2 21V19H11V7.825C10.5667 7.675 10.1917 7.44167 9.875 7.125C9.55833 6.80833 9.325 6.43333 9.175 6H6L9 13C9 13.8333 8.65833 14.5417 7.975 15.125C7.29167 15.7083 6.46667 16 5.5 16C4.53333 16 3.70833 15.7083 3.025 15.125C2.34167 14.5417 2 13.8333 2 13L5 6H3V4H9.175C9.375 3.41667 9.73333 2.9375 10.25 2.5625C10.7667 2.1875 11.35 2 12 2C12.65 2 13.2333 2.1875 13.75 2.5625C14.2667 2.9375 14.625 3.41667 14.825 4H21V6H19L22 13C22 13.8333 21.6583 14.5417 20.975 15.125C20.2917 15.7083 19.4667 16 18.5 16C17.5333 16 16.7083 15.7083 16.025 15.125C15.3417 14.5417 15 13.8333 15 13L18 6H14.825C14.675 6.43333 14.4417 6.80833 14.125 7.125C13.8083 7.44167 13.4333 7.675 13 7.825V19H22V21H2ZM16.625 13H20.375L18.5 8.65L16.625 13ZM3.625 13H7.375L5.5 8.65L3.625 13ZM12 6C12.2833 6 12.5208 5.90417 12.7125 5.7125C12.9042 5.52083 13 5.28333 13 5C13 4.71667 12.9042 4.47917 12.7125 4.2875C12.5208 4.09583 12.2833 4 12 4C11.7167 4 11.4792 4.09583 11.2875 4.2875C11.0958 4.47917 11 4.71667 11 5C11 5.28333 11.0958 5.52083 11.2875 5.7125C11.4792 5.90417 11.7167 6 12 6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Balance);
export default ForwardRef;