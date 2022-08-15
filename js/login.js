const URL_LOGIN = "http://localhost:3000/users/login"



const authorizer = async () => {
  const myName = document.getElementById("my-name").value
  const myPassword = document.getElementById("my-password").value
  console.log(myName)
  console.log(myPassword)
  const resp = await fetch(URL_LOGIN, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName: myName,
      password: myPassword
    })
  })
  // unauthorized
  if(resp.status === 401){
    alert("unauthorized")
  }else{
    alert("authorized")
    window.location.replace("success")
  }
}



