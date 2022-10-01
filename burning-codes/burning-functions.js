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
            elems.forEach((elem, ind) => (elems[ind] = typeof elem == 'object' ? createElem(...elem) : createElem(elem)));
            return elems;
        },
        removeElems(...elems) {
            elems.forEach(elem => elem && elem.remove());
        },
        resetFuncs(...funcs) {
            funcs.forEach((func, ind) => func && (funcs[ind] = null));
        },
        activeSkin(skin, changeSkinsContainer) {
            const otherSkins = query(`.skin-content:not([data-skin="${skin.dataset.skin}"])`, true),
                  prevSkinInd = (+skin.dataset.skin >= 0 ? +skin.dataset.skin : playerSkins) - 1,
                  nextSkinInd = +skin.dataset.skin + 1 < playerSkins ? +skin.dataset.skin + 1 : -1,
                  skinContainer = skin.parentElement;
            otherSkins.forEach(otherSkin => otherSkin.classList.remove('active'));
            skin.classList.add('active');
            changeSkinsContainer.scrollTo(0, skinContainer.offsetTop - 15);
            global.changeSkinsContainer = changeSkinsContainer;
            global.activedSkin = skin;
            setTimeout(() => {
                const prevSkin = query(`.skin-content[data-skin="${prevSkinInd}"]`),
                  nextSkin = query(`.skin-content[data-skin="${nextSkinInd}"]`);

                global.prevSkin = prevSkin;
                global.nextSkin = nextSkin;
            }, 1);
        },
        changeSkinsScroll(ev) {
            ev.preventDefault();
            if (ev.wheelDeltaY < 0) activeSkin(nextSkin, changeSkinsContainer);
            else activeSkin(prevSkin, changeSkinsContainer);
        }
    };

    for (const func in funcs) global[func] = funcs[func];
})(window || this);