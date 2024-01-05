import {uuidByHeaders} from "../../util/user.util.js";
import {findUserByUUID, registerUser} from "../../feature/user/user.repository.js";

export const authMiddleware = (req, res, next) => {

  const uuid = uuidByHeaders(req.headers);

  console.log(`auth mw - uuid: ${uuid}`);

  const user = findUserByUUID(uuid);
  if (!user) {
    const user = registerUser(uuid);
    console.log(`auth mw - registered `, user);
  }
  next();
}