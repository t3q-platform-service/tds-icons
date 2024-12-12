/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const FindInPage = (
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
        id="mask0_3875_3693"
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
      <g mask="url(#mask0_3875_3693)">
        <path
          d="M14.75 20L16.75 22H6C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H15L20 8V20C20 20.3333 19.9292 20.6375 19.7875 20.9125C19.6458 21.1875 19.45 21.4167 19.2 21.6L14 16.45C13.7167 16.6333 13.4083 16.7708 13.075 16.8625C12.7417 16.9542 12.3833 17 12 17C10.9 17 9.95833 16.6083 9.175 15.825C8.39167 15.0417 8 14.1 8 13C8 11.9 8.39167 10.9583 9.175 10.175C9.95833 9.39167 10.9 9 12 9C13.1 9 14.0417 9.39167 14.825 10.175C15.6083 10.9583 16 11.9 16 13C16 13.3833 15.9542 13.7417 15.8625 14.075C15.7708 14.4083 15.6333 14.7167 15.45 15L18 17.6V8.7L14.05 4H6V20H14.75ZM12 15C12.55 15 13.0208 14.8042 13.4125 14.4125C13.8042 14.0208 14 13.55 14 13C14 12.45 13.8042 11.9792 13.4125 11.5875C13.0208 11.1958 12.55 11 12 11C11.45 11 10.9792 11.1958 10.5875 11.5875C10.1958 11.9792 10 12.45 10 13C10 13.55 10.1958 14.0208 10.5875 14.4125C10.9792 14.8042 11.45 15 12 15Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(FindInPage);
export default ForwardRef;
