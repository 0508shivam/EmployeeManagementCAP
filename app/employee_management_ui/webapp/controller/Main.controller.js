sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator'
],
function (Controller, JSONModel, Fragment, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.Main", {
        onInit: function () {
            var mData = {
                "items": [
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    },
                    {
                        "title": "Project Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress"
                    },
                    {
                        "title": "Production Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress"
                    },
                    {
                        "title": "SDA Anayst",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review"
                    }
                ],
                "ExtendedView":{
                    "Reports":[{
                        "name": "Karl Munoz",
                        "jobTitle": "Administrative Assistant",
                        "email": "kmunoz@exxonmobil.com",
                        "Reports":[{
                            "name": "Angel Miquel",
                            "jobTitle": "Indirect Tax Lead",
                            "email": "amiquel@exxonmobil.com"
                        }]
                    },
                       {
                        "name":"Mark Macmanus",
                        "jobTitle": "Corporate Financials Program Manager",
                        "email": "mmacmanus@exxonmobil.com"
                    },
                    {
                        "name": "Norris Burnside",
                        "jobTitle": "HR IT Manager",
                        "email": "nburnside@exxonmobil.com",
                        "Reports":[{
                            "name": "Adam Sanders",
                            "jobTitle": "System Engineer",
                            "email": "asander@exxonmobil.com"
                        }]
                    },
                    {
                        "name": "Lisa Sharpe",
                        "jobTitle": "Legal Advisor",
                        "email": "lsharpe@exxonmobil.com"   
                    }
                    ],
                    "Councils": [
                        {
                            "CouncilID": "001",
                            "CouncilName": "XYZ"
                        },
                        {
                            "CouncilID": "001",
                            "CouncilName": "XYZ"
                        },
                        {
                            "CouncilID": "001",
                            "CouncilName": "XYZ"
                        }
                    ]
                }};
                    
            var oModel = new JSONModel(mData);
            this.getView().setModel(oModel);

        },

        _handleItemPress: function () {
            console.log("hello card!")
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("needsObjectPage");
        },

        onExtendedNeedPress: function (oEvent) {
   
            this._oExtendedNeedDialog = new sap.ui.xmlfragment("_IDExtendedHierarchy", 
            "sap.deloitte.employeemanagement.employeemanagementui.fragments.ExtendedHierarchy", this);
            this.getView().addDependent(this._oExtendedNeedDialog);
            var oModel = this.getView().getModel();
            this._oExtendedNeedDialog.open();

        },

        closeExtendedNeed: function(oEvent) {
            if (this._oExtendedNeedDialog) {
                this._oExtendedNeedDialog.close();
                this._oExtendedNeedDialog.destroy();
                this._oExtendedNeedDialog = null;
            }
        },

        onExpandSelection: function() {
			var oTreeTable = Fragment.byId("_IDExtendedHierarchy","TreeTableBasic");
			oTreeTable.expandToLevel(1);
		},

        onCollapseAll: function() {
            var oTreeTable = Fragment.byId("_IDExtendedHierarchy","TreeTableBasic");
			oTreeTable.collapseAll();
        },

        onPressHome: function() {
            var navCon = this.byId("navCon");
			navCon.to(this.byId("p1"));
            this._oCouncilInput = this.byId("councilInput");
			this._oCouncilInput.setValue("");
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("home");
        },

		handleInputValueHelpOpen : function () {
            this._oCouncilDialog = new sap.ui.xmlfragment("selectDialog", 
            "sap.deloitte.employeemanagement.employeemanagementui.fragments.InputCouncil", this);
            this.getView().addDependent(this._oCouncilDialog);
            var oModel = this.getView().getModel();
            this._oCouncilDialog.open();
			
		},

        handleValueHelpConfirm: function (oEvent) {
            this._oCouncilInput = this.byId("councilInput");
			this._oCouncilInput.setValue(oEvent.getParameter("selectedItem").getTitle());

            var navCon = this.byId("navCon");
			navCon.to(this.byId("p2"));
            
            if (this._oCouncilDialog) {
                this._oCouncilDialog.destroy();
                this._oCouncilDialog = null;
            }
        }
        
    });
});
