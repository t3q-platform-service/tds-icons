/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const BookSetting = (
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
          d="M11.9078 14.6667H10.0001V5H17.0001V11.4C17.7047 11.4 18.3789 11.5301 19.0001 11.7677V3H7C5.34315 3 4 4.34315 4 6V17C4 17.0574 4.00162 17.1145 4.00484 17.1713C4.00163 17.2249 4 17.2789 4 17.3333C4 18.8061 5.19391 20 6.66667 20H12.2705C11.8897 19.401 11.6197 18.7247 11.489 18H6.66667C6.29848 18 6 17.7015 6 17.3333C6 17.1431 6.07967 16.9715 6.20746 16.85L6.21702 16.8411C6.33566 16.7328 6.49359 16.6667 6.66667 16.6667H11.4097C11.4514 15.9563 11.6256 15.2815 11.9078 14.6667ZM6 6C6 5.44772 6.44772 5 7 5H8V14.6667H6.66667C6.61274 14.6667 6.55918 14.6683 6.50605 14.6714C6.44577 14.675 6.38603 14.6806 6.3269 14.6881C6.21564 14.7022 6.10653 14.7232 6 14.7506V6Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 12C16.4477 12 16 12.4477 16 13V13.126C15.633 13.2205 15.2863 13.3657 14.968 13.5538L14.8787 13.4645C14.4881 13.0739 13.855 13.0739 13.4644 13.4645C13.0739 13.855 13.0739 14.4882 13.4644 14.8787L13.5538 14.9681C13.3657 15.2864 13.2205 15.633 13.126 16H13C12.4477 16 12 16.4477 12 17C12 17.5523 12.4477 18 13 18H13.126C13.2205 18.367 13.3657 18.7137 13.5538 19.032L13.4645 19.1213C13.0739 19.5118 13.0739 20.145 13.4645 20.5355C13.855 20.9261 14.4882 20.9261 14.8787 20.5355L14.968 20.4462C15.2863 20.6343 15.633 20.7795 16 20.874V21C16 21.5523 16.4477 22 17 22C17.5523 22 18 21.5523 18 21V20.874C18.367 20.7795 18.7136 20.6343 19.0319 20.4462L19.1213 20.5355C19.5118 20.9261 20.145 20.9261 20.5355 20.5355C20.926 20.145 20.926 19.5118 20.5355 19.1213L20.4462 19.032C20.6343 18.7137 20.7795 18.367 20.874 18H21C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16H20.874C20.7795 15.633 20.6343 15.2863 20.4462 14.968L20.5355 14.8787C20.9261 14.4882 20.9261 13.855 20.5355 13.4645C20.145 13.0739 19.5118 13.0739 19.1213 13.4645L19.032 13.5538C18.7137 13.3657 18.367 13.2205 18 13.126V13C18 12.4477 17.5523 12 17 12ZM17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(BookSetting);
export default ForwardRef;