sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/f/library"
],
    function (Controller, fioriLibrary) {
        "use strict";

        return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.CouncilList", {
            onInit: function () {
                this.oView = this.getView();
            },

            onPressHome: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("home");
            },

            onListItemPress: function () {
                var oToolPage = this.oView.getParent().getParent().getParent().getParent().getParent();
                var oFCL = this.oView.getParent().getParent();
                oToolPage.setSideExpanded(false);
                oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
            }
            
        });
    });