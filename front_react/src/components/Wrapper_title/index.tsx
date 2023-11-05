import { ReactNode } from 'react';

interface Wrapper_titleProps {
  children?: ReactNode;
}
export default function Wrapper_title({ children }: Wrapper_titleProps) {
  return (
    <div className="wrapper_title ">
      {children && children}
      <div className="mask_bg"></div>
    </div>
  );
}
