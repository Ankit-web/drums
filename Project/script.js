var btn = document.querySelectorAll(".drum")
// alert(btn.length)
for(var i=0; i<btn.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    });
}


document.addEventListener("keypress",function(event){
    // console.log(event)
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;

        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;   
            
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "d":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play()
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        case "l":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        
        default:
            console.log(buttonInnerHTML)


    }
}

function btnAnimation(currentKey){
    var activeKey = document.querySelector("."+ currentKey)
    activeKey.classList.add("pressed")

    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },100)
}