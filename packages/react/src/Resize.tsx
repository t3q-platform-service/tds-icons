/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Resize = (
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
        id="mask0_3875_3715"
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
      <g mask="url(#mask0_3875_3715)">
        <path
          d="M19 9V5H15V3H21V9H19ZM3 21V15H5V19H9V21H3ZM3 13V11H5V13H3ZM3 9V7H5V9H3ZM3 5V3H5V5H3ZM7 5V3H9V5H7ZM11 21V19H13V21H11ZM11 5V3H13V5H11ZM15 21V19H17V21H15ZM19 21V19H21V21H19ZM19 17V15H21V17H19ZM19 13V11H21V13H19Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Resize);
export default ForwardRef;
