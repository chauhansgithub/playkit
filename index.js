var numOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0;i<numOfDrums;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
          
          var ping = this.innerHTML;
          pingmusic(ping);

          animate(ping);
          
     });
}


document.addEventListener("keypress", function(event){
     pingmusic(event.key);
     animate(event.key);
});

function pingmusic(key){
     switch (key) {
               case "w":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                  break;
               case "a":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();                    
                  break;
               case "s":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                  break;
               case "d":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                  break;
               case "j":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                  break;
               case "k":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                  break;
               case "l":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                  break;
               default:
                    console.log(key);
                    break;
          }
}


function animate(key){

     var play_key =  document.querySelector("."+key);

     play_key.classList.add("pressed");

     setTimeout(function(){
          play_key.classList.remove("pressed");
     }, 100);

}
