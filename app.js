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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
