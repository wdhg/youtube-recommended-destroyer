// ==UserScript==
// @name         youtube_recommended_destroyer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  clicks 'Not interested' on all recommended channels on the homepage
// @author       wdhg
// @match        https://www.youtube.com/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==

const selector = '[aria-label="Not interested"]';

(function() {
    'use strict';
    waitForKeyElements(selector, () => {
        for (var x of document.querySelectorAll(selector)) {
            console.log(x);
            x.click()
        }
    });
})();