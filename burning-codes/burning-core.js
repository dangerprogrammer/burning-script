removeElems(linksContainer, ...menuContainer.children);
hideElems(smallAdContainer);
resetFuncs(updateAdPos, youtuberList);

const featuredSkins = 54;

document.title = 'Burning Script 1.0.0';

cid = UTILS.getUniqueID();
localStorage.setItem("cid", cid);

backgroundColor = '#111';turretColor = '#333a';outerColor = '#222';darkColor = '#aaaa';indicatorColor = '#555a';redColor = '#f005';targetColor = '#fff6';

const oldColors = [...playerColors], newColorsAlpha = .5;
playerColors.forEach((playerColor, ind) => playerColors[ind] = playerColor + Math.round(newColorsAlpha * 256).toString(16));
window.oldColors = oldColors;

const gameBases = {scriptBases: {
    'Generators': [{"dir":1.5707963267948966,"dst":132,"uPath":[3,0]},{"dir":2.060602137898269,"dst":132.0000015151515,"uPath":[3,0]},{"dir":2.5613014392829516,"dst":131.99760982684498,"uPath":[3,0]},{"dir":3.0510905178126464,"dst":132.00021401497804,"uPath":[3,0]},{"dir":-2.738083552016774,"dst":132.00117007057173,"uPath":[3,0]},{"dir":-2.1639887225899512,"dst":132.00100984462202,"uPath":[3,0]},{"dir":1.080990515691524,"dst":132.0000015151515,"uPath":[3,0]},{"dir":0.5802912143068416,"dst":131.99760982684498,"uPath":[3,0]},{"dir":0.09050213577714679,"dst":132.00021401497804,"uPath":[3,0]},{"dir":-0.4035091015730189,"dst":132.00117007057173,"uPath":[3,0]},{"dir":-0.9776039309998418,"dst":132.00100984462202,"uPath":[3,0]},{"dir":-1.5707963267948966,"dst":212.01,"uPath":[3,0]},{"dir":-1.2150994043221024,"dst":184.2962018056802,"uPath":[3,0]},{"dir":-0.8760119324303033,"dst":194.33949804401576,"uPath":[3,0]},{"dir":-0.5038935476659494,"dst":193.95706999230526,"uPath":[3,0]},{"dir":-0.16509512272194807,"dst":184.18440569168718,"uPath":[3,0]},{"dir":0.32661369630416776,"dst":184.67287456472863,"uPath":[3,0]},{"dir":0.6615927777620818,"dst":194.68586029807096,"uPath":[3,0]},{"dir":1.0445973657274905,"dst":195.73912153680467,"uPath":[3,0]},{"dir":1.3982716706696492,"dst":189.89914797070577,"uPath":[3,0]},{"dir":-1.926493249267691,"dst":184.2962018056802,"uPath":[3,0]},{"dir":-2.2669932034158022,"dst":193.99528499424926,"uPath":[3,0]},{"dir":-2.637699105923844,"dst":193.95706999230526,"uPath":[3,0]},{"dir":-2.976497530867845,"dst":184.18440569168718,"uPath":[3,0]},{"dir":2.8149789572856254,"dst":184.67287456472863,"uPath":[3,0]},{"dir":2.4799998758277115,"dst":194.68586029807096,"uPath":[3,0]},{"dir":2.0969952878623026,"dst":195.73912153680467,"uPath":[3,0]},{"dir":1.7433209829201441,"dst":189.89914797070577,"uPath":[3,0]},{"dir":1.5707963267948966,"dst":243.85,"uPath":[3,0]},{"dir":1.9034921306653085,"dst":243.8515121954342,"uPath":[3,0]},{"dir":2.2915128109153544,"dst":243.84657163880732,"uPath":[3,0]},{"dir":2.668408424034472,"dst":243.8543017869482,"uPath":[3,0]},{"dir":2.9316908086774025,"dst":243.8522218475772,"uPath":[3,0]},{"dir":-3.0882142495349427,"dst":243.84730898658694,"uPath":[3,0]},{"dir":-2.822318978699968,"dst":243.8534652204065,"uPath":[3,0]},{"dir":-2.453081653157561,"dst":243.85096596076875,"uPath":[3,0]},{"dir":-2.078914523651356,"dst":243.8472702328242,"uPath":[3,0]},{"dir":-1.8155959602644267,"dst":243.8501720319262,"uPath":[3,0]},{"dir":1.2381005229244848,"dst":243.8515121954342,"uPath":[3,0]},{"dir":0.8500798426744389,"dst":243.84657163880732,"uPath":[3,0]},{"dir":0.4731842295553213,"dst":243.8543017869482,"uPath":[3,0]},{"dir":0.20990184491239056,"dst":243.8522218475772,"uPath":[3,0]},{"dir":-0.053378404054850524,"dst":243.84730898658694,"uPath":[3,0]},{"dir":-0.31927367488982544,"dst":243.8534652204065,"uPath":[3,0]},{"dir":-0.6885110004322322,"dst":243.85096596076875,"uPath":[3,0]},{"dir":-1.0626781299384371,"dst":243.8472702328242,"uPath":[3,0]},{"dir":-1.3259966933253666,"dst":243.8501720319262,"uPath":[3,0]},{"dir":-1.5707963267948966,"dst":140,"uPath":[7]}],
    'Defense Base': [{"dir":-1.5707963267948966,"dst":132,"uPath":[3,0]},{"dir":-1.0472151517981065,"dst":132.0040241810832,"uPath":[3,0]},{"dir":-0.5235811749967904,"dst":132.00402418108317,"uPath":[3,0]},{"dir":0,"dst":132,"uPath":[3,0]},{"dir":0.5235811749967904,"dst":132.00402418108317,"uPath":[3,0]},{"dir":1.0472151517981065,"dst":132.0040241810832,"uPath":[3,0]},{"dir":1.5707963267948966,"dst":132,"uPath":[3,0]},{"dir":2.094377501791687,"dst":132.0040241810832,"uPath":[3,0]},{"dir":2.6180114785930026,"dst":132.00402418108317,"uPath":[3,0]},{"dir":3.141592653589793,"dst":132,"uPath":[3,0]},{"dir":-2.6180114785930026,"dst":132.00402418108317,"uPath":[3,0]},{"dir":-2.094377501791687,"dst":132.0040241810832,"uPath":[3,0]},{"dir":-1.5707963267948966,"dst":243.85,"uPath":[3,0]},{"dir":-1.2217310139003925,"dst":243.84564708027906,"uPath":[3,0]},{"dir":-0.8726765985349083,"dst":243.84763193437004,"uPath":[3,0]},{"dir":-0.523581622357118,"dst":243.84724480707183,"uPath":[3,0]},{"dir":-0.17451303786010752,"dst":243.85384577652255,"uPath":[3,0]},{"dir":0.17451303786010752,"dst":243.85384577652255,"uPath":[3,0]},{"dir":0.523581622357118,"dst":243.84724480707183,"uPath":[3,0]},{"dir":0.8726765985349083,"dst":243.84763193437004,"uPath":[3,0]},{"dir":1.2217310139003925,"dst":243.84564708027906,"uPath":[3,0]},{"dir":1.5707963267948966,"dst":243.85,"uPath":[3,0]},{"dir":1.9198616396894008,"dst":243.84564708027906,"uPath":[3,0]},{"dir":2.268916055054885,"dst":243.84763193437004,"uPath":[3,0]},{"dir":2.617975516530683,"dst":243.8522448123043,"uPath":[3,0]},{"dir":2.9670796157296855,"dst":243.85384577652243,"uPath":[3,0]},{"dir":-2.9670796157296855,"dst":243.85384577652243,"uPath":[3,0]},{"dir":-2.618011031232675,"dst":243.84724480707175,"uPath":[3,0]},{"dir":-2.268916055054885,"dst":243.84763193437004,"uPath":[3,0]},{"dir":-1.9198616396894008,"dst":243.84564708027906,"uPath":[3,0]},{"dir":-1.3962909106040977,"dst":194.50402412289571,"uPath":[2,1,0]},{"dir":-1.0471925613435153,"dst":194.4983190158722,"uPath":[2,1,0]},{"dir":-0.6981086801285681,"dst":194.50192903927714,"uPath":[2,1,0]},{"dir":-0.3490521307206445,"dst":194.49880025336915,"uPath":[2,1,0]},{"dir":0,"dst":194.5,"uPath":[2,1,0]},{"dir":0.3490521307206445,"dst":194.49880025336915,"uPath":[2,1,0]},{"dir":0.6981086801285681,"dst":194.50192903927714,"uPath":[2,1,0]},{"dir":1.0471925613435153,"dst":194.4983190158722,"uPath":[2,1,0]},{"dir":1.3962909106040977,"dst":194.50402412289571,"uPath":[2,1,0]},{"dir":1.7453017429856956,"dst":194.50402412289571,"uPath":[2,1,0]},{"dir":2.094400092246278,"dst":194.4983190158722,"uPath":[2,1,0]},{"dir":2.443483973461225,"dst":194.50192903927714,"uPath":[2,1,0]},{"dir":2.7925405228691487,"dst":194.49880025336915,"uPath":[2,1,0]},{"dir":3.141592653589793,"dst":194.5,"uPath":[2,1,0]},{"dir":-2.7925405228691487,"dst":194.49880025336915,"uPath":[2,1,0]},{"dir":-2.443483973461225,"dst":194.50192903927714,"uPath":[2,1,0]},{"dir":-2.094400092246278,"dst":194.4983190158722,"uPath":[2,1,0]},{"dir":-1.7453017429856956,"dst":194.50402412289571,"uPath":[2,1,0]},{"dir":-1.5707963267948966,"dst":306,"uPath":[1,0,0]},{"dir":-1.3681069626513287,"dst":306.00429343393205,"uPath":[1,0,0]},{"dir":-1.165436811689342,"dst":305.99785767223926,"uPath":[1,0,0]},{"dir":-0.9627342241480971,"dst":305.9981349616366,"uPath":[1,0,0]},{"dir":-0.7600458839300414,"dst":305.9997982025478,"uPath":[1,0,0]},{"dir":-0.5573626611080658,"dst":306.0025419829058,"uPath":[1,0,0]},{"dir":-0.35471246210577073,"dst":305.99957663369406,"uPath":[1,0,0]},{"dir":-0.15202320885345094,"dst":305.99917728647574,"uPath":[1,0,0]},{"dir":0.05067481448411057,"dst":306.00281387595106,"uPath":[1,0,0]},{"dir":0.25335658413130696,"dst":305.9985341468158,"uPath":[1,0,0]},{"dir":0.45603324620777685,"dst":306.0013570231348,"uPath":[1,0,0]},{"dir":0.6587043404678999,"dst":305.99936339803065,"uPath":[1,0,0]},{"dir":0.8614044177429835,"dst":306.00002418300556,"uPath":[1,0,0]},{"dir":1.0640945910973194,"dst":305.9987785923336,"uPath":[1,0,0]},{"dir":1.2667593155726777,"dst":306.0046944084355,"uPath":[1,0,0]},{"dir":1.4694465172212892,"dst":306.00023937899135,"uPath":[1,0,0]},{"dir":1.6721461363685042,"dst":306.00023937899135,"uPath":[1,0,0]},{"dir":1.8748333380171156,"dst":306.0046944084355,"uPath":[1,0,0]},{"dir":2.0774980624924737,"dst":305.9987785923336,"uPath":[1,0,0]},{"dir":2.28018823584681,"dst":306.0000241830056,"uPath":[1,0,0]},{"dir":2.4828883131218933,"dst":305.99936339803065,"uPath":[1,0,0]},{"dir":2.6855594073820166,"dst":306.0013570231348,"uPath":[1,0,0]},{"dir":2.888236069458486,"dst":305.9985341468158,"uPath":[1,0,0]},{"dir":3.090917839105683,"dst":306.0028138759512,"uPath":[1,0,0]},{"dir":-2.9895694447363423,"dst":305.99917728647574,"uPath":[1,0,0]},{"dir":-2.7868801914840224,"dst":305.99957663369406,"uPath":[1,0,0]},{"dir":-2.5842299924817276,"dst":306.0025419829058,"uPath":[1,0,0]},{"dir":-2.381546769659752,"dst":305.9997982025478,"uPath":[1,0,0]},{"dir":-2.1788584294416964,"dst":305.9981349616366,"uPath":[1,0,0]},{"dir":-1.9761558419004512,"dst":305.99785767223926,"uPath":[1,0,0]},{"dir":-1.7734856909384646,"dst":306.00429343393205,"uPath":[1,0,0]}],
    '': []
}, savedBases : {}};

