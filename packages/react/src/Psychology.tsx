/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Psychology = (
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
        id="mask0_3875_3658"
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
      <g mask="url(#mask0_3875_3658)">
        <path
          d="M6 22V17.7C5.05 16.8333 4.3125 15.8208 3.7875 14.6625C3.2625 13.5042 3 12.2833 3 11C3 8.5 3.875 6.375 5.625 4.625C7.375 2.875 9.5 2 12 2C14.0833 2 15.9292 2.6125 17.5375 3.8375C19.1458 5.0625 20.1917 6.65833 20.675 8.625L21.975 13.75C22.0583 14.0667 22 14.3542 21.8 14.6125C21.6 14.8708 21.3333 15 21 15H19V18C19 18.55 18.8042 19.0208 18.4125 19.4125C18.0208 19.8042 17.55 20 17 20H15V22H13V18H17V13H19.7L18.75 9.125C18.3667 7.60833 17.55 6.375 16.3 5.425C15.05 4.475 13.6167 4 12 4C10.0667 4 8.41667 4.675 7.05 6.025C5.68333 7.375 5 9.01667 5 10.95C5 11.95 5.20417 12.9 5.6125 13.8C6.02083 14.7 6.6 15.5 7.35 16.2L8 16.8V22H6ZM11 15H13L13.15 13.75C13.2833 13.7 13.4042 13.6417 13.5125 13.575C13.6208 13.5083 13.7167 13.4333 13.8 13.35L14.95 13.85L15.95 12.15L14.95 11.4C14.9833 11.2667 15 11.1333 15 11C15 10.8667 14.9833 10.7333 14.95 10.6L15.95 9.85L14.95 8.15L13.8 8.65C13.7167 8.56667 13.6208 8.49167 13.5125 8.425C13.4042 8.35833 13.2833 8.3 13.15 8.25L13 7H11L10.85 8.25C10.7167 8.3 10.5958 8.35833 10.4875 8.425C10.3792 8.49167 10.2833 8.56667 10.2 8.65L9.05 8.15L8.05 9.85L9.05 10.6C9.01667 10.7333 9 10.8667 9 11C9 11.1333 9.01667 11.2667 9.05 11.4L8.05 12.15L9.05 13.85L10.2 13.35C10.2833 13.4333 10.3792 13.5083 10.4875 13.575C10.5958 13.6417 10.7167 13.7 10.85 13.75L11 15ZM12 12.5C11.5833 12.5 11.2292 12.3542 10.9375 12.0625C10.6458 11.7708 10.5 11.4167 10.5 11C10.5 10.5833 10.6458 10.2292 10.9375 9.9375C11.2292 9.64583 11.5833 9.5 12 9.5C12.4167 9.5 12.7708 9.64583 13.0625 9.9375C13.3542 10.2292 13.5 10.5833 13.5 11C13.5 11.4167 13.3542 11.7708 13.0625 12.0625C12.7708 12.3542 12.4167 12.5 12 12.5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Psychology);
export default ForwardRef;
