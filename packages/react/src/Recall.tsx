/* eslint-disable */ // @ts-nocheck @ts-ignore
import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const Recall = (
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
        id="mask0_3875_3618"
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
      <g mask="url(#mask0_3875_3618)">
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.99999C12.5523 1.99999 13 2.4477 13 2.99999V3.9995C12.3721 4.83524 12 5.87416 12 6.99999C12 8.12581 12.3721 9.16473 13 10.0005V10.2644C13.1461 10.3509 13.2836 10.4586 13.4125 10.5875C13.5414 10.7164 13.6491 10.8539 13.7356 11H13.9995C14.8353 11.6279 15.8742 12 17 12C18.1258 12 19.1647 11.6279 20.0005 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H17.9255C17.7344 14.2408 17.1759 15.3241 16.25 16.25C15.3241 17.1759 14.2408 17.7344 13 17.9254V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V17.9254C9.75921 17.7344 8.67588 17.1759 7.75 16.25C6.82412 15.3241 6.26564 14.2408 6.07454 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6.07454C6.26564 9.7592 6.82412 8.67587 7.75 7.74999C8.67588 6.82411 9.75921 6.26562 11 6.07453V2.99999C11 2.4477 11.4477 1.99999 12 1.99999ZM9.175 9.17499C9.70959 8.6404 10.3179 8.28822 11 8.11847V10.2644C10.8539 10.3509 10.7164 10.4586 10.5875 10.5875C10.4586 10.7164 10.3509 10.8539 10.2644 11H8.11848C8.28824 10.3179 8.64041 9.70958 9.175 9.17499ZM10.5875 13.4125C10.7164 13.5414 10.8539 13.6491 11 13.7356V15.8815C10.3179 15.7118 9.70959 15.3596 9.175 14.825C8.64041 14.2904 8.28824 13.6821 8.11848 13H10.2644C10.3509 13.1461 10.4586 13.2836 10.5875 13.4125ZM13 13.7356V15.8815C13.6821 15.7118 14.2904 15.3596 14.825 14.825C15.3596 14.2904 15.7118 13.6821 15.8815 13H13.7356C13.6491 13.1461 13.5414 13.2836 13.4125 13.4125C13.2836 13.5414 13.1461 13.6491 13 13.7356Z"
            fill="currentColor"
          />
          <path
            d="M15.8 10.8125C15.0083 10.5375 14.3667 10.0625 13.875 9.38749C13.3833 8.71249 13.1375 7.95415 13.1375 7.11249C13.1375 6.73749 13.1833 6.36665 13.275 5.99999C13.3667 5.63332 13.5083 5.29582 13.7 4.98749C13.8167 4.78749 13.9958 4.6854 14.2375 4.68124C14.4792 4.67707 14.6875 4.76249 14.8625 4.93749C14.9708 5.04582 15.0292 5.18332 15.0375 5.34999C15.0458 5.51665 15.0083 5.67082 14.925 5.81249C14.8083 6.01249 14.7271 6.22707 14.6813 6.45624C14.6354 6.6854 14.6125 6.90832 14.6125 7.12499C14.6125 7.64165 14.7563 8.10415 15.0438 8.51249C15.3313 8.92082 15.7125 9.21665 16.1875 9.39999C16.3458 9.46665 16.4729 9.56249 16.5688 9.68749C16.6646 9.81249 16.7125 9.94999 16.7125 10.1C16.7125 10.3583 16.6188 10.5646 16.4313 10.7187C16.2438 10.8729 16.0333 10.9042 15.8 10.8125ZM18.5125 10.825C18.2875 10.9167 18.0813 10.8854 17.8938 10.7312C17.7063 10.5771 17.6125 10.3708 17.6125 10.1125C17.6125 9.96249 17.6625 9.8229 17.7625 9.69374C17.8625 9.56457 17.9875 9.46665 18.1375 9.39999C18.6125 9.20832 18.9938 8.8979 19.2813 8.46874C19.5688 8.03957 19.7125 7.56665 19.7125 7.04999C19.7125 6.39165 19.4917 5.8229 19.05 5.34374C18.6083 4.86457 18.0583 4.59165 17.4 4.52499H17.3125L17.525 4.73749C17.6417 4.85415 17.6958 4.98124 17.6875 5.11874C17.6792 5.25624 17.6167 5.38332 17.5 5.49999C17.3833 5.61665 17.2542 5.67499 17.1125 5.67499C16.9708 5.67499 16.8458 5.61665 16.7375 5.49999L15.45 4.22499C15.3833 4.15832 15.3313 4.07499 15.2938 3.97499C15.2563 3.87499 15.2375 3.77499 15.2375 3.67499C15.2375 3.58332 15.2583 3.49165 15.3 3.39999C15.3417 3.30832 15.3958 3.22915 15.4625 3.16249L16.7625 1.84999C16.8792 1.73332 17.0063 1.67499 17.1438 1.67499C17.2813 1.67499 17.4083 1.73332 17.525 1.84999C17.6417 1.96665 17.6979 2.09582 17.6938 2.23749C17.6896 2.37915 17.6333 2.50832 17.525 2.62499L17.1375 3.03749H17.2375C18.3375 3.03749 19.2708 3.43124 20.0375 4.21874C20.8042 5.00624 21.1875 5.94999 21.1875 7.04999C21.1875 7.90832 20.9417 8.67915 20.45 9.36249C19.9583 10.0458 19.3125 10.5333 18.5125 10.825Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(Recall);
export default ForwardRef;
