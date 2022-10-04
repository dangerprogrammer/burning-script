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
            currentSkin = +skin.dataset.skin + 1;
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
        },
        activeSpecialSkin(skin, changeSpecialSkinsContainer) {
            const otherSpecialSkins = query(`.skin-special-content:not([data-skin="${skin.dataset.skin}"])`, true),
                  prevSkinInd = (+skin.dataset.skin >= 0 ? +skin.dataset.skin : scriptSkins) - 1,
                  nextSkinInd = +skin.dataset.skin + 1 < scriptSkins ? +skin.dataset.skin + 1 : -1,
                  skinScriptContainer = skin.parentElement;
                  otherSpecialSkins.forEach(otherSpecialSkin => otherSpecialSkin.classList.remove('active'));
            skin.classList.add('active');
            changeSpecialSkinsContainer.scrollTo(0, skinScriptContainer.offsetTop - 15);
            global.changeSpecialSkinsContainer = changeSpecialSkinsContainer;
            global.activedSpecialSkin = skin;
            setTimeout(() => {
                const prevSkin = query(`.skin-special-content[data-skin="${prevSkinInd}"]`),
                  nextSkin = query(`.skin-special-content[data-skin="${nextSkinInd}"]`);

                global.prevSpecialSkin = prevSkin;
                global.nextSpecialSkin = nextSkin;
            }, 1);
        },
        changeSpecialSkinsScroll(ev) {
            ev.preventDefault();
            if (ev.wheelDeltaY < 0) activeSpecialSkin(nextSpecialSkin, changeSpecialSkinsContainer);
            else activeSpecialSkin(prevSpecialSkin, changeSpecialSkinsContainer);
        }
    };

    for (const func in funcs) global[func] = funcs[func];
})(window || this);