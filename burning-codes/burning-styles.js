(() => {
    const styling = createElem('style', {
        innerHTML: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Varela+Round&display=swap');

        #darkener {
            background: #111;
        }

        #menuContainer {
            top: 0;
            flex-direction: row;
            justify-content: space-between;
            color: white;
            font-family: 'Poppins', sans-serif;
        }

        .change-skins {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 15px;
            height: calc(100% - 30px);
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