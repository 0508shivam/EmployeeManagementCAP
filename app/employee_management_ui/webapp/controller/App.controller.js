sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/Device'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Device) {
        "use strict";

        return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.App", {
            onInit: function () {
                if (Device.resize.width <= 1024) {
                    this.onSideNavButtonPress();
                }
                var cardManifests = new JSONModel();
                cardManifests.loadData(sap.ui.require.toUrl("sap/deloitte/employeemanagement/employeemanagementui/model/cardManifests.json"));
                this.getView().setModel(cardManifests, "manifests");
            },

            onSideNavButtonPress: function() {
                var oToolPage = this.byId("_IDGenToolPage1");
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },

            onItemSelect: function(oEvent) {
                var oUserSelected = oEvent.getParameter("item");
                this.getOwnerComponent().getRouter().navTo(oUserSelected.getKey());
            }

        });
    });
