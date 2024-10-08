sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox){
    "use strict";

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.ExportControl", {

        onInit: function () {
            
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
        }

    });

});