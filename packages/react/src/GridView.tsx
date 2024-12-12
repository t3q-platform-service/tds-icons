/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const GridView = (
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
        id="mask0_3875_2918"
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
      <g mask="url(#mask0_3875_2918)">
        <path
          d="M5 11C4.45 11 3.97917 10.8042 3.5875 10.4125C3.19583 10.0208 3 9.55 3 9V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H9C9.55 3 10.0208 3.19583 10.4125 3.5875C10.8042 3.97917 11 4.45 11 5V9C11 9.55 10.8042 10.0208 10.4125 10.4125C10.0208 10.8042 9.55 11 9 11H5ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V15C3 14.45 3.19583 13.9792 3.5875 13.5875C3.97917 13.1958 4.45 13 5 13H9C9.55 13 10.0208 13.1958 10.4125 13.5875C10.8042 13.9792 11 14.45 11 15V19C11 19.55 10.8042 20.0208 10.4125 20.4125C10.0208 20.8042 9.55 21 9 21H5ZM15 11C14.45 11 13.9792 10.8042 13.5875 10.4125C13.1958 10.0208 13 9.55 13 9V5C13 4.45 13.1958 3.97917 13.5875 3.5875C13.9792 3.19583 14.45 3 15 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V9C21 9.55 20.8042 10.0208 20.4125 10.4125C20.0208 10.8042 19.55 11 19 11H15ZM15 21C14.45 21 13.9792 20.8042 13.5875 20.4125C13.1958 20.0208 13 19.55 13 19V15C13 14.45 13.1958 13.9792 13.5875 13.5875C13.9792 13.1958 14.45 13 15 13H19C19.55 13 20.0208 13.1958 20.4125 13.5875C20.8042 13.9792 21 14.45 21 15V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H15ZM5 9H9V5H5V9ZM15 9H19V5H15V9ZM15 19H19V15H15V19ZM5 19H9V15H5V19Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(GridView);
export default ForwardRef;
