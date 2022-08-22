require('./bootstrap');

$(function () {
    $.getScript("https://kit.fontawesome.com/132ff047cd.js");

    window.PREFIX = '/api/';
    window.CORS = "https://api.allorigins.win/get?url=";

    window.APP_PRIMARY_COLOR = 'blue';
    window.APP_SECONDARY_COLOR = 'blue';
    window.COLORS = [window.APP_PRIMARY_COLOR, window.APP_SECONDARY_COLOR, 'green', 'greenblue', 'yellow', 'gold', 'red', 'orange', 'brown', 'scarlet', 'pink'];

    document.body.className = `scrollbar-${window.APP_PRIMARY_COLOR}`;

    if (localStorage.getItem('frontend_lang') == "undefined" || !localStorage.getItem('frontend_lang')) localStorage.setItem('frontend_lang', process.env.MIX_DEFAULT_LANG || 'en');
    if (localStorage.getItem('backend_lang') == "undefined" || !localStorage.getItem('backend_lang')) localStorage.setItem('backend_lang', process.env.MIX_DEFAULT_LANG || 'en');

    require('./src');
});