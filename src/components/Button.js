import { twMerge } from "tailwind-merge";

export const Button = (props) => {
  return (
    <button
      {...props}
      className={twMerge(
        "p-2 rounded-md bg-blue-800 h-14 flex items-center justify-center",
        props.className ?? ""
      )}
    >
      <p className="text-lg text-white">{props.text}</p>
    </button>
  );
};
