(() => {
    const styling = createElem('style', {
        innerHTML: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Varela+Round&display=swap');

        :root {
            --transition-default: .3s;
            --transition-fast: .2s;
            --skin-size: 6rem;
            --skins-toshow: 4;
            --border-default: 2px solid #333;
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
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

        .usernameplay-container {
            display: flex;
            flex-direction: row;
            border: var(--border-default);
            border-radius: 10px;
            overflow: hidden;
        }

        .usernameplay-container > * {
            border-right: var(--border-default);
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
            max-width: 130px;
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

        .play-content.no-click {
            opacity: .25;
            pointer-events: none;
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
            border: var(--border-default);
            border-radius: 10px;
            display: grid;
            grid-template-areas:
                "toggle-type-skins toggle-skins"
                "skins-list        toggle-skins";
            grid-template-columns: 1fr auto;
            font-size: 1.5em;
            overflow: hidden;
        }

        .skins-settings-container.hidden {
            grid-template-areas:
                "toggle-type-skins toggle-skins";
        }

        .toggle-type-skins {
            grid-area: toggle-type-skins;
            border-bottom: var(--border-default);
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            max-height: 35px;
            cursor: pointer;
            transition: var(--transition-default);
            overflow-y: auto;
            scroll-behavior: smooth;
        }

        .skins-settings-container.hidden .toggle-type-skins {
            border-bottom: none;
        }

        .toggle-type-skins::-webkit-scrollbar, .skins-list-container::-webkit-scrollbar {
            width: 0;
        }

        .toggle-type-skins:hover {
            background: #161616a0;
        }

        .toggle-skins {
            grid-area: toggle-skins;
            border-left: var(--border-default);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 8px;
            cursor: pointer;
            transition: var(--transition-default);
        }

        .toggle-skins ion-icon {
            transition: var(--transition-default);
        }

        .skins-settings-container.hidden .toggle-skins ion-icon {
            rotate: 180deg;
        }

        .toggle-skins:hover {
            background: #161616a0;
        }

        .skins-list-container {
            grid-area: skins-list;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            scroll-behavior: smooth;
            align-items: flex-end;
            max-height: 10rem;
        }

        .skins-settings-container.hidden .skins-list-container {
            display: none;
        }

        .game-skins-title, .script-skins-title {
            flex-shrink: 0;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: .5rem;
            font-weight: 800;
        }

        .game-skins-title, .game-skins-container {
            border-bottom: var(--border-default);
        }

        .game-skins-container, .script-skins-container {
            flex-shrink: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .game-skins-content, .script-skins-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-grow: 1;
        }

        .show-notif-scroll {
            position: fixed;
            margin: 5px 10px;
        }

        .game-page, .script-page {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 10px 20px;
        }

        .game-skins, .script-skins {
            position: relative;
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            scroll-behavior: smooth;
            transition: var(--transition-default);
        }

        .game-skins::-webkit-scrollbar, .game-skin-page::-webkit-scrollbar, .script-skins::-webkit-scrollbar, .script-skin-page::-webkit-scrollbar {
            height: 0;
        }

        .game-skins-pages, .script-skins-pages {
            padding: 5px 10px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 5px;
        }

        .game-skins-page, .script-skins-page {
            height: 8px;
            width: 8px;
            flex-grow: 1;
            background: #333a;
            border-radius: 4px;
            max-width: 10rem;
            transition: var(--transition-default);
        }

        .game-skins-page.active, .script-skins-page.active {
            background: #888;
        }

        .game-skin-container, .script-skin-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
        }

        .game-skin-container::before, .script-skin-container::before {
            content: '';
            position: absolute;
            width: 80%;
            height: 8px;
            top: 0;
            translate: 0 -50%;
            transition: var(--transition-fast);
            background: white;
            border-radius: 4px;
            scale: 0 1;
        }

        .game-skin-content, .script-skin-content {
            height: var(--skin-size);
            width: var(--skin-size);
            border-radius: 50%;
            overflow: hidden;
            background: #222a;
            background-size: cover;
            cursor: pointer;
            opacity: .5;
            transition: var(--transition-fast);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .game-skin-content:hover:not(.active), .script-skin-content:hover:not(.active) {
            opacity: .85;
        }

        .game-skin-container:has(.game-skin-content:hover:not(.active))::before, .script-skin-container:has(.script-skin-content:hover:not(.active))::before {
            scale: .65 1;
        }

        .game-skin-content.active, .script-skin-content.active {
            opacity: 1;
            pointer-events: none;
        }

        .game-skin-container:has(.game-skin-content.active)::before, .script-skin-container:has(.script-skin-content.active)::before {
            scale: 1;
        }

        .game-skin-page, .script-skin-page {
            position: relative;
            display: flex;
            flex-direction: row;
            border-right: var(--border-default);
            width: 100%;
            overflow-x: auto;
            scroll-behavior: smooth;
            flex-shrink: 0;
            gap: 10px;
        }

        .game-skin-page:last-child, .script-skin-page:last-child {
            border-right: none;
        }

        .main-menu-message {
            position: absolute;
            font-size: 2em;
            font-weight: 700;
            letter-spacing: .15rem;
        }

        .main-menu-message.hidden {
            display: none;
        }

        .main-user-settings:has(.main-menu-message:not(.hidden)) *:not(.main-menu-message) {
            display: none;
        }
        `
    });

    document.head.append(styling);
})();