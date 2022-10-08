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
        hideElems(...elems) {
            elems.forEach(elem => elem && (elem.hidden = true));
        },
        resetFuncs(...funcs) {
            funcs.forEach((func, ind) => func && (funcs[ind] = null));
        },
        setClassOn(className, ...elems) {
            elems.forEach(elem => elem.classList.toggle(className));
        },
        activeGameSkin(gameSkinContainer) {
            const skin = gameSkinContainer.children[0],
                  otherSkins = query(`.game-skin-container:not([data-skin="${gameSkinContainer.dataset.skin}"])`, true),
                  gameSkinPage = gameSkinContainer.parentElement;
            otherSkins.forEach(otherSkin => otherSkin.children[0].classList.remove('active'));
            skin.classList.add('active');
            gameSkinPage.scrollTo(gameSkinContainer.offsetLeft + gameSkinContainer.offsetWidth / 2 - gameSkinPage.offsetWidth / 2, 0);
            global.activedSkin = skin;
            currentSkin = +gameSkinContainer.dataset.skin + 1;
        },
        toggleGamePage(indPage, gameSkins) {
            const childrens = [...gameSkins.children];
            let filtredChildren;
            
            childrens.forEach((child, ind) => {
                if (child.classList.contains('active')) {
                    child.classList.remove('active');
                    filtredChildren = childrens[ind + indPage] || gameSkins[indPage > 0 ? 'firstChild' : 'lastChild'];
                    filtredChildren.classList.add('active');
                    gameSkins.scrollTo(filtredChildren.offsetLeft, 0);
                };
            });
        },
        changeSkinsScroll(ev) {
            ev.preventDefault();
            if (ev.wheelDeltaY < 0) activeSkin(nextSkin, changeSkinsContainer);
            else activeSkin(prevSkin, changeSkinsContainer);
        },
        enterGame() {
            socket && unitList && (setClassOn('hidden', userSettingsContainer), hasStorage && localStorage.setItem("lstnmdbl", usernameContent.value), mainCanvas.focus(), grecaptcha.execute("6Ldh8e0UAAAAAFOKBv25wQ87F3EKvBzyasSbqxCE").then(function(a) {
                socket.emit("spawn", {
                    name: usernameContent.value,
                    skin: currentSkin
                }, a)
            }));
            console.log('A!');
        },
        toggleSkinsType(toggleTypeSkins) {
            const dataType = skinsSettingsContainer.dataset.skinType,
                typeSkins = dataType === 'game-skins';
            if (dataType) skinsSettingsContainer.dataset.skinType = typeSkins ? 'script-skins' : 'game-skins';
            else skinsSettingsContainer.dataset.skinType = 'game-skins';

            toggleTypeSkins.scrollTo(0, (toggleTypeSkins.scrollHeight - toggleTypeSkins.clientHeight) * typeSkins);
            skinsListContainer.scrollTo(0, (skinsListContainer.scrollHeight - skinsListContainer.clientHeight) * typeSkins);
        },
        renderPlayer(a, d, c, b, g) {
            b.save();
            b.globalAlpha = 0.5;
            if (a.skin && 0 < a.skin && a.skin <= playerSkins && !skinSprites[a.skin]) {
                var e = new Image;
                e.onload = function() {
                    this.readyToDraw = !0;
                    this.onload = null;
                    g == currentSkin && changeSkin(0)
                };
                e.src = ".././img/skins/skin_" + (a.skin - 1) + ".png";
                skinSprites[a.skin] = e
            }
            a.skin && skinSprites[a.skin] && skinSprites[a.skin].readyToDraw ? (e = a.size - b.lineWidth / 4, b.drawImage(skinSprites[a.skin], d - e, c - e, 2 * e, 2 * e), b.lineWidth /= 2, renderCircle(d, c, a.size, b, !1, !0)) : g || (b.fillStyle = playerColors[a.color], renderCircle(d,
                c, a.size, b));
            b.restore()
        }
    };

    for (const func in funcs) global[func] = funcs[func];
})(window || this);