sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/f/library",
    "sap/m/Dialog",
    "sap/ui/layout/form/SimpleForm",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/Button",
    "sap/m/library"
],
    function (Controller, fioriLibrary, Dialog, SimpleForm, Label, Input, Button, mobileLibrary) {
        "use strict";

        var ButtonType = mobileLibrary.ButtonType;

        return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.CouncilList", {
            onInit: function () {
                this.oView = this.getView();
            },

            onPressHome: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("home");
            },

            onListItemPress: function() {
                var oToolPage = this.oView.getParent().getParent().getParent().getParent().getParent();
                var oFCL = this.oView.getParent().getParent();
                oToolPage.setSideExpanded(false);
                oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
            },

            addCouncil: function() {
                if(!this.oAddCouncilDialog) {
                    this.oAddCouncilDialog = new Dialog({
                        title: "Council Creation",
                        content: new SimpleForm({
                            editable: true,
                            content: [ 
                                new Label({
                                    text: "Council Name"
                                }),
                                new Input({
                                    placeholder: "Enter Council Name"
                                }),
                                new Label({
                                    text: "Lead Council Facilitator"
                                }),
                                new Input({
                                    placeholder: "Choose Lead Council Facilitator"
                                })
                            ]
                        }),
                        beginButton: new Button({
                            type: ButtonType.Accept,
                            text: "Request",
                            press: function() {
                                this.oAddCouncilDialog.close();
                            }.bind(this)
                        }),
                        endButton: new Button({
                            type: ButtonType.Reject,
                            text: "Close",
                            press: function() {
                                this.oAddCouncilDialog.close();
                            }.bind(this)
                        })
                    });
                    this.getView().addDependent(this.oAddCouncilDialog);
                }
                this.oAddCouncilDialog.open();
            }
            
        });
    });