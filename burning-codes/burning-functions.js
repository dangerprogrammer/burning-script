(function (global) {
    const funcs = {
        query: (elem, all = false) => {
            return document[`querySelector${all ? 'All' : ''}`](elem);
        },
        createElem: (elem, atts) => {
            const creation = document.createElement(elem);
            if (atts) for (const att in atts) creation[att] = atts[att];
            return creation;
        }
    };

    for (const func in funcs) global[func] = funcs[func];
})(window || this);