define("converse-dependencies", [
    "jquery",
    "moment",
    "locales",
    "bootstrapJS", // XXX: Can be removed, only for https://conversejs.org
    "backbone.browserStorage",
    "backbone.overview",
    "jquery.browser",
    "jquery.easing", // XXX: Can be removed, only for https://conversejs.org
    "typeahead",
    "utils",
    "strophe",
    "strophe.muc",
    "strophe.roster",
    "strophe.vcard",
    "strophe.disco"
], function($, moment) {
    return {
        'jQuery': $,
        'otr': undefined,
        'moment': moment
    };
});
