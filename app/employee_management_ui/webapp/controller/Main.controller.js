sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.Main", {
        onInit: function () {
            var mData = {
                "items": [
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    }
                ]
            };
            var oModel = new JSONModel(mData);
            this.getView().setModel(oModel);

        },

        _handleItemPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Need");
        }
    });
});
