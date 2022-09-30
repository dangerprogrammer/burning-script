removeElems(linksContainer, smallAdContainer, ...menuContainer.children);
resetFuncs(updateAdPos, youtuberList);

const changeSkins = createElem('div', {className: 'change-skins'});

const skinContainer0 = createElem('div', {className: 'skin-container'});

changeSkins.append(skinContainer0);

menuContainer.append(changeSkins);