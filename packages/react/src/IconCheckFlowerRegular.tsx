/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCheckFlowerRegular = (
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
          d="M8.2263 2.88971C9.08464 1.74393 10.4544 1 12 1C13.5456 1 14.9153 1.74389 15.7736 2.88954C17.1907 2.68642 18.6853 3.12903 19.778 4.22177C20.871 5.3147 21.3135 6.80923 21.1103 8.2263C22.2561 9.08465 23 10.4544 23 12C23 13.5456 22.2561 14.9153 21.1105 15.7736C21.3136 17.1907 20.871 18.6853 19.7782 19.778C18.6853 20.871 17.1908 21.3135 15.7737 21.1103C14.9154 22.2561 13.5456 23 12 23C10.4544 23 9.08472 22.2561 8.22637 21.1105C6.80928 21.3136 5.3147 20.871 4.22196 19.7782C3.12903 18.6853 2.68655 17.1908 2.88971 15.7737C1.74394 14.9154 1 13.5456 1 12C1 10.4544 1.74389 9.08472 2.88954 8.22636C2.68642 6.80927 3.12903 5.3147 4.22177 4.22196C5.3147 3.12903 6.80922 2.68654 8.2263 2.88971ZM12 2.62963C10.8476 2.62963 9.84279 3.26111 9.31285 4.20013C9.12869 4.52647 8.74569 4.68513 8.3847 4.58462C7.34597 4.29542 6.18902 4.55936 5.37409 5.37428C4.55935 6.18903 4.29527 7.34608 4.58444 8.38475C4.68493 8.74572 4.52629 9.1287 4.19999 9.31287C3.26109 9.84281 2.62963 10.8476 2.62963 12C2.62963 13.1524 3.26111 14.1572 4.20013 14.6871C4.52647 14.8713 4.68513 15.2543 4.58462 15.6153C4.29542 16.654 4.55936 17.811 5.37428 18.6259C6.18903 19.4406 7.34608 19.7047 8.38475 19.4156C8.74572 19.3151 9.1287 19.4737 9.31287 19.8C9.84281 20.7389 10.8476 21.3704 12 21.3704C13.1524 21.3704 14.1572 20.7389 14.6871 19.7999C14.8713 19.4735 15.2543 19.3149 15.6153 19.4154C16.654 19.7046 17.811 19.4406 18.6259 18.6257C19.4407 17.811 19.7047 16.6539 19.4156 15.6153C19.3151 15.2543 19.4737 14.8713 19.8 14.6871C20.7389 14.1572 21.3704 13.1524 21.3704 12C21.3704 10.8476 20.7389 9.84279 19.7999 9.31286C19.4735 9.12869 19.3149 8.74569 19.4154 8.3847C19.7046 7.34597 19.4406 6.18902 18.6257 5.37409C17.811 4.55935 16.6539 4.29527 15.6153 4.58444C15.2543 4.68493 14.8713 4.5263 14.6871 4.19999C14.1572 3.26109 13.1524 2.62963 12 2.62963Z"
          fill="currentColor"
        />
        <path
          d="M14.4989 8.79633C14.7798 8.40672 15.3234 8.31863 15.713 8.59959C16.1026 8.88054 16.1907 9.42414 15.9098 9.81375L11.991 15.2481C11.8382 15.4601 11.5981 15.5921 11.3373 15.6076C11.0764 15.6231 10.8224 15.5206 10.6455 15.3283L8.15565 12.6219C7.83043 12.2684 7.85336 11.7182 8.20686 11.393C8.56036 11.0678 9.11057 11.0907 9.4358 11.4442L11.2037 13.3659L14.4989 8.79633Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCheckFlowerRegular);
export default ForwardRef;
