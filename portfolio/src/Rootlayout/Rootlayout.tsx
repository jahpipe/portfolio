import type { ReactNode } from "react";
import Header from '../Components/Header/Header'
type RootlayoutProps = {
  children?: ReactNode; // make it optional
};

const Rootlayout = ({ children }: RootlayoutProps) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
    </div>
  );
};

export default Rootlayout;
