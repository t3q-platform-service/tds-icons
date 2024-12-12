/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const NewBook = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0001 14.6667H15.5093C15.1926 15.0205 15 15.4878 15 16V16.6667L6.66667 16.6667C6.49359 16.6667 6.33566 16.7328 6.21702 16.8411L6.20746 16.85C6.07967 16.9715 6 17.1431 6 17.3333C6 17.7015 6.29848 18 6.66667 18H12.2676C12.0974 18.2942 12 18.6357 12 19C12 19.3643 12.0974 19.7058 12.2676 20H6.66667C5.19391 20 4 18.8061 4 17.3333C4 17.2789 4.00163 17.2249 4.00484 17.1713C4.00162 17.1145 4 17.0574 4 17V6C4 4.34315 5.34315 3 7 3H19.0001V16.6667L19 16C19 14.8955 18.1046 14 17.0001 14V5H10.0001V14.6667ZM7 5C6.44772 5 6 5.44772 6 6V14.7506C6.10653 14.7232 6.21564 14.7022 6.3269 14.6881C6.38603 14.6806 6.44577 14.675 6.50605 14.6714C6.55918 14.6683 6.61274 14.6667 6.66667 14.6667H8V5H7Z"
          fill="currentColor"
        />
        <path
          d="M17 23C16.4477 23 16 22.5523 16 22V20H14C13.4477 20 13 19.5523 13 19C13 18.4477 13.4477 18 14 18L16 18V16C16 15.4477 16.4477 15 17 15C17.5523 15 18 15.4477 18 16V18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H18V22C18 22.5523 17.5523 23 17 23Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(NewBook);
export default ForwardRef;
