import {items} from "../../store/item.store.js";

let i = 0

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

export function insertItem(itemName, cost) {
  items.push({
    id: i++,
    itemName: itemName,
    createdAt: new Date(),
    cost: cost
  });
}