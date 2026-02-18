function tickUp() {
    let counter = document.getElementById("counter");
    counter.textContent = Number(counter.textContent) + 1;
}

function tickDown() {
    let counter = document.getElementById("counter");
    counter.textContent = Number(counter.textContent) - 1;
}

function runForLoop() {
    let counterValue = Number(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 0; i <= counterValue; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
    let counterValue = Number(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 1; i <= counterValue; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}

function addMultiplesToArray() {
    let counterValue = Number(document.getElementById("counter").textContent);
    let multiples = [];

    for (let i = counterValue; i >= 5; i--) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }

    console.log(multiples);
}

function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

function loadCar(num) {
    let selectedCar;

    if (num === 1) {
        selectedCar = carObject1;
    } else if (num === 2) {
        selectedCar = carObject2;
    } else if (num === 3) {
        selectedCar = carObject3;
    }

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

function changeColor(num) {
    let paragraph = document.getElementById("styleParagraph");

    if (num === 1) {
        paragraph.style.color = "red";
    } else if (num === 2) {
        paragraph.style.color = "green";
    } else if (num === 3) {
        paragraph.style.color = "blue";
    }
}
