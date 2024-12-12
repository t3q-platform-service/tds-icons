/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Sun = (
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
        id="mask0_3875_3724"
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
      <g mask="url(#mask0_3875_3724)">
        <path
          d="M12 23.3L8.65001 20H4.00001V15.35L0.700012 12L4.00001 8.65001V4.00001H8.65001L12 0.700012L15.35 4.00001H20V8.65001L23.3 12L20 15.35V20H15.35L12 23.3ZM12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.43751 15.5375 8.46251C14.5625 7.48751 13.3833 7.00001 12 7.00001C10.6167 7.00001 9.43751 7.48751 8.46251 8.46251C7.48751 9.43751 7.00001 10.6167 7.00001 12C7.00001 13.3833 7.48751 14.5625 8.46251 15.5375C9.43751 16.5125 10.6167 17 12 17ZM12 15C11.1667 15 10.4583 14.7083 9.87501 14.125C9.29168 13.5417 9.00001 12.8333 9.00001 12C9.00001 11.1667 9.29168 10.4583 9.87501 9.87501C10.4583 9.29168 11.1667 9.00001 12 9.00001C12.8333 9.00001 13.5417 9.29168 14.125 9.87501C14.7083 10.4583 15 11.1667 15 12C15 12.8333 14.7083 13.5417 14.125 14.125C13.5417 14.7083 12.8333 15 12 15ZM12 20.5L14.5 18H18V14.5L20.5 12L18 9.50001V6.00001H14.5L12 3.50001L9.50001 6.00001H6.00001V9.50001L3.50001 12L6.00001 14.5V18H9.50001L12 20.5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Sun);
export default ForwardRef;
