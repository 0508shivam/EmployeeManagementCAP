sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.CouncilDetail", {
            onInit: function () {
                this.oView = this.getView();
                var mData = {
                    "Employees": [
                        {
                            "Name": "Laurent Dubois",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Final Reviewed: Need status change to \"Final Reviewed\"",
                            "HireDate": "Date(1371020400000)"
                        },
                        {
                            "Name": "Sabine Mayer",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Updated Need: Need status change from \"Endorsed\" to \"Pending Final Review\"",
                            "HireDate": "Date(1376290800000)"
                        },
                        {
                            "Name": "Alain Chevalier",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Endorsed: Need status change to \"Endorsed\"",
                            "HireDate": "Date(1332403200000)"
                        },
                        {
                            "Name": "Monique Legrand",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Final Reviewed: Need status change to \"Final Reviewed\"",
                            "HireDate": "Date(1422777600000)"
                        },
                        {
                            "Name": "John Miller",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Endorsed: Need status change to \"Endorsed\"",
                            "HireDate": "Date(1473404400000)"
                        },
                        {
                            "Name": "Richard Wilson",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Final Reviewed: Need status change to \"Final Reviewed\"",
                            "HireDate": "Date(1167638400000)"
                        },
                        {
                            "Name": "Julie Armstrong",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Updated Need: Need status change from \"Endorsed\" to \"Pending Final Review\"",
                            "HireDate": "Date(1272697200000)"
                        }
                    ]
                };
                var oModel = new JSONModel(mData);
                this.getView().setModel(oModel);
            }
            
        });
    });