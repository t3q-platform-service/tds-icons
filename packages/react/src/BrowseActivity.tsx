/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const BrowseActivity = (
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
        id="mask0_3875_2862"
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
      <g mask="url(#mask0_3875_2862)">
        <path
          d="M2 9V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V9H20V5H4V9H2ZM4 18C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V11H4V16H20V11H22V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H4ZM2 21C1.71667 21 1.47917 20.9042 1.2875 20.7125C1.09583 20.5208 1 20.2833 1 20C1 19.7167 1.09583 19.4792 1.2875 19.2875C1.47917 19.0958 1.71667 19 2 19H22C22.2833 19 22.5208 19.0958 22.7125 19.2875C22.9042 19.4792 23 19.7167 23 20C23 20.2833 22.9042 20.5208 22.7125 20.7125C22.5208 20.9042 22.2833 21 22 21H2ZM2 11V9H8C8.18333 9 8.35833 9.05 8.525 9.15C8.69167 9.25 8.81667 9.38333 8.9 9.55L10.075 11.875L13.15 6.5C13.2333 6.35 13.35 6.22917 13.5 6.1375C13.65 6.04583 13.8167 6 14 6C14.1833 6 14.3583 6.04583 14.525 6.1375C14.6917 6.22917 14.8167 6.36667 14.9 6.55L16.125 9H22V11H15.5C15.3167 11 15.1417 10.9542 14.975 10.8625C14.8083 10.7708 14.6833 10.6333 14.6 10.45L13.95 9.125L10.875 14.5C10.7917 14.6667 10.6667 14.7917 10.5 14.875C10.3333 14.9583 10.1583 15 9.975 15C9.79167 15 9.62083 14.95 9.4625 14.85C9.30417 14.75 9.18333 14.6167 9.1 14.45L7.375 11H2Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(BrowseActivity);
export default ForwardRef;
