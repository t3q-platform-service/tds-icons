/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const HomeStorage = (
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
        id="mask0_3875_2916"
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
      <g mask="url(#mask0_3875_2916)">
        <path
          d="M5 21L3 9H21L19 21H5ZM6.675 19H17.325L18.6 11H5.4L6.675 19ZM10 15H14C14.2833 15 14.5208 14.9042 14.7125 14.7125C14.9042 14.5208 15 14.2833 15 14C15 13.7167 14.9042 13.4792 14.7125 13.2875C14.5208 13.0958 14.2833 13 14 13H10C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM6 8C5.71667 8 5.47917 7.90417 5.2875 7.7125C5.09583 7.52083 5 7.28333 5 7C5 6.71667 5.09583 6.47917 5.2875 6.2875C5.47917 6.09583 5.71667 6 6 6H18C18.2833 6 18.5208 6.09583 18.7125 6.2875C18.9042 6.47917 19 6.71667 19 7C19 7.28333 18.9042 7.52083 18.7125 7.7125C18.5208 7.90417 18.2833 8 18 8H6ZM8 5C7.71667 5 7.47917 4.90417 7.2875 4.7125C7.09583 4.52083 7 4.28333 7 4C7 3.71667 7.09583 3.47917 7.2875 3.2875C7.47917 3.09583 7.71667 3 8 3H16C16.2833 3 16.5208 3.09583 16.7125 3.2875C16.9042 3.47917 17 3.71667 17 4C17 4.28333 16.9042 4.52083 16.7125 4.7125C16.5208 4.90417 16.2833 5 16 5H8Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(HomeStorage);
export default ForwardRef;
