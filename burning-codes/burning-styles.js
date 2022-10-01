(() => {
    const styling = createElem('style', {
        innerHTML: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Varela+Round&display=swap');

        #darkener {
            background: #111;
        }

        #menuContainer {
            top: 0;
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: normal;
            color: white;
            padding: 15px;
            font-family: 'Poppins', sans-serif;
        }

        .change-skins {
            position: relative;
            top: 50%;
            translate: 0 -50%;
            height: calc(100% - 60px);
            max-height: 600px;
            border: 2px solid #333;
            border-radius: 15px;
            overflow: hidden;
            display: grid;
            grid-template-rows: 1fr auto;
        }

        .change-skins-container {
            overflow-y: auto;
        }

        .change-skins-container::-webkit-scrollbar {
            width: 3px;
        }

        .change-skins-container::-webkit-scrollbar-button {
            display: none;
        }

        .change-skins-container::-webkit-scrollbar-thumb {
            background-color: #888a;
            border-radius: 3px;
        }

        .change-skins-content {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 15px 0;
        }

        .skin-container {
            flex-shrink: 0;
            padding: 0 15px;
        }

        .skin-content {
            height: 5rem;
            width: 5rem;
            background: #252525;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
        }

        .toggle-skins-container {
            background: #222a;
        }
        `
    });

    document.head.append(styling);
})();