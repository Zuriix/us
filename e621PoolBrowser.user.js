// ==UserScript==
// @name         Pool browser
// @version      0.1
// @description  Press ctrl and shift to go backwards and forwards in e621 pools
// @author       Zuri
// @match        https://e621.net/posts/*?pool_id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=e621.net
// ==/UserScript==

(function() {
    'use strict';
    const prev = document.getElementsByClassName("prev")[0].href
    const next = document.getElementsByClassName("next")[0].href

    document.onkeyup = function(e) {
        e.key == "Shift" && next?document.location.href = next:0
        e.key == "Control" && prev?document.location.href = prev:0
    }
})();
