/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Component = (
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
      <g>
        <path
          d="M12 2L16.1667 6.16666L12 10.3333L7.83331 6.16666L12 2Z"
          fill="currentColor"
        />
        <path
          d="M6.16669 7.83335L10.3334 12L6.16669 16.1667L2 12L6.16669 7.83335Z"
          fill="currentColor"
        />
        <path
          d="M12 13.6667L16.1667 17.8333L12 22L7.83331 17.8333L12 13.6667Z"
          fill="currentColor"
        />
        <path
          d="M17.8333 7.83335L22 12L17.8333 16.1667L13.6666 12L17.8333 7.83335Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Component);
export default ForwardRef;
