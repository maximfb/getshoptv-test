import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={ styles.container }>
      {children}
    </div>
  );
};
