var app = app || {};
window.alert($("#taskactions").html())
$(function ($) {
    'use strict';

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
    app.AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el:'#hud',

        taskactions:_.template(
            $("#taskactions").html()),

        events:{
            'click #actions':'showActionPanel'
        },

        showActionPanel:function () {
            $('#actionspanel').toggle(400);
            $('#actionspanel').html(this.taskactions)
            return false;
        }
    });
});


