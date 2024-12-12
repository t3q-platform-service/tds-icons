/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Architecture = (
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
        id="mask0_3875_2931"
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
      <g mask="url(#mask0_3875_2931)">
        <path
          d="M6.75 21L6.5 18.8L9.35 10.95C9.6 11.1833 9.87083 11.3792 10.1625 11.5375C10.4542 11.6958 10.7667 11.8167 11.1 11.9L8.35 19.45L6.75 21ZM17.25 21L15.65 19.45L12.9 11.9C13.2333 11.8167 13.5458 11.6958 13.8375 11.5375C14.1292 11.3792 14.4 11.1833 14.65 10.95L17.5 18.8L17.25 21ZM12 11C11.1667 11 10.4583 10.7083 9.875 10.125C9.29167 9.54167 9 8.83333 9 8C9 7.35 9.1875 6.77083 9.5625 6.2625C9.9375 5.75417 10.4167 5.4 11 5.2V3H13V5.2C13.5833 5.4 14.0625 5.75417 14.4375 6.2625C14.8125 6.77083 15 7.35 15 8C15 8.83333 14.7083 9.54167 14.125 10.125C13.5417 10.7083 12.8333 11 12 11ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Architecture);
export default ForwardRef;