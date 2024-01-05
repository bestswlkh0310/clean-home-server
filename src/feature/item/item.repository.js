import {items} from "../../store/item.store.js";


export function findItemById(id) {
  const items1 = items.filter(item => item.id === id);
  if (items1.length === 0) {
    return;
  }
  return items1[0];
}

export function removeItem(id) {
  for (let i = items.length - 1; i > -1; i--) {
    if (items[i].id === id) {
      items.pop(i);
      return items;
    }
  }
}