sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.CouncilManagement", {
            onInit: function () {

                var mData = {
                    "Councils": [
                        {
                            "name": "ABC",
                            "viewer": "Council Facilitator",
                            "members": [
                                {
                                    "name": "Abu Abul Akbar",
                                    "role": "COUNCIL FACILITATOR",
                                    "status": "PENDING"
                                },
                                {
                                    "name": "Jane Doe",
                                    "role": "COUNCIL MEMBER",
                                    "status": "ACTIVE"
                                },
                                {
                                    "name": "John Smith",
                                    "role": "COUNCIL MEMBER",
                                    "status": "INACTIVE"
                                }
                            ]
                        },
                        {
                            "name": "DEF",
                            "viewer": "Council Chair",
                            "members": [
                                {
                                    "name": "Alice Johnson",
                                    "role": "COUNCIL FACILITATOR",
                                    "status": "ACTIVE"
                                },
                                {
                                    "name": "Bob Brown",
                                    "role": "COUNCIL MEMBER",
                                    "status": "PENDING"
                                }
                            ]
                        },
                        {
                            "name": "GHI",
                            "viewer": "Council Member",
                            "members": [
                                {
                                    "name": "Charlie Davis",
                                    "role": "COUNCIL FACILITATOR",
                                    "status": "INACTIVE"
                                },
                                {
                                    "name": "Diana Evans",
                                    "role": "COUNCIL MEMBER",
                                    "status": "ACTIVE"
                                },
                                {
                                    "name": "Evan Green",
                                    "role": "COUNCIL MEMBER",
                                    "status": "PENDING"
                                },
                                {
                                    "name": "Fiona Harris",
                                    "role": "COUNCIL MEMBER",
                                    "status": "ACTIVE"
                                }
                            ]
                        }
                    ]
                };

                var oModel = new JSONModel(mData);
                this.getView().setModel(oModel);
                this.oView = this.getView();
            },

            onExit: function () {
            }

        });
    });