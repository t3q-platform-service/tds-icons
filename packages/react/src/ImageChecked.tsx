/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ImageChecked = (
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
        id="mask0_3875_3692"
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
      <g mask="url(#mask0_3875_3692)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5875 20.4125C3.97917 20.8042 4.45 21 5 21H19C19.55 21 20.0208 20.8042 20.4125 20.4125C20.8042 20.0208 21 19.55 21 19V9.5L19 11.5V19H5V12.2086C4.83824 11.751 4.83824 11.249 5 10.7914V5H19L19 5.5C19.5421 4.95787 20.3047 4.77051 20.9992 4.93793C20.9849 4.41449 20.7894 3.96435 20.4125 3.5875C20.0208 3.19583 19.55 3 19 3H5C4.45 3 3.97917 3.19583 3.5875 3.5875C3.19583 3.97917 3 4.45 3 5V19C3 19.55 3.19583 20.0208 3.5875 20.4125ZM16.0714 14.4286L13.5 17H18L16.0714 14.4286ZM7.5 15L6 17H9.5L7.5 15ZM19.8543 6.33041L11.6073 14.5774L7.8121 10.7313C7.61748 10.5367 7.38636 10.4394 7.11876 10.4394C6.85116 10.4394 6.62005 10.5367 6.42543 10.7313C6.23081 10.9259 6.12945 11.157 6.12134 11.4246C6.11323 11.6922 6.20648 11.9233 6.4011 12.1179L10.9261 16.6696C11.1207 16.8642 11.3478 16.9615 11.6073 16.9615C11.8668 16.9615 12.0938 16.8642 12.2884 16.6696L21.2166 7.71708C21.4112 7.52246 21.5085 7.29135 21.5085 7.02375C21.5085 6.75614 21.4112 6.52503 21.2166 6.33041C21.022 6.13579 20.7949 6.03848 20.5354 6.03848C20.2759 6.03848 20.0489 6.13579 19.8543 6.33041Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(ImageChecked);
export default ForwardRef;