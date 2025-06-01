import {useState} from 'react';

const API_GET_ITEMS_URL = `${process.env.REACT_APP_BACKEND_URL}/items/get`;
const API_CREATE_ITEMS_URL = `${process.env.REACT_APP_BACKEND_URL}/items/create`;
const API_DELETE_ITEMS_URL = `${process.env.REACT_APP_BACKEND_URL}/items/delete`;

const useItems = ({token}) => {
  
  const [items, setItems] = useState([
  ]);
  const [item, setItem] = useState(null);

  const getItems = async () => {
    const res = await fetch(API_GET_ITEMS_URL, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();

    const formatted_items = data.map((item) => {
      return { name: item.name, id: item.id };
    });
    setItems(formatted_items);
  };

  const createItem = async (name) => {
    await fetch(API_CREATE_ITEMS_URL, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, price: 0 }),
    });

    await getItems();
  };
  const deleteItem = async (id) => {
    await fetch(
      `${API_DELETE_ITEMS_URL}/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );

    await getItems();
  };
  const getItem = async (id) => {
    const res = await fetch(
      `${API_GET_ITEMS_URL}/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await res.json();
    setItem(data);
  };


  return {
    items,
    getItems,
    createItem,
    deleteItem,
    item,
    getItem,
  };
}

export default useItems;