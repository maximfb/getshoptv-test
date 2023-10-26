import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import cx from 'classnames';

import styles from './Checkbox.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  mix?: string | string[];
  label: string;
  error: FieldError | undefined;
}

export const Checkbox: FC<CheckboxProps> = forwardRef(({ mix, label, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={ styles.checkbox__wrapper }>
      <label>
        <input
          type="checkbox"
          className={ cx(styles.checkbox, mix) }
          ref={ref}
          { ...props }
        />
        <span className={ styles.checkmark }></span>
        <span
          className={ cx(styles.checkbox__text, error && styles.error) }>
          { label }
        </span>
      </label>
    </div>
  );
});