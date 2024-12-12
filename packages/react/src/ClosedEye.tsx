/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ClosedEye = (
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
        id="mask0_3875_3683"
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
      <g mask="url(#mask0_3875_3683)">
        <path
          d="M20.6331 9.36964C20.8208 8.9466 21.4685 8.85362 21.6845 9.26465C21.7708 9.42892 21.8531 9.59633 21.9314 9.76689C22.0229 9.96615 22.0229 10.1918 21.9314 10.3911C21.2805 11.8087 20.3529 13.0088 19.1486 13.9912L20.366 15.7484C20.6422 16.147 20.4783 16.6566 20 16.8868C19.5217 17.1169 18.9101 16.9803 18.634 16.5817L17.5798 15.0601C16.1668 15.8597 14.6402 16.3263 13 16.4599V18.1667C13 18.6269 12.5523 19 12 19C11.4477 19 11 18.6269 11 18.1667V16.4599C9.22155 16.3151 7.57664 15.7787 6.0653 14.8507L4.86604 16.5817C4.5899 16.9803 3.97831 17.1169 3.50001 16.8868C3.02172 16.6566 2.85785 16.147 3.13399 15.7484L4.53663 13.7239C3.48431 12.7936 2.66164 11.6826 2.06864 10.3911C1.97715 10.1918 1.97711 9.96615 2.06859 9.76689C2.1469 9.59633 2.22922 9.42892 2.31554 9.26465C2.53153 8.85362 3.17924 8.9466 3.36685 9.36964C4.02225 10.8475 5.25889 12.2582 6.85801 13.2695C6.9863 13.3536 7.11752 13.4352 7.25168 13.5142C8.69334 14.3632 10.2761 14.7877 12 14.7877C13.7239 14.7877 15.3067 14.3632 16.7483 13.5142C16.8825 13.4352 17.0137 13.3536 17.142 13.2695C18.7411 12.2582 19.9777 10.8475 20.6331 9.36964Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(ClosedEye);
export default ForwardRef;