removeElems(linksContainer, smallAdContainer, ...menuContainer.children);
resetFuncs(updateAdPos, youtuberList);

const changeSkins = createElem('div', {className: 'change-skins'}),
    changeSkinsContainer = createElem('div', {className: 'change-skins-container'}),
    changeSkinsContent = createElem('div', {className: 'change-skins-content'}),
    toggleSkinsContainer = createElem('div', {className: 'toggle-skins-container', innerHTML: 'Toggle'});

const skinsContainer = [];

while (skinsContainer.length < playerSkins) {
    const skinContainer = createElem('div', {className: 'skin-container'}),
        skinContent = createElem('div', {className: 'skin-content'});

    skinContent.style.backgroundImage = `url('http://bloble.io/img/skins/skin_${skinsContainer.length}.png')`;

    skinContainer.append(skinContent);
    skinsContainer.push(skinContainer);
};

changeSkinsContent.append(...skinsContainer);
changeSkinsContainer.append(changeSkinsContent);
changeSkins.append(changeSkinsContainer, toggleSkinsContainer);
menuContainer.append(changeSkins);