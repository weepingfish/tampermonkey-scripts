// ==UserScript==
// @name         QQ Zone Format
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @match        https://user.qzone.qq.com/*
// ==/UserScript==

(function() {
    'use strict';
    $(".mod-side-nav-message").hide();
    $(".mod-side-nav-recently-used").hide();
    $(".col-main-sidebar").hide();
    // Your code here...
})();
