/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const RotateRight = (
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
        id="mask0_3875_3706"
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
      <g mask="url(#mask0_3875_3706)">
        <path
          d="M13.05 22V19.95C13.6167 19.8667 14.1708 19.7167 14.7125 19.5C15.2542 19.2833 15.7667 19 16.25 18.65L17.65 20.1C16.95 20.6333 16.2167 21.0625 15.45 21.3875C14.6833 21.7125 13.8833 21.9167 13.05 22ZM11.05 22C8.74999 21.7 6.84165 20.7042 5.32499 19.0125C3.80832 17.3208 3.04999 15.3333 3.04999 13.05C3.04999 11.8 3.28749 10.6292 3.76249 9.53749C4.23749 8.44582 4.87915 7.49582 5.68749 6.68749C6.49582 5.87915 7.44582 5.23749 8.53749 4.76249C9.62915 4.28749 10.8 4.04999 12.05 4.04999H12.2L10.65 2.49999L12.05 1.04999L16.05 5.04999L12.05 9.04999L10.65 7.64999L12.25 6.04999H12.05C10.1 6.04999 8.44582 6.72915 7.08749 8.08749C5.72915 9.44582 5.04999 11.1 5.04999 13.05C5.04999 14.7833 5.61665 16.3042 6.74999 17.6125C7.88332 18.9208 9.31665 19.7 11.05 19.95V22ZM19.1 18.65L17.65 17.25C18 16.7667 18.2833 16.2542 18.5 15.7125C18.7167 15.1708 18.8667 14.6167 18.95 14.05H21C20.9167 14.8833 20.7125 15.6833 20.3875 16.45C20.0625 17.2167 19.6333 17.95 19.1 18.65ZM21 12.05H18.95C18.8667 11.4833 18.7167 10.9292 18.5 10.3875C18.2833 9.84582 18 9.33332 17.65 8.84999L19.1 7.44999C19.6333 8.09999 20.0583 8.81665 20.375 9.59999C20.6917 10.3833 20.9 11.2 21 12.05Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(RotateRight);
export default ForwardRef;
