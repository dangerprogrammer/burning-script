(function () {
    const styling = createElem('style', {
        innerHTML: `
        #darkener {
            background: #222;
        }
        `
    });

    document.head.append(styling);
})();