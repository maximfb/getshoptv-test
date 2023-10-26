import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import cx from 'classnames';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mix?: string | string[];
  error?: FieldError | undefined;
}

export const Input: FC<InputProps> = forwardRef(({ mix, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <input
        className={ cx(styles.input, mix, error && styles.inputError) }
        ref={ref}
        { ...props }
      />
    </>
  );
});
