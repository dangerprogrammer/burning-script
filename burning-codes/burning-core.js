removeElems(linksContainer, smallAdContainer, ...menuContainer.children);
resetFuncs(updateAdPos, youtuberList);

const changeSkins = createElem('div', {className: 'change-skins'}),
    changeSkinsContainer = createElem('div', {className: 'change-skins-container'}),
    changeSkinsContent = createElem('div', {className: 'change-skins-content'}),
    toggleSkinsContainer = createElem('div', {className: 'toggle-skins-container'});

const toggleSkinsContainerIcon = createElem('ion-icon', {name: 'chevron-down-outline'});

toggleSkinsContainer.append(toggleSkinsContainerIcon);

toggleSkinsContainer.addEventListener('click', ev => {
    changeSkins.classList.toggle('active');
});

changeSkinsContainer.addEventListener('scroll', changeSkinsScroll);

const ionIcons = createElems(['script', {type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'}], ['script', {nomodule: true, src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'}]);

document.body.append(...ionIcons);

const skinsContainer = [];

while (skinsContainer.length < playerSkins + 1) {
    const skinContainer = createElem('div', {className: 'skin-container'}),
        skinContent = createElem('div', {className: 'skin-content'});

    if (skinsContainer.length) {
        const skinInd = skinsContainer.length - 1;
        skinContent.style.backgroundImage = `url('http://bloble.io/img/skins/skin_${skinInd}.png')`;
        skinContent.dataset.skin = skinInd;
    } else {
        skinContent.style.backgroundColor = '#ff6060';
        skinContent.dataset.skin = false;
        skinContent.classList.add('active');
    };

    skinContent.addEventListener('click', ev => activeSkin(skinContent, changeSkinsContainer));

    skinContainer.append(skinContent);
    skinsContainer.push(skinContainer);
};

changeSkinsContent.append(...skinsContainer);
changeSkinsContainer.append(changeSkinsContent);
changeSkins.append(changeSkinsContainer, toggleSkinsContainer);
menuContainer.append(changeSkins);