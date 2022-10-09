removeElems(linksContainer, ...menuContainer.children);
hideElems(smallAdContainer);
resetFuncs(updateAdPos, youtuberList);

const featuredSkins = 54;

document.title = 'Burning Script 1.0.0';

cid = UTILS.getUniqueID();
localStorage.setItem("cid", cid);

backgroundColor = '#111';turretColor = '#333a';outerColor = '#222';darkColor = '#aaaa';indicatorColor = '#555a';redColor = '#f005';targetColor = '#fff6';

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
      scriptSkinsContainer = createElem('div', {className: 'script-skins-container'}),
      gameSkinsContent = createElem('div', {className: 'game-skins-content'}),
      gameSkinsPages = createElem('div', {className: 'game-skins-pages'}),
      gameSkins = createElem('div', {className: 'game-skins'}),
      leftGamePage = createElem('div', {className: 'game-page', innerHTML: '<ion-icon name="arrow-back-outline"></ion-icon>'}),
      rightGamePage = createElem('div', {className: 'game-page', innerHTML: '<ion-icon name="arrow-forward-outline"></ion-icon>'}),
      scriptSkinsContent = createElem('div', {className: 'script-skins-content'}),
      scriptSkinsPages = createElem('div', {className: 'script-skins-pages'}),
      scriptSkins = createElem('div', {className: 'script-skins'}),
      leftScriptPage = createElem('div', {className: 'script-page', innerHTML: '<ion-icon name="arrow-back-outline"></ion-icon>'}),
      rightScriptPage = createElem('div', {className: 'script-page', innerHTML: '<ion-icon name="arrow-forward-outline"></ion-icon>'}),
      mainMenuMessage = createElem('div', {className: 'main-menu-message hidden', innerHTML: 'Opa'});

guildContainer.append(guildContent);
usernameContainer.append(usernameContent);
usernameplayContainer.append(usernameContainer, guildContainer, playContent);
toggleTypeSkins.append(gameSkinsTitle, scriptSkinsTitle);
gameSkinsContent.append(leftGamePage, gameSkins, rightGamePage);
scriptSkinsContent.append(leftScriptPage, scriptSkins, rightScriptPage);
gameSkinsContainer.append(gameSkinsContent, gameSkinsPages);
scriptSkinsContainer.append(scriptSkinsContent, scriptSkinsPages);
skinsListContainer.append(gameSkinsContainer, scriptSkinsContainer);
skinsSettingsContainer.append(toggleTypeSkins, toggleSkins, skinsListContainer);
mainUserSettings.append(usernameplayContainer, skinsSettingsContainer, mainMenuMessage);
userSettingsContainer.append(gameTitle, mainUserSettings, creditsContainer);

window.mainMenuMessage = mainMenuMessage;

const pagesListLength = 15,
      gameSkinsPagesLength = Math.ceil(playerSkins / pagesListLength),
      scriptSkinsPagesLength = Math.ceil(featuredSkins / pagesListLength);

let gameSkinsPagesList = [], gameSkinsPageList = [], gamePagesSkin = [], lastGameSkin;

while (gameSkinsPagesList.length < gameSkinsPagesLength) {
    gamePagesSkin = [];

    const gamePagesSkins = Math.min(playerSkins - pagesListLength * gameSkinsPagesList.length, pagesListLength),
          gameSkinPage = createElem('div', {className: 'game-skin-page'});

    while (gamePagesSkin.length < gamePagesSkins) {
        const gameSkinInd = gamePagesSkin.length + pagesListLength * gameSkinsPagesList.length;

        const gameSkinContainer = createElem('div', {className: 'game-skin-container'}),
              gameSkinContent = createElem('div', {className: 'game-skin-content'}),
              skinInd = gameSkinInd - 1;

        gameSkinContainer.dataset.skin = skinInd;
        if (gameSkinInd) gameSkinContent.style.backgroundImage = `url('http://bloble.io/img/skins/skin_${skinInd}.png')`;
        else {
            gameSkinContent.style.backgroundColor = '#ff6060';
            lastGameSkin = gameSkinContainer;
        };

        gameSkinContent.addEventListener('click', ev => activeGameSkin(gameSkinContainer));

        gameSkinContainer.append(gameSkinContent);
        gamePagesSkin.push(gameSkinContainer);
    };

    gameSkinPage.append(...gamePagesSkin);

    const gameSkinsPage = createElem('div', {className: 'game-skins-page'});

    gameSkinsPagesList.push(gameSkinsPage);
    gameSkinsPageList.push(gameSkinPage);
};
activeGameSkin(lastGameSkin);

gameSkins.append(...gameSkinsPageList);
gameSkinsPages.append(...gameSkinsPagesList);

