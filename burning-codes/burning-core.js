removeElems(linksContainer, smallAdContainer, ...menuContainer.children);
resetFuncs(updateAdPos, youtuberList);

const changeSkins = createElem('div', {className: 'change-skins'}),
    changeSkinsContainer = createElem('div', {className: 'change-skins-container'});

const skinsContainer = [];

while (skinsContainer.length < playerSkins) {
    const skinContainer = createElem('div', {className: 'skin-container'}),
        skinContent = createElem('div', {className: 'skin-content'});

    skinContainer.append(skinContent);
    skinsContainer.push(skinContainer);
};

changeSkinsContainer.append(...skinsContainer);
changeSkins.append(changeSkinsContainer);
menuContainer.append(changeSkins);