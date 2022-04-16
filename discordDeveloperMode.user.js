// ==UserScript==
// @name         Discord Developer Mode
// @version      0.1
// @description  Enables developer mode on discord
// @author       Zuri
// @match        https://discord.com/channels/*
// @match        https://canary.discord.com/channels/*
// @match        https://ptb.discord.com/channels/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// ==/UserScript==

(function () {
    'use strict';
    webpackChunkdiscord_app.push([
        [""], {}, (e) => {
            for (let c in e.c)
                if (e.c[c].exports?.default?.isDeveloper === false) Object.defineProperty(e.c[c].exports.default, "isDeveloper", {
                    get: () => !0
                })
        }
    ]);
})();
