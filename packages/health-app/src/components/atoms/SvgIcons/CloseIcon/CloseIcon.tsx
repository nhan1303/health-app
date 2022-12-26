import React from "react";

export interface ICloseIconProps {}

export const CloseIcon: React.FC<ICloseIconProps> = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
      <path d="M7 7L26 26" stroke="#FF963C" strokeWidth="3" />
      <path d="M7 26L26 7" stroke="#FF963C" strokeWidth="3" />
    </svg>
  );
};
