removeElems(linksContainer, ...menuContainer.children);
hideElems(smallAdContainer);
resetFuncs(updateAdPos, youtuberList);

document.title = 'Burning Script - 1.0.0';

cid = UTILS.getUniqueID();
localStorage.setItem("cid", cid);

const ionIcons = createElems(['script', {type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'}], ['script', {nomodule: true, src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'}]);

document.body.append(...ionIcons);

const userSettingsContainer = createElem('div', {className: 'user-settings-container'}),
    gameTitle = createElem('h1', {className: 'game-title', innerHTML: 'Burning Script'}),
    mainUserSettings = createElem('div', {className: 'main-user-settings'}),
    usernameplayContainer = createElem('div', {className: 'usernameplay-container'}),
    creditsContainer = createElem('div', {className: 'credits-container', innerHTML: 'Created by Danger'}),
    usernameContainer = createElem('div', {className: 'username-container'}),
    usernameContent = createElem('input', {className: 'username-content', placeholder: 'Type your nickname', maxLength: 14}),
    playContent = createElem('div', {className: 'play-content', innerHTML: 'Start Game <ion-icon name="arrow-forward-outline"></ion-icon>'}),
    guildContainer = createElem('div', {className: 'guild-container'}),
    guildContent = createElem('input', {className: 'guild-content', placeholder: 'Guild', maxLength: 5}),
    skinsSettingsContainer = createElem('div', {className: 'skins-settings-container'}),
    toggleTypeSkins = createElem('div', {className: 'toggle-type-skins'}),
    gameSkinsTitle = createElem('div', {className: 'game-skins-title', innerHTML: 'Game Skins'}),
    scriptSkinsTitle = createElem('div', {className: 'script-skins-title', innerHTML: 'Script Skins'}),
    toggleSkins = createElem('div', {className: 'toggle-skins', innerHTML: '<ion-icon name="chevron-down-outline"></ion-icon>'}),
    skinsListContainer = createElem('div', {className: 'skins-list-container'}),
    gameSkinsContainer = createElem('div', {className: 'game-skins-container'}),
    scriptSkinsContainer = createElem('div', {className: 'script-skins-container', innerHTML: 'Script Skins'}),
    gameSkinsContent = createElem('div', {className: 'game-skins-content'}),
    gameSkinsPages = createElem('div', {className: 'game-skins-pages'}),
    gameSkins = createElem('div', {className: 'game-skins'}),
    leftGamePage = createElem('div', {className: 'game-page', innerHTML: '<ion-icon name="arrow-back-outline"></ion-icon>'}),
    rightGamePage = createElem('div', {className: 'game-page', innerHTML: '<ion-icon name="arrow-forward-outline"></ion-icon>'}),
    showNotifScroll = createElem('div', {className: 'show-notif-scroll', innerHTML: 'I'});

guildContainer.append(guildContent);
usernameContainer.append(usernameContent);
usernameplayContainer.append(usernameContainer, guildContainer, playContent);
toggleTypeSkins.append(gameSkinsTitle, scriptSkinsTitle);
gameSkinsContent.append(leftGamePage, gameSkins, rightGamePage);
gameSkinsContainer.append(gameSkinsContent, gameSkinsPages);
skinsListContainer.append(gameSkinsContainer, scriptSkinsContainer, showNotifScroll);
skinsSettingsContainer.append(toggleTypeSkins, toggleSkins, skinsListContainer);
mainUserSettings.append(usernameplayContainer, skinsSettingsContainer);
userSettingsContainer.append(gameTitle, mainUserSettings, creditsContainer);

const pagesListLength = 20,
    gameSkinsPagesLength = Math.ceil(playerSkins / pagesListLength);

let gameSkinsPagesList = [],
    gamePagesSkin = [];

while (gameSkinsPagesList.length < gameSkinsPagesLength) {
    gamePagesSkin = [];

    const gamePagesSkins = Math.min(playerSkins - pagesListLength * gameSkinsPagesList.length, pagesListLength);

    while (gamePagesSkin.length < gamePagesSkins) {
        gamePagesSkin.push(`skin ${gamePagesSkin.length + pagesListLength * gameSkinsPagesList.length}`);
    };

    gameSkinsPagesList.push(gamePagesSkin);
};

console.log(gameSkinsPagesList);

toggleSkins.addEventListener('click', ev => skinsSettingsContainer.classList.toggle('hidden'));
window.toggleTypeSkins = toggleTypeSkins;
toggleTypeSkins.addEventListener('mousewheel', ev => ev.preventDefault());
skinsListContainer.addEventListener('mousewheel', ev => ev.preventDefault());
toggleSkinsType(toggleTypeSkins, skinsListContainer);
toggleTypeSkins.addEventListener('click', ev => toggleSkinsType(toggleTypeSkins, skinsListContainer));

hasStorage && localStorage.getItem("lstnmdbl") && (usernameContent.value = localStorage.getItem("lstnmdbl"));

usernameContent.addEventListener('keydown', ev => {
    if (ev.code === 'Enter') enterGame();
});

playContent.addEventListener('click', enterGame);

menuContainer.append(userSettingsContainer);