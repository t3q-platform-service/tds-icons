/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const KeyboardTabRtl = (
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
        id="mask0_3875_3711"
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
      <g mask="url(#mask0_3875_3711)">
        <path
          d="M3 18C2.71667 18 2.47917 17.9042 2.2875 17.7125C2.09583 17.5208 2 17.2833 2 17V7C2 6.71667 2.09583 6.47917 2.2875 6.2875C2.47917 6.09583 2.71667 6 3 6C3.28333 6 3.52083 6.09583 3.7125 6.2875C3.90417 6.47917 4 6.71667 4 7V17C4 17.2833 3.90417 17.5208 3.7125 17.7125C3.52083 17.9042 3.28333 18 3 18ZM9.825 13L12.7 15.875C12.9 16.075 13 16.3125 13 16.5875C13 16.8625 12.9 17.1 12.7 17.3C12.5 17.4833 12.2625 17.575 11.9875 17.575C11.7125 17.575 11.4833 17.4833 11.3 17.3L6.7 12.7C6.6 12.6 6.52917 12.4917 6.4875 12.375C6.44583 12.2583 6.425 12.1333 6.425 12C6.425 11.8667 6.44583 11.7417 6.4875 11.625C6.52917 11.5083 6.6 11.4 6.7 11.3L11.3 6.7C11.4833 6.51667 11.7167 6.425 12 6.425C12.2833 6.425 12.5167 6.51667 12.7 6.7C12.9 6.9 12.9958 7.1375 12.9875 7.4125C12.9792 7.6875 12.8833 7.91667 12.7 8.1L9.825 11H21C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 12.2833 21.9042 12.5208 21.7125 12.7125C21.5208 12.9042 21.2833 13 21 13H9.825Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(KeyboardTabRtl);
export default ForwardRef;
