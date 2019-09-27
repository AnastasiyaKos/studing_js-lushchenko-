document.getElementById('test').onkeypress = function (e) {
    console.log(e.keyCode == 37);
    if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123) ) {
        this.value += e.key.toLowerCase();
        return false
    }
    return false
};