import React from 'react';
import * as styles from './TextField.css';
import type { TextFieldType } from '@/shared/constants/textField';

interface Props extends Omit<React.ComponentProps<'input'>, 'type'> {
  type: TextFieldType;
  error?: boolean;
  label?: string;
  detail?: string;
}

export const TextField = ({
  type,
  error = false,
  label,
  detail,
  ...props
}: Props) => {
  return (
    <div className={styles.container}>
      {(label || detail) && (
        <div className={styles.textContainer}>
          {label && <label className={styles.label}>{label}</label>}
          {detail && <p className={styles.detail}>{detail}</p>}
        </div>
      )}
      <input
        type={type}
        className={`${styles.textField} ${error ? styles.textFieldError : ''}`}
        aria-invalid={error}
        {...props}
      />
    </div>
  );
};
