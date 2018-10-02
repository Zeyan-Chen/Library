let lightBox = {
    closeLightBox: function() {
        let lightBoxAll = document.querySelector('.lightBoxBG');
        let lightBox = document.querySelector('.lightBox');
        document.body.removeChild(lightBoxAll);
        document.body.removeChild(lightBox);
    },
    openLightBox: function() {
        let imgURl = this.getAttribute('src');
        lightBox.createLightBox(imgURl);
        let closeBtn = document.querySelector('.close');
        let lightBoxBG = document.querySelector('.lightBoxBG');
        closeBtn.addEventListener('click', lightBox.closeLightBox);
        lightBoxBG.addEventListener('click', lightBox.closeLightBox);
    },
    createLightBox: function(imgSrc) {
        let lightBoxBG = lightBox.createDOM('DIV', 'class', 'lightBoxBG');
        let lighBox = lightBox.createDOM('DIV', 'class', 'lightBox');
        let lightBoxItem = [
            lightBox.createDOM('DIV', 'class', 'close'),
            lightBox.createDOM('IMG', 'src', imgSrc)
        ];
        lightBoxItem.forEach(items => {
            lighBox.appendChild(items);
        });
        document.body.prepend(lightBoxBG);
        document.body.prepend(lighBox);
    },

    createDOM: function(el, setAttr, attr) {
        let dom = document.createElement(el);
        if (setAttr) {
            dom.setAttribute(setAttr, attr);
        }
        return dom;
    }
};

// 點擊時
let el = document.querySelectorAll('.openLightBox');
for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('mousedown', lightBox.openLightBox);
}
