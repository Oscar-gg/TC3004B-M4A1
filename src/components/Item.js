import { Link } from "react-router-dom";

export const Item = ({ name, id, ondelete }) => {
  return (
    <div className="p-2 rounded-md  h-14 flex items-center justify-center gap-x-3">
      <button
        onClick={() => ondelete(id)}
        className="text-lg text-white bg-red-400 p-2 rounded-md"
      >
        Borrar
      </button>
      <Link to={"/todo/" + id}>
        <p className="text-lg text-white">{name}</p>
      </Link>
    </div>
  );
};
