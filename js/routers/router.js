var app = app || {};

(function () {
    'use strict';

    // HUD Router
    // ----------

    var Workspace = Backbone.Router.extend({
        routes:{
            '*filter':'setFilter'
        },

        setFilter:function (param) {
            // Set the current filter to be used
            window.app.HUDFilter = param.trim() || '';

            // Trigger a collection filter event, causing hiding/unhiding
            // of Todo view items
            window.app.HUDS.trigger('filter');
        }
    });

    app.HUDRouter = new Workspace();
    Backbone.history.start();

}());
