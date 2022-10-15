const express = require('express');
const jwt = require('jsonwebtoken')
const User = require('./user')
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/login', (req, res) => {
  User.find({}).then(result=>{
    res.json(result)
  })
  });

app.post('/new-login',(req,res)=>{
    const body= req.body
    const newToken = jwt.sign(req.body,'ABCXYZ')
   
    const user= new User({
    username : body.username,
    email : body.email,
    password :body.password,
    token : newToken,
})

    user.save().then(savedUser=>{
      res.json(savedUser)
    }).catch(error=> console.log(error))
});

app.get('/users', (req, res) => {
  User.find({}).then(result=>{
    res.json(result)
  })
});

  app.listen(3001, () => console.log('Server is running on http://localhost:3001'));