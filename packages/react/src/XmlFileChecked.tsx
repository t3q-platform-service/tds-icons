/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const XmlFileChecked = (
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
        id="mask0_3875_3687"
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
      <g mask="url(#mask0_3875_3687)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5875 21.4125C4.97917 21.8042 5.45 22 6 22C6.55228 22 7 21.5523 7 21V16C7 15.5944 7.24142 15.2453 7.58838 15.0884L5.5 13C4.67157 12.1716 4.67157 10.8284 5.5 10C6.32843 9.17157 7.67158 9.17157 8.50001 10L11.5 13L15.5 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8V4L16.75 7.75L18.25 6.25L14.575 2.575C14.3917 2.39167 14.1792 2.25 13.9375 2.15C13.6958 2.05 13.4417 2 13.175 2H6C5.45 2 4.97917 2.19583 4.5875 2.5875C4.19583 2.97917 4 3.45 4 4V20C4 20.55 4.19583 21.0208 4.5875 21.4125ZM14.2809 16.2191L13.5 17C13.7761 17 14 17.2239 14 17.5V20.9474H15V17.5C15 17.2239 15.2239 17 15.5 17C15.7761 17 16 17.2239 16 17.5V20.9474H17V17.5C17 16.6716 16.3284 16 15.5 16C15.1158 16 14.7654 16.1444 14.5 16.3819C14.4322 16.3213 14.3589 16.2667 14.2809 16.2191ZM12 18.0619C12.3665 17.9734 12.7139 17.7861 13 17.5L13 17.5V20.9474H12V18.0619ZM10.201 17.6773C10.3686 17.8075 10.5513 17.909 10.7423 17.982C10.6533 18.14 10.543 18.2854 10.4142 18.4142C10.3846 18.4438 10.3542 18.4724 10.3229 18.5C10.3542 18.5276 10.3846 18.5562 10.4142 18.5858C10.5999 18.7715 10.7472 18.992 10.8478 19.2346C10.9483 19.4773 11 19.7374 11 20V21H10V20C10 19.8687 9.97413 19.7386 9.92388 19.6173C9.87362 19.496 9.79996 19.3858 9.70711 19.2929C9.64518 19.231 9.57552 19.1776 9.5 19.134C9.42448 19.1776 9.35482 19.231 9.29289 19.2929C9.20004 19.3858 9.12638 19.496 9.07612 19.6173C9.02587 19.7386 9 19.8687 9 20V21H8V20C8 19.7374 8.05173 19.4773 8.15224 19.2346C8.25275 18.992 8.40007 18.7715 8.58579 18.5858C8.61537 18.5562 8.64583 18.5276 8.67712 18.5C8.64583 18.4724 8.61537 18.4438 8.58579 18.4142C8.40007 18.2285 8.25275 18.008 8.15224 17.7654C8.05173 17.5227 8 17.2626 8 17V16H8.5L9 16.5V17C9 17.1313 9.02587 17.2614 9.07612 17.3827C9.12638 17.504 9.20004 17.6142 9.29289 17.7071C9.35482 17.769 9.42448 17.8224 9.5 17.866C9.57552 17.8224 9.64518 17.769 9.70711 17.7071C9.79257 17.6216 9.86178 17.5214 9.91144 17.4114L9.99999 17.5C10.0641 17.5641 10.1312 17.6232 10.201 17.6773ZM20 10.5L15.5 15H19C19.5523 15 20 14.5523 20 14V10.5ZM18 16H19V20H21V21H19H18V20V16ZM19.8543 6.33041L11.6073 14.5774L7.8121 10.7313C7.61748 10.5367 7.38636 10.4394 7.11876 10.4394C6.85116 10.4394 6.62005 10.5367 6.42543 10.7313C6.23081 10.9259 6.12945 11.157 6.12134 11.4246C6.11323 11.6922 6.20648 11.9233 6.4011 12.1179L10.9261 16.6696C11.1207 16.8642 11.3478 16.9615 11.6073 16.9615C11.8668 16.9615 12.0938 16.8642 12.2884 16.6696L21.2166 7.71708C21.4112 7.52246 21.5085 7.29135 21.5085 7.02375C21.5085 6.75614 21.4112 6.52503 21.2166 6.33041C21.022 6.13579 20.7949 6.03848 20.5354 6.03848C20.2759 6.03848 20.0489 6.13579 19.8543 6.33041Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(XmlFileChecked);
export default ForwardRef;