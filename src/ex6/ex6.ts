// ---------------------------------------------- //
// ------------Exercice function----------------- //
// ---------------------------------------------- //

function changerCouleurs() {
    let divFirst = document.getElementsByClassName("divFirst");
    Array.from(divFirst).forEach(elem => {
        (elem as HTMLInputElement).style.backgroundColor = "gray";
        (elem as HTMLInputElement).style.color = "white";
    });
    let divSecond = document.getElementById("divSecond") as HTMLInputElement;
    if (divSecond) {
        divSecond.style.color = "green";
    }

    let divThree = document.getElementById("divThree") as HTMLInputElement;
    if (divThree) {
        divThree.style.color = "green";
    }
}

function changerCouleursDocument() {
    let divFirst = document.getElementsByClassName("divFirst");
    Array.from(divFirst).forEach(elem => {
        (elem as HTMLInputElement).style.backgroundColor = "white";
        (elem as HTMLInputElement).style.color = "red";
    });

    let divSecond = document.getElementById("divSecond") as HTMLInputElement;
    if (divSecond) {
        divSecond.style.color = "blue";
    }

    let divThree = document.getElementById("divThree") as HTMLInputElement;
    if (divThree) {
        divThree.style.color = "blue";
    }
}