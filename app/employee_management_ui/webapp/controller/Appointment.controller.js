sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/GroupHeaderListItem"
], function (Controller, JSONModel, MessageBox, GroupHeaderListItem){
    "use strict";

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.Appointment", {

        onInit: function () {
            var mData = {
                "Authorites": [
                    {
                        "name": "Olivia Thompson",
                        "role": "Endorser",
                        "reviewStatus": "Reviewed",
                        "infoState": "Success"
                    }
                ]
            }
            var oModel = new JSONModel(mData);
            this.getView().setModel(oModel);
        },

        handleExportControl: function() {
            MessageBox.warning("Information herein will be used to update the Employee's HR Record. If submitted an announcement will be created. \n No modifications will be possible after clicking OK!", {
				actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
				emphasizedAction: MessageBox.Action.OK,
				onClose: function (sAction) {
					console.log("closed");
				},
				dependentOn: this.getView()
			});
        },

        getRole: function (oContext) {
            return oContext.getProperty('role');
        },

        getGroupHeader: function(oGroup) {
			return new GroupHeaderListItem({
				title : oGroup.key
			}
		    );
        }

    });

});