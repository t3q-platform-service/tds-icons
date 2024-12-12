/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const ConfusionMatrix = (
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
          d="M3 4.28572C3 3.57563 3.57563 3 4.28571 3H6.85714C7.56722 3 8.14286 3.57563 8.14286 4.28571V6.85714C8.14286 7.56722 7.56722 8.14286 6.85714 8.14286H4.28572C3.57563 8.14286 3 7.56722 3 6.85714V4.28572Z"
          fill="currentColor"
        />
        <path
          d="M9.42859 4.28572C9.42859 3.57563 10.0042 3 10.7143 3H13.2857C13.9958 3 14.5714 3.57563 14.5714 4.28571V6.85714C14.5714 7.56722 13.9958 8.14286 13.2857 8.14286H10.7143C10.0042 8.14286 9.42859 7.56722 9.42859 6.85714V4.28572Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7143 4.28571H17.1428V6.85714H19.7143V4.28571ZM17.1428 3C16.4328 3 15.8571 3.57563 15.8571 4.28572V6.85714C15.8571 7.56722 16.4328 8.14286 17.1428 8.14286H19.7143C20.4243 8.14286 21 7.56722 21 6.85714V4.28571C21 3.57563 20.4243 3 19.7143 3H17.1428Z"
          fill="currentColor"
        />
        <path
          d="M15.8571 10.7143C15.8571 10.0042 16.4328 9.42856 17.1428 9.42856H19.7143C20.4243 9.42856 21 10.0042 21 10.7143V13.2857C21 13.9958 20.4243 14.5714 19.7143 14.5714H17.1428C16.4328 14.5714 15.8571 13.9958 15.8571 13.2857V10.7143Z"
          fill="currentColor"
        />
        <path
          d="M9.42859 10.7143C9.42859 10.0042 10.0042 9.42856 10.7143 9.42856H13.2857C13.9958 9.42856 14.5714 10.0042 14.5714 10.7143V13.2857C14.5714 13.9958 13.9958 14.5714 13.2857 14.5714H10.7143C10.0042 14.5714 9.42859 13.9958 9.42859 13.2857V10.7143Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.85714 10.7143H4.28571V13.2857H6.85714V10.7143ZM4.28571 9.42856C3.57563 9.42856 3 10.0042 3 10.7143V13.2857C3 13.9958 3.57563 14.5714 4.28572 14.5714H6.85714C7.56722 14.5714 8.14286 13.9958 8.14286 13.2857V10.7143C8.14286 10.0042 7.56722 9.42856 6.85714 9.42856H4.28571Z"
          fill="currentColor"
        />
        <path
          d="M3 17.1429C3 16.4328 3.57563 15.8571 4.28571 15.8571H6.85714C7.56722 15.8571 8.14286 16.4328 8.14286 17.1429V19.7143C8.14286 20.4244 7.56722 21 6.85714 21H4.28572C3.57563 21 3 20.4244 3 19.7143V17.1429Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2857 17.1429H10.7143V19.7143H13.2857V17.1429ZM10.7143 15.8571C10.0042 15.8571 9.42859 16.4328 9.42859 17.1429V19.7143C9.42859 20.4244 10.0042 21 10.7143 21H13.2857C13.9958 21 14.5714 20.4244 14.5714 19.7143V17.1429C14.5714 16.4328 13.9958 15.8571 13.2857 15.8571H10.7143Z"
          fill="currentColor"
        />
        <path
          d="M15.8571 17.1429C15.8571 16.4328 16.4328 15.8571 17.1428 15.8571H19.7143C20.4243 15.8571 21 16.4328 21 17.1429V19.7143C21 20.4244 20.4243 21 19.7143 21H17.1428C16.4328 21 15.8571 20.4244 15.8571 19.7143V17.1429Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(ConfusionMatrix);
export default ForwardRef;
