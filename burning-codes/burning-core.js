removeElems(linksContainer, smallAdContainer, ...menuContainer.children);
resetFuncs(updateAdPos, youtuberList);

const changeSkins = createElem('div', {className: 'change-skins'});

const skinContainer0 = createElem('div', {className: 'skin-container', innerHTML: 'SKIN'}),
    skinContainer1 = createElem('div', {className: 'skin-container', innerHTML: 'SKIN'});

changeSkins.append(skinContainer0, skinContainer1);
menuContainer.append(changeSkins);