/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const MovieChecked = (
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
        id="mask0_3875_3691"
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
      <g mask="url(#mask0_3875_3691)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 8H6L4 4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V18C2 18.55 2.19583 19.0208 2.5875 19.4125C2.97917 19.8042 3.45 20 4 20H20C20.55 20 21.0208 19.8042 21.4125 19.4125C21.8042 19.0208 22 18.55 22 18V8.5L20 10.5V18H12.2086C11.751 18.1618 11.249 18.1618 10.7914 18H4V10L5.5 10C6.32843 9.17157 7.67158 9.17157 8.50001 10L14.5 10L16.5 8H16L14 4H12L14 8H11L9 4H7L9 8ZM21.4125 4.5875C21.6598 4.83482 21.8291 5.11372 21.9202 5.42417C21.0875 4.6724 19.8023 4.69767 19 5.5L18.1667 6.33333L17 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875ZM19.8543 6.33041L11.6073 14.5774L7.8121 10.7313C7.61748 10.5367 7.38636 10.4394 7.11876 10.4394C6.85116 10.4394 6.62005 10.5367 6.42543 10.7313C6.23081 10.9259 6.12945 11.157 6.12134 11.4246C6.11323 11.6922 6.20648 11.9233 6.4011 12.1179L10.9261 16.6696C11.1207 16.8642 11.3478 16.9615 11.6073 16.9615C11.8668 16.9615 12.0938 16.8642 12.2884 16.6696L21.2166 7.71708C21.4112 7.52246 21.5085 7.29135 21.5085 7.02374C21.5085 6.75614 21.4112 6.52503 21.2166 6.33041C21.022 6.13579 20.7949 6.03848 20.5354 6.03848C20.2759 6.03848 20.0489 6.13579 19.8543 6.33041Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(MovieChecked);
export default ForwardRef;
