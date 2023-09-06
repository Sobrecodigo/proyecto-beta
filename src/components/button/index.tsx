'use client';
import { ReactElement, ReactNode } from 'react';
import styles from './styles.module.scss';

interface ButtonProps{
  className?: string,
  text: string,
  children: ReactNode,
  onClick(): void,
}

const Button = ({children, text, className, onClick}:ButtonProps):ReactElement => {
  return (
    <button className={`${className} ${styles.button}`} onClick={onClick }>
      <span>{text}</span>
      <div className={ styles.icon }>
        {children}
      </div>
    </button>
  );
};
export default Button;
