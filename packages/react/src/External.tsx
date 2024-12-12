/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const External = (
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
          d="M13 3C12.4477 3 12 3.44772 12 4C12 4.55228 12.4477 5 13 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V11C19 11.5523 19.4477 12 20 12C20.5523 12 21 11.5523 21 11V3H13Z"
          fill="currentColor"
        />
        <path
          d="M4.88889 4H9V5.77778H5.77778V18.2222H18.2222V15H20V19.1111C20 19.602 19.602 20 19.1111 20H4.88889C4.39797 20 4 19.602 4 19.1111V4.88889C4 4.39797 4.39797 4 4.88889 4Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(External);
export default ForwardRef;