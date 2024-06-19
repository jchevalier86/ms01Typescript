function changerCouleurs() {
    let divFirst = document.getElementsByClassName("divFirst");
    Array.from(divFirst).forEach((elem) => (elem as HTMLInputElement).style.color = "green");

    let divSecond = document.getElementById("divSecond") as HTMLInputElement;
    if (divSecond) {
        divSecond.style.color = "yellow";
    }

    let divThree = document.getElementById("divThree") as HTMLInputElement;
    if (divThree) {
        divThree.style.color = "yellow";
    }
}

function changerCouleursDocument() {
    let divFirst = document.getElementsByClassName("divFirst");
    Array.from(divFirst).forEach((elem) => (elem as HTMLInputElement).style.color = "red");

    let divSecond = document.getElementById("divSecond") as HTMLInputElement;
    if (divSecond) {
        divSecond.style.color = "blue";
    }

    let divThree = document.getElementById("divThree") as HTMLInputElement;
    if (divThree) {
        divThree.style.color = "blue";
    }
}