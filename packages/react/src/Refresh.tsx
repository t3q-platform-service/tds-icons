/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Refresh = (
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
        id="mask0_3875_3661"
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
      <g mask="url(#mask0_3875_3661)">
        <path
          d="M12 21C14.3 21 16.3042 20.2375 18.0125 18.7125C19.7208 17.1875 20.7 15.2833 20.95 13H18.9C18.6667 14.7333 17.8958 16.1667 16.5875 17.3C15.2792 18.4333 13.75 19 12 19C10.05 19 8.39583 18.3208 7.0375 16.9625C5.67917 15.6042 5 13.95 5 12C5 10.05 5.67917 8.39583 7.0375 7.0375C8.39583 5.67917 10.05 5 12 5C13.15 5 14.225 5.26667 15.225 5.8C16.225 6.33333 17.0667 7.06667 17.75 8H15V10H21V4H19V6.35C18.15 5.28333 17.1125 4.45833 15.8875 3.875C14.6625 3.29167 13.3667 3 12 3C10.75 3 9.57917 3.2375 8.4875 3.7125C7.39583 4.1875 6.44583 4.82917 5.6375 5.6375C4.82917 6.44583 4.1875 7.39583 3.7125 8.4875C3.2375 9.57917 3 10.75 3 12C3 13.25 3.2375 14.4208 3.7125 15.5125C4.1875 16.6042 4.82917 17.5542 5.6375 18.3625C6.44583 19.1708 7.39583 19.8125 8.4875 20.2875C9.57917 20.7625 10.75 21 12 21Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Refresh);
export default ForwardRef;
