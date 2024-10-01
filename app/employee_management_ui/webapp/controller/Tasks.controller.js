sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function(Controller, JSONModel){
    "use strict";

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.Tasks", {
        onInit: function() {
            var mData = {
                "Tasks": [
                    {
                        "title" : "Position Validation",
                        "name": "Krik C Nadler",
                        "type": "Active",
                        "date": "5/11/19",
                        "message": "Due 5 days ago",
                        "status": "Past Due",
                        "state": "Error"
                    },
                    {
                        "title" : "Export Controls Review",
                        "name": "Stephine R Burdine",
                        "type": "Active",
                        "date": "3/10/19",
                        "message": "Due March 10, 2019",
                        "status": "Past Due",
                        "state": "Success"
                    },
                    {
                        "title" : "Position Appointment : Senior Principal",
                        "name" : "Muhammad Solihin",
                        "type" : "Active",
                        "date" : "09/28/25",
                        "message" : "Technology and Engineering - Geoscience",
                        "status" : "Pending Review",
                        "state" : "Error"
                    },
                    {
                        "title" : "Notify Employee & Confirm",
                        "name": "Stephine R Burdine",
                        "type": "Active",
                        "date": "5/19/19",
                        "message": "Due in 3 days",
                        "status": "",
                        "state": "None"
                    },
                    {
                        "title" : "Export Controls Review",
                        "name": "Jessica Pearson",
                        "type": "Active",
                        "date": "5/19/19",
                        "message": "Due in 3 days",
                        "status": "Past Due",
                        "state": "Error"
                    },
                    {
                        "title" : "Notify Employee & Confirm",
                        "name": "Michael Cross",
                        "type": "Active",
                        "date": "5/19/19",
                        "message": "Due in 3 days",
                        "status": "",
                        "state": "None"
                    },
                    {
                        "title" : "Export Controls Review",
                        "name": "Harvey Sepctre",
                        "type": "Active",
                        "date": "5/19/19",
                        "message": "Due in 3 days",
                        "status": "Due",
                        "state": "Success"
                    },
                    {
                        "title" : "Position Validation",
                        "name": "Stephine R Burdine",
                        "type": "Active",
                        "date": "5/19/19",
                        "message": "Due in 3 days",
                        "status": "Past Due",
                        "state": "Error"
                    },
                    {
                        "title" : "Position Appointment : AI Engineer",
                        "name" : "Heath Leadger",
                        "type" : "Active",
                        "date" : "09/03/25",
                        "message" : "Technology and Engineering - AI",
                        "status" : "Pending Review",
                        "state" : "Error"
                    }
                ]
            };
            var oModel = new JSONModel(mData);
            this.getView().setModel(oModel);
        },

        onItemPress: function (oEvent) {

            var oItem = oEvent.getSource();
            var oBindingContext = oItem.getBindingContext();
            var sTaskId = oBindingContext.getProperty("title");

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo(sTaskId,{
                title: sTaskId
            });
            
        },

        onPressHome: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home");
        }

    });
});