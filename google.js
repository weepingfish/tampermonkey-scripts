// ==UserScript==
// @name         Google Search Centering
// @namespace    http://tampermonkey.net/
// @version 1.3
// @description  Center the Google search results.
// @author       GDUFXRT
// @match        https://www.google.com/search*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('style');
    var cssStyle = '.mw {margin: auto !important;} html, body, p, a {font-family: Calibri !important;}';
    style.innerText = cssStyle;
    document.querySelector('head').appendChild(style);
})();
