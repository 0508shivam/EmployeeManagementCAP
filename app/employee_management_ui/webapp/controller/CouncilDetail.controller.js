sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/m/Dialog",
    "sap/ui/layout/form/SimpleForm",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/MessageBox"
],
    function (Controller, JSONModel, formatter, Dialog, SimpleForm, Label, Input, Button, mobileLibrary, MessageBox) {
        "use strict";

        var ButtonType = mobileLibrary.ButtonType;

        return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.CouncilDetail", {

            formatter: formatter,

            onInit: function () {
                this.oView = this.getView();
                var mData = {
                    "Employees": [
                        {
                            "Name": "Laurent Dubois",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Final Reviewed: Need status change to \"Final Reviewed\"",
                            "HireDate": "Date(1371020400000)",
                            "role": "Council Member",
                            "status": "PENDING ROLE CREATION",
                            "changedOn": "Jul 23, 2024",
                            "changedBy": "Sabrina Carpenter"
                        },
                        {
                            "Name": "Sabine Mayer",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Updated Need: Need status change from \"Endorsed\" to \"Pending Final Review\"",
                            "HireDate": "Date(1376290800000)",
                            "role": "Council Facilitator",
                            "status": "PENDING REMOVAL",
                            "changedOn": "Jul 23, 2024",
                            "changedBy": "Sabrina Carpenter"
                        },
                        {
                            "Name": "Alain Chevalier",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Endorsed: Need status change to \"Endorsed\"",
                            "HireDate": "Date(1332403200000)",
                            "role": "Lead Council Facilitator",
                            "status": "APPROVED",
                            "changedOn": "Jul 23, 2024",
                            "changedBy": "Sabrina Carpenter"
                        },
                        {
                            "Name": "Monique Legrand",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Final Reviewed: Need status change to \"Final Reviewed\"",
                            "HireDate": "Date(1422777600000)",
                            "role": "Council Owner",
                            "status": "PENDING REMOVAL",
                            "changedOn": "Jul 23, 2024",
                            "changedBy": "Sabrina Carpenter"
                        },
                        {
                            "Name": "John Miller",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Endorsed: Need status change to \"Endorsed\"",
                            "HireDate": "Date(1473404400000)",
                            "role": "Council Admin",
                            "status": "PENDING APPROVAL",
                            "changedOn": "Jul 23, 2024",
                            "changedBy": "Sabrina Carpenter"
                        },
                        {
                            "Name": "Richard Wilson",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Final Reviewed: Need status change to \"Final Reviewed\"",
                            "HireDate": "Date(1167638400000)",
                            "role": "Council Member",
                            "status": "REMOVED",
                            "changedOn": "Jul 23, 2024",
                            "changedBy": "Sabrina Carpenter"
                        },
                        {
                            "Name": "Julie Armstrong",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Updated Need: Need status change from \"Endorsed\" to \"Pending Final Review\"",
                            "HireDate": "Date(1272697200000)",
                            "role": "Council Chair",
                            "status": "PENDING ROLE CREATION",
                            "changedOn": "Jul 23, 2024",
                            "changedBy": "Sabrina Carpenter"
                        }
                    ]
                };
                var oModel = new JSONModel(mData);
                this.getView().setModel(oModel);
            },

            handleDeleteMembers: function () {
                var oMemberList = this.getView().byId("CouncilMembersList");
                var oMode = oMemberList.getProperty("mode") == "Delete" ? "None" : "Delete";
                oMemberList.setProperty("mode", oMode);
            },

            handleDeleteRequests: function () {
                var oPendingList = this.getView().byId("CouncilPendingList");
                var oMode = oPendingList.getProperty("mode") == "Delete" ? "None" : "Delete";
                oPendingList.setProperty("mode", oMode);
            },
            
            formatCouncilMemberIcon: function(bRole) {
                if(bRole == "Lead Council Facilitator") {
                    return 'sap-icon://leads';
                } else if(bRole == "Council Chair") {
                    return 'sap-icon://competitor';
                } else if(bRole == "Council Owner") {
                    return 'sap-icon://private';
                } else {
                    return "";
                }
            },

            handleUpdateCouncil: function() {
                if(!this.oUpdateCouncilDialog) {
                    this.oUpdateCouncilDialog = new Dialog({
                        title: "Update Council",
                        content: new SimpleForm({
                            editable: true,
                            content: [ 
                                new Label({
                                    text: "Council Name"
                                }),
                                new Input({
                                    placeholder: "Enter Council Name"
                                })
                            ]
                        }),
                        beginButton: new Button({
                            type: ButtonType.Accept,
                            text: "Submit",
                            press: function() {
                                this.oUpdateCouncilDialog.close();
                            }.bind(this)
                        }),
                        endButton: new Button({
                            type: ButtonType.Reject,
                            text: "Close",
                            press: function() {
                                this.oUpdateCouncilDialog.close();
                            }.bind(this)
                        })
                    });
                    this.getView().addDependent(this.oUpdateCouncilDialog);
                }
                this.oUpdateCouncilDialog.open();
            },

            handleDisplayHint: function() {
                
            },

            handleAddMember: function() {
                this.oAddCouncilMemberDialog = new sap.ui.xmlfragment("_IDAddCouncilMember", 
                    "sap.deloitte.employeemanagement.employeemanagementui.fragments.AddCouncilMember", this);
                this.getView().addDependent(this.oAddCouncilMemberDialog);
                this.oAddCouncilMemberDialog.open();
            },

            handleCloseAddCouncilMemberDialog: function() {
                if (this.oAddCouncilMemberDialog) {
                    this.oAddCouncilMemberDialog.close();
                    this.oAddCouncilMemberDialog.destroy();
                    this.oAddCouncilMemberDialog = null;
                }
            },

            onAddCouncilMember: function() {
                if (this.oAddCouncilMemberDialog) {
                    this.oAddCouncilMemberDialog.close();
                    MessageBox.show("Has the requested concil person has been trained using goto/councildboverview? Aditional material can also be foun at goto/counciltraining.", {
                        icon: MessageBox.Icon.WARNING,
                        title: "Training Confirmation",
                        actions: [MessageBox.Action.YES, MessageBox.Action.CANCEL],
                        emphasizedAction: MessageBox.Action.YES,
                        onClose: function (sAction) {
                            MessageBox.Action.CANCEL
                        },
                        dependentOn: this.getView()
                    });
                }
            }

        });
    });