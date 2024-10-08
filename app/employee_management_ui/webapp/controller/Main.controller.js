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
                        "leadCandidate": "Jane Doe",
                        "subtitle": "",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress",
                        "dueDate": "Target date required",
                        "location": "West Adam",
                        "supervisor": "Mrs. Regina Henry",
                        "council": "Test Council - 19"
                    },
                    {
                        "title": "Production Manager",
                        "leadCandidate": "Abu Abul Akbar",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "East Joseph",
                        "supervisor": "John Jennings",
                        "council": "Test Council - 19"
                    },
                    {
                        "title": "SDA Anayst",
                        "leadCandidate": "John Smith",
                        "subtitle": "",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review",
                        "dueDate": "Target date required",
                        "location": "East Larryville",
                        "supervisor": "Scott Bryant",
                        "council": "Test Council - 19"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "leadCandidate": "Alice Johnson",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser",
                        "dueDate": "Due in 30+ days",
                        "location": "East Martin",
                        "supervisor": "Samantha Garcia",
                        "council": "Test Council - 19"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "leadCandidate": "Bob Brown",
                        "subtitle": "",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review",
                        "dueDate": "Target date required",
                        "location": "East Karenfort",
                        "supervisor": "Rick Mckinney",
                        "council": "Test Council - 19"
                    },
                    {
                        "title": "Project Manager",
                        "leadCandidate": "Charlie Davis",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "Bradshire",
                        "supervisor": "Scott Cole",
                        "council": "Test Council - 19"
                    },
                    {
                        "title": "Production Manager",
                        "leadCandidate": "Diana Evans",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "West Sharonside",
                        "supervisor": "Katherine Lambert",
                        "council": "Test Council - 19"
                    },
                    {
                        "title": "SDA Anayst",
                        "leadCandidate": "Evan Green",
                        "subtitle": "",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review",
                        "dueDate": "Target date required",
                        "location": "Tiffanyburgh",
                        "supervisor": "Stephen Maldonado",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "leadCandidate": "Jane Smith",
                        "subtitle": "",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser",
                        "dueDate": "Target date required",
                        "location": "East Gregory",
                        "supervisor": "Angela Davila MD",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "leadCandidate": "Chris Evans",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review",
                        "dueDate": "Due in 30+ days",
                        "location": "Port Shawnchester",
                        "supervisor": "Diane Morgan",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "Project Manager",
                        "leadCandidate": "Sarah Connor",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "South Ericaside",
                        "supervisor": "Trevor Stewart",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "Production Manager",
                        "leadCandidate": "Michael Scott",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "Lake Franciscobury",
                        "supervisor": "Joseph Gates",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "SDA Anayst",
                        "leadCandidate": "Evan Green",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review",
                        "dueDate": "Due in 30 days",
                        "location": "North Terriland",
                        "supervisor": "John Le",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "leadCandidate": "Pam Beesly",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser",
                        "dueDate": "Due in 30 days",
                        "location": "Allenfurt",
                        "supervisor": "Autumn Cisneros",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "leadCandidate": "Evan Green",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review",
                        "dueDate": "Due in 30+ days",
                        "location": "Petersborough",
                        "supervisor": "April Newton",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "Project Manager",
                        "leadCandidate": "Dwight Schrute",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "New Eddie",
                        "supervisor": "John Mccarty",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "Production Manager",
                        "leadCandidate": "Dwight Schrute",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "West Matthewbury",
                        "supervisor": "Cheryl Sullivan",
                        "council": "Test Council - 26"
                    },
                    {
                        "title": "SDA Anayst",
                        "leadCandidate": "Jane Smith",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review",
                        "dueDate": "Due in 30+ days",
                        "location": "Craigbury",
                        "supervisor": "Abigail Miller",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "leadCandidate": "Keith Davis",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser",
                        "dueDate": "Due in 30 days",
                        "location": "East Kim",
                        "supervisor": "Megan Cameron",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "leadCandidate": "Brooke Hall",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review",
                        "dueDate": "Due in 30+ days",
                        "location": "Johnsonmouth",
                        "supervisor": "Alan Solis",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Project Manager",
                        "leadCandidate": "Lisa Curtis",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "Lake Bryanmouth",
                        "supervisor": "Eddie Patterson",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Production Manager",
                        "leadCandidate": "Vicki Carroll",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress",
                        "dueDate": "Due in 30+ days",
                        "location": "West Patricia",
                        "supervisor": "Pamela Hunt",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "SDA Anayst",
                        "leadCandidate": "Robert Murphy",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review",
                        "dueDate": "Due in 30 days",
                        "location": "Whiteport",
                        "supervisor": "Shannon Howard",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "leadCandidate": "Tyler Berry",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser",
                        "dueDate": "Due in 30 days",
                        "location": "Robertburgh",
                        "supervisor": "Karen Joseph",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "leadCandidate": "Tiffany Mitchell",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review",
                        "dueDate": "Due in 30+ days",
                        "location": "Walkerville",
                        "supervisor": "Emily Johnson",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Project Manager",
                        "leadCandidate": "Shannon Zimmerman",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "Morrowland",
                        "supervisor": "Michael Conley",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Production Manager",
                        "leadCandidate": "Ashley Brown",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "New Jesse",
                        "supervisor": "Melinda Jackson",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "SDA Anayst",
                        "leadCandidate": "Michael Butler",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review",
                        "dueDate": "Due in 30+ days",
                        "location": "New Yvonne",
                        "supervisor": "Ashley Bell",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "leadCandidate": "Evan Green",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser",
                        "dueDate": "Due in 30 days",
                        "location": "West Damonburgh",
                        "supervisor": "Linda Cooper",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "leadCandidate": "Evan Green",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review",
                        "dueDate": "Due in 30 days",
                        "location": "Lake Amber",
                        "supervisor": "Jeffrey Gibson",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Project Manager",
                        "leadCandidate": "Evan Green",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Research and Engineering - Projects",
                        "number" : "100000563",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "Russellville",
                        "supervisor": "Cameron Waller",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "Production Manager",
                        "leadCandidate": "Leah Copeland",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Product - Americas",
                        "number" : "100010662",
                        "status" :"In progress",
                        "dueDate": "Due in 30 days",
                        "location": "Russellville",
                        "supervisor": "Cameron Waller",
                        "council": "Test Council - 007"
                    },
                    {
                        "title": "SDA Anayst",
                        "leadCandidate": "Evan Green",
                        "subtitle": "June 13 2024",
                        "jobDetail": "human resources",
                        "number" : "100000265",
                        "status" : "Pending review",
                        "dueDate": "Due in 30+ days",
                        "location": "Burtonside",
                        "supervisor": "Traci Glover",
                        "council": "Test Council - 786"
                    },
                    {
                        "title": "CareerConnect Vendor Manager",
                        "leadCandidate": "Kyle Smith",
                        "subtitle": "June 13 2024",
                        "jobDetail": "Information technology",
                        "number" : "100040558",
                        "status" :"Pending Endorser",
                        "dueDate": "Due in 30 days",
                        "location": "Michelleside",
                        "supervisor": "Christopher Hill",
                        "council": "Test Council - 786"
                    },
                    {
                        "title": "Beaumont Engineering Services",
                        "leadCandidate": "Ashley Orozco",
                        "subtitle": "",
                        "jobDetail": "Checklist services",
                        "number" : "120000987",
                        "status" : "Pending review",
                        "dueDate": "Target date required",
                        "location": "North Colin",
                        "supervisor": "Pamela Day",
                        "council": "Test Council - 786"
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
                            "CouncilName": "ABC"
                        },
                        {
                            "CouncilID": "002",
                            "CouncilName": "CDF"
                        },
                        {
                            "CouncilID": "003",
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
