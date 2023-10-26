import { FC } from 'react';

interface KeyProps {
  value: string;
  onClick: (value: string) => void;
}

export const Key: FC<KeyProps> = ({ value, onClick }) => {
  return (
    <button className="key" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};