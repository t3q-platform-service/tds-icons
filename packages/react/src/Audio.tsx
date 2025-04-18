/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Audio = (
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
        id="mask0_3875_3704"
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
      <g mask="url(#mask0_3875_3704)">
        <path
          d="M19 13H17C16.7167 13 16.4792 12.9042 16.2875 12.7125C16.0958 12.5208 16 12.2833 16 12C16 11.7167 16.0958 11.4792 16.2875 11.2875C16.4792 11.0958 16.7167 11 17 11H19C19.2833 11 19.5208 11.0958 19.7125 11.2875C19.9042 11.4792 20 11.7167 20 12C20 12.2833 19.9042 12.5208 19.7125 12.7125C19.5208 12.9042 19.2833 13 19 13ZM14.6 16.8C14.7667 16.5667 14.9833 16.4333 15.25 16.4C15.5167 16.3667 15.7667 16.4333 16 16.6L17.6 17.8C17.8333 17.9667 17.9667 18.1833 18 18.45C18.0333 18.7167 17.9667 18.9667 17.8 19.2C17.6333 19.4333 17.4167 19.5667 17.15 19.6C16.8833 19.6333 16.6333 19.5667 16.4 19.4L14.8 18.2C14.5667 18.0333 14.4333 17.8167 14.4 17.55C14.3667 17.2833 14.4333 17.0333 14.6 16.8ZM17.6 6.2L16 7.4C15.7667 7.56666 15.5167 7.63333 15.25 7.6C14.9833 7.56666 14.7667 7.43333 14.6 7.2C14.4333 6.96666 14.3667 6.71666 14.4 6.45C14.4333 6.18333 14.5667 5.96666 14.8 5.8L16.4 4.6C16.6333 4.43333 16.8833 4.36666 17.15 4.4C17.4167 4.43333 17.6333 4.56666 17.8 4.8C17.9667 5.03333 18.0333 5.28333 18 5.55C17.9667 5.81666 17.8333 6.03333 17.6 6.2ZM7 15H4C3.71667 15 3.47917 14.9042 3.2875 14.7125C3.09583 14.5208 3 14.2833 3 14V10C3 9.71666 3.09583 9.47916 3.2875 9.2875C3.47917 9.09583 3.71667 9 4 9H7L10.3 5.7C10.6167 5.38333 10.9792 5.3125 11.3875 5.4875C11.7958 5.6625 12 5.975 12 6.425V17.575C12 18.025 11.7958 18.3375 11.3875 18.5125C10.9792 18.6875 10.6167 18.6167 10.3 18.3L7 15ZM10 8.85L7.85 11H5V13H7.85L10 15.15V8.85Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Audio);
export default ForwardRef;
