const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')
const md5 = require('md5')
const bcrypt = require('bcrypt')
const {getUsers} = require('./js/retrieveData')
const crypto = require('crypto')


const express = require('express')
const { Hash } = require('crypto')
const app = express()

app.set('view engine', 'ejs')

app.use('/css', express.static(__dirname+'/css'))
app.use('/js', express.static(__dirname+'/js'))
app.use('/assets', express.static(__dirname+'/assets'))

app.use(express.json())
const jsonParser = bodyParser.json()


//Home Page
app.get('/', (req,res)=>{
  res.render('home')
})

//testing post
app.post('/', (req, res)=>{
  console.log(req.body)
  res.status(201).send('hello')
})


//getting users.json
users = getUsers('users.json')

//showing searched users
app.get('/users',async  (req,res)=>{
  res.send(result)
})


let result = []
let login = []

//searching users and push the result to result array
app.post('/users',jsonParser, async (req, res) => {

  let bodyName = req.body.name

  for (let i = 0; i < users.length; i++) {

    try {
      if (users[i].name.toLowerCase().includes(bodyName.toLowerCase())) {
        result.push(users[i])
      }
    } catch (error) {
      console.log('no user found')
    }

  }
  res.status(201).send(result)
  console.log(result[0])
})


//logging in with posted username and password
app.post('/users/login', async (req,res)=>{
  if (req.body.name === result[0].name && req.body.password == result[0].password) {
    res.send('login success')
    login.push('login success')
    console.log(login)
  } else {
    res.send('login failed')
    login.push('login failed')
    console.log(login)
  }
})

//getting the login status
app.get('/users/login', async (req,res)=>{
    if (login[0] = 'success') {
      res.send('login success')
      console.log(login)
    } else {
      res.send('login failed')
      console.log(login)
    }
})


//rendering play page
app.get('/play', (req,res)=>{
  res.render('play')
})




//listening to port 3000
app.listen(3000, () => {
  console.log("Application is running at localhost:3000")
})