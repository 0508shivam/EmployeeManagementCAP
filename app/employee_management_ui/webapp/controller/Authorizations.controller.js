sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/m/GroupHeaderListItem"
],     
    function (Controller, GroupHeaderListItem) {
	"use strict";

	return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.Authorizations", {
		onInit: function() {

		},
		
        onAddAuth: function (oEvent) {
			this.oParentBlock.fireAddAuth(oEvent.getParameters());
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
