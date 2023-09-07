import { IconProps } from '@/types';
import { ReactElement } from 'react';

export const LogoIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.04 6.62c-.25.02-.48-.21-.35-.42.4-.67.97-1.23 1.66-1.64a5.38 5.38 0 0 1 2.27-.75l.67-.07a49.5 49.5 0 0 1 10.35.07l.45.05c.9.1 1.74.47 2.39 1.07.64.6 1.06 1.38 1.18 2.22.45 3.22.45 6.48 0 9.7a3.75 3.75 0 0 1-1.18 2.22 4.2 4.2 0 0 1-2.39 1.07l-.45.05c-3.44.39-6.9.41-10.35.07l-.67-.06a5.4 5.4 0 0 1-2.27-.76 5 5 0 0 1-1.66-1.63c-.14-.21.1-.45.35-.43 2.22.19 4.5.16 6.71-.09a1.74 1.74 0 0 0 1.53-1.48c.3-2.53.3-5.09 0-7.62a1.7 1.7 0 0 0-1.53-1.48 34.8 34.8 0 0 0-6.71-.09Zm6.89 2.64a24.34 24.34 0 0 1 0 5.66 1.27 1.27 0 0 1-1.13 1.1c-1.84.2-3.74.2-5.58 0a1.27 1.27 0 0 1-1.12-1.1L2 13.88v-3.62l.1-1c.07-.58.53-1.04 1.12-1.1a25.34 25.34 0 0 1 5.82.04 1.27 1.27 0 0 1 .89 1.06Zm-2.86 1.77a1.5 1.5 0 1 0-2.12 2.12 1.5 1.5 0 0 0 2.12-2.12Z"
    />
  </svg>
);

export const EmailIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1a11 11 0 1 0 7.18 19.33 1 1 0 0 0-1.3-1.51A9 9 0 1 1 21 12a2 2 0 0 1-4.01 0V8a1 1 0 1 0-2 0 5 5 0 1 0 1.14 6.8l.03.03A4 4 0 0 0 23 12 11 11 0 0 0 12 1Zm0 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);

export const UserIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 6a5 5 0 1 1 10 0A5 5 0 0 1 7 6ZM2 22a10 10 0 0 1 20 0 1 1 0 1 1-2 0 8 8 0 0 0-16 0 1 1 0 1 1-2 0Z"
    />
  </svg>
);

export const LockIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M4 10a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2V7A6 6 0 1 0 6 7v3H4Zm3 2H4v9h16v-9H7Zm5-9a4 4 0 0 0-4 4v3h8V7a4 4 0 0 0-4-4Z"
    />
    <path d="M13 15a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z" />
  </svg>
);

export const UserNameIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd" 
      d="M12 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM7.5 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM11 13.5c-4.53 0-8 3.24-8 7a1 1 0 1 1-2 0c0-5.08 4.6-9 10-9a1 1 0 1 1 0 2Zm6.8-.2a1 1 0 0 1 1.4 0l2 2a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-.7.3h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 .3-.7l5-5Zm-3.3 6.11V20h.59l4-4-.59-.59-4 4Z"
    />
  </svg>
);

export const DocumentIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 5c0-1.1.9-2 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5Zm20 0H3v14h18V5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 7.5a3 3 0 0 0-2.4 4.8 3.99 3.99 0 0 0-1.6 3.2 1 1 0 1 0 2 0 2 2 0 0 1 4 0 1 1 0 1 0 2 0 4 4 0 0 0-1.6-3.2 3 3 0 0 0-2.4-4.8Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM14 9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm1 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
    />
  </svg>
);

export const EyeOpenIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.99 6.93A10.9 10.9 0 0 1 12 4.25c2.76 0 5.24 1.15 7.01 2.68C20.75 8.4 22 10.42 22 12.25s-1.25 3.84-2.99 5.32A10.91 10.91 0 0 1 12 20.25a10.9 10.9 0 0 1-7.01-2.68C3.25 16.08 2 14.08 2 12.25s1.25-3.83 2.99-5.32Zm1.3 1.52C4.77 9.75 4 11.25 4 12.25s.77 2.5 2.29 3.8a8.91 8.91 0 0 0 5.71 2.2c2.2 0 4.23-.93 5.71-2.2 1.52-1.3 2.29-2.8 2.29-3.8s-.77-2.5-2.29-3.8A8.91 8.91 0 0 0 12 6.24c-2.2 0-4.23.93-5.71 2.2Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.17 9.42a4 4 0 1 1 5.66 5.66 4 4 0 0 1-5.66-5.66Zm2.83.83a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
    />
  </svg>
);

