/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const CollectionsBookmark = (
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
        id="mask0_3875_2865"
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
      <g mask="url(#mask0_3875_2865)">
        <path
          d="M8 16H20V4H18V10.125C18 10.325 17.9167 10.475 17.75 10.575C17.5833 10.675 17.4167 10.6667 17.25 10.55L16.025 9.825C15.8583 9.725 15.6792 9.675 15.4875 9.675C15.2958 9.675 15.125 9.725 14.975 9.825L13.75 10.55C13.5667 10.6667 13.3958 10.675 13.2375 10.575C13.0792 10.475 13 10.325 13 10.125V4H8V16ZM8 18C7.45 18 6.97917 17.8042 6.5875 17.4125C6.19583 17.0208 6 16.55 6 16V4C6 3.45 6.19583 2.97917 6.5875 2.5875C6.97917 2.19583 7.45 2 8 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H8ZM4 22C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V7C2 6.71667 2.09583 6.47917 2.2875 6.2875C2.47917 6.09583 2.71667 6 3 6C3.28333 6 3.52083 6.09583 3.7125 6.2875C3.90417 6.47917 4 6.71667 4 7V20H17C17.2833 20 17.5208 20.0958 17.7125 20.2875C17.9042 20.4792 18 20.7167 18 21C18 21.2833 17.9042 21.5208 17.7125 21.7125C17.5208 21.9042 17.2833 22 17 22H4Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(CollectionsBookmark);
export default ForwardRef;