const getEle = (id) => document.getElementById(id);
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermil", "lion", "lavender", "celadon", "saffron", "fuschia", "cinnabar",]

const loadDivClr = () => {
    let content = "";
    colorList.forEach((ele, idx) => {
        if (idx === 0) {
            content += `<button class= "color-button ${ele} active" onclick = changeClrHouse('${ele}') ></button>`;
        } else {
            content += `<button class= "color-button ${ele}" onclick = changeClrHouse('${ele}')></button>`;
        }
    });
    getEle("colorContainer").innerHTML = content;
}

loadDivClr();

const removeActiveClr = () => {
    let btnActive = document.getElementsByClassName("color-button");
    for (let i = 0; i < btnActive.length; i++) {
        btnActive[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

const changeClrHouse = (ele) => {
    removeActiveClr();
    let clrHouse = getEle("house").classList;
    // console.log(clrHouse);
    clrHouse.value = `house ${ele}`;
}

changeClrHouse();


