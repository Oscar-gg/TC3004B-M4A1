export const Button = (props) => {
  return (
    <button
      {...props}
      className="p-2 rounded-md bg-blue-800 h-14 flex items-center justify-center"
    >
      <p className="text-lg text-white">Swap direction!</p>
    </button>
  );
};
