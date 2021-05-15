import { MouseEventHandler } from "react";

type Props = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FunctionComponent<Props> = ({ label, onClick }) => {
  return (
    <button
      className="py-2 px-4  bg-white hover:bg-gray-100  text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
