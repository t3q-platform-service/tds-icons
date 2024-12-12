/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Placeholder = (
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
      <rect
        x={0.5}
        y={0.5}
        width={23}
        height={23}
        fill="currentColor"
        fillOpacity={0.16}
      />
      <rect
        x={0.5}
        y={0.5}
        width={23}
        height={23}
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeDasharray="1 2"
      />
      <mask
        id="mask0_3875_1762"
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
      <g mask="url(#mask0_3875_1762)" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(Placeholder);
export default ForwardRef;
