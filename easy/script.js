function submitNumber() {
    let number = 56;
    let input = parseInt(document.querySelector("input").value);
    // agar input dia hai tou alert do warna kaho k fill this input
    if (number == input) {
        alert("congratulations you win");
    } else if (number > input) {
        alert("Number is too Small");
    } else if (number < input) {
        alert("Number is too big");
    }
}

