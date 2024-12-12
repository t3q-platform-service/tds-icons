/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const RotateLeft = (
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
        id="mask0_3875_3729"
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
      <g mask="url(#mask0_3875_3729)">
        <path
          d="M11 22C10.1667 21.9167 9.36665 21.7125 8.59999 21.3875C7.83332 21.0625 7.09999 20.6333 6.39999 20.1L7.79999 18.65C8.28332 19 8.79582 19.2833 9.33749 19.5C9.87915 19.7167 10.4333 19.8667 11 19.95V22ZM13 22V19.95C14.7333 19.7 16.1667 18.9208 17.3 17.6125C18.4333 16.3042 19 14.7833 19 13.05C19 11.1 18.3208 9.44582 16.9625 8.08749C15.6042 6.72915 13.95 6.04999 12 6.04999H11.8L13.4 7.64999L12 9.04999L7.99999 5.04999L12 1.04999L13.4 2.49999L11.85 4.04999H12C13.25 4.04999 14.4208 4.28749 15.5125 4.76249C16.6042 5.23749 17.5542 5.87915 18.3625 6.68749C19.1708 7.49582 19.8125 8.44582 20.2875 9.53749C20.7625 10.6292 21 11.8 21 13.05C21 15.3333 20.2417 17.3208 18.725 19.0125C17.2083 20.7042 15.3 21.7 13 22ZM4.94999 18.65C4.41665 17.95 3.98749 17.2167 3.66249 16.45C3.33749 15.6833 3.13332 14.8833 3.04999 14.05H5.09999C5.18332 14.6167 5.33332 15.1708 5.54999 15.7125C5.76665 16.2542 6.04999 16.7667 6.39999 17.25L4.94999 18.65ZM3.04999 12.05C3.14999 11.2 3.35832 10.3833 3.67499 9.59999C3.99165 8.81665 4.41665 8.09999 4.94999 7.44999L6.39999 8.84999C6.04999 9.33332 5.76665 9.84582 5.54999 10.3875C5.33332 10.9292 5.18332 11.4833 5.09999 12.05H3.04999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(RotateLeft);
export default ForwardRef;