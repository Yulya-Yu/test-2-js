const table = document.querySelector("tbody");
table.htmlString = '';

let singleCell = 0;

function greenBkg(singleCell) {
    document.getElementById(singleCell).style.backgroundColor = "#41fc03";
    document.getElementById(singleCell - 1).style.backgroundColor = "#41fc03";
    document.getElementById(singleCell + 1).style.backgroundColor = "#41fc03";
    document.getElementById(singleCell - 50).style.backgroundColor = "#41fc03";
    document.getElementById(singleCell + 50).style.backgroundColor = "#41fc03";
    document.getElementById(singleCell - 49).style.backgroundColor = "#41fc03";
    document.getElementById(singleCell + 49).style.backgroundColor = "#41fc03";
    document.getElementById(singleCell - 51).style.backgroundColor = "#41fc03";
    document.getElementById(singleCell + 51).style.backgroundColor = "#41fc03";
}

function blueBkg(singleCell) {
    document.getElementById(singleCell).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell - 2).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell + 2).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell - 48).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell + 48).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell - 52).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell + 52).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell - 98).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell + 98).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell - 99).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell + 99).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell - 100).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell + 100).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell - 101).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell + 101).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell - 102).style.backgroundColor = "#26d4d1";
    document.getElementById(singleCell + 102).style.backgroundColor = "#26d4d1";


}

function redBkg(singleCell) {
    document.getElementById(singleCell).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 3).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 3).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 47).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 47).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 53).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 53).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 97).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 97).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 103).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 103).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 147).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 147).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 148).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 148).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 149).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 149).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 150).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 150).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 151).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 151).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 152).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 152).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell - 153).style.backgroundColor = "#f02a0c";
    document.getElementById(singleCell + 153).style.backgroundColor = "#f02a0c";
}

for (let i = 0; i < 50; i++) {
    let row = "";

    for (let j = 0; j < 50; j++) {
        const number = Math.floor(Math.random() * 3 + 1);

        if (number === 1) {
            row += `<td id="${singleCell}" onclick="greenBkg(${singleCell})">${1}</td>`;
        } else if (number === 2) {
            row += `<td id="${singleCell}" onclick="blueBkg(${singleCell})">${2}</td>`;
        } else if (number === 3) {
            row += `<td id="${singleCell}" onclick="redBkg(${singleCell})">${3}</td>`;
        }

        singleCell++;
    }

    table.htmlString += `<tr>${row}</tr>`;
}

table.innerHTML = table.htmlString;