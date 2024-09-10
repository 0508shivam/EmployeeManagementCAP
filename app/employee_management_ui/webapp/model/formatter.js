sap.ui.define([], function () {
    "use strict";
  
    return {
  
        approvalStage: function(bStatus) {
            if(!bStatus) {
                return "None";
            } else if(bStatus == 'PENDING REMOVAL' || bStatus == "PENDING ROLE CREATION" || bStatus == "PENDING APPROVAL") {
                return "Warning";
            } else if (bStatus == 'APPROVED') {
                return "Success";
            } else if (bStatus == 'REJECTED' || bStatus == 'REMOVED') {
                return "Error";
            } else {
                return "None";
            }
        }   
  
    };
  
  });