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
            color: white;
        }

        .change-skins {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 15px;
            height: 100%;
            border-right: 2px solid #333;
        }

        .skin-container {
            flex-shrink: 0;
            height: 5rem;
            width: 5rem;
            background: #252525;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        `
    });

    document.head.append(styling);
})();