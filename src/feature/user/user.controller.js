import {uuidByHeaders} from "../../util/user.util.js";
import {findUserByUUID} from "./user.repository.js";

export const getUser = (req, res) => {
  const user = findUserByUUID(uuidByHeaders(req.headers));
  res.send(user);
}

export const fixUser = (req, res) => {
  const {id, name} = req.body;

  const user = findUserByUUID(id);

  if (!user) {
    return res.status(400).send({
      message: 'not found user'
    });
  }

  user.name = name;
  return res.send(user);

}