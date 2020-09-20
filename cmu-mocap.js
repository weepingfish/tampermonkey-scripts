// ==UserScript==
// @name         CMU Mocap Background
// @namespace    http://tampermonkey.net/
// @version 1.3
// @description  CMU mocap background
// @author       GDUFXRT
// @match        http://mocap.cs.cmu.edu/search.php*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('style');
    var cssStyle = 'td {background-color: #FFF !important;} body {max-width: 80%; margin: auto !important; margin-top: 50px !important;}';
    style.innerText = cssStyle;
    document.querySelector('head').appendChild(style);
})();
