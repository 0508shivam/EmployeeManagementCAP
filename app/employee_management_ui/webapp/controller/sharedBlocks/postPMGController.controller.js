sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict"

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.sharedBlocks.postPMGController",{
        onKickOffPress: function(oEvent) {

            let isKickOffPmg = this.getView().getModel('viewModel').getProperty('/isKickOffPmg');
            this.getView().getModel('viewModel').setProperty('/isKickOffPmg', !isKickOffPmg);

            console.log("view model post PMG", isKickOffPmg);

        }
    });
});
