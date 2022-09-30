(function () {
    const styling = createElem('style', {
        innerHTML: `
        #darkener {
            background: #000;
        }
        `
    });

    document.head.append(styling);
})();
//pog