'use client';
import styles from './styles.module.scss';
import { TEXT, PASSWORD, EMAIL, CHECKBOX, RADIO, NUMBER } from '@/constants';
import {
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from 'react';
import {
  CheckboxCheckIcon,
  CheckboxUncheckIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  RadioCheckIcon,
  RadioUncheckIcon,
} from '@/assets/icons';

interface InputProps {
  name: string;
  type: string;
  children: ReactNode;
  className?: string;
  placeholder?: string;
  checked?: boolean;
  value?: string;
  onChange(value: string | undefined): void;
}

const Input = ({
  name,
  children,
  type,
  className,
  placeholder,
  checked,
  value,
  onChange,
}: InputProps): ReactElement => {
  const [passType, setPassType] = useState(PASSWORD);
  const [check, setCheck] = useState(checked ?? false);
  const [radio, setRadio] = useState(checked ?? false);
  const containerRef = useRef<HTMLInputElement>(null);

  const handlerPassVisibility = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setPassType((prevValue: string) => {
      return prevValue === TEXT ? PASSWORD : TEXT;
    });
  };
  const handlerCheck = (event: any, type: string) => {
    event.preventDefault();
    if (type === CHECKBOX) {
      setCheck(!check);
      onChange(value);
    } else {
      setRadio(!radio);
      onChange(event.target.value);
    }
  };
  const inputHandler = (event: { target: { value: string | undefined } }) => {
    onChange(event.target.value);
  };

  switch (type) {
  case TEXT:
    return (
      <label htmlFor={name} className={`${className} ${styles.input}`}>
        <div className={styles.icon}>{children}</div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={inputHandler}
        />
      </label>
    );
  case PASSWORD:
    return (
      <label
        htmlFor={name}
        className={`${className} ${styles.input}  ${styles.inputPass}`}
      >
        <div className={styles.icon}>{children}</div>
        <input
          name={name}
          type={passType}
          placeholder={placeholder}
          onChange={inputHandler}
        />
        <button onClick={handlerPassVisibility}>
          {passType === TEXT ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </button>
      </label>
    );
  case EMAIL:
    return (
      <label htmlFor={name} className={`${className} ${styles.input}`}>
        <div className={styles.icon}>{children}</div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={inputHandler}
        />
      </label>
    );
  case CHECKBOX:
    return (
      <label
        htmlFor={value}
        className={`${className} ${styles.inputCheckbox}`}
      >
        <input
          id={value}
          name={name}
          type={type}
          defaultChecked={check}
          onChange={(e) => handlerCheck(e, CHECKBOX)}
        />
        <div>{check ? <CheckboxCheckIcon /> : <CheckboxUncheckIcon />}</div>
        {children}
      </label>
    );
  case RADIO:
    return (
      <label htmlFor={value} className={`${className} ${styles.inputRadio}`}>
        <input
          id={value}
          ref={containerRef}
          name={name}
          type={type}
          value={value}
          defaultChecked={radio}
          onChange={(e) => handlerCheck(e, RADIO)}
        />
        <div>
          {containerRef.current?.checked ? (
            <RadioCheckIcon />
          ) : (
            <RadioUncheckIcon />
          )}
        </div>
        {children}
      </label>
    );

  case NUMBER:
    return (
      <label htmlFor={name} className={`${className} ${styles.input}`}>
        <div className={styles.icon}>{children}</div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={inputHandler}
        />
      </label>
    );

  default:
    return (
      <label htmlFor={name} className={`${className} ${styles.input}`}>
        <div className={styles.icon}>{children}</div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={inputHandler}
        />
      </label>
    );
  }
};
export default Input;
