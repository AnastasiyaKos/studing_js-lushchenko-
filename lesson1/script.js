let body = document.querySelector('body');
let btn = document.querySelector('button');


// btn.addEventListener( 'click', (e) => {
//     e.preventDefault();
//     body.classList.toggle('change-style');
// });

// btn.onclick = change;
//
// function change() {
//     body.classList.toggle('change-style');
// };

btn.onclick = () => {
    body.classList.toggle('change-style');
};