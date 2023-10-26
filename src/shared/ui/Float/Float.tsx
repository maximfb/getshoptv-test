import { FC, ReactNode } from 'react';

interface FloatProps {
  children: ReactNode;
  position?: 'absolute' | 'fixed';
  place?: number;
  sides?: {
    top?: string
    right?: string,
    left?: string,
    bottom?: string
  };
}

export const Float: FC<FloatProps> = ({ position = 'absolute', place = 1, sides = {}, children }) => {
  const directions = Object.keys(sides).map(key => {
    // @ts-ignore
    return { [key]: sides[key] };
  });
  return (
    <div style={ Object.assign({ position, zIndex: place }, ...directions) }>
      { children }
    </div>
  );
};
