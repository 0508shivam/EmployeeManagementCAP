sap.ui.define([ "sap/m/ResponsivePopover" ], function(Control) {
    "use strict";

    return Control.extend("sap.deloitte.employeemanagement.employeemanagementui.control.MM_ResponsivePopover", {
        init : function() {
            Control.prototype.init.apply(this, arguments);
            this._oControl.getParent()._getPopup().setAutoClose(false);
        },
        renderer : "sap.m.PopoverRenderer"
    });
});