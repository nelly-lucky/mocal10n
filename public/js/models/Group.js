
define(function (require) {
    "use strict";

    /** @type {Backbone} */
    var Backbone = require('backbone');
    /**
     * Group model (same as Namespace) e.g. 'errors.*' or 'game.*'
     *
     * @class GroupModel
     * @extends {Backbone.Model}
     */
    return Backbone.Model.extend({
        defaults: {
            name:'',
            is_common: false
        }
    });
});
