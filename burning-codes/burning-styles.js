(function (global) {
    const styling = createElem('style', {
        innerHTML: `
        #darkener {
            background: #222;
        }
        `
    });
    
    global.append(styling);
})(window || this);