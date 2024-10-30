/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconNotificationRegular = (
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
        d="M12.0002 2.19995C8.24837 2.19995 5.2002 5.24812 5.2002 8.99995V13.7577L3.33456 16.5562C3.24695 16.6876 3.2002 16.842 3.2002 17V18C3.2002 18.4418 3.55837 18.8 4.0002 18.8H9.20639L9.20088 18.933C9.20042 18.944 9.2002 18.955 9.2002 18.9661C9.2002 20.5138 10.4457 21.8 12.0002 21.8C13.5546 21.8 14.8002 20.5138 14.8002 18.9661V18.8H20.0002C20.442 18.8 20.8002 18.4418 20.8002 18V17C20.8002 16.842 20.7534 16.6876 20.6658 16.5562L18.8002 13.7577V8.99995C18.8002 5.24812 15.752 2.19995 12.0002 2.19995ZM13.2002 18.8H10.8078L10.8003 18.9806C10.808 19.6632 11.3592 20.2 12.0002 20.2C12.6457 20.2 13.2002 19.6556 13.2002 18.9661V18.8ZM19.172 17.2L17.3346 14.4437C17.2469 14.3123 17.2002 14.1579 17.2002 14V8.99995C17.2002 6.13178 14.8684 3.79995 12.0002 3.79995C9.13202 3.79995 6.8002 6.13178 6.8002 8.99995V14C6.8002 14.1579 6.75344 14.3123 6.66584 14.4437L4.82834 17.2H19.172Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconNotificationRegular);
export default ForwardRef;
