let imgs = [
  "/assets/batu1.png",
  "/assets/kertas1.png",
  "/assets/gunting1.png"
]

let list = [
  "batu",
  "kertas",
  "gunting"
]

const insertImgsPlayer = () => {
  for (let i = 0; i < imgs.length; i++){

    $("#image-player").append(`<img src=${imgs[i]} class="${list[i]}">`)
  }
}
insertImgsPlayer()


const insertImgsCOM = () => {
  for(let i = 0; i<imgs.length; i++){
    $("#image-com").append(`<img src=${imgs[i]} class=${list[i]}>`)
  }
}

insertImgsCOM()
 

let play = () => {
  $("#image-player").one('click',function(event){

    pilihanUser = event.target.className;
    pilihanCom = generateComputerOption()

    console.log("PLAYER = ",pilihanUser)
    console.log("COM = ", pilihanCom)

    if (pilihanUser == pilihanCom) {
      $(".vs").replaceWith(`<h1 class="result">DRAW</h1>`)
      console.log("Seri")
    }
    
    if (
      pilihanUser == "batu" && pilihanCom == "gunting" || 
      pilihanUser == "gunting" && pilihanCom == "kertas" || 
      pilihanUser == "kertas" && pilihanCom == "batu"
    ) {
      $(".vs").replaceWith(`<h1 class="result">PLAYER 1 WIN</h1>`)
      console.log("PLAYER 1 Menang")
    }

    if (
      pilihanUser == "batu" && pilihanCom == "kertas" || 
      pilihanUser == "gunting" && pilihanCom == "batu" || 
      pilihanUser == "kertas" && pilihanCom == "gunting"
    ) {
      $(".vs").replaceWith(`<h1 class="result">COM <br> WIN</h1>`)
      console.log("COM Menang")
    }

    $(event.target).css({
      "background-color": "#C4C4C4",
      "border-radius": "30px"
    }); 
  })
}
play()



const generateComputerOption = () => {

  let number = Math.floor(Math.random() * 3) 
  pilihanCom = list[number]
  document.getElementById("image-com").children[number].classList.add("picked");
  return pilihanCom
}


$(".refresh").on("click", function(event){
  let confirmResult = confirm("Retry?")
  if (confirmResult){
    location.reload()
  }
})