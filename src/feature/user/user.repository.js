import {items} from "../../store/item.store.js";
import {users} from "../../store/user.store.js";


export function findUserByUUID(uuid) {
  const users1 = users.filter(user => user.id === uuid);
  if (users1.length === 0) {
    return;
  }
  return users1[0];
}

export function registerUser(id) {
  const user = {
    id: id,
    name: '이름을 지어주셈',
    cost: 0
  }
  users.push(user);
  return user;
}

export function getAll() {
  return users;
}

export function fixUser(id, cost) {
  const user = findUserByUUID(id);

}