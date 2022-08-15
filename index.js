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



app.get('/', (req,res)=>{
  res.render('home')
})

users = getUsers('users.json')

// create api to get user data as json
app.get('/users',async  (req,res)=>{
  res.send(result)
})

let result = []

app.post('/users', async (req, res) => {
  // let bodyName = req.body.name

  // for (let i = 0; i < users.length; i++) {

  //   try {
  //     if (users[i].name.toLowerCase().includes(bodyName.toLowerCase())) {
  //       result.push(users[i])
  //     }
  //   } catch (error) {
  //     console.log('no user found')
  //   }

  // res.status(201).send(result)

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
})

app.get('/users', async (req, res) => {
  res.send(result)
})


app.post('/users/login', async (req,res)=>{
  try {
    if (req.body.name == result.name && req.body.password == result.password) {
      res.send('login success')
    } else {
      res.send('login failed')
    }
  } catch (error) {
    console.log(error)
  }

})


app.get('/play', (req,res)=>{
  res.render('play')
})

app.get('/success', (req,res)=>{
  res.render('success')
})



app.post('/', (req, res)=>{
  console.log(req.body)
  res.status(201).send('hello')
})

app.listen(3000, () => {
  console.log("Application is running at localhost:3000")
})