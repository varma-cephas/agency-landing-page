const hamburger = document.querySelector("#hamburger")
const theNavItems = navItems.children


for(let i = 0; i < theNavItems.length; i++){
    theNavItems[i].style.display = "none"
}

for(let j = 0; j <= 100; j++){
    hamburger.addEventListener("click", () => {
        for(let i = 0; i < theNavItems.length; i++){
            theNavItems[i].style.display = "block"
            // hamburger.setAttribute("src", "images/icon-twitter.svg")
        }
    })
    
}




// a function tha hides menu

// when the hamburger is clicked, the menu is show
// remove the hamburger and replace it with a x

