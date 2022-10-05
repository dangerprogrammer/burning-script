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
            display: flex;
            justify-content: center;
            padding: 15px;
            gap: 15px;
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

        .title-skins-container, .title-special-skins-container {
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid #333;
            text-transform: uppercase;
            letter-spacing: .25em;
            font-weight: 900;
            padding: 5px 15px;
        }

        .change-skins-container, .change-special-skins-container {
            overflow-y: auto;
            scroll-behavior: smooth;
            transition: var(--transition-default);
            max-height: calc(var(--skin-size) + 30px);
        }

        .change-skins.active .change-skins-container, .change-special-skins.active .change-special-skins-container {
            max-height: calc((var(--skin-size) + 15px) * var(--skins-toshow) - var(--skin-size) / 2);
        }

        .change-skins-container::-webkit-scrollbar, .change-special-skins-container::-webkit-scrollbar {
            width: 3px;
        }

        .change-skins-container::-webkit-scrollbar-button, .change-special-skins-container::-webkit-scrollbar-button {
            display: none;
        }

        .change-skins-container::-webkit-scrollbar-thumb, .change-special-skins-container::-webkit-scrollbar-thumb {
            background-color: #888a;
            border-radius: 3px;
        }

        .change-skins-content, .change-special-skins-content {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 15px 0;
        }

        .skin-container, .skin-special-container {
            position: relative;
            flex-shrink: 0;
            padding: 0 15px;
            display: grid;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .skin-container::before, .skin-special-container::before {
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

        .skin-special-container::before {
            right: 0;
            translate: 50%;
        }

        .skin-content, .skin-special-content {
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

        .skin-content:hover:not(.active), .skin-special-content:hover:not(.active) {
            opacity: .85;
        }

        .skin-content.active, .skin-special-content.active {
            pointer-events: none;
            opacity: 1;
        }

        .skin-container:has(.skin-content:hover:not(.active))::before, .skin-special-container:has(.skin-special-content:hover:not(.active))::before {
            scale: 1 .65;
        }

        .skin-container:has(.skin-content.active)::before, .skin-special-container:has(.skin-special-content.active)::before {
            scale: 1;
        }

        .toggle-skins-container, .toggle-special-skins-container {
            cursor: pointer;
            transition: var(--transition-default);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            border-top: 2px solid #333;
        }

        .toggle-skins-container:hover, .toggle-special-skins-container:hover {
            background: #161616a0;
        }

        .toggle-skins-container ion-icon, .toggle-special-skins-container ion-icon {
            position: relative;
            transition: var(--transition-default);
        }

        .change-skins.active .toggle-skins-container ion-icon {
            rotate: -180deg;
        }

        .change-special-skins.active .toggle-special-skins-container ion-icon {
            rotate: 180deg;
        }

        .user-settings-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            min-height: 75%;
        }

        .game-title {
            font-family: Varela Round;
            font-size: 5em;
            letter-spacing: .2em;
        }

        .main-user-settings {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .usernameplay-container {
            display: flex;
            flex-direction: row;
            border: 2px solid #333;
            border-radius: 10px;
            overflow: hidden;
        }

        .usernameplay-container > * {
            border-right: 2px solid #333;
        }

        .usernameplay-container > *:last-child {
            border-right: none;
        }

        .username-container {
            position: relative;
            padding: 10px 25px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25rem;
            overflow: hidden;
        }

        .username-container::before, .guild-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            pointer-events: none;
            z-index: -1;
            border-bottom: 2px solid #eee;
            box-sizing: border-box;
            scale: 0 1;
            transition: var(--transition-fast);
        }

        .username-content {
            background: transparent;
            border: none;
            outline: none;
            color: #eee;
            width: 100%;
            text-align: center;
            font-size: 1.5rem;
        }

        .username-container:has(.username-content:focus)::before, .guild-container:has(.guild-content:focus)::before {
            scale: 1;
        }

        .guild-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .guild-content {
            height: 100%;
            width: 100%;
            text-align: center;
            background: transparent;
            border: none;
            outline: none;
            color: #eee;
            font-size: 1.5rem;
            font-weight: 700;
        }

        .play-content {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 5px 15px;
            text-transform: uppercase;
            letter-spacing: .2rem;
            flex-shrink: 0;
            cursor: pointer;
            transition: var(--transition-default);
            font-weight: 900;
        }

        .play-content:hover {
            background: #161616a0;
        }

        .play-content ion-icon {
            position: relative;
            translate: -5px;
            transition: var(--transition-default);
        }

        .play-content:hover ion-icon {
            translate: 0;
            scale: 1.5;
        }

        .skins-settings-container {
            border: 2px solid #333;
            border-radius: 10px;
            display: grid;
            grid-template-areas:
                "toggle-type-skins toggle-skins"
                "skins-list toggle-skins";
            grid-template-columns: 1fr auto;
            font-size: 1.5em;
            overflow: hidden;
        }

        .toggle-type-skins {
            grid-area: toggle-type-skins;
            border-bottom: 2px solid #333;
            display: flex;
            flex-direction: row;
        }

        .toggle-skins {
            grid-area: toggle-skins;
            border-left: 2px solid #333;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            cursor: pointer;
            transition: var(--transition-default);
        }

        .toggle-skins:hover {
            background: #161616a0;
        }

        .skins-list-container {
            grid-area: skins-list;
        }

        .game-skins, .script-skins {
            flex-shrink: 0;
            height: 100%;
            width: 100%;
        }
        `
    });

    document.head.append(styling);
})();