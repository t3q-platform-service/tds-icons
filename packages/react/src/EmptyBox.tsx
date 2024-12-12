/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const EmptyBox = (
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
        id="mask0_3875_3637"
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
      <g mask="url(#mask0_3875_3637)">
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.38183 12L5.62004 14H10.2177L8.97954 12H4.38183ZM11.0144 16H6.06158L6.06158 20H11.0144L11.0144 16ZM4.001 15.2868L2.22823 12.295C1.6097 11.2959 2.32119 10 3.48822 10H9.25405C9.76635 10 10.2425 10.2664 10.514 10.705L12.9955 14.7132L12.9955 22H4.92203C4.92203 22 4.001 22 4.001 21L4.001 15.2868Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.6182 12L18.38 14H13.7823L15.0205 12H19.6182ZM12.9856 16H17.9384V20H12.9856L12.9856 16ZM19.999 15.2868L21.7718 12.295C22.3903 11.2959 21.6788 10 20.5118 10H14.7459C14.2336 10 13.7575 10.2664 13.486 10.705L11.0045 14.7132L11.0045 22H19.078C19.078 22 19.999 22 19.999 21V15.2868Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.32341 2.29289C9.71025 1.90237 10.3374 1.90237 10.7243 2.29289L14.6865 6.29289C15.0734 6.68342 15.0734 7.31658 14.6865 7.70711C14.2997 8.09763 13.6725 8.09763 13.2857 7.70711L9.32341 3.70711C8.93657 3.31658 8.93657 2.68342 9.32341 2.29289Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6865 2.29289C14.2997 1.90237 13.6725 1.90237 13.2857 2.29289L9.32341 6.29289C8.93657 6.68342 8.93657 7.31658 9.32341 7.70711C9.71025 8.09763 10.3374 8.09763 10.7243 7.70711L14.6865 3.70711C15.0734 3.31658 15.0734 2.68342 14.6865 2.29289Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(EmptyBox);
export default ForwardRef;
