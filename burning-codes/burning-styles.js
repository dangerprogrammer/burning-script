(function () {
    const styling = createElem('style', {
        innerHTML: `
        #darkener {
            background: #111;
        }

        #menuContainer {
            top: 0;
            flex-direction: row;
            justify-content: space-between;
        }

        .change-skins {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 15px;
            height: 100%;
            border-right: 2px solid #333;
        }
        `
    });

    document.head.append(styling);
})();