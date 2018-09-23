let startX = null;
let moveX = null;
let index = 1;
let statusNow = null;

let elSlider = document.querySelector('#slider');
let elSliderUl = document.querySelector('#slider ul');
let elSliderLi = document.querySelectorAll('#slider li');
let elSliderW = elSlider.offsetWidth; // width
let elSliderLiLen = elSliderLi.length; // 總共幾個
let elSliderUlW = elSliderW * elSliderLiLen; // 寬度
let elSliderLiLast = elSliderLi[elSliderLi.length - 1]; // 最後一個 li
elSliderLi[elSliderLi.length - 1].classList.add('lastClone');
elSliderLi[0].classList.add('firstClone');
// elSliderUl.style.marginLeft = -100 + '%';

elSlider.addEventListener('touchstart', swipe);
elSlider.addEventListener('touchend', checkStatus);

function swipe(e, checkStatus) {
    statusNow = '';
    let self = this;
    startX = e.targetTouches[0].pageX;
    statusNow = 'click one';
    self.addEventListener(
        'touchmove',
        function(e) {
            moveX = e.targetTouches[0].pageX - startX;
            // console.log('swiped');
            statusNow = 'swiped';
            if (Math.abs(moveX) >= 40) {
                if (moveX > 0) {
                    // console.log('you swipe right');
                    statusNow = 'right';
                } else {
                    // console.log('you swipe left');
                    statusNow = 'left';
                }
            }
            e.preventDefault();
            e.stopPropagation();
        },
        false
    );
    e.preventDefault();
    e.stopPropagation();
}

function checkStatus() {
    elSliderUl.style.transition = 'all .4s ease';
    console.log('slide end');
    console.log(statusNow);
    let newLi = document.querySelectorAll('#slider li');

    if (statusNow == 'left') {
        index++;
        // elSliderUl.prepend(newLi[newLi.length - 1]);
        // if (index > elSliderLi.length - 1) {
        //     elSliderUl.addEventListener('transitionend', () => {
        //         elSliderUl.prepend(newLi[newLi.length - 1]);
        //         elSliderUl.style.transition = 'none';
        //         index = 0;
        //         elSliderUl.style.left = `-${100 * index}%`;
        //     });
        // }
    } else if (statusNow == 'right') {
        index--;
        if (newLi[index].classList.contains('firstClone')) {
            console.log('到1');
            console.log(newLi);
            elSliderUl.prepend(newLi[newLi.length - 1]);
        }
        // if (index < 0) {
        //     // index = 0;
        //     index = elSliderLi.length - 1;
        // }
        // elSliderUl.style.left = `-${100 * index}%`;
    }

    console.log(index);
    elSliderUl.style.left = `-${100 * index}%`;
}

// elSliderUl.addEventListener('transitionend', () => {
//
//     console.log(index);
//     if (index === elSliderLi.length - 1) {
//         elSliderUl.style.transition = 'none';
//         elSliderUl.prepend(newLi[newLi.length - 1]);
//         // index = 0;
//         elSliderUl.style.left = `-${100 * index}%`;
//     } else if (index === 0) {
//         elSliderUl.style.transition = 'none';
//         elSliderUl.appendChild(newLi[0]);
//         // index = newLi.length - 1;
//         elSliderUl.style.left = `-${100 * index}%`;
//     }
// });

// elSliderUl.addEventListener('transitionend', () => {
//     let newElSliderLi = document.querySelectorAll('#slider li');
//     if (newElSliderLi[index].classList.contains('lastClone')) {
//         elSliderUl.style.transition = 'none';
//         elSliderUl.prepend(newElSliderLi[elSliderLi.length - 1]);
//         index = 0;
//         elSliderUl.style.left = `-${100 * index}%`;
//         for (let i = 0; i < elSliderLi.length; i++) {
//             elSliderLi[i].classList.remove('lastClone');
//         }
//     } else {
//         newElSliderLi[elSliderLi.length - 1].classList.add('lastClone');
//     }
//     if (newElSliderLi[index].classList.contains('firstClone')) {
//         elSliderUl.style.transition = 'none';
//         elSliderUl.appendChild(newElSliderLi[0]);
//         index = elSliderLi.length - 1;
//         elSliderUl.style.left = `-${100 * index}%`;

//         for (let i = 0; i < elSliderLi.length; i++) {
//             elSliderLi[i].classList.remove('firstClone');
//         }
//     } else {
//         newElSliderLi[0].classList.add('firstClone');
//     }
// });

swipe.prototype = {
    styleTransition: (elSliderUl.style.transition = 'all .4s ease'),
    // styleLeft: (elSliderUl.style.left = -100 + '%'),
    styleLeft: (elSliderUl.style.transform = 'translateX(' + 0 + ')'),
    nowStatus: function(params) {
        return statusNow;
    }
};
