/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMyThin = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.1499 8.81569C6.1499 5.66364 8.78641 3.1499 11.9999 3.1499C15.2134 3.1499 17.8499 5.66364 17.8499 8.81569C17.8499 10.6187 16.9807 12.213 15.6354 13.2461C18.2745 14.5331 20.0999 17.1775 20.0999 20.2499C20.0999 20.5813 19.8313 20.8499 19.4999 20.8499C19.1685 20.8499 18.8999 20.5813 18.8999 20.2499C18.8999 17.3119 16.9076 14.8019 14.1237 13.9332C13.8876 13.8595 13.721 13.6486 13.7038 13.402C13.6867 13.1553 13.8227 12.9234 14.0463 12.8179C15.601 12.0838 16.6499 10.5625 16.6499 8.81569C16.6499 6.36642 14.5914 4.3499 11.9999 4.3499C9.40839 4.3499 7.3499 6.36642 7.3499 8.81569C7.3499 10.5626 8.40634 12.0907 9.95261 12.8174C10.1766 12.9227 10.3129 13.1546 10.296 13.4015C10.2791 13.6483 10.1123 13.8595 9.87612 13.9332C7.09184 14.802 5.0999 17.3051 5.0999 20.2499C5.0999 20.5813 4.83127 20.8499 4.4999 20.8499C4.16853 20.8499 3.8999 20.5813 3.8999 20.2499C3.8999 17.1711 5.72524 14.5319 8.36374 13.2461C7.02219 12.2147 6.1499 10.6168 6.1499 8.81569Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMyThin);
export default ForwardRef;
