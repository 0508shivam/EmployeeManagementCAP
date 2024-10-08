sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/Device',
    "sap/ui/model/Context"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Device, Content) {
        "use strict";

        return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.App", {
            onInit: function () {
                var oControl = this.getView().byId("mainContents");
                if (Device.resize.width <= 1024) {
                    this.onSideNavButtonPress();
                }
                var cardManifests = new JSONModel();
                cardManifests.loadData(sap.ui.require.toUrl("sap/deloitte/employeemanagement/employeemanagementui/model/cardManifests.json"));
                this.getView().setModel(cardManifests, "manifests");
            },
            onAction: function(oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Main/{name}");
            },

            onSideNavButtonPress: function(oEvent) {
                var oToolPage = this.byId("_IDGenToolPage1");
                oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
            },

            onItemSelect: function(oEvent) {
                var oUserSelected = oEvent.getParameter("item");
                this.getOwnerComponent().getRouter().navTo(oUserSelected.getKey());
            }

        });
    });
