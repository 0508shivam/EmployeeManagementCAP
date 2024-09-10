sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
],
    function (Controller, JSONModel, formatter) {
        "use strict";

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
            }

        });
    });