toggleGamePage(0, gameSkins, gameSkinsPages);
leftGamePage.addEventListener('click', ev => toggleGamePage(-1, gameSkins, gameSkinsPages));
rightGamePage.addEventListener('click', ev => toggleGamePage(1, gameSkins, gameSkinsPages));

let scriptSkinsPagesList = [], scriptSkinsPageList = [], scriptPagesSkin = [], lastScriptSkin;

while (scriptSkinsPagesList.length < scriptSkinsPagesLength) {
    scriptPagesSkin = [];

    const scriptPagesSkins = Math.min(featuredSkins - pagesListLength * scriptSkinsPagesList.length, pagesListLength),
          scriptSkinPage = createElem('div', {className: 'script-skin-page'});

    while (scriptPagesSkin.length < scriptPagesSkins) {
        const scriptSkinInd = scriptPagesSkin.length + pagesListLength * scriptSkinsPagesList.length;

        const scriptSkinContainer = createElem('div', {className: 'script-skin-container'}),
              scriptSkinContent = createElem('div', {className: 'script-skin-content'}),
              skinInd = scriptSkinInd - 1;

        scriptSkinContainer.dataset.skin = skinInd;
        if (scriptSkinInd) scriptSkinContent.style.backgroundImage = `url('https://raw.githubusercontent.com/dangerprogrammer/burning-script/main/assets/skins/skin-${skinInd}.png')`;
        else {
            scriptSkinContent.style.backgroundColor = '#ff6060';
            lastScriptSkin = scriptSkinContainer;
        };

        scriptSkinContent.addEventListener('click', ev => activeScriptSkin(scriptSkinContainer));

        scriptSkinContainer.append(scriptSkinContent);
        scriptPagesSkin.push(scriptSkinContainer);
    };

    scriptSkinPage.append(...scriptPagesSkin);

    const scriptSkinsPage = createElem('div', {className: 'script-skins-page'});

    scriptSkinsPagesList.push(scriptSkinsPage);
    scriptSkinsPageList.push(scriptSkinPage);
};
activeScriptSkin(lastScriptSkin);

scriptSkins.append(...scriptSkinsPageList);
scriptSkinsPages.append(...scriptSkinsPagesList);

toggleScriptPage(0, scriptSkins, scriptSkinsPages);
leftScriptPage.addEventListener('click', ev => toggleScriptPage(-1, scriptSkins, scriptSkinsPages));
rightScriptPage.addEventListener('click', ev => toggleScriptPage(1, scriptSkins, scriptSkinsPages));

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

addEventListener('resize', () => toggleGamePage(0, gameSkins, gameSkinsPages));

menuContainer.append(userSettingsContainer);

const botsList = [];

class socketBot {
    constructor(hasBot) {
        const botSocket = hasBot || io.connect(socket.io.uri, {query: `cid=${UTILS.getUniqueID()}&rmid=${lobbyRoomID}`});

        botSocket.isBot = true;

        this.players = [];
        let player;

        botSocket.on('setUser', (attributes, isYou) => {
            const ind = getPlayerIndexById(attributes[0]),
                newPlayer = {
                    id: attributes[0],
                    name: attributes[1],
                    dead: false,
                    color: attributes[2],
                    size: attributes[3],
                    startSize: attributes[4],
                    x: attributes[5],
                    y: attributes[6],
                    buildRange: attributes[7],
                    gridIndex: attributes[8],
                    spawnProt: attributes[9],
                    skin: attributes[10]
                };

            if (ind !== null) {
                this.players[ind] = newPlayer;
                if (isYou) player = this.players[ind];
            } else {
                this.players.push(newPlayer);
                if (isYou) player = this.players[this.players.length - 1];
            };
            if (isYou) botsList.push(player);
        });

        botSocket.on('delUser', id => {
            const ind = getPlayerIndexById(id);
            if (player.sid === id) botsList.splice(botsList.indexOf(player), 1);
            this.players.splice(ind, 1);
        });

        botSocket.on('disconnect', id => {
            if (player.sid === id) botsList.splice(botsList.indexOf(player), 1);
            this.players.splice(ind, 1);
        });

        this.botSocket = botSocket;
    };

    async spawn(name, skin) {
		this.botSocket.emit("spawn", { name, skin }, await grecaptcha.execute("6Ldh8e0UAAAAAFOKBv25wQ87F3EKvBzyasSbqxCE"));
    };
};

window.socketBot = socketBot;

window.buildBot = () => {
    const newBot = new socketBot();

    newBot.spawn(`${player.name}-${botsList.length}`, player.skin);
};

window.botsList = botsList;