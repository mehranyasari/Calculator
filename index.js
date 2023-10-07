function display(val) {
    if (document.getElementById("result").value === "00") {
        document.getElementById("result").value;
    } else {
        document.getElementById("result").value += val;
    }

    return val;
}

function solve() {
    let x = document.getElementById("result").value;

    let y = eval(x);

    document.getElementById("result").value = y;

    return y;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
