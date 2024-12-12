/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const LineEndSquare = (
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
        id="mask0_3875_2896"
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
      <g mask="url(#mask0_3875_2896)">
        <path
          d="M13 15.5H20V8.5H13V15.5ZM12 17.5C11.7167 17.5 11.4792 17.4042 11.2875 17.2125C11.0958 17.0208 11 16.7833 11 16.5V13H3C2.71667 13 2.47917 12.9042 2.2875 12.7125C2.09583 12.5208 2 12.2833 2 12C2 11.7167 2.09583 11.4792 2.2875 11.2875C2.47917 11.0958 2.71667 11 3 11H11V7.5C11 7.21667 11.0958 6.97917 11.2875 6.7875C11.4792 6.59583 11.7167 6.5 12 6.5H21C21.2833 6.5 21.5208 6.59583 21.7125 6.7875C21.9042 6.97917 22 7.21667 22 7.5V16.5C22 16.7833 21.9042 17.0208 21.7125 17.2125C21.5208 17.4042 21.2833 17.5 21 17.5H12Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(LineEndSquare);
export default ForwardRef;
