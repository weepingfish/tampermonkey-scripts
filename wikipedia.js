// ==UserScript==
// @name         Wikipedia
// @namespace    http://tampermonkey.net/
// @version 1.3
// @description  Wikipedia
// @author       GDUFXRT
// @match        https://en.wikipedia.org/wiki/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('style');
    var cssStyle = '#firstHeading, div#bodyContent {max-width: 1000px; margin: auto !important;}';
    style.innerText = cssStyle;
    document.querySelector('head').appendChild(style);
})();
