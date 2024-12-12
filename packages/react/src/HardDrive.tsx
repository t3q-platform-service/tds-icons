/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const HardDrive = (
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
        id="mask0_3875_2932"
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
      <g mask="url(#mask0_3875_2932)">
        <path
          d="M4 17H20V11H4V17ZM17 15.5C17.4167 15.5 17.7708 15.3542 18.0625 15.0625C18.3542 14.7708 18.5 14.4167 18.5 14C18.5 13.5833 18.3542 13.2292 18.0625 12.9375C17.7708 12.6458 17.4167 12.5 17 12.5C16.5833 12.5 16.2292 12.6458 15.9375 12.9375C15.6458 13.2292 15.5 13.5833 15.5 14C15.5 14.4167 15.6458 14.7708 15.9375 15.0625C16.2292 15.3542 16.5833 15.5 17 15.5ZM22 9H19.175L17.175 7H6.825L4.825 9H2L5.425 5.575C5.60833 5.39167 5.82083 5.25 6.0625 5.15C6.30417 5.05 6.55833 5 6.825 5H17.175C17.4417 5 17.6958 5.05 17.9375 5.15C18.1792 5.25 18.3917 5.39167 18.575 5.575L22 9ZM4 19C3.45 19 2.97917 18.8042 2.5875 18.4125C2.19583 18.0208 2 17.55 2 17V9H22V17C22 17.55 21.8042 18.0208 21.4125 18.4125C21.0208 18.8042 20.55 19 20 19H4Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(HardDrive);
export default ForwardRef;
