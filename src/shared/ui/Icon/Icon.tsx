import { FC, JSXElementConstructor, ReactElement, SVGProps } from 'react';

const icons: Record<string, ReactElement<SVGProps<string>, JSXElementConstructor<SVGSVGElement>>> = {
  'close': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="2.06066" y1="1.93934" x2="22.3423" y2="22.2209" stroke="black" strokeWidth="3"/>
    <line x1="1.37342" y1="22.2209" x2="21.655" y2="1.93934" stroke="black" strokeWidth="3"/>
  </svg>
  ,
  'check': <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1.06066" y1="11.5659" x2="8.06066" y2="18.5659" stroke="black" strokeWidth="3"/>
    <line x1="6.2953" y1="18.5659" x2="22.9218" y2="1.93934" stroke="black" strokeWidth="3"/>
  </svg>
};

interface IconProps {
  name: keyof typeof icons,
  width?: number,
  height?: number
}

export const Icon: FC<IconProps> = ({ name }) => {
  return icons[name];
};
