import { Item } from "./Item";
export const List = ({ items, ondelete }) => {
  return items.map((item) => (
    <Item key={item.id} name={item.name} ondelete={ondelete} id={item.id} />
  ));
};
