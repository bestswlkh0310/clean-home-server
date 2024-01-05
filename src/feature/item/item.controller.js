import {items} from "../../store/item.store.js";
import {uuidByHeaders} from "../../util/user.util.js";
import {findUserByUUID} from "../user/user.repository.js";
import {findItemById, removeItem} from "./item.repository.js";


export const getItemAll = (req, res) => {
  res.send(items);
}

export const completeClean = (req, res) => {
  const user = findUserByUUID(uuidByHeaders(req.headers));
  const {id} = req.body;

  const item = findItemById(id);
  if (!item) {
    return res.status(400).send({
      message: '잘못된 아이템'
    });
  }

  const items = removeItem(id);

  user.cost += item.cost;
  res.send(items);
}