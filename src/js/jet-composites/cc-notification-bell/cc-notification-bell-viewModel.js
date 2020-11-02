/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['knockout', 'jquery', 'ojL10n!./resources/nls/cc-notification-bell-strings', 'ojs/ojcontext', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojpopup', 'ojs/ojlistview', 'ojs/ojavatar', 'ojs/ojtoolbar'],
    function(ko, $, componentStrings, Context, ArrayDataProvider) {
        var self;

        function NotificationComponentModel(context) {

            self = this;

            self.notifications = ko.observableArray([]);
            self.notificationsDP = ko.observable();
            self.showNotifications = function() {
                var popup = document.getElementById('notfctnsPopup');
                if (popup.isOpen()) {
                    popup.close();
                } else {
                    popup.open('#notfctnBell');
                }
            };

            //At the start of your viewModel constructor
            var busyContext = Context.getContext(context.element).getBusyContext();
            var options = { "description": "Web Component Startup - Waiting for data" };
            self.busyResolve = busyContext.addBusyState(options);

            self.composite = context.element;

            //Example observable
            self.messageText = ko.observable('Hello from cc-notification-bell');
            self.properties = context.properties;
            self.res = componentStrings['cc-notification-bell'];
            // Example for parsing context properties
            // if (context.properties.name) {
            //     parse the context properties here
            // }

            // Below we add a listener to the signal
            // The signal is dispatched from the parent page
            // This will help in setting the initial notification count sent by the parent page
            // Going ahead, whenever a new notification is added from the parent page, the below signal reciever 
            // responds to the triggered signal

            let signal = context.properties.notfctnObj.notfctnSignal

            signal.add((notifications) => {
                var el = $('.notification')[0];
                self.notifications(notifications)
                var count = Number(el.getAttribute('data-count')) || 0;
                el.setAttribute('data-count', self.notifications().length);
                el.classList.remove('notify');
                $('.notification').outerWidth($('.notification').outerWidth());
                el.classList.add('notify');
                if (count === 0) {
                    el.classList.add('show-count');
                }
            });

            //Once all startup and async activities have finished, relocate if there are any async activities
            self.busyResolve();

            busyContext.whenReady().then(() => {
                //This method gets executed when the whole HTML of this custom component, has finished rendering
                //Below we get the bell and notification balloon UI ready, and also setting its data
                var el = $('.notification')[0];
                el.setAttribute('data-count', self.notifications().length);
                el.classList.add('notify');
                el.classList.add('show-count');

                $("#notfctnBell").click(() => {
                    self.showNotifications()
                })

                ko.computed(() => {
                    let notfctnsList = self.notifications();
                    self.notificationsDP(new ArrayDataProvider(notfctnsList, { keyAttributes: 'date' }))
                })
            })
        };

        NotificationComponentModel.prototype.clearAllNotfctns = function() {
            self.composite.dispatchEvent(new CustomEvent('clearNotifications', {}));
        }

        NotificationComponentModel.prototype.clearNotification = function(notfctn) {
            self.composite.dispatchEvent(new CustomEvent('clearSingleNotification', { "detail": { "index": notfctn } }));
        }

        //Lifecycle methods - uncomment and implement if necessary 
        //NotificationComponentModel.prototype.activated = function(context) {};

        // NotificationComponentModel.prototype.connected = function(context) {
        // };

        //NotificationComponentModel.prototype.bindingsApplied = function(context) {};

        //NotificationComponentModel.prototype.disconnect = function(context){
        //};

        //NotificationComponentModel.prototype.propertyChanged = function(context){
        //};



        return NotificationComponentModel;
    });