/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Redo = (
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
        id="mask0_3875_3713"
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
      <g mask="url(#mask0_3875_3713)">
        <path
          d="M9.9 19C8.28333 19 6.89583 18.475 5.7375 17.425C4.57917 16.375 4 15.0667 4 13.5C4 11.9333 4.57917 10.625 5.7375 9.575C6.89583 8.525 8.28333 8 9.9 8H16.2L13.6 5.4L15 4L20 9L15 14L13.6 12.6L16.2 10H9.9C8.85 10 7.9375 10.3333 7.1625 11C6.3875 11.6667 6 12.5 6 13.5C6 14.5 6.3875 15.3333 7.1625 16C7.9375 16.6667 8.85 17 9.9 17H17V19H9.9Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Redo);
export default ForwardRef;
