import "react";
import Sidebar from "./sidebar";

type Props = {};

export const Dashboard: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">{/* Content */}</div>
    </>
  );
};
