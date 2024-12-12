/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const CheckFile = (
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
        id="mask0_3875_3695"
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
      <g mask="url(#mask0_3875_3695)">
        <g>
          <path
            d="M4.5875 21.4125C4.97917 21.8042 5.45 22 6 22H18C18.55 22 19.0208 21.8042 19.4125 21.4125C19.8042 21.0208 20 20.55 20 20V11.4997L13.6382 17.8615C13.5171 17.9826 13.3877 18.0905 13.2518 18.1851C13.2409 18.1964 13.2299 18.2076 13.2187 18.2188C12.1961 19.2413 10.5382 19.2413 9.5156 18.2188L5 13.5547C3.97741 12.5321 3.97741 10.8742 5 9.85156C6.02259 8.82897 7.53207 8.82897 8.55466 9.85156L11.1014 12.3983L14.4997 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8V4L16.2499 7.24986L17.7499 5.74986L14.575 2.575C14.3917 2.39167 14.1792 2.25 13.9375 2.15C13.6958 2.05 13.4417 2 13.175 2H6C5.45 2 4.97917 2.19583 4.5875 2.5875C4.19583 2.97917 4 3.45 4 4V20C4 20.55 4.19583 21.0208 4.5875 21.4125Z"
            fill="currentColor"
          />
          <path
            d="M11.288 14.775L19.763 6.3C19.963 6.1 20.1963 6 20.463 6C20.7297 6 20.963 6.1 21.163 6.3C21.363 6.5 21.463 6.7375 21.463 7.0125C21.463 7.2875 21.363 7.525 21.163 7.725L11.988 16.925C11.788 17.125 11.5547 17.225 11.288 17.225C11.0213 17.225 10.788 17.125 10.588 16.925L6.288 12.625C6.088 12.425 5.99217 12.1875 6.0005 11.9125C6.00883 11.6375 6.113 11.4 6.313 11.2C6.513 11 6.7505 10.9 7.0255 10.9C7.3005 10.9 7.538 11 7.738 11.2L11.288 14.775Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(CheckFile);
export default ForwardRef;