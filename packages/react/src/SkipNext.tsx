/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SkipNext = (
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
        id="mask0_3875_3689"
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
      <g mask="url(#mask0_3875_3689)">
        <path
          d="M16.5 17V7C16.5 6.71667 16.5958 6.47917 16.7875 6.2875C16.9792 6.09583 17.2167 6 17.5 6C17.7833 6 18.0208 6.09583 18.2125 6.2875C18.4042 6.47917 18.5 6.71667 18.5 7V17C18.5 17.2833 18.4042 17.5208 18.2125 17.7125C18.0208 17.9042 17.7833 18 17.5 18C17.2167 18 16.9792 17.9042 16.7875 17.7125C16.5958 17.5208 16.5 17.2833 16.5 17ZM5.5 16.125V7.875C5.5 7.575 5.6 7.33333 5.8 7.15C6 6.96667 6.23333 6.875 6.5 6.875C6.58333 6.875 6.675 6.88333 6.775 6.9C6.875 6.91667 6.96667 6.95833 7.05 7.025L13.25 11.175C13.4 11.275 13.5125 11.3958 13.5875 11.5375C13.6625 11.6792 13.7 11.8333 13.7 12C13.7 12.1667 13.6625 12.3208 13.5875 12.4625C13.5125 12.6042 13.4 12.725 13.25 12.825L7.05 16.975C6.96667 17.0417 6.875 17.0833 6.775 17.1C6.675 17.1167 6.58333 17.125 6.5 17.125C6.23333 17.125 6 17.0333 5.8 16.85C5.6 16.6667 5.5 16.425 5.5 16.125ZM7.5 14.25L10.9 12L7.5 9.75V14.25Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SkipNext);
export default ForwardRef;