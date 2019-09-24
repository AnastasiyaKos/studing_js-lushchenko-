document.getElementById('test').onkeypress = function (e) {
    if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123) ) {
        this.value += e.key.toLowerCase();
        return false
    }
    return false
};