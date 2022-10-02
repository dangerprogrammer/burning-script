(() => {
    const styling = createElem('style', {
        innerHTML: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Varela+Round&display=swap');

        :root {
            --transition-default: .3s;
            --transition-fast: .2s;
            --skin-size: 6rem;
            --skins-toshow: 4;
        }

        ion-icon {
            pointer-events: none;
        }

        #darkener {
            background: #111;
        }

        #menuContainer {
            top: 0;
            bottom: 0;
            height: auto;
            left: 0;
            right: 0;
            width: auto;
            display: grid;
            padding: 15px;
            grid-template-columns: auto 1fr auto;
            color: white;
            font-family: 'Poppins', sans-serif;
        }

        .change-skins, .change-special-skins {
            position: relative;
            max-height: 100%;
            border: 2px solid #333;
            border-radius: 15px;
            overflow: hidden;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }

        .title-skins-container {
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid #333;
            text-transform: uppercase;
            letter-spacing: .25em;
            font-weight: 900;
            padding: 5px 15px;
        }

        .change-skins-container {
            overflow-y: auto;
            scroll-behavior: smooth;
            transition: var(--transition-default);
            max-height: calc(var(--skin-size) + 30px);
        }

        .change-skins.active .change-skins-container {
            max-height: calc((var(--skin-size) + 15px) * var(--skins-toshow) + 15px);
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
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 15px 0;
        }

        .skin-container {
            position: relative;
            flex-shrink: 0;
            padding: 0 15px;
            display: grid;
            align-items: center;
            justify-content: center;
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
            height: var(--skin-size);
            width: var(--skin-size);
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
            opacity: .85;
        }

        .skin-content.active {
            pointer-events: none;
            opacity: 1;
        }

        .skin-container:has(.skin-content:hover:not(.active))::before {
            scale: 1 .65;
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
            rotate: -180deg;
        }

        .user-settings-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 80%;
        }

        .game-title {
            font-family: Varela Round;
            font-size: 5em;
            letter-spacing: .2em;
        }

        .username-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .username-content {
            background: transparent;
            border: none;
            outline: none;
            border: 2px solid #333;
            border-radius: 10px 0 0 10px;
            color: #eee;
            padding: 10px 25px;
            width: 100%;
            flex-shrink: 0;
            text-align: center;
        }

        .play-content {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #333;
            border-left: none;
            padding: 5px 15px;
            border-radius: 0 10px 10px 0;
            text-transform: uppercase;
            letter-spacing: 2px;
            flex-shrink: 0;
            cursor: pointer;
            transition: var(--transition-default);
        }

        .play-content:hover {
            background: #161616a0;
        }
        `
    });

    document.head.append(styling);
})();