window.isMirrorBots = !1;

mainCanvas.onkeyup = function(a) {
    const aKey = a.key;
    a = a.keyCode ? a.keyCode : a.which;
    if (socket && controlledUser.player && !controlledUser.player.dead) {
        16 == a && updCamSpd();
        if (65 == a || 37 == a) cameraKeys.l = 0, updateCameraInput();
        if (68 == a || 39 == a) cameraKeys.r = 0, updateCameraInput();
        if (87 == a || 38 == a) cameraKeys.u = 0, updateCameraInput();
        if (83 == a || 40 == a) cameraKeys.d = 0, updateCameraInput();
        if (aKey === '+') buildBot();
        if (32 == a) {
            var d = unitList.indexOf(activeUnit);
            sendUnit(d)
        }
        void 0 != upgrInputsToIndex["k" + a] && toggleActiveUnit(upgrInputsToIndex["k" + a]);
        46 == a && selUnits.length && sellSelUnits();
        84 == a && toggleChat("none" ==
                              chatListWrapper.style.display);
        27 == a && (toggleActiveUnit(), disableSelUnit(), showSelector = !1);
        82 == a && (camX = controlledUser.player.x - player.x, camY = controlledUser.player.y - player.y)
    }
};

const ionIcons = createElems(['script', {type: 'module', src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'}], ['script', {nomodule: true, src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'}]);

