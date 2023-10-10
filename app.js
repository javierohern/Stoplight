let container = document.createElement('div');
container.style.width = "25%";
container.style.height = "75%";
container.style.backgroundColor = "black";
container.style.display = "flex";
container.style.flexDirection = "column";
// End container Styles

//Begin document Styles to center rectangle and loop to create 3 sections, adds 3 buttons one to each section.
document.body.style.display = "flex";
document.body.style.height = "100vh";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.appendChild(container);

for (let i = 0; i < 3; i++) {
    let section = document.createElement('div');
    let button = document.createElement('button');
    section.style.flex = "1";
    section.style.display = "flex";
    section.style.justifyContent = "center";
    section.style.alignItems = "center";
    section.style.borderBottom = (i !== 2) ? "2px solid green" : "none";
    container.appendChild(section);
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.style.width = "100px";
    button.style.height = "100px";
    button.style.borderRadius = "50%";
    button.style.background = "white";
    button.style.borderBlockColor = "white";

    section.appendChild(button);
    container.appendChild(section);
}

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.style.backgroundColor === "red") {
            button.style.backgroundColor = "";
        }
        else if (button.style.backgroundColor === "yellow") {
            button.style.backgroundColor = "";
        }
        else if (button.style.backgroundColor === "green") {
            button.style.backgroundColor = "";
        }
        else if (button === buttons[0]) {
            button.style.backgroundColor = "red";
        } else if (button === buttons[1]) {
            button.style.backgroundColor = "yellow";
        } else {
            button.style.backgroundColor = "green";
        }
    })
})
