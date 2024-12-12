/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const KeyVertical = (
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
        id="mask0_3875_3625"
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
      <g mask="url(#mask0_3875_3625)">
        <path
          d="M10.5 7C10.5 6.45 10.6958 5.97917 11.0875 5.5875C11.4792 5.19583 11.95 5 12.5 5C13.05 5 13.5208 5.19583 13.9125 5.5875C14.3042 5.97917 14.5 6.45 14.5 7C14.5 7.55 14.3042 8.02083 13.9125 8.4125C13.5208 8.80417 13.05 9 12.5 9C11.95 9 11.4792 8.80417 11.0875 8.4125C10.6958 8.02083 10.5 7.55 10.5 7ZM12.5 24L8 19.5L9.5 17.5L8 15.5L9.5 13.375V12.2C8.6 11.6667 7.875 10.9458 7.325 10.0375C6.775 9.12917 6.5 8.11667 6.5 7C6.5 5.33333 7.08333 3.91667 8.25 2.75C9.41667 1.58333 10.8333 1 12.5 1C14.1667 1 15.5833 1.58333 16.75 2.75C17.9167 3.91667 18.5 5.33333 18.5 7C18.5 8.11667 18.225 9.12917 17.675 10.0375C17.125 10.9458 16.4 11.6667 15.5 12.2V21L12.5 24ZM8.5 7C8.5 7.93333 8.78333 8.75417 9.35 9.4625C9.91667 10.1708 10.6333 10.6417 11.5 10.875V14L10.475 15.45L12 17.5L10.625 19.275L12.5 21.15L13.5 20.15V10.875C14.3667 10.6417 15.0833 10.1708 15.65 9.4625C16.2167 8.75417 16.5 7.93333 16.5 7C16.5 5.9 16.1083 4.95833 15.325 4.175C14.5417 3.39167 13.6 3 12.5 3C11.4 3 10.4583 3.39167 9.675 4.175C8.89167 4.95833 8.5 5.9 8.5 7Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(KeyVertical);
export default ForwardRef;
