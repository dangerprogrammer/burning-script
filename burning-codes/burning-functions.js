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
        toggleGamePage(indPage, gameSkins, gameSkinsPages) {
            const gameSkinsChildrens = [...gameSkins.children],
                  gameSkinsPageChildrens = [...gameSkinsPages.children],
                  haveChildActive = gameSkinsChildrens.filter(child => child.classList.contains('active')).length;
            let filtredChildren, filtredPage, hasFiltred;

            if (haveChildActive) {
                gameSkinsChildrens.forEach((child, ind) => {
                    if (child.classList.contains('active') && !hasFiltred) {
                        const firstLast = indPage > 0 ? 'firstChild' : 'lastChild';
                        filtredChildren = gameSkinsChildrens[ind + indPage] || gameSkins[firstLast];
                        filtredPage = gameSkinsPageChildrens[ind + indPage] || gameSkinsPages[firstLast];
                        if (indPage) {
                            setClassOn('active', child, gameSkinsPageChildrens[ind], filtredChildren, filtredPage);
                            activeGameSkin(filtredChildren[firstLast]);
                        };
                        gameSkins.scrollTo(filtredChildren.offsetLeft, 0);
                        gameSkinsPages.scrollTo(filtredPage.offsetLeft, 0);
                        hasFiltred = filtredChildren;
                    };
                });
            } else {
                filtredChildren = gameSkinsChildrens[0];
                filtredPage = gameSkinsPageChildrens[0];
                setClassOn('active', filtredChildren, filtredPage);
                gameSkins.scrollTo(filtredChildren.offsetLeft, 0);
                gameSkinsPages.scrollTo(filtredPage.offsetLeft, 0);
            };
        },
        activeScriptSkin(scriptSkinContainer) {
            const skin = scriptSkinContainer.children[0],
                  otherSkins = query(`.script-skin-container:not([data-skin="${scriptSkinContainer.dataset.skin}"])`, true),
                  scriptSkinPage = scriptSkinContainer.parentElement;
            otherSkins.forEach(otherSkin => otherSkin.children[0].classList.remove('active'));
            skin.classList.add('active');
            scriptSkinPage.scrollTo(scriptSkinContainer.offsetLeft + scriptSkinContainer.offsetWidth / 2 - scriptSkinPage.offsetWidth / 2, 0);
            global.activedFeaturedSkin = skin;
            global.currentFeaturedSkin = +scriptSkinContainer.dataset.skin + 1;
        },
        toggleScriptPage(indPage, scriptSkins, scriptSkinsPages) {
            const scriptSkinsChildrens = [...scriptSkins.children],
                  scriptSkinsPageChildrens = [...scriptSkinsPages.children],
                  haveChildActive = scriptSkinsChildrens.filter(child => child.classList.contains('active')).length;
            let filtredChildren, filtredPage, hasFiltred;

            if (haveChildActive) {
                scriptSkinsChildrens.forEach((child, ind) => {
                    if (child.classList.contains('active') && !hasFiltred) {
                        const firstLast = indPage > 0 ? 'firstChild' : 'lastChild';
                        filtredChildren = scriptSkinsChildrens[ind + indPage] || scriptSkins[firstLast];
                        filtredPage = scriptSkinsPageChildrens[ind + indPage] || scriptSkinsPages[firstLast];
                        if (indPage) {
                            setClassOn('active', child, scriptSkinsPageChildrens[ind], filtredChildren, filtredPage);
                            activeScriptSkin(filtredChildren[firstLast]);
                        };
                        scriptSkins.scrollTo(filtredChildren.offsetLeft, 0);
                        scriptSkinsPages.scrollTo(filtredPage.offsetLeft, 0);
                        hasFiltred = filtredChildren;
                    };
                });
            } else {
                filtredChildren = scriptSkinsChildrens[0];
                filtredPage = scriptSkinsPageChildrens[0];
                setClassOn('active', filtredChildren, filtredPage);
                scriptSkins.scrollTo(filtredChildren.offsetLeft, 0);
                scriptSkinsPages.scrollTo(filtredPage.offsetLeft, 0);
            };
        },
        setMenuMessage(msg) {
            leaveGame();
            kickReason || (kickReason = msg);
            mainMenuMessage.classList.remove('hidden');
            mainMenuMessage.innerHTML = msg;
        },
        enterGame() {
            socket && unitList && (setMenuMessage('Loading...'), hasStorage && localStorage.setItem("lstnmdbl", usernameContent.value), mainCanvas.focus(), grecaptcha.execute("6Ldh8e0UAAAAAFOKBv25wQ87F3EKvBzyasSbqxCE").then(function(a) {
                socket.emit("spawn", {
                    name: usernameContent.value,
                    skin: currentSkin
                }, a)
                setInterval(() => socket.emit("2", Math.round(camX), Math.round(camY)), 1e3);
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
        },
        setupSocket() {
            socket.on("connect_error", function() {
                lobbyURLIP ? setMenuMessage("Connection failed. Please check your lobby ID") : setMenuMessage("Connection failed. Check your internet and firewall settings")
            });
            socket.on("disconnect", function(a) {
                setMenuMessage("Disconnected.")
            });
            socket.on("error", function(a) {
                setMenuMessage("Disconnected. The server may have updated.")
            });
            socket.on("kick", function(a) {
                setMenuMessage(a)
            });
            socket.on("lk", function(a) {
                partyKey = a
            });
            socket.on("spawn", function() {
                gameState = 1;
                unitList = share.getUnitList();
                resetCamera();
                toggleMenuUI(!1);
                toggleGameUI(!0);
                updateUnitList();
                player.upgrades = share.getBaseUpgrades();
                mainCanvas.focus()
            });
            socket.on("gd", function(a) {
                gameData = a
            });
            socket.on("mpd", function(a) {
                mapBounds = a
            });
            socket.on("ch", function(a, d, c) {
                addChatLine(a, d, c)
            });
            socket.on("setUser", function(a, d) {
                if (a && a[0]) {
                    var c = getUserBySID(a[0]),
                        b = {
                            sid: a[0],
                            name: a[1],
                            iName: "Headquarters",
                            dead: !1,
                            color: a[2],
                            size: a[3],
                            startSize: a[4],
                            x: a[5],
                            y: a[6],
                            buildRange: a[7],
                            gridIndex: a[8],
                            spawnProt: a[9],
                            skin: a[10],
                            desc: "Base of operations of " +
                                a[1],
                            kills: 0,
                            typeName: "Base"
                        };
                    null != c ? (users[c] = b, d && (player = users[c])) : (users.push(b), d && (player = users[users.length - 1]))
                }
            });
            socket.on("klUser", function(a) {
                var d = getUserBySID(a);
                null != d && (users[d].dead = !0);
                player && player.sid == a && (hideMainMenuText(), leaveGame())
            });
            socket.on("delUser", function(a) {
                a = getUserBySID(a);
                null != a && users.splice(a, 1)
            });
            socket.on("au", function(a) {
                a && (units.push({
                    id: a[0],
                    owner: a[1],
                    uPath: a[2] || 0,
                    type: a[3] || 0,
                    color: a[4] || 0,
                    paths: a[5],
                    x: a[6] || 0,
                    sX: a[6] || 0,
                    y: a[7] || 0,
                    sY: a[7] || 0,
                    dir: a[8] ||
                        0,
                    turRot: a[8] || 0,
                    speed: a[9] || 0,
                    renderIndex: a[10] || 0,
                    turretIndex: a[11] || 0,
                    range: a[12] || 0,
                    cloak: a[13] || 0
                }), units[units.length - 1].speed && (units[units.length - 1].startTime = window.performance.now()), a = getUnitFromPath(units[units.length - 1].uPath)) && (units[units.length - 1].size = a.size, units[units.length - 1].shape = a.shape, units[units.length - 1].layer = a.layer, units[units.length - 1].renderIndex || (units[units.length - 1].renderIndex = a.renderIndex), units[units.length - 1].range || (units[units.length - 1].range = a.range),
                    units[units.length - 1].turretIndex || (units[units.length - 1].turretIndex = a.turretIndex), units[units.length - 1].iSize = a.iSize)
            });
            socket.on("spa", function(a, d, c, b) {
                a = getUnitById(a);
                if (null != a) {
                    var g = UTILS.getDistance(d, c, units[a].x || d, units[a].y || c);
                    300 > g && g ? (units[a].interpDst = g, units[a].interpDstS = g, units[a].interpDir = UTILS.getDirection(d, c, units[a].x || d, units[a].y || c)) : (units[a].interpDst = 0, units[a].interpDstS = 0, units[a].interpDir = 0, units[a].x = d, units[a].y = c);
                    units[a].interX = 0;
                    units[a].interY = 0;
                    units[a].sX =
                        units[a].x || d;
                    units[a].sY = units[a].y || c;
                    b[0] && (units[a].dir = b[0], units[a].turRot = b[0]);
                    units[a].paths = b;
                    units[a].startTime = window.performance.now()
                }
            });
            socket.on("uc", function(a, d) {
                unitList && (unitList[a].count = d);
                forceUnitInfoUpdate = !0
            });
            socket.on("uul", function(a, d) {
                unitList && (unitList[a].limit += d)
            });
            socket.on("rpu", function(a, d) {
                var c = getUnitFromPath(a);
                c && (c.dontShow = d, forceUnitInfoUpdate = !0)
            });
            socket.on("sp", function(a, d) {
                var c = getUserBySID(a);
                null != c && (users[c].spawnProt = d)
            });
            socket.on("ab", function(a) {
                a &&
                    bullets.push({
                        x: a[0],
                        sX: a[0],
                        y: a[1],
                        sY: a[1],
                        dir: a[2],
                        speed: a[3],
                        size: a[4],
                        range: a[5]
                    })
            });
            socket.on("uu", function(a, d) {
                if (void 0 != a && d) {
                    var c = getUnitById(a);
                    if (null != c)
                        for (var b = 0; b < d.length;) units[c][d[b]] = d[b + 1], "dir" == d[b] && (units[c].turRot = d[b + 1]), b += 2
                }
            });
            socket.on("du", function(a) {
                a = getUnitById(a);
                null != a && units.splice(a, 1)
            });
            socket.on("sz", function(a, d) {
                var c = getUserBySID(a);
                null != c && (users[c].size = d)
            });
            socket.on("pt", score => {
                scoreContainer.innerHTML = `Power <span style="color: ${playerColors[player.color]}">${score}</span>`;

                if (window.powerBotList) scoreContainer.innerHTML = `Power <span style="color: ${playerColors[player.color]}">${score}</span> | ${powerBotList.map(({power, color}) => `<span style="color: ${playerColors[color]}">${power}</span>`).join(' | ')}`;
            });
            socket.on("l", function(a) {
                for (var d = "", c = 1, b = 0; b < a.length;) d += "<div class='leaderboardItem'><div style='display:inline-block;float:left;' class='whiteText'>" + c + ".</div> <div class='" + (player && a[b] == player.sid ? "leaderYou" : "leader") + "'>" + a[b + 1] + "</div><div class='scoreText'>" + a[b + 2] + "</div></div>", c++, b += 3;
                leaderboardList.innerHTML = d
            })
        },
        renderUnit(a, d, c, b, g, e, k) {
            var f = b.size * (k ? iconSizeMult : 1),
                h = f + ":" + b.cloak + ":" + b.renderIndex + ":" + b.iSize + ":" + b.turretIndex + ":" + b.shape + ":" + g;
            if (!unitSprites[h]) {
                var m = document.createElement("canvas"),
                    l = m.getContext("2d");
                m.width = 2 * f + 30;
                m.height = m.width;
                m.style.width = m.width + "px";
                m.style.height = m.height + "px";
                l.translate(m.width / 2, m.height / 2);
                l.lineWidth = outlineWidth * (k ? .9 : 1.2);
                l.strokeStyle = darkColor;
                l.fillStyle = g;
                4 == b.renderIndex ? l.fillStyle = turretColor : 5 == b.renderIndex && (l.fillStyle = turretColor,
                    renderRect(0, .76 * f, 1.3 * f, f / 2.4, l), l.fillStyle = g);
                b.cloak && (l.fillStyle = backgroundColor);
                "circle" == b.shape ? (renderCircle(0, 0, f, l), b.iSize && (l.fillStyle = turretColor, renderCircle(0, 0, f * b.iSize, l))) : "triangle" == b.shape ? (renderTriangle(0, 0, f, l), b.iSize && (l.fillStyle = turretColor, renderTriangle(0, 2, f * b.iSize, l))) : "hexagon" == b.shape ? (renderAgon(0, 0, f, l, 6), b.iSize && (l.fillStyle = turretColor, renderAgon(0, 0, f * b.iSize, l, 6))) : "octagon" == b.shape ? (l.rotate(MathPI / 8), renderAgon(0, 0, .96 * f, l, 8), b.iSize && (l.fillStyle =
                    turretColor, renderAgon(0, 0, .96 * f * b.iSize, l, 8))) : "pentagon" == b.shape ? (l.rotate(-MathPI / 2), renderAgon(0, 0, 1.065 * f, l, 5), b.iSize && (l.fillStyle = turretColor, renderAgon(0, 0, 1.065 * f * b.iSize, l, 5))) : "square" == b.shape ? (renderSquare(0, 0, f, l), b.iSize && (l.fillStyle = turretColor, renderSquare(0, 0, f * b.iSize, l))) : "spike" == b.shape ? renderStar(0, 0, f, .7 * f, l, 8) : "star" == b.shape && (f *= 1.2, renderStar(0, 0, f, .7 * f, l, 6));
                if (1 == b.renderIndex) l.fillStyle = turretColor, renderRect(f / 2.8, 0, f / 4, f / 1, l), renderRect(-f / 2.8, 0, f / 4, f / 1, l);
                else if (2 ==
                    b.renderIndex) l.fillStyle = turretColor, renderRect(f / 2.5, f / 2.5, f / 2.5, f / 2.5, l), renderRect(-f / 2.5, f / 2.5, f / 2.5, f / 2.5, l), renderRect(f / 2.5, -f / 2.5, f / 2.5, f / 2.5, l), renderRect(-f / 2.5, -f / 2.5, f / 2.5, f / 2.5, l);
                else if (3 == b.renderIndex) l.fillStyle = turretColor, l.rotate(MathPI / 2), renderRectCircle(0, 0, .75 * f, f / 2.85, 3, l), renderCircle(0, 0, .5 * f, l), l.fillStyle = g;
                else if (6 == b.renderIndex) l.fillStyle = turretColor, l.rotate(MathPI / 2), renderRectCircle(0, 0, .7 * f, f / 4, 5, l), l.rotate(-MathPI / 2), renderAgon(0, 0, .4 * f, l, 6);
                else if (7 == b.renderIndex)
                    for (g =
                        0; 3 > g; ++g) l.globalAlpha = .5, l.fillStyle = g ? 1 == g ? "#93e865" : "#a2ff6f" : "#89d95f", l.fillStyle = '#0f05', renderStar(0, 0, f, .7 * f, l, 7), f *= .55;
                else 8 == b.renderIndex && (l.fillStyle = turretColor, renderRectCircle(0, 0, .75 * f, f / 2.85, 3, l), renderSquare(0, 0, .5 * f, l));
                1 != b.type && b.turretIndex && renderTurret(0, 0, b.turretIndex, k ? iconSizeMult : 1, -(MathPI / 2), l);
                unitSprites[h] = m
            }
            f = unitSprites[h];
            e.save();
            e.translate(a, d);
            e.rotate(c + MathPI / 2);
            e.drawImage(f, -(f.width / 2), -(f.height / 2), f.width, f.height);
            1 == b.type && b.turretIndex && renderTurret(0, 0, b.turretIndex, k ? iconSizeMult :
                1, b.turRot - MathPI / 2 - c, e);
            e.restore()
        },
        renderText(a, d) {
            var c = document.createElement("canvas"),
                b = c.getContext("2d");
            b.font = d + "px regularF";
            var g = b.measureText(a);
            c.width = g.width + 20;
            c.height = 2 * d;
            b.translate(c.width / 2, c.height / 2);
            b.font = d + "px regularF";
            b.fillStyle = "#000";
            b.textBaseline = "middle";
            b.textAlign = "center";
            b.strokeStyle = darkColor;
            b.lineWidth = outlineWidth;
            b.strokeText(a, 0, 0);
            b.fillText(a, 0, 0);
            return c
        },
        initFinish() {
            initC++;
            2 == initC && (playContent.classList.remove('no-click'), playContent.addEventListener('click', enterGame), usernameContent.addEventListener('keydown', ev => {
                if (ev.code === 'Enter') enterGame();
            }), mainCanvas.addEventListener("keypress", function(a) {
                gameState && 13 === (a.which || a.keyCode) && (mainCanvas.blur(), chatInput.focus(), toggleChat(!0))
            }), chatInput.addEventListener("keypress", function(a) {
                gameState && socket && 13 === (a.which || a.keyCode) && ("" != chatInput.value && socket.emit("ch", chatInput.value), chatInput.value = "", mainCanvas.focus())
            }),
                           chatInput.onclick = function() {
                toggleChat(!0)
            }, sellButton.onclick = function() {
                socket && selUnits.length && sellSelUnits();
                mainCanvas.focus()
            }, $.get("/getIP", {
                sip: lobbyURLIP
            }, function(a) {
                port = a.port;
                socket || (socket = io.connect("http://" + (a.ip || "127.0.0.1") + ":" + a.port, {
                    reconnection: !0,
                    query: "cid=" + cid + "&rmid=" + lobbyRoomID
                }), setupSocket())
            }))
        },
        getPlayerIndexById(id) {
            return users.filter(user => user.id === id).map((user, ind) => ind)[0];
        },
        playersLinked(a,d) {
            const botRegEx = new RegExp(`${player.name}-[0-9]*`, 'gim');
            if (a.sid === player.sid) {
                const isMyBot = botRegEx.test(d.name);
                return isMyBot;
            };
        },
        generateID() {
            const start = Date.now().toString(36), ending = Math.random().toString(36).substring(2);
            return start + ending;
        },
        controlBaseFromBot(bot) {
            if (!bot || !bot.botPlayer || !bot.botSocket) return;
            updateGameLoop = function(a) {
                if (player && gameData) {
                    updateTarget();
                    if (gameState && mapBounds) {
                        if (camXS || camYS) camX += camXS * camSpdM * cameraSpd * a, camY += camYS * camSpdM * cameraSpd * a;
                        player.x + camX < mapBounds[0] ? camX = mapBounds[0] - player.x : player.x + camX > mapBounds[0] + mapBounds[2] && (camX = mapBounds[0] + mapBounds[2] - player.x);
                        player.y + camY < mapBounds[1] ? camY = mapBounds[1] - player.y : player.y + camY > mapBounds[1] + mapBounds[3] && (camY = mapBounds[1] + mapBounds[3] -
                            player.y);
                        currentTime - lastCamSend >= sendFrequency && (lastCamX != camX || lastCamY != camY) && (lastCamX = camX, lastCamY = camY, lastCamSend = currentTime, socket.emit("2", Math.round(camX), Math.round(camY)))
                    }
                    renderBackground(outerColor);
                    var d = (player.x || 0) - maxScreenWidth / 2 + camX,
                        c = (player.y || 0) - maxScreenHeight / 2 + camY;
                    mapBounds && (mainContext.fillStyle = backgroundColor, mainContext.fillRect(mapBounds[0] - d, mapBounds[1] - c, mapBounds[2], mapBounds[3]));
                    for (var b, g, e = 0; e < units.length; ++e) b = units[e], b.interpDst && (g = b.interpDst *
                        a * .015, b.interX += g * MathCOS(b.interpDir), b.interY += g * MathSIN(b.interpDir), b.interpDst -= g, .1 >= b.interpDst && (b.interpDst = 0, b.interX = b.interpDstS * MathCOS(b.interpDir), b.interY = b.interpDstS * MathSIN(b.interpDir))), b.speed && (updateUnitPosition(b), b.x += b.interX || 0, b.y += b.interY || 0);
                    if (gameState)
                        if (activeUnit) {
                            var k = player.x - d + targetDst * MathCOS(targetDir) + camX;
                            var f = player.y - c + targetDst * MathSIN(targetDir) + camY;
                            var h = UTILS.getDirection(k, f, bot.botPlayer.x - d, bot.botPlayer.y - c);
                            0 == activeUnit.type ? (b = UTILS.getDistance(k, f,
                                    bot.botPlayer.x - d, bot.botPlayer.y - c), b - activeUnit.size < bot.botPlayer.startSize ? (k = bot.botPlayer.x - d + (activeUnit.size + bot.botPlayer.startSize) * MathCOS(h), f = bot.botPlayer.y - c + (activeUnit.size + bot.botPlayer.startSize) * MathSIN(h)) : b + activeUnit.size > bot.botPlayer.buildRange - .15 && (k = bot.botPlayer.x - d + (bot.botPlayer.buildRange - activeUnit.size - .15) * MathCOS(h), f = bot.botPlayer.y - c + (bot.botPlayer.buildRange - activeUnit.size - .15) * MathSIN(h))) : 1 == activeUnit.type || 2 == activeUnit.type ? (k = bot.botPlayer.x - d + (activeUnit.size + bot.botPlayer.buildRange) * MathCOS(h), f = bot.botPlayer.y - c + (activeUnit.size + bot.botPlayer.buildRange) * MathSIN(h)) :
                                3 == activeUnit.type && (b = UTILS.getDistance(k, f, bot.botPlayer.x - d, bot.botPlayer.y - c), b - activeUnit.size < bot.botPlayer.startSize ? (k = bot.botPlayer.x - d + (activeUnit.size + bot.botPlayer.startSize) * MathCOS(h), f = bot.botPlayer.y - c + (activeUnit.size + bot.botPlayer.startSize) * MathSIN(h)) : b + activeUnit.size > bot.botPlayer.buildRange + 2 * activeUnit.size && (k = bot.botPlayer.x - d + (bot.botPlayer.buildRange + activeUnit.size) * MathCOS(h), f = bot.botPlayer.y - c + (bot.botPlayer.buildRange + activeUnit.size) * MathSIN(h)));
                            activeUnitDir = h;
                            activeUnitDst = UTILS.getDistance(k, f, player.x - d, player.y - c);
                            activeUnit.dontPlace = !1;
                            mainContext.fillStyle =
                                outerColor;
                            if (0 == activeUnit.type || 2 == activeUnit.type || 3 == activeUnit.type)
                                for (e = 0; e < units.length; ++e)
                                    if (1 != units[e].type && units[e].owner == bot.botPlayer.sid && 0 <= activeUnit.size + units[e].size - UTILS.getDistance(k, f, units[e].x - d, units[e].y - c)) {
                                        mainContext.fillStyle = redColor;
                                        activeUnit.dontPlace = !0;
                                        break
                                    }
                            renderCircle(k, f, activeUnit.range ? activeUnit.range : activeUnit.size + 30, mainContext, !0)
                        } else if (selUnits.length)
                        for (e = 0; e < selUnits.length; ++e) mainContext.fillStyle = outerColor, 1 < selUnits.length ? renderCircle(selUnits[e].x -
                            d, selUnits[e].y - c, selUnits[e].size + 25, mainContext, !0) : renderCircle(selUnits[e].x - d, selUnits[e].y - c, selUnits[e].range ? selUnits[e].range : selUnits[e].size + 25, mainContext, !0);
                    else activeBase && (mainContext.fillStyle = outerColor, renderCircle(bot.botPlayer.x - d, bot.botPlayer.y - c, bot.botPlayer.size + 50, mainContext, !0));
                    if (selUnits.length)
                        for (mainContext.strokeStyle = targetColor, e = 0; e < selUnits.length; ++e) selUnits[e].gatherPoint && renderDottedCircle(selUnits[e].gatherPoint[0] - d, selUnits[e].gatherPoint[1] - c, 30, mainContext);
                    for (e = 0; e < users.length; ++e)
                        if (b = users[e], !b.dead) {
                            mainContext.lineWidth = 1.2 * outlineWidth;
                            mainContext.strokeStyle = indicatorColor;
                            isOnScreen(b.x - d, b.y - c, b.buildRange) && (mainContext.save(), mainContext.translate(b.x - d, b.y - c), mainContext.rotate(playerBorderRot), renderDottedCircle(0, 0, b.buildRange, mainContext), renderDottedCircle(0, 0, b.startSize, mainContext), mainContext.restore());
                            b.spawnProt && (mainContext.strokeStyle = redColor, mainContext.save(), mainContext.translate(b.x - d, b.y - c), mainContext.rotate(playerBorderRot),
                                renderDottedCircle(0, 0, b.buildRange + 140, mainContext), mainContext.restore());
                            for (var m = 0; m < users.length; ++m) e < m && !users[m].dead && (mainContext.strokeStyle = b.spawnProt || users[m].spawnProt ? redColor : indicatorColor, playersLinked(b, users[m]) && (isOnScreen(b.x - d, b.y - c, 0) || isOnScreen(users[m].x - d, users[m].y - c, 0) || isOnScreen((b.x + users[m].x) / 2 - d, (b.y + users[m].y) / 2 - c, 0)) && (g = UTILS.getDirection(b.x, b.y, users[m].x, users[m].y), renderDottedLine(b.x - (b.buildRange + lanePad + (b.spawnProt ? 140 : 0)) * MathCOS(g) - d, b.y - (b.buildRange +
                                lanePad + (b.spawnProt ? 140 : 0)) * MathSIN(g) - c, users[m].x + (users[m].buildRange + lanePad + (users[m].spawnProt ? 140 : 0)) * MathCOS(g) - d, users[m].y + (users[m].buildRange + lanePad + (users[m].spawnProt ? 140 : 0)) * MathSIN(g) - c, mainContext)))
                        }
                    mainContext.strokeStyle = darkColor;
                    mainContext.lineWidth = 1.2 * outlineWidth;
                    for (e = 0; e < units.length; ++e) b = units[e], b.layer || (b.onScreen = !1, isOnScreen(b.x - d, b.y - c, b.size) && (b.onScreen = !0, renderUnit(b.x - d, b.y - c, b.dir, b, playerColors[b.color], mainContext)));
                    for (e = 0; e < units.length; ++e) b = units[e],
                        1 == b.layer && (b.onScreen = !1, isOnScreen(b.x - d, b.y - c, b.size) && (b.onScreen = !0, renderUnit(b.x - d, b.y - c, b.dir, b, playerColors[b.color], mainContext)));
                    mainContext.fillStyle = bulletColor;
                    for (e = bullets.length - 1; 0 <= e; --e) {
                        b = bullets[e];
                        if (b.speed && (b.x += b.speed * a * MathCOS(b.dir), b.y += b.speed * a * MathSIN(b.dir), UTILS.getDistance(b.sX, b.sY, b.x, b.y) >= b.range)) {
                            bullets.splice(e, 1);
                            continue
                        }
                        isOnScreen(b.x - d, b.y - c, b.size) && renderCircle(b.x - d, b.y - c, b.size, mainContext)
                    }
                    mainContext.strokeStyle = darkColor;
                    mainContext.lineWidth =
                        1.2 * outlineWidth;
                    for (e = 0; e < users.length; ++e) b = users[e], !b.dead && isOnScreen(b.x - d, b.y - c, b.size) && (renderPlayer(b, b.x - d, b.y - c, mainContext), "unknown" != b.name && (tmpIndx = b.name + "-" + b.size, 20 <= b.size && b.nameSpriteIndx != tmpIndx && (b.nameSpriteIndx = tmpIndx, b.nameSprite = renderText(b.name, b.size / 4)), b.nameSprite && mainContext.drawImage(b.nameSprite, b.x - d - b.nameSprite.width / 2, b.y - c - b.nameSprite.height / 2, b.nameSprite.width, b.nameSprite.height)));
                    if (selUnits.length)
                        for (e = selUnits.length - 1; 0 <= e; --e) selUnits[e] &&
                            0 > units.indexOf(selUnits[e]) && disableSelUnit(e);
                    activeUnit && renderUnit(k, f, h, activeUnit, playerColors[bot.botPlayer.color], mainContext);
                    showSelector && (mainContext.fillStyle = "rgba(0, 0, 0, 0.1)", k = player.x - d + targetDst * MathCOS(targetDir) + camX, f = player.y - c + targetDst * MathSIN(targetDir) + camY, mainContext.fillRect(mouseStartX, mouseStartY, k - mouseStartX, f - mouseStartY));
                    playerBorderRot += a / 5600;
                    hoverUnit ? toggleUnitInfo(hoverUnit) : activeBase ? toggleUnitInfo(activeBase, activeBase.sid == bot.botPlayer.sid) : activeUnit ? toggleUnitInfo(activeUnit) :
                        1 == selUnits.length ? toggleUnitInfo(selUnits[0].info, !0) : toggleUnitInfo()
                }
            };
            sendUnit = a => {
            socket && gameState && activeUnit && !activeUnit.dontPlace && bot.botSocket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a)
        }
        }
    };

    for (const func in funcs) global[func] = funcs[func];
})(window || this);