export const EyeCloseIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a10.9 10.9 0 0 0-7.01 2.68C3.25 8.17 2 10.17 2 12c0 1.78 1.18 3.73 2.85 5.2l-2.53 2.31A1 1 0 1 0 3.68 21l2.8-2.58C8.06 19.36 9.96 20 12 20c2.76 0 5.24-1.15 7.01-2.68C20.75 15.84 22 13.83 22 12c0-1.78-1.18-3.73-2.85-5.2l2.53-2.31A1 1 0 1 0 20.32 3l-2.8 2.58A10.65 10.65 0 0 0 12 4ZM6.29 8.2C4.77 9.5 4 11 4 12s.77 2.5 2.29 3.8l.04.04 2.14-1.96a4 4 0 0 1 5.7-5.23L15.98 7A8.55 8.55 0 0 0 12 6c-2.2 0-4.23.93-5.71 2.2ZM12 18c2.2 0 4.23-.93 5.71-2.2C19.23 14.5 20 13 20 12s-.77-2.5-2.29-3.8l-.04-.04-2.14 1.96a4 4 0 0 1-5.7 5.23L8.02 17C9.23 17.61 10.58 18 12 18Z"
    />
  </svg>
);

export const ArrowDownIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.08 9.12A1 1 0 0 1 6 8.5h12a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1-.22-1.08ZM8.4 10.5 12 14.09l3.59-3.59H8.4Z"
    />
  </svg>
);

export const HandbagIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.25 11.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3a4 4 0 0 0-4 4H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2.5a4 4 0 0 0-4-4H10Zm0 2a2 2 0 0 0-2 2h8.5a2 2 0 0 0-2-2H10Zm7.5 4H3v2.72l9 2.25 9-2.25V9h-3.5ZM3 13.78V19h18v-5.22l-8.51 2.13a2 2 0 0 1-.98 0L3 13.78Z"
    />
  </svg>
);

export const CheckIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M12 1a10.97 10.97 0 0 1 11 11 10.97 10.97 0 0 1-11 11A10.97 10.97 0 0 1 1 12 10.97 10.97 0 0 1 12 1Zm0 0v1-1ZM1 12h1-1Zm11 11v-1 1Zm11-11h-1 1Zm-7.55-8.32a8.97 8.97 0 0 0-9.8 1.95h-.01A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.64 6.36A8.97 8.97 0 0 0 12 21a8.97 8.97 0 0 0 6.36-2.64A8.97 8.97 0 0 0 21 12a8.97 8.97 0 0 0-2.64-6.36 8.97 8.97 0 0 0-2.91-1.96Z" 
    />
    <path 
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M17.7 8.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29 5.3-5.3a1 1 0 0 1 1.4 0Z" 
    />
  </svg>
);

export const MoreIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
  </svg>
);

export const LoginIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path  
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M2 3a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4v16h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3Z" 
    />
    <path  
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M13.2 6.8a1 1 0 0 1 0 1.4L10.43 11H21a1 1 0 1 1 0 2H10.41l2.8 2.8a1 1 0 0 1-1.42 1.4l-4.5-4.5a1 1 0 0 1 .06-1.47l4.44-4.44a1 1 0 0 1 1.42 0Z" 
    />
  </svg>
);

export const CircleRightIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M1 12a11 11 0 1 1 22 0 11 11 0 0 1-22 0Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" 
    />
    <path 
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M9.8 6.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 0 1-1.4-1.4l3.79-3.8-3.8-3.8a1 1 0 0 1 0-1.4Z" 
    />
  </svg>
);

export const CircleLeftIcon = ({ className }: IconProps): ReactElement => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M1 12a11 11 0 1 1 22 0 11 11 0 0 1-22 0Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" 
    />
    <path 
      fillRule="evenodd" 
      clipRule="evenodd"
      d="M14.2 6.8a1 1 0 0 1 0 1.4L10.42 12l3.8 3.8a1 1 0 0 1-1.42 1.4l-4.5-4.5a1 1 0 0 1 0-1.4l4.5-4.5a1 1 0 0 1 1.42 0Z" 
    />
  </svg>
);
