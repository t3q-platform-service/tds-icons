/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const WaveZoomOut = (
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
        id="mask0_3875_3712"
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
      <g mask="url(#mask0_3875_3712)">
        <g>
          <path
            d="M6.81667 14.7167V7.73333C6.81667 7.47361 6.90833 7.2559 7.09167 7.0802C7.275 6.90451 7.49444 6.81667 7.75 6.81667C8.00556 6.81667 8.22222 6.90451 8.4 7.0802C8.57778 7.2559 8.66667 7.47361 8.66667 7.73333V14.7333C8.66667 14.9931 8.57882 15.2108 8.40313 15.3865C8.22743 15.5622 8.00972 15.65 7.75 15.65C7.49444 15.65 7.275 15.5583 7.09167 15.375C6.90833 15.1917 6.81667 14.9722 6.81667 14.7167Z"
            fill="currentColor"
          />
          <path
            d="M11.4833 9.6786C10.7207 10.1237 10.0866 10.7648 9.65 11.533V4.91667C9.65 4.65694 9.73784 4.43923 9.91353 4.26353C10.0892 4.08784 10.3069 4 10.5667 4C10.8264 4 11.0441 4.08784 11.2198 4.26353C11.3955 4.43923 11.4833 4.65694 11.4833 4.91667V9.6786Z"
            fill="currentColor"
          />
          <path
            d="M14 9C14.1007 9 14.2008 9.00298 14.3 9.00885V7.73333C14.3 7.47361 14.2111 7.2559 14.0333 7.0802C13.8556 6.90451 13.6389 6.81667 13.3833 6.81667C13.1278 6.81667 12.9083 6.90451 12.725 7.0802C12.5417 7.2559 12.45 7.47361 12.45 7.73333V9.2449C12.938 9.08593 13.459 9 14 9Z"
            fill="currentColor"
          />
          <path
            d="M16.628 9.74552C16.6742 9.77413 16.7199 9.80347 16.7651 9.83352C16.7214 9.79944 16.6757 9.77011 16.628 9.74552Z"
            fill="currentColor"
          />
          <path
            d="M4 11.8833V10.5667C4 10.3069 4.09167 10.0892 4.275 9.91353C4.45833 9.73784 4.67778 9.65 4.93333 9.65C5.18889 9.65 5.40556 9.74167 5.58333 9.925C5.76111 10.1083 5.85 10.3278 5.85 10.5833V11.9C5.85 12.1597 5.76216 12.3774 5.58647 12.5531C5.41077 12.7288 5.19306 12.8167 4.93333 12.8167C4.67778 12.8167 4.45833 12.725 4.275 12.5417C4.09167 12.3583 4 12.1389 4 11.8833Z"
            fill="currentColor"
          />
          <path
            d="M13 14.6875C12.8465 14.6875 12.7179 14.6356 12.6141 14.5318C12.5103 14.428 12.4583 14.2993 12.4583 14.1458C12.4583 13.9924 12.5103 13.8637 12.6141 13.7599C12.7179 13.6561 12.8465 13.6042 13 13.6042H15.2124C15.3659 13.6042 15.4945 13.6561 15.5983 13.7599C15.7021 13.8637 15.7541 13.9924 15.7541 14.1458C15.7541 14.2993 15.7021 14.428 15.5983 14.5318C15.4945 14.6356 15.3659 14.6875 15.2124 14.6875H13ZM14.0846 17.8427C13.0546 17.8427 12.181 17.4841 11.4637 16.7667C10.7464 16.0494 10.3877 15.1758 10.3877 14.1458C10.3877 13.1159 10.7464 12.2422 11.4637 11.5249C12.181 10.8076 13.0546 10.4489 14.0846 10.4489C15.1145 10.4489 15.9882 10.8076 16.7055 11.5249C17.4228 12.2422 17.7815 13.1159 17.7815 14.1458C17.7815 14.5533 17.7234 14.9292 17.6072 15.2736C17.491 15.6181 17.3348 15.9206 17.1386 16.1812L20.1107 19.161C20.2457 19.3011 20.3132 19.4696 20.3132 19.6664C20.3132 19.8633 20.2431 20.0292 20.103 20.1642C19.968 20.2993 19.8008 20.3668 19.6014 20.3668C19.402 20.3668 19.2347 20.2993 19.0997 20.1642L16.1353 17.1998C15.8695 17.396 15.5619 17.5523 15.2124 17.6684C14.8629 17.7846 14.4869 17.8427 14.0846 17.8427ZM14.0846 16.4073C14.7158 16.4073 15.2505 16.1882 15.6887 15.7499C16.1269 15.3117 16.346 14.777 16.346 14.1458C16.346 13.5147 16.1269 12.98 15.6887 12.5417C15.2505 12.1035 14.7158 11.8844 14.0846 11.8844C13.4534 11.8844 12.9187 12.1035 12.4805 12.5417C12.0423 12.98 11.8232 13.5147 11.8232 14.1458C11.8232 14.777 12.0423 15.3117 12.4805 15.7499C12.9187 16.1882 13.4534 16.4073 14.0846 16.4073Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(WaveZoomOut);
export default ForwardRef;
