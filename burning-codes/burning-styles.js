(function () {
    const styling = createElem('style', {
        innerHTML: `
        #darkener {
            background: #222222;
        }
        `
    });

    document.head.append(styling);
})();
//pog