sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.Candidates", {
		onInit: function() {

		},
		onAdd: function (oEvent) {
			this.oParentBlock.fireAdd(oEvent.getParameters());
		}
	});
});
