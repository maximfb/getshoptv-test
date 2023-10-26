import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset' | undefined;
  mix?: string | string[]
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, mix, ...props }) => {
  return (
    <button {...props} type={ props.type ?? 'button' } className={cx(styles.button, mix)}>
      { children }
    </button>
  );
};
