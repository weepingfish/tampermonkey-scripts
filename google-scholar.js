// ==UserScript==
// @name         Google Scholar Centering
// @namespace    http://tampermonkey.net/
// @version 1.3
// @description  Center the Google Scholar search results.
// @author       GDUFXRT
// @match        https://scholar.google.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('style');
    var cssStyle = '#gs_res_ccl {margin: auto !important;} html, body, p, a {font-family: Calibri !important;}';

    style.innerText = cssStyle;
    document.querySelector('head').appendChild(style);
})();
