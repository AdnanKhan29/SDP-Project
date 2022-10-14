const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

let tokens = [
    {token : 'test.123'}
]

let users = [
  { 
    name : "Abdul",
    username : "abdul123",
    email : "abdul@gmail.com",
    token : "test.123"
  }
]

app.get('/login', (req, res) => {
    res.send(tokens);
  });

app.post('/login',(req,res)=>{
    const newToken= { token: req.body.token}
    
    tokens=tokens.concat(newToken)
    res.send(tokens)
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users',(req,res)=>{
  const newUser = req.body
  users=users.concat(newUser)
  res.send(users)
});
  app.listen(3001, () => console.log('API is running on http://localhost:3001/login'));