/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPriceYenDefault = (
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
        d="M6.46559 2.62157C6.25663 2.36438 5.87875 2.32529 5.62157 2.53425C5.36438 2.74321 5.32529 3.1211 5.53425 3.37828L9.83307 9.8999H5.9999C5.66853 9.8999 5.3999 10.1685 5.3999 10.4999C5.3999 10.8313 5.66853 11.0999 5.9999 11.0999H10.8081L10.8999 11.2129V13.3999H5.9999C5.66853 13.3999 5.3999 13.6685 5.3999 13.9999C5.3999 14.3313 5.66853 14.5999 5.9999 14.5999H10.8999V20.9999C10.8999 21.3313 11.1686 21.5999 11.4999 21.5999C11.8313 21.5999 12.0999 21.3313 12.0999 20.9999V14.5999H16.9999C17.3313 14.5999 17.5999 14.3313 17.5999 13.9999C17.5999 13.6685 17.3313 13.3999 16.9999 13.3999H12.0999V11.2129L12.1918 11.0999H16.9999C17.3313 11.0999 17.5999 10.8313 17.5999 10.4999C17.5999 10.1685 17.3313 9.8999 16.9999 9.8999H13.1668L17.4656 3.37828C17.6746 3.1211 17.6355 2.74321 17.3783 2.53425C17.1211 2.32529 16.7432 2.36438 16.5343 2.62157L11.6206 9.8999L11.3792 9.8999L6.46559 2.62157Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPriceYenDefault);
export default ForwardRef;
