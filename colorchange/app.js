// button select ki ye querySelector se 

const buttons = document.querySelectorAll(".button");

// ab hum ne body select kar ni hai 

const body = document.querySelector("body");

// ab humain mi li hai node list. (HTML collection  ahi mili hia )

// node list per hum for each la ga sak te hai 

// or for each loop hai 

buttons.forEach(function (button) {
console.log(button);
button.addEventListener("click", function(e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
        body.style.backgroundColor =e.target.id
    }
    if (e.target.id === 'white') {
        body.style.backgroundColor =e.target.id
    }
    if (e.target.id === 'blue') {
        body.style.backgroundColor =e.target.id
    }
    if (e.target.id === 'yellow') {
        body.style.backgroundColor =e.target.id
    }
    
    if (e.target.id === 'darkmagenta') {
        body.style.backgroundColor =e.target.id
    }
    if (e.target.id === 'deeppink') {
        body.style.backgroundColor =e.target.id
    }
    
    if (e.target.id === 'indigo') {
        body.style.backgroundColor =e.target.id
    }
    if (e.target.id === 'greenyellow') {
        body.style.backgroundColor =e.target.id
    }
    
    
})
// button.addEventListener("click")
});

