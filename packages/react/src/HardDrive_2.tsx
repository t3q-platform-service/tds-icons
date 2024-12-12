/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const HardDrive_2 = (
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
        id="mask0_3875_2930"
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
      <g mask="url(#mask0_3875_2930)">
        <path
          d="M14 19C14.2833 19 14.5208 18.9042 14.7125 18.7125C14.9042 18.5208 15 18.2833 15 18C15 17.7167 14.9042 17.4792 14.7125 17.2875C14.5208 17.0958 14.2833 17 14 17C13.7167 17 13.4792 17.0958 13.2875 17.2875C13.0958 17.4792 13 17.7167 13 18C13 18.2833 13.0958 18.5208 13.2875 18.7125C13.4792 18.9042 13.7167 19 14 19ZM17 19C17.2833 19 17.5208 18.9042 17.7125 18.7125C17.9042 18.5208 18 18.2833 18 18C18 17.7167 17.9042 17.4792 17.7125 17.2875C17.5208 17.0958 17.2833 17 17 17C16.7167 17 16.4792 17.0958 16.2875 17.2875C16.0958 17.4792 16 17.7167 16 18C16 18.2833 16.0958 18.5208 16.2875 18.7125C16.4792 18.9042 16.7167 19 17 19ZM3 13V4C3 3.45 3.19583 2.97917 3.5875 2.5875C3.97917 2.19583 4.45 2 5 2H19C19.55 2 20.0208 2.19583 20.4125 2.5875C20.8042 2.97917 21 3.45 21 4V13H19V4H5V13H3ZM5 15V20H19V15H5ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V13H21V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(HardDrive_2);
export default ForwardRef;
