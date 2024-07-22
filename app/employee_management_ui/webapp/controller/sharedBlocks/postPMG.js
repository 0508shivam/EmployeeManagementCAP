sap.ui.define(["sap/uxap/BlockBase"], function(BlockBase) {
    "use strict"

    return BlockBase.extend("sap.deloitte.employeemanagement.employeemanagementui.view.sharedBlocks.postPMG",{
        metadata:{},
        onKickOffPress: function(oEvent) {
            var oview =  oEvent.getSource().getId("postPMG");
            oview.setVisible(true);
            // var oInput = this.getView().byId("postPMG");
            // oInput.setProperty("postPMGActivities", "true");
        }
    });
});
