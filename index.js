const express = require('express');
require('./db'); //importing db config
const app = express();
const User = require('./models/users')//importing model

//middlewares to parse request body
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const port = process.env.PORT || '3000'; 

//route to get single user data
app.get('/user/:id', (req, res) => {
    User.findById({ _id : req.params.id})//find user by id
    .then((user => {
        if (user === null){ //check if user is null
            res.send({
                message: "User not found",
            })
        }
        else {res.send({//if user is found, send user data
            message: "User found",
            data: {
                user
            }
        })} 
    }))
    .catch(err => {
        res.send({
            message: err.message,
        })
    });
   
});

//route to add single user data
app.post('/user/add', (req, res) => {
    User.create(req.body)
    .then(user => {
        res.send({//saves user data and responds with data
            message: "Saved",
            data: {
                user
            }
        }) 
    })
    .catch(err => {
        res.send({//returns error is save failed
            message: err.message,
        })
    });
});

//route to delete single user data
app.delete('/user/remove/:id', (req, res) => {
    User.findOneAndDelete({ _id : req.params.id}, {useFindAndModify: false})
    .then((user) => {
        res.send({//finds and update user data, then sends data back
            message: "User deleted",
            user
        })
    })
    .catch(err => {
        res.send({//if data not found, inform user with message
            message: `User does not exist or ${err.message}`,
            
        })
    })
});

//route to update single user data
app.put('/user/edit/:id', (req, res) => {
    User.findByIdAndUpdate({ _id : req.params.id}, req.body, {useFindAndModify: false})
    .then(() => {//first updates user data
        User.findOne({ _id : req.params.id})//goes back to db to get updated data
        .then((userUpdated) => {
            res.send({
                message: "User updated",
                userUpdated// sends updated data
            })
        })
    })
    .catch(err => {
        res.send({//returns message if user is not found
            message: `User does not exist or ${err.message}`,
            
        })
    })
});

app.listen(port, (() => console.log(`listening on ${port}` )))

