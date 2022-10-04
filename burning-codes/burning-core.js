removeElems(linksContainer, smallAdContainer, ...menuContainer.children);
resetFuncs(updateAdPos, youtuberList);

document.title = 'Burning Script - 1.0.0';

cid = UTILS.getUniqueID();
localStorage.setItem("cid", cid);

const changeSkins = createElem('div', {className: 'change-skins'}),
    changeSkinsContainer = createElem('div', {className: 'change-skins-container'}),
    changeSkinsContent = createElem('div', {className: 'change-skins-content'}),
    toggleSkinsContainer = createElem('div', {className: 'toggle-skins-container'}),
    titleSkinsContainer = createElem('div', {className: 'title-skins-container', innerHTML: 'Game Skins'}),
    toggleSkinsContainerIcon = createElem('ion-icon', {name: 'chevron-down-outline'});

toggleSkinsContainer.append(toggleSkinsContainerIcon);

toggleSkinsContainer.addEventListener('click', ev => {
    const skinContainer = activedSkin.parentElement;
    changeSkins.classList.toggle('active');
    setTimeout(() => changeSkinsContainer.scrollTo(0, skinContainer.offsetTop - 15), 5e2);
});

changeSkinsContainer.addEventListener('mousewheel', changeSkinsScroll);

const ionIcons = createElems(['script', {type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'}], ['script', {nomodule: true, src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'}]);

document.body.append(...ionIcons);

const skinsContainer = [];
let firstSkinContent;

while (skinsContainer.length < playerSkins + 1) {
    const skinContainer = createElem('div', {className: 'skin-container'}),
        skinContent = createElem('div', {className: 'skin-content'});

    if (skinsContainer.length) {
        const skinInd = skinsContainer.length - 1;
        skinContent.style.backgroundImage = `url('http://bloble.io/img/skins/skin_${skinInd}.png')`;
        skinContent.dataset.skin = skinInd;
    } else {
        skinContent.style.backgroundColor = '#ff6060';
        skinContent.dataset.skin = -1;
        firstSkinContent = skinContent;
    };

    skinContent.addEventListener('click', ev => activeSkin(skinContent, changeSkinsContainer));

    skinContainer.append(skinContent);
    skinsContainer.push(skinContainer);
};
activeSkin(firstSkinContent, changeSkinsContainer);

changeSkinsContent.append(...skinsContainer);
changeSkinsContainer.append(changeSkinsContent);
changeSkins.append(titleSkinsContainer, changeSkinsContainer, toggleSkinsContainer);

const userSettingsContainer = createElem('div', {className: 'user-settings-container'}),
    gameTitle = createElem('h1', {className: 'game-title', innerHTML: 'Burning Script'}),
    usernameContainer = createElem('div', {className: 'username-container'}),
    creditsContainer = createElem('div', {className: 'credits-container', innerHTML: 'Created by Danger'}),
    usernameContent = createElem('input', {placeholder: 'Digite seu nome!', className: 'username-content', maxLength: 14}),
    playContent = createElem('div', {className: 'play-content', innerHTML: 'Start Game'});

usernameContainer.append(usernameContent, playContent);
userSettingsContainer.append(gameTitle, usernameContainer, creditsContainer);

const changeSpecialSkins = createElem('div', {className: 'change-special-skins'}),
    changeSpecialSkinsContainer = createElem('div', {className: 'change-special-skins-container'}),
    changeSpecialSkinsContent = createElem('div', {className: 'change-special-skins-content'}),
    toggleSpecialSkinsContainer = createElem('div', {className: 'toggle-special-skins-container'}),
    titleSpecialSkinsContainer = createElem('div', {className: 'title-special-skins-container', innerHTML: 'Script Skins'}),
    toggleSpecialSkinsContainerIcon = createElem('ion-icon', {name: 'chevron-down-outline'});

toggleSpecialSkinsContainer.append(toggleSpecialSkinsContainerIcon);

toggleSpecialSkinsContainer.addEventListener('click', ev => {
    const skinSpecialContainer = activedSpecialSkin.parentElement;
    changeSpecialSkins.classList.toggle('active');
    setTimeout(() => changeSpecialSkinsContainer.scrollTo(0, skinSpecialContainer.offsetTop - 15), 5e2);
});

changeSpecialSkinsContainer.addEventListener('mousewheel', changeSpecialSkinsScroll);

const scriptSkins = 30,
    skinsScriptContainer = [];
window.scriptSkins = scriptSkins;
let firstScriptSkinContent;
while (skinsScriptContainer.length < scriptSkins + 1) {
    const skinScriptContainer = createElem('div', {className: 'skin-special-container'}),
        skinScriptContent = createElem('div', {className: 'skin-special-content'});

    if (skinsScriptContainer.length) {
        const skinInd = skinsScriptContainer.length - 1;
        skinScriptContent.style.backgroundImage = `url('https://raw.githubusercontent.com/dangerprogrammer/burning-script/main/assets/skins/skin-${skinInd}.png')`;
        skinScriptContent.dataset.skin = skinInd;
    } else {
        skinScriptContent.style.backgroundColor = '#ff6060';
        skinScriptContent.dataset.skin = -1;
        firstScriptSkinContent = skinScriptContent;
    };

    skinScriptContent.addEventListener('click', ev => activeSpecialSkin(skinScriptContent, changeSpecialSkinsContainer));

    skinScriptContainer.append(skinScriptContent);
    skinsScriptContainer.push(skinScriptContainer);
};
activeSpecialSkin(firstScriptSkinContent, changeSpecialSkinsContainer);

changeSpecialSkinsContent.append(...skinsScriptContainer);
changeSpecialSkinsContainer.append(changeSpecialSkinsContent);
changeSpecialSkins.append(titleSpecialSkinsContainer, changeSpecialSkinsContainer, toggleSpecialSkinsContainer);
menuContainer.append(changeSkins, userSettingsContainer, changeSpecialSkins);