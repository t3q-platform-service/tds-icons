/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const KeyboardTab = (
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
        id="mask0_3875_3701"
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
      <g mask="url(#mask0_3875_3701)">
        <path
          d="M21 18C20.7167 18 20.4792 17.9042 20.2875 17.7125C20.0958 17.5208 20 17.2833 20 17V7C20 6.71667 20.0958 6.47917 20.2875 6.2875C20.4792 6.09583 20.7167 6 21 6C21.2833 6 21.5208 6.09583 21.7125 6.2875C21.9042 6.47917 22 6.71667 22 7V17C22 17.2833 21.9042 17.5208 21.7125 17.7125C21.5208 17.9042 21.2833 18 21 18ZM14.175 13H3C2.71667 13 2.47917 12.9042 2.2875 12.7125C2.09583 12.5208 2 12.2833 2 12C2 11.7167 2.09583 11.4792 2.2875 11.2875C2.47917 11.0958 2.71667 11 3 11H14.175L11.3 8.1C11.1167 7.91667 11.0208 7.6875 11.0125 7.4125C11.0042 7.1375 11.1 6.9 11.3 6.7C11.4833 6.51667 11.7167 6.425 12 6.425C12.2833 6.425 12.5167 6.51667 12.7 6.7L17.3 11.3C17.4 11.4 17.4708 11.5083 17.5125 11.625C17.5542 11.7417 17.575 11.8667 17.575 12C17.575 12.1333 17.5542 12.2583 17.5125 12.375C17.4708 12.4917 17.4 12.6 17.3 12.7L12.7 17.3C12.5167 17.4833 12.2875 17.575 12.0125 17.575C11.7375 17.575 11.5 17.4833 11.3 17.3C11.1 17.1 11 16.8625 11 16.5875C11 16.3125 11.1 16.075 11.3 15.875L14.175 13Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(KeyboardTab);
export default ForwardRef;
