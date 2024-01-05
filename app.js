import express from 'express';
const app = express();
const port = 3000;

// log middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

/**
 * - itemModel
 * @id: PrimaryKey(Int)
 * @itemName: String
 * @createdAt: Date
 * @cost: Int
 */
let items = [
  {
    id: 1,
    itemName: 'test1',
    createdAt: '2024!',
    cost: 100
  },
  {
    id: 2,
    itemName: 'test2',
    createdAt: '2024!',
    cost: 200
  },
  {
    id: 3,
    itemName: 'test2',
    createdAt: '2024!',
    cost: 200
  },
  {
    id: 4,
    itemName: 'test2',
    createdAt: '2024!',
    cost: 200
  },
  {
    id: 5,
    itemName: 'test2',
    createdAt: '2024!',
    cost: 200
  },
];

/**
 * - userModel
 * @id: PrimaryKey(UUID)
 * @name: String
 * @cost: Int
 */
let users = [];

/**
 * - itemController
 */
// get all items
app.get('/all', (req, res) => {
  res.send(items);
});

// to add item to clean
app.post('/add', (req, res) => {

});

// complete clean
app.delete('/complete', (req, res) => {

});

/**
 * - userController
 */

function findUserByUUID(uuid) {
  const users1 = users.filter(user => user.id === uuid);
  if (users1.length === 0) {
    return;
  }
  return users1[0];
}

function registerUser(id) {
  const user = {
    id: id,
    name: '이름을 지어주셈',
    cost: 0
  }
  users.push(user);
  return user;
}

function uuidByHeaders(header) {
  return header.authorization.split(' ')[1];
}

// auth middleware
app.use((req, res, next) => {

  const uuid = uuidByHeaders(req.headers);

  console.log(`auth mw - uuid: ${uuid}`);

  const user = findUserByUUID(uuid);
  if (!user) {
    const user = registerUser(uuid);
    console.log(`auth mw - registered `, user);
  }
  next();
});

app.get('/user', (req, res) => {
  const user = findUserByUUID(uuidByHeaders(req.headers));
  res.send(user);
});

app.patch('/name', (req, res) => {
  const {id, name} = req.body;
  // if (isRegister(id)) {
  //   const user = findUserById(id);
  //   res.send(user);
  // }

  res.status(400).send({
    message: 'not found user'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
