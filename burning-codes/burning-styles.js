(() => {
    const styling = createElem('style', {
        innerHTML: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Varela+Round&display=swap');

        :root {
            --transition-default: .3s;
            --transition-fast: .2s;
        }

        ion-icon {
            pointer-events: none;
        }

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
            max-height: 135px;
            border: 2px solid #333;
            border-radius: 15px;
            overflow: hidden;
            display: grid;
            transition: var(--transition-default);
            grid-template-rows: 1fr auto;
        }

        .change-skins.active {
            max-height: 600px;
        }

        .change-skins-container {
            overflow-y: auto;
            scroll-snap-type: y mandatory;
            scroll-padding: 15px;
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
            position: relative;
            flex-shrink: 0;
            padding: 0 15px;
            scroll-snap-align: start;
            display: grid;
            align-items: center;
        }

        .skin-container::before {
            content: '';
            position: absolute;
            transition: var(--transition-fast);
            height: 80%;
            width: 8px;
            background: white;
            translate: -50%;
            border-radius: 4px;
            scale: 1 0;
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
            cursor: pointer;
            opacity: .5;
            transition: var(--transition-fast);
        }

        .skin-content:hover:not(.active) {
            opacity: 1;
        }

        .skin-content.active {
            pointer-events: none;
            opacity: 1;
        }

        .skin-container:has(.skin-content:hover:not(.active))::before {
            scale: 1 .5;
        }

        .skin-container:has(.skin-content.active)::before {
            scale: 1;
        }

        .toggle-skins-container {
            cursor: pointer;
            transition: var(--transition-default);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            border-top: 2px solid #333;
        }

        .toggle-skins-container:hover {
            background: #161616a0;
        }

        .toggle-skins-container ion-icon {
            position: relative;
            transition: var(--transition-default);
        }

        .change-skins.active .toggle-skins-container ion-icon {
            rotate: 180deg;
        }
        `
    });

    document.head.append(styling);
})();