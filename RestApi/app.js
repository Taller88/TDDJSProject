const express = require('express')
const morgan = require('morgan');
const app = express();

const users = [
    {id:1, name:'alice1'},
    {id:2, name:'alice2'},
    {id:3, name:'alice3'},
    {id:4, name:'alice4'}
    
]
app.use(morgan('dev'));
// app.use(morgan('combined'));

app.get("/", (req, res)=>{
    res.send("/ Url")
});


app.get("/users", (req, res)=>{

    res.json(users);
});

app.post("/post", (req, res)=>{
    // create Users..
    res.send("users alksdjaksljd");

})

app.listen(3000, ()=>{
    console.log("Server Open 3000")
})