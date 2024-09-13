sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/core/Fragment',
    'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator'
],
function(Controller, JSONModel, Fragment, Filter, FilterOperator){
    "use strict"

    return Controller.extend("sap.deloitte.employeemanagement.employeemanagementui.controller.Rosters",{

        onInit: function() {
            var mData = {
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
                ],
				"PositionRoster": [
					{
						"origin": "Planned",
						"targetNextAssignment": "Q1-2024",
						"positionId": "23456798",
						"functionalSupervisor": "John Doe",
						"positionTitle": "Delivery Compliance Manager",
						"capability": "Compliance",
						"jobRole": "Audit Manager",
						"jobTier": "Manager",
						"positionCL": "4",
						"councilId":"002",
						"location": "California",
						"bussiness": "Audit & Assurance",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started",
						"notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					  },
					  {
						"origin": "Unplanned",
						"targetNextAssignment": "Q2-2024",
						"positionId": "23456799",
						"functionalSupervisor": "Jane Smith",
						"positionTitle": "Risk Assessment Lead",
						"capability": "Risk Management",
						"jobRole": "Risk Manager",
						"jobTier": "Manager",
						"positionCL": "5",
						"councilId":"003",
						"location": "New York",
						"bussiness": "Risk Advisory",
						"statusOfIncumbent": "In Progress",
						"status": "In Progress"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q32024",
						"positionId": "23456800",
						"functionalSupervisor": "Alice Johnson",
						"positionTitle": "Financial Analyst",
						"capability": "Finance",
						"jobRole": "Financial Analyst",
						"jobTier": "Senior Analyst",
						"positionCL": "3",
						"councilId":"001",
						"location": "Texas",
						"bussiness": "Financial Advisory",
						"statusOfIncumbent": "Completed",
						"status": "Completed"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q4-2024",
						"positionId": "23456801",
						"functionalSupervisor": "Bob Brown",
						"positionTitle": "IT Compliance Officer",
						"capability": "IT Compliance",
						"jobRole": "IT Manager",
						"jobTier": "Manager",
						"positionCL": "4",
						"councilId":"003",
						"location": "Florida",
						"bussiness": "IT Advisory",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q1-2025",
						"positionId": "23456802",
						"functionalSupervisor": "Charlie Davis",
						"positionTitle": "HR Compliance Specialist",
						"capability": "HR Compliance",
						"jobRole": "HR Manager",
						"jobTier": "Manager",
						"positionCL": "4",
						"councilId":"001",
						"location": "Illinois",
						"bussiness": "Human Resources",
						"statusOfIncumbent": "In Progress",
						"status": "In Progress"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q2-2025",
						"positionId": "23456803",
						"functionalSupervisor": "Diana Evans",
						"positionTitle": "Operations Compliance Manager",
						"capability": "Operations",
						"jobRole": "Operations Manager",
						"jobTier": "Manager",
						"positionCL": "4",
						"councilId":"002",
						"location": "Washington",
						"bussiness": "Operations",
						"statusOfIncumbent": "Completed",
						"status": "Completed"
					  },
					  {
						"origin": "Unplanned",
						"targetNextAssignment": "Q3-2025",
						"positionId": "23456804",
						"functionalSupervisor": "Ethan Foster",
						"positionTitle": "Marketing Compliance Lead",
						"capability": "Marketing",
						"jobRole": "Marketing Manager",
						"jobTier": "Manager",
						"positionCL": "4",
						"councilId":"002",
						"location": "Georgia",
						"bussiness": "Marketing",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q4-2025",
						"positionId": "23456805",
						"functionalSupervisor": "Fiona Green",
						"positionTitle": "Sales Compliance Manager",
						"capability": "Sales",
						"jobRole": "Sales Manager",
						"jobTier": "Manager",
						"positionCL": "4",
						"councilId":"001",
						"location": "Ohio",
						"bussiness": "Sales",
						"statusOfIncumbent": "In Progress",
						"status": "In Progress"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q1-2026",
						"positionId": "23456806",
						"functionalSupervisor": "George Harris",
						"positionTitle": "Legal Compliance Officer",
						"capability": "Legal",
						"jobRole": "Legal Manager",
						"jobTier": "Manager",
						"positionCL": "4",
						"councilId":"003",
						"location": "Michigan",
						"bussiness": "Legal",
						"statusOfIncumbent": "Completed",
						"status": "Completed"
					  },
					  {
						"origin": "Unplanned",
						"targetNextAssignment": "Q2-2026",
						"positionId": "23456807",
						"functionalSupervisor": "Hannah Johnson",
						"positionTitle": "Environmental Compliance Manager",
						"capability": "Environmental",
						"jobRole": "Environmental Manager",
						"jobTier": "Manager",
						"positionCL": "4",
						"councilId":"002",
						"location": "Colorado",
						"bussiness": "Environmental Services",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started"
					  }					  
				],
				"EmployeeRoster": [
					{
						"origin": "Planned",
						"targetNextAssignment": "Q1-2024",
						"employeeName": "Sam Smith",
						"supervisorName": "John Doe",
						"positionTitle": "Delivery Compliance Manager",
						"currentCL": "4",
						"location": "California",
						"jobRole": "Audit Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "Yes",
						"MGI": "No Idea",
						"careerOrientation": "Compliance",
						"potential": "23",
						"nextAssignmentJobRole": "Senior Audit Manager",
						"nextAssignmentTargetWorkExp": "8",
						"statusOfCurrentPos": "Not Started",
						"status": "Not Started",
						"notes":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q2-2024",
						"employeeName": "Jane Doe",
						"supervisorName": "Alice Johnson",
						"positionTitle": "Risk Assessment Lead",
						"currentCL": "5",
						"location": "New York",
						"jobRole": "Risk Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "No",
						"MGI": "High",
						"careerOrientation": "Risk Management",
						"potential": "30",
						"nextAssignmentJobRole": "Senior Risk Manager",
						"nextAssignmentTargetWorkExp": "10",
						"statusOfCurrentPos": "In Progress",
						"status": "In Progress"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q3-2024",
						"employeeName": "Michael Brown",
						"supervisorName": "Bob Brown",
						"positionTitle": "Financial Analyst",
						"currentCL": "3",
						"location": "Texas",
						"jobRole": "Financial Analyst",
						"jobTier": "Senior Analyst",
						"activeOnAssignment": "Yes",
						"MGI": "Medium",
						"careerOrientation": "Finance",
						"potential": "25",
						"nextAssignmentJobRole": "Lead Financial Analyst",
						"nextAssignmentTargetWorkExp": "6",
						"statusOfCurrentPos": "Completed",
						"status": "Completed"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q4-2024",
						"employeeName": "Emily Davis",
						"supervisorName": "Charlie Davis",
						"positionTitle": "IT Compliance Officer",
						"currentCL": "4",
						"location": "Florida",
						"jobRole": "IT Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "No",
						"MGI": "Low",
						"careerOrientation": "IT Compliance",
						"potential": "20",
						"nextAssignmentJobRole": "Senior IT Manager",
						"nextAssignmentTargetWorkExp": "9",
						"statusOfCurrentPos": "Not Started",
						"status": "Not Started"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q1-2025",
						"employeeName": "David Evans",
						"supervisorName": "Diana Evans",
						"positionTitle": "HR Compliance Specialist",
						"currentCL": "4",
						"location": "Illinois",
						"jobRole": "HR Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "Yes",
						"MGI": "High",
						"careerOrientation": "HR Compliance",
						"potential": "28",
						"nextAssignmentJobRole": "Senior HR Manager",
						"nextAssignmentTargetWorkExp": "7",
						"statusOfCurrentPos": "In Progress",
						"status": "In Progress"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q2-2025",
						"employeeName": "Sophia Green",
						"supervisorName": "Ethan Foster",
						"positionTitle": "Operations Compliance Manager",
						"currentCL": "4",
						"location": "Washington",
						"jobRole": "Operations Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "No",
						"MGI": "Medium",
						"careerOrientation": "Operations",
						"potential": "22",
						"nextAssignmentJobRole": "Senior Operations Manager",
						"nextAssignmentTargetWorkExp": "8",
						"statusOfCurrentPos": "Completed",
						"status": "Completed"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q3-2025",
						"employeeName": "James Harris",
						"supervisorName": "Fiona Green",
						"positionTitle": "Marketing Compliance Lead",
						"currentCL": "4",
						"location": "Georgia",
						"jobRole": "Marketing Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "Yes",
						"MGI": "Low",
						"careerOrientation": "Marketing",
						"potential": "24",
						"nextAssignmentJobRole": "Senior Marketing Manager",
						"nextAssignmentTargetWorkExp": "7",
						"statusOfCurrentPos": "Not Started",
						"status": "Not Started"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q4-2025",
						"employeeName": "Olivia Johnson",
						"supervisorName": "George Harris",
						"positionTitle": "Sales Compliance Manager",
						"currentCL": "4",
						"location": "Ohio",
						"jobRole": "Sales Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "No",
						"MGI": "High",
						"careerOrientation": "Sales",
						"potential": "29",
						"nextAssignmentJobRole": "Senior Sales Manager",
						"nextAssignmentTargetWorkExp": "9",
						"statusOfCurrentPos": "In Progress",
						"status": "In Progress"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q1-2026",
						"employeeName": "Liam Martinez",
						"supervisorName": "Hannah Johnson",
						"positionTitle": "Legal Compliance Officer",
						"currentCL": "4",
						"location": "Michigan",
						"jobRole": "Legal Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "Yes",
						"MGI": "Medium",
						"careerOrientation": "Legal",
						"potential": "27",
						"nextAssignmentJobRole": "Senior Legal Manager",
						"nextAssignmentTargetWorkExp": "8",
						"statusOfCurrentPos": "Completed",
						"status": "Completed"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q2-2026",
						"employeeName": "Emma Wilson",
						"supervisorName": "Isabella Clark",
						"positionTitle": "Environmental Compliance Manager",
						"currentCL": "4",
						"location": "Colorado",
						"jobRole": "Environmental Manager",
						"jobTier": "Manager",
						"activeOnAssignment": "No",
						"MGI": "Low",
						"careerOrientation": "Environmental",
						"potential": "21",
						"nextAssignmentJobRole": "Senior Environmental Manager",
						"nextAssignmentTargetWorkExp": "7",
						"statusOfCurrentPos": "Not Started",
						"status": "Not Started"
					  }					  
				]
            };

            this.oModel = new JSONModel(mData);
            this.getView().setModel(this.oModel);

            this._oCouncilInput = this.byId("councilInput");

			this._oCouncilInput.setFilterFunction(function(sValue, oItem){
				sValue.toLowerCase();
				// A case-insensitive 'string contains' filter
				return oItem.getKey().toLowerCase().indexOf(sValue) !== -1 ||
						oItem.getText().toLowerCase().indexOf(sValue) !== -1;
			});
        },

		formatAvailableToObjectState: function(bStatus) {
			if(bStatus == "Not Started") {
				return "Error";
			} else if(bStatus == "In Progress") {
				return "Information";
			} else if(bStatus == "Completed") {
				return "Success";
			}else {
				return "Warning";
			}
		},

        onPressHome: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this._oCouncilInput = this.byId("councilInput");
            oRouter.navTo("home");
            this._oCouncilInput.setValue("");
        },

        handleInputChange: function () {
			var bInputEmpty = this._oCouncilInput.getValue() === "";

			if (bInputEmpty) {
				this.oModel.setProperty("/inputPopulated", !bInputEmpty);
				this.oModel.setProperty("/selectedCouncil", !bInputEmpty);
			}
		},

        handleInputSubmit: function() {
			var sValue = this._oCouncilInput.getValue(),
				bInputPopulated = sValue !== "";

			this.oModel.setProperty("/inputPopulated", bInputPopulated);

			if (bInputPopulated) {
				this._setSelectedCouncilInput(sValue);
			}
		},

        _setSelectedCouncilInput: function (sKey) {
			var bSuccess = this.oModel.getData().Councils.some(function (oCouncil) {
					return oCouncil.CouncilID === sKey &&
						this._oCouncilInput.setSelectedKey(sKey) &&
						this.oModel.setProperty("/selectedCouncil", oCouncil);
				}, this);

			if (!bSuccess) {
				this.oModel.setProperty("/selectedCouncil", null);
			}
		},

        handleInputSuggestionItemSelected: function (oEvent) {
			var oSelectedItem = oEvent.getParameter("selectedCouncil");
			this._setSelectedCouncilInput(oSelectedItem && oSelectedItem.getKey());
		},

        handleInputValueHelpOpen : function () {
			var sInputValue = this._oCouncilInput.getValue(),
				oView = this.getView();

			// create value help dialog
			if (!this._pValueHelpDialog) {
				this._pValueHelpDialog = Fragment.load({
					id: oView.getId(),
					name: "sap.deloitte.employeemanagement.employeemanagementui.fragments.CouncilDialog",
					controller: this
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					return oDialog;
				});
			}

			this._pValueHelpDialog.then(function(oDialog) {
				this._filterAndOpenValueHelpDialog(sInputValue, oDialog);
			}.bind(this));
		},

		handleValueHelpConfirm : function (oEvent) {
			var oSelectedCouncil = oEvent.getParameter("selectedItem"), sKey;

			if (oSelectedCouncil) {
				sKey = oSelectedCouncil.getDescription();
				this._setSelectedCouncilInput(sKey);
			}
		},

		handleValueHelpSearch : function (oEvent) {
			this._filterValueHelpDialog(oEvent.getParameter("value"), this.byId("selectDialog"));
		},

        _filterAndOpenValueHelpDialog: function (sInputValue, oDialog) {
			this._filterValueHelpDialog(sInputValue, oDialog);
			oDialog.open(sInputValue);
		},

		_filterValueHelpDialog: function(sInputValue, oDialog) {
			oDialog.getBinding("items")
				.filter(this._getCombinedFilter(sInputValue));
		},

        _getCombinedFilter: function (sValue) {

			return new Filter({
				and: false,
				filters: [
					new Filter(
						"CouncilID",
						FilterOperator.Contains, sValue
					),
					new Filter(
						"CouncilName",
						FilterOperator.Contains, sValue
					)
				]
			});
		},

    });

});