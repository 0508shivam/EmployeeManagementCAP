sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.Need", {
        onInit: function () {
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
                ],
                "Candidates": [
                    {
                        "status": "Created",
                        "name": "Casey D Robertson",
                        "jobTitle": "Processing Monitoring Engineer",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Strategic Talent"
                    },
                    {
                        "status": "Created",
                        "name": "John Smith",
                        "jobTitle": "Senior Project Manager",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Talent Management"
                    },
                    {
                        "status": "Created",
                        "name": "Jane Doe",
                        "jobTitle": "Marketing Director",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Market Research"
                    },
                    {
                        "status": "Created",
                        "name": "Michael Johnson",
                        "jobTitle": "Chief Financial Officer",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Risk Management"
                    },
                    {
                        "status": "Created",
                        "name": "Emily Davis",
                        "jobTitle": "Human Resources Manager",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Strategic Talent"
                    },
                    {
                        "status": "Created",
                        "name": "David Brown",
                        "jobTitle": "Software Engineer",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Digital Transformation"
                    },
                    {
                        "status": "Created",
                        "name": "Sarah Wilson",
                        "jobTitle": "Business Analyst",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Talent Management"
                    },
                    {
                        "status": "Created",
                        "name": "James Miller",
                        "jobTitle": "Sales Director",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Market Research"
                    },
                    {
                        "status": "Created",
                        "name": "Laura Taylor",
                        "jobTitle": "Operations Manager",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Risk Management"
                    },
                    {
                        "status": "Created",
                        "name": "Robert Anderson",
                        "jobTitle": "IT Support Specialist",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Strategic Talent"
                    },
                    {
                        "status": "Created",
                        "name": "Jessica Martinez",
                        "jobTitle": "Product Manager",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Digital Transformation"
                    },
                    {
                        "status": "Created",
                        "name": "Olivia Thompson",
                        "jobTitle": "UX/UI Designer",
                        "availableDate": "June 14, 2024",
                        "mobile": "+01 9876543210",
                        "address": "Malaysia",
                        "location": "4th Floor Tower C Building",
                        "function": "Research & Engineering",
                        "career": "",
                        "primaryCouncil":"Not Assigned",
                        "comments": "",
                        "talentPool": "Strategic Talent"
                    }
                    
                ]
            };
            var oModel = new JSONModel(mData);
            this.getView().setModel(oModel);
        },

        onPress: function() {
            this._oAddCandidateDialog = new sap.ui.xmlfragment("_IDAddCandidate", 
            "sap.deloitte.employeemanagement.employeemanagementui.fragments.AddCandidate", this);
            this.getView().addDependent(this._oAddCandidateDialog);
            var oModel = this.getView().getModel();
            this._oAddCandidateDialog.open();
        },

        closeAddCandidate: function(oEvent) {
            if (this._oAddCandidateDialog) {
                this._oAddCandidateDialog.close();
                this._oAddCandidateDialog.destroy();
                this._oAddCandidateDialog = null;
            }
        },

    });
});
