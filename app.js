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
let items = [];

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
  res.send('hi');
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

app.post('/join', (req, res) => {
  const {id, name} = req.body;
  if (!isRegister(id)) {
    users.push({
      id: id,
      name: name,
      cost: 0
    });
  }
  res.send({
    message: 'success'
  });
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
