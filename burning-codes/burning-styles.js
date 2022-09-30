(function (global) {
    const styling = createElem('style', {
        innerHTML: `
        #darkener {
            background: #222;
        }
        `
    });

    global.head.append(styling);
})(window || this);