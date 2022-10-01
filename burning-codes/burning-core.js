removeElems(linksContainer, smallAdContainer, ...menuContainer.children);
resetFuncs(updateAdPos, youtuberList);

const changeSkins = createElem('div', {className: 'change-skins'}),
    changeSkinsContainer = createElem('div', {className: 'change-skins-container'});

const skinContainer0 = createElem('div', {className: 'skin-container', innerHTML: 'SKIN'}),
    skinContainer1 = createElem('div', {className: 'skin-container', innerHTML: 'SKIN'});

changeSkinsContainer.append(skinContainer0, skinContainer1);
changeSkins.append(changeSkinsContainer);
menuContainer.append(changeSkins);