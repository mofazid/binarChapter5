const fs = require('fs')

const getUsers = (source) => {
  return JSON.parse(fs.readFileSync(source, 'utf-8'))
}

const searchData = (name, warna) => {
  let data = getUsers('users.json')
  let filteredData = []

  // looping and filter
  for(let i = 0; i < data.length; i++){
    if(data[i].name.toLowerCase().includes(name) && data[i].password.toLowerCase().includes(password)){
      filteredData.push(data[i])
    }
  }
  return filteredData
}


module.exports = {
  getUsers,
  searchData
}