document.body.append(...ionIcons);

const userSettingsContainer = createElem('div', {className: 'user-settings-container'}),
      gameTitle = createElem('h1', {className: 'game-title', innerHTML: 'Burning Script'}),
      mainUserSettings = createElem('div', {className: 'main-user-settings'}),
      usernameplayContainer = createElem('div', {className: 'usernameplay-container'}),
      creditsContainer = createElem('div', {className: 'credits-container', innerHTML: 'Created by Danger'}),
      usernameContainer = createElem('div', {className: 'username-container'}),
      usernameContent = createElem('input', {className: 'username-content', placeholder: 'Type your nickname', maxLength: 14}),
      playContent = createElem('div', {className: 'play-content no-click', innerHTML: 'Start Game <ion-icon name="arrow-forward-outline"></ion-icon>'}),
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
window.controlledUser = {player: player, socket: socket};

class socketBot {
    constructor(hasBot) {
        const botSocket = hasBot || io.connect(socket.io.uri, {query: `cid=${UTILS.getUniqueID()}&rmid=${lobbyRoomID}`});

        botSocket.isBot = true;

        this.players = [];
        this.botPlayer = false;

        botSocket.on('setUser', (attributes, isYou) => {
            const ind = getPlayerIndexById(attributes[0]), id = generateID(),
                newPlayer = {
                    sid: attributes[0],
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
                    skin: attributes[10],
                    desc: `Bot ID: ${id}`
                };

            if (ind !== null && ind !== undefined) this.players[ind] = newPlayer;
            else this.players.push(newPlayer);

            if (isYou) this.botPlayer = newPlayer;
        });

        botSocket.on('delUser', id => {
            const ind = getPlayerIndexById(id),
            hasMyBotInd = botsList.filter(bot => bot.botPlayer.sid === id).map((bot, ind) => ind);
            if (hasMyBotInd.length) botsList[hasMyBotInd[0]].delete();
            this.players.splice(ind, 1);
        });

        botSocket.on('disconnect', id => {
            const ind = getPlayerIndexById(id),
            hasMyBotInd = botsList.filter(bot => bot.botPlayer.sid === id).map((bot, ind) => ind);
            if (hasMyBotInd.length) botsList[hasMyBotInd[0]].delete();
            this.players.splice(ind, 1);
        });

        botSocket.on('spawn', () => {
            botsList.push(this);
            setInterval(() => botSocket.emit("2", Math.round(camX), Math.round(camY)), 1e3);
        });

        botSocket.on('pt', score => {
            this.botPlayer.power = score;
        });

        this.botSocket = botSocket;
    };

    async spawn(name, skin) {
		this.botSocket.emit("spawn", { name, skin }, await grecaptcha.execute("6Ldh8e0UAAAAAFOKBv25wQ87F3EKvBzyasSbqxCE"));
    };

    delete() {
        botsList.splice(botsList.indexOf(this), 1);
        if (controlledUser == this) controlPlayer();
        this.botSocket.close();
    }
};

window.buildBot = () => {
    const newBot = new socketBot(),
          fullPlayerName = (player.specialSkin ? `!${player.specialSkinStr}` : '') + player.name,
          maxBot = 10;

    if (botsList.length < maxBot) newBot.spawn(fullPlayerName, player.skin);
};

window.botsList = botsList;