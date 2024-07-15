sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
], 
function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.PositionValidation", {
        onInit: function () {
            var oModel = new JSONModel({
                employees: [
                    {name: "John Doe", department: "Process Advisor, Global S&D"},
                    {name: "Jane Frome", department: "AP Performance PE Business Manager"},
                    {name: "John Little", department: "Financial Advisor"},
                    {name: "Alice Smith", department: "Process Associate, Global S&D"}
                ]
        });
        this.getView().setModel(oModel);
    },
        // Event for edit button on Position Validation view
        onEditPositionInfo: function () {
            var bEditable = this.getView().byId("positionTitle").getProperty("editable");
            var editableIds = ["positionTitle", "dateInput", "companyCode", "costCenter", "adminSupervisor", "careerCommunity", "jobFamily", "jobRole", "initiator"];
            editableIds.forEach( (sInputId) => {
                var oInput = this.getView().byId(sInputId);
                oInput.setProperty("editable", !bEditable);
            });
        },
        // Event for delegate button on Position Validation view
        onDelegatePress: function () {
            this._oExtendedNeedDialog = new sap.ui.xmlfragment("_searchDialog", 
            "sap.deloitte.employeemanagement.employeemanagementui.fragments.Delegate", this);
            this.getView().addDependent(this._oExtendedNeedDialog);
            var oModel = this.getView().getModel();
            this._oExtendedNeedDialog.open();
        },
        // Close the employee search fragment 
        onCloseDialog: function () {
            if (this._oExtendedNeedDialog) {
                this._oExtendedNeedDialog.close();
                this._oExtendedNeedDialog.destroy();
                this._oExtendedNeedDialog = null;
            }    
        },
        // Event for search box in fragment
        onSearch: function(oEvent) {
            var sQuery = oEvent.getParameter("query");
            var oList = Fragment.byId("_searchDialog", "searchResults");
            var oBinding = oList.getBinding("items");
            if (sQuery) {
                oBinding.filter(new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, sQuery));
            } else {
                oBinding.filter([]);
            }
        },
        onEmployeeSelect: function(oEvent) {
            sap.m.MessageBox.confirm(
                "Are you sure you want to delegate this task? The selected employee will have access to view and edit \n all data related to this Position Appointment.",
                {
                    title: "Confirm Delegation",
                    actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
                    onClose: function (sAction) {
                        if (this._oExtendedNeedDialog) {
                            this._oExtendedNeedDialog.close();
                            this._oExtendedNeedDialog.destroy();
                            this._oExtendedNeedDialog = null;
                        }    
                        if (sAction === sap.m.MessageBox.Action.YES) {
                            // Logic for what happens if the user confirms
                            sap.m.MessageToast.show(" selected!");
                        }
                    }
                }
            );
        }
    });
});