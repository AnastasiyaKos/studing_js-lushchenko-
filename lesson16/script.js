const moreInfo = document.querySelector('.left-50 p');
const backBtn = document.querySelectorAll('.btn-back');
const leftPage = document.querySelector('.left-50');
const rightPage = document.querySelector('.right-50');

moreInfo.onclick = () => {
    leftPage.style.marginLeft = '-200px';
};

for (let i = 0; i < backBtn.length; i++) {
    backBtn[i].onclick = back();
}

function  back () {
    leftPage.style.marginLeft = '0px';
}