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
        removeElems(...elems) {
            elems.forEach(elem => elem && elem.remove());
        },
        resetFuncs(...funcs) {
            funcs.forEach((func, ind) => func && (funcs[ind] = null));
        },
        appendsTo(reffers, ...elems) {
            reffers.forEach(reffer => reffer && reffer.append(...elems));
        }
    };

    for (const func in funcs) global[func] = funcs[func];
})(window || this);