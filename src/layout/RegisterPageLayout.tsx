import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const RegisterPageLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RegisterPageLayout;
