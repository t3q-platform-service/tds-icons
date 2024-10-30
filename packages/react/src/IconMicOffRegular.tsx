/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMicOffRegular = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.300049C9.12807 0.300049 6.79995 2.62817 6.79995 5.50005V11.5C6.79995 12.354 7.00579 13.1599 7.37057 13.8707C7.59778 14.3136 8.18472 14.351 8.53665 13.9991C8.81606 13.7197 8.84761 13.2845 8.69146 12.9215C8.50386 12.4854 8.39995 12.0049 8.39995 11.5V5.50005C8.39995 3.51182 10.0117 1.90005 12 1.90005C13.9882 1.90005 15.6 3.51182 15.6 5.50005C15.6 6.02987 16.2405 6.29521 16.6152 5.92057L16.9549 5.58084C17.1097 5.42604 17.1968 5.21356 17.1758 4.99564C16.9221 2.36045 14.7017 0.300049 12 0.300049ZM6.01091 15.4978C6.24231 15.8438 6.22454 16.3112 5.93023 16.6055C5.59778 16.938 5.04954 16.9185 4.78034 16.533C3.78423 15.1068 3.19995 13.3717 3.19995 11.5C3.19995 11.0582 3.55812 10.7 3.99995 10.7C4.44178 10.7 4.79995 11.0582 4.79995 11.5C4.79995 12.9792 5.24599 14.3542 6.01091 15.4978ZM6.87601 18.6553L4.56569 20.9656C4.25327 21.278 3.74673 21.278 3.43431 20.9656C3.1219 20.6532 3.1219 20.1466 3.43431 19.8342L19.9343 3.33422C20.2467 3.0218 20.7533 3.0218 21.0657 3.33422C21.3781 3.64664 21.3781 4.15317 21.0657 4.46559L17.2 8.33132V11.5C17.2 14.3719 14.8718 16.7001 12 16.7001C11.0861 16.7001 10.2272 16.4643 9.48098 16.0503L8.02619 17.5051C9.16504 18.2602 10.5311 18.7 12 18.7C15.9764 18.7 19.2 15.4765 19.2 11.5C19.2 11.0582 19.5581 10.7 20 10.7C20.4418 10.7 20.8 11.0582 20.8 11.5C20.8 16.0563 17.3373 19.8038 12.9 20.2546V22.1H15.4C15.8418 22.1 16.2 22.4582 16.2 22.9C16.2 23.3419 15.8418 23.7 15.4 23.7L8.59995 23.7001C8.15812 23.7001 7.79995 23.3419 7.79995 22.9C7.79995 22.4582 8.15812 22.1 8.59995 22.1H11.3V20.2726C9.65719 20.1433 8.14127 19.5629 6.87601 18.6553ZM10.6806 14.8506C11.0892 15.0116 11.5342 15.1 12 15.1C13.9882 15.1 15.6 13.4883 15.6 11.5V9.93132L10.6806 14.8506Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMicOffRegular);
export default ForwardRef;