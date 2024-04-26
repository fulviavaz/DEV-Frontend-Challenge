import React from 'react'

export default function DottedDivider() {
  return (
    <div className="flex w-full pb-4 pt-4 items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="576"
        height="2"
        viewBox="0 0 576 2"
        fill="none"
      >
        <path
          d="M0 1H576"
          stroke="#E5E7EB"
          stroke-width="2"
          stroke-dasharray="2 6"
        />
      </svg>
    </div>
  );
}
