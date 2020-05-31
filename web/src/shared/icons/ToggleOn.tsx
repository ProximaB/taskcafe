import React from 'react';

type Props = {
  size: number | string;
  color: string;
};

const ToggleOn = ({ size, color }: Props) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path
        fill={color}
        d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z"
      />
    </svg>
  );
};

ToggleOn.defaultProps = {
  size: 16,
  color: '#000',
};

export default ToggleOn;