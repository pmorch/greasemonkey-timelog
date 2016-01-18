// ==UserScript==
// @name        Timelog: Weekly scroll to bottom
// @namespace   pmorch
// @version     1
// @grant       none
// @include     https://app4.timelog.com/Capmon/Registration/Timesheet/Weekly*
// @require     http://code.jquery.com/jquery-1.10.1.min.js
// ==/UserScript==

jQuery('iframe').load(function () {
    window.scrollTo(0,document.body.scrollHeight);
});

