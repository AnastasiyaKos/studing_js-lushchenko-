function movement(e) {

    const square = document.getElementById('blueRect');
    let cs = window.getComputedStyle(square);
    let top = parseInt(cs.marginTop);
    let left = parseInt(cs.marginLeft);

    switch (e.keyCode) {
        case 37:
            square.style.marginLeft = left - 10 + 'px';
            break;

        case 38:
            // top -= 10;
            square.style.marginTop = top - 10 + 'px';
            break;

        case 39: square.style.marginLeft = left + 10 + 'px';
            break;

        case 40:
            // top += 10;
            square.style.marginTop = top + 10 + 'px';
            break;
    }
}

addEventListener("keydown", movement);
