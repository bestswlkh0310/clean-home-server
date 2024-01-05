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
let items = [{
  id: 1,
  itemName: 'test1',
  createdAt: '2024!',
  cost: 100
}];

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

function isRegister(id) {
  return users.filter(user => user.id === id).length > 0;
}

function findUserById(id) {
  return users.filter(user => user.id === id)[0];
}

// auth middleware
app.use((req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(authorization);
  next();
});

app.patch('/name', (req, res) => {
  const {id, name} = req.body;
  if (isRegister(id)) {
    const user = findUserById(id);
    res.send(user);
  }

  res.status(400).send({
    message: 'not found user'
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
