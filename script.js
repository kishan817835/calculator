const display = (value) => {
    document.getElementById("displayvalue").value += value;
};

const clearscr = () => {
    document.getElementById('displayvalue').value = "";
};

const calculate = () => {
    var p = document.getElementById("displayvalue").value;
    var q = eval(p);
    document.getElementById("displayvalue").value = q;
};

const deleteDigit = () => {
    const currentValue = document.getElementById("displayvalue").value;
    const newValue = currentValue.slice(0, -1);
    document.getElementById("displayvalue").value = newValue;
};


