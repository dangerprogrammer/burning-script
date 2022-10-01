(global => {
    const funcs = {
        query(elem, all = false) {
            return document[`querySelector${all ? 'All' : ''}`](elem);
        },
        createElem(elem, atts) {
            const creation = document.createElement(elem);
            if (atts) for (const att in atts) creation[att] = atts[att];
            return creation;
        },
        createElems(...elems) {
            elems.forEach((elem, ind) => (elems[ind] = typeof elem == 'object' ? this.createElem(...elem) : this.createElem(elem)));
            return elems;
        },
        removeElems(...elems) {
            elems.forEach(elem => elem && elem.remove());
        },
        resetFuncs(...funcs) {
            funcs.forEach((func, ind) => func && (funcs[ind] = null));
        },
        activeSkin(skin, changeSkinsContainer) {
            const otherSkins = this.query(`.skin-content:not([data-skin="${skin.dataset.skin}"])`, true),
                  skinContainer = skin.parentElement;
            otherSkins.forEach(otherSkin => otherSkin.classList.remove('active'));
            skin.classList.add('active');
            changeSkinsContainer.scrollTo(0, skinContainer.offsetTop - changeSkinsContainer.offsetHeight / 2 + skinContainer.offsetHeight / 2);
        },
        changeSkinsScroll(ev) {
            ev.preventDefault();
            console.log(ev);
        }
    };

    for (const func in funcs) global[func] = funcs[func];
})(window || this);