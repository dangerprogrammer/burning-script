(function (global) {
    const funcs = {
        query: (elem, all = false) => {
            return document[`querySelector${all ? 'All' : ''}`](elem);
        }
    };

    for (const func in funcs) global[func] = funcs[func];
})(window || this);