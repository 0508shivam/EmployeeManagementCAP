sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/Device'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Device) {
        "use strict";

        return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.App", {
            onInit: function () {
                if (Device.resize.width <= 1024) {
                    this.onSideNavButtonPress();
                }
            },

            onSideNavButtonPress: function() {
                var oToolPage = this.byId("_IDGenToolPage1");
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },
        });
    });
