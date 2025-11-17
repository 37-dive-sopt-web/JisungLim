import React from 'react';
import * as styles from './Button.css';
import type { ButtonVariant } from '@/shared/constants/button';

interface Props extends React.ComponentProps<'button'> {
  variant: ButtonVariant;
}

export const Button = ({ variant, children, className, ...props }: Props) => {
  return (
    <button
      className={`${styles.buttonStyles({ variant })} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
