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

		mEmpLabels: {
			"careerOrientation": "Career Orientation",
			"currentCL": "Current CL",
			"jobRole": "Current Job Role",
			"location": "Current Location",
			"targetNextAssignment": "Target Next Assignment",
			"targetKeyExperience": "Target Key Experience",
			"targetCorporateKeyExperience": "Target Corporate Key Experience",
			"mobility": "Mobility"
		},
		mPositionLabels: {
			"jobRole": "Job Role",
			"jobTier": "Job Tier", 
			"capability": "Capability", 
			"positionCL": "position CL",  
			"location": "Location", 
			"CDFlag" : "Critical/Differentiate Flag", 
			"target open date": "Target Open Date",
			"corporateKeyExperience": "Corporate Key Experience"

		},
		_EmpPopover:  {},
		_PosPopover: null,
		_SuccessorPopover: null,
		_TalentPoolPopover: null,
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
			this.getView().setModel(new JSONModel(), "oModelMMFacetFilter");
			var mDataMatrix = {
				"PositionInMatrix": [
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
						"location": "New York",
						"bussiness": "Audit & Assurance",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"target open date": "Target Open Date",
						"successor": "2",
						"corporateKeyExperience": "Corporate Key Experience",
						"notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"ready": false,
						"selected": ""
					  },
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
						"location": "New York",
						"bussiness": "Audit & Assurance",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"target open date": "Target Open Date",
						"successor": "2",
						"corporateKeyExperience": "Corporate Key Experience",
						"notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"ready": false,
						"selected": ""
					  },
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
						"location": "New York",
						"bussiness": "Audit & Assurance",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"target open date": "Target Open Date",
						"successor": "2",
						"corporateKeyExperience": "Corporate Key Experience",
						"notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"ready": false,
						"selected": ""
					  },
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
						"location": "New York",
						"bussiness": "Audit & Assurance",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"target open date": "Target Open Date",
						"successor": "2",
						"corporateKeyExperience": "Corporate Key Experience",
						"notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"ready": false,
						"selected": ""
					  },
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
						"location": "New York",
						"bussiness": "Audit & Assurance",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"target open date": "Target Open Date",
						"successor": "2",
						"corporateKeyExperience": "Corporate Key Experience",
						"notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"ready": false,
						"selected": ""
					  },
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
						"location": "New York",
						"bussiness": "Audit & Assurance",
						"statusOfIncumbent": "Not Started",
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"target open date": "Target Open Date",
						"successor": "2",
						"corporateKeyExperience": "Corporate Key Experience",
						"notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"ready": false,
						"selected": ""
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
						"status": "In Progress",
						"CDFlag" : "Critical/Differentiate Flag", 
						"successor": "1",
						"target open date": "Target Open Date",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": false,
						"selected": ""
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
						"status": "Completed",
						"CDFlag" : "Critical/Differentiate Flag", 
						"target open date": "Target Open Date",
						"successor": "4",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": true,
						"selected": ""
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
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"successor": "",
						"target open date": "Target Open Date",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": true,
						"selected": "4"
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
						"status": "In Progress",
						"CDFlag" : "Critical/Differentiate Flag", 
						"successor": "",
						"target open date": "Target Open Date",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": false,
						"selected": ""
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
						"status": "Completed",
						"CDFlag" : "Critical/Differentiate Flag", 
						"successor": "6",
						"target open date": "Target Open Date",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": false,
						"selected": ""
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
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"successor": "",
						"target open date": "Target Open Date",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": false,
						"selected": ""
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
						"status": "In Progress",
						"CDFlag" : "Critical/Differentiate Flag", 
						"successor": "",
						"target open date": "Target Open Date",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": false,
						"selected": "2"
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
						"status": "Completed",
						"CDFlag" : "Critical/Differentiate Flag",
						"successor": "", 
						"target open date": "Target Open Date",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": false,
						"selected": "1"
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
						"status": "Not Started",
						"CDFlag" : "Critical/Differentiate Flag", 
						"successor": "9",
						"target open date": "Target Open Date",
						"corporateKeyExperience": "Corporate Key Experience",
						"ready": false,
						"selected": ""
					  }					  
				],
				"EmployeeInMatrix": [
					{
						"origin": "Planned",
						"targetNextAssignment": "Q1-2024",
						"employeeName": "Sam Smith",
						"employeeId": "1",
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
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1",
						"notes":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q2-2024",
						"employeeName": "Jane Doe",
						"employeeId": "2",
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
						"status": "In Progress",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q3-2024",
						"employeeName": "Michael Brown",
						"employeeId": "3",
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
						"status": "Completed",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q4-2024",
						"employeeName": "Emily Davis",
						"employeeId": "4",
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
						"status": "Not Started",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q1-2025",
						"employeeName": "David Evans",
						"employeeId": "5",
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
						"status": "In Progress",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q2-2025",
						"employeeName": "Sophia Green",
						"employeeId": "6",
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
						"status": "Completed",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q3-2025",
						"employeeName": "James Harris",
						"employeeId": "7",
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
						"status": "Not Started",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q4-2025",
						"employeeName": "Olivia Johnson",
						"employeeId": "8",
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
						"status": "In Progress",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q1-2026",
						"employeeName": "Liam Martinez",
						"employeeId": "9",
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
						"status": "Completed",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  },
					  {
						"origin": "Planned",
						"targetNextAssignment": "Q2-2026",
						"employeeName": "Emma Wilson",
						"employeeId": "10",
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
						"status": "Not Started",
						"targetKeyExperience": "Target Key Experience1",
						"targetCorporateKeyExperience": "Target Corporate Key Experience1",
						"mobility": "Mobility1"
					  }					  
				]
            };
			this._mData = mDataMatrix;
			this._EmployeeInMatrix = mDataMatrix["EmployeeInMatrix"];
			this._createMatrixData(mDataMatrix);
			this.setFilterData(mDataMatrix);
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

		//Matching Matrix Starts

		_createMatrixData: function () {
			var oController = this;
			var mData = this._mData;
			var mDataMatrix = {
				aColumns : [{
						"sHeader" : "Extract Yes/No",
						"sProperty" : "Extract",
						"isFreeze" : true
					},{
						"sHeader" : "Discussion Scope",
						"sProperty" : "DiscussionScope",
						"isFreeze" : true
					},{
						"sHeader" : "Ready",
						"sProperty" : "Ready",
						"isFreeze" : true
					},
					{
						"sHeader" : "Position",
						"sProperty" : "Position",
						"isFreeze" : true
					}
				],
				aRows : []
			};
			$.each(mData["EmployeeInMatrix"], function (iER, mER) {
				let aEmpData = [];
				$.each(oController.mEmpLabels, function (sP, mP) {
					aEmpData.push({
						"sLabel": mP,
						"sProperty": mER[sP]
					});
				});
				mDataMatrix["aColumns"].push({
					"sHeader" : mER["employeeName"],
					"sProperty" :  mER["employeeId"],
					"isFreeze" : false,
					"aEmpData" : aEmpData,
					"mEmployee": mER
				});
			});
			$.each(mData["PositionInMatrix"], function (iER, mER) {
				let mRData = mER;
				let aPositionData = [];
				let aSuccessorData = [{
					"candidateName": "Sam Smith",
					"ready": true
				},{
					"candidateName": "Jane Doe",
					"ready": false
				},{
					"candidateName": "Michael Brown",
					"ready": false
				}];
				let aTalentPoolData = [{
					"candidateName": "Sam Smith",
					"ready": true
				},{
					"candidateName": "Jane Doe",
					"ready": false
				},{
					"candidateName": "Michael Brown",
					"ready": false
				}];
				$.each(oController.mPositionLabels, function (sP, mP) {
					aPositionData.push({
						"sLabel": mP,
						"sProperty": mER[sP]
					});
				});
				$.each(mDataMatrix["aColumns"], function (iC, mC) {
					let sData = "";
					switch (mC["sProperty"]) {
						case "Extract":
							sData = "Yes";
						  break;
						case "DiscussionScope":
							sData = "Yes";
						  break;
						case "Ready":
							sData = "No";
						  break;
						case "Position":
							sData = mER["positionTitle"]
						  break;
						case "SuccessionPlan":
							sData = "";
						  break;
						case "TalentPool":
							sData = "";
						  break;
						default:
							sData = "";
							break;
					} 
					mRData[mC["sProperty"]] = sData;
				});
				mRData["aPositionData"] = aPositionData;
				mRData["aTalentPoolData"] = aTalentPoolData;
				mRData["aSuccessorData"] = aSuccessorData;
				mDataMatrix["aRows"].push(mRData);
			});
			var oModelForMatrix = new JSONModel(mDataMatrix);
			oModelForMatrix.setDefaultBindingMode("OneWay");
            this.getView().setModel(oModelForMatrix, "oModelForMatrix");
		},

		getArrayWithoutDuplicates: function (originalArray, objKey) {
			if (!originalArray) {
				return [];
			}
			var trimmedArray = [];
			var values = [];
			$.each(originalArray, function () {
				var value = objKey.indexOf("/") > -1 ? this[objKey.split("/")[0]][objKey.split("/")[1]] : this[objKey];
				if (value === "" || value) {
					if (value instanceof Array) {
						value = this[objKey][0].KEY;
					}
					if (values.indexOf(value) === -1) {
						trimmedArray.push(this);
						values.push(value);
					}
				}
			});
			return trimmedArray;
		},

		setFilterData: function (mData) {
			var oModelMMFacetFilter = this.getView().getModel("oModelMMFacetFilter");
			var aPositionFilters = [{
				"FIELDLABEL": "Job Tier",
				"FIELDNAME": "jobTier",
				"VALUES": this.getArrayWithoutDuplicates(mData["PositionInMatrix"], "jobTier")
			},{
				"FIELDLABEL": "Job Role",
				"FIELDNAME": "jobRole",
				"VALUES": this.getArrayWithoutDuplicates(mData["PositionInMatrix"], "jobRole")
			},{
				"FIELDLABEL": "Location",
				"FIELDNAME": "location",
				"VALUES": this.getArrayWithoutDuplicates(mData["PositionInMatrix"], "location")
			}];
			var aCandidateFilters = [{
				"FIELDLABEL": "Job Role",
				"FIELDNAME": "jobRole",
				"VALUES": this.getArrayWithoutDuplicates(mData["EmployeeInMatrix"], "jobRole")
			},{
				"FIELDLABEL": "Home Position Location",
				"FIELDNAME": "location",
				"VALUES": this.getArrayWithoutDuplicates(mData["EmployeeInMatrix"], "location")
			},{
				"FIELDLABEL": "Career Orientation",
				"FIELDNAME": "careerOrientation",
				"VALUES": this.getArrayWithoutDuplicates(mData["EmployeeInMatrix"], "careerOrientation")
			},{
				"FIELDLABEL": "Current CL",
				"FIELDNAME": "currentCL",
				"VALUES": this.getArrayWithoutDuplicates(mData["EmployeeInMatrix"], "currentCL")
			},{
				"FIELDLABEL": "Alt. Next Assignment",
				"FIELDNAME": "targetNextAssignment",
				"VALUES": [{"targetNextAssignment" : "Yes"},{"targetNextAssignment" : "No"}]
			}];
			$.each(aPositionFilters, function (iFilter, mFilter) {
				let aValues = [];
				jQuery.each(mFilter.VALUES, function (iFilterInner, mFilterInner) {
					aValues.push({
						"TEXT": mFilterInner[mFilter.FIELDNAME],
						"KEY": mFilterInner[mFilter.FIELDNAME]
					});
				});
				mFilter.VALUES = aValues;
			});
			jQuery.each(aCandidateFilters, function (iFilter, mFilter) {
				let aValues = [];
				jQuery.each(mFilter.VALUES, function (iFilterInner, mFilterInner) {
					aValues.push({
						"TEXT": mFilterInner[mFilter.FIELDNAME],
						"KEY": mFilterInner[mFilter.FIELDNAME]
					});
				});
				mFilter.VALUES = aValues;
			});
			oModelMMFacetFilter.setProperty("/aCandidateFilters", aCandidateFilters);
			oModelMMFacetFilter.setProperty("/aPositionFilters", aPositionFilters);
		},

		handlePositionListClose: function () {
			var oRFilter = [];
			var oFacetFilterS = this.byId("sIdFacetFilterReportPosition");
			var oMatchingMatrixTable = this.byId("sId_MatchingMatrixTable");
			var mFacetFilterLists = oFacetFilterS.getLists().filter(function (oList) {
				return oList.getActive() && oList.getSelectedItems().length;
			});
			if (mFacetFilterLists.length > 0) {
				var oFilter = new Filter(mFacetFilterLists.map(function (oList) {
					return new Filter(oList.getSelectedItems().map(function (oItem) {
						return new Filter(oList.getKey(), "EQ", oItem.getKey());
					}), false);
				}), true);
				oRFilter.push(new Filter(oFilter, false));
				oMatchingMatrixTable.getBinding("rows").filter(oRFilter);
			} else {
				oMatchingMatrixTable.getBinding("rows").filter([]);
			}
		},

		handleCandidateListClose: function () {
			var mKeys = {
				"jobRole" : [],
				"location" : [],
				"careerOrientation": [],
				"currentCL": [],
				"targetNextAssignment": []
			};
			var oFacetFilterS = this.byId("sIdFacetFilterReportCandidate");
			var mFacetFilterLists = oFacetFilterS.getLists().filter(function (oList) {
				return oList.getActive() && oList.getSelectedItems().length;
			});
			if (mFacetFilterLists.length > 0) {
				new Filter(mFacetFilterLists.map(function (oList) {
					return new Filter(oList.getSelectedItems().map(function (oItem) {
						mKeys[oList.getKey()].push(oItem.getKey());
						return new Filter(oList.getKey(), "EQ", oItem.getKey());
					}), false);
				}), true);
			} 
			var aEmployeesAll = this._EmployeeInMatrix;
			var aFilterEmployee = [], isAllNotEmpty = false;

			$.each(mKeys, function (iKey, mKey) {
				isAllNotEmpty = isAllNotEmpty || mKey.length > 0;
				$.each(mKey, function (iInnerKey, mInnerKey) {
					aFilterEmployee = aFilterEmployee.concat($.grep(aEmployeesAll, function (mObj) {
						return mObj[iKey] === mInnerKey;
					}));
				});
				aEmployeesAll = aFilterEmployee.length > 0 ? aFilterEmployee : aEmployeesAll;
			});
			if (isAllNotEmpty) {
				this._mData["EmployeeInMatrix"] = this.getArrayWithoutDuplicates(aFilterEmployee, "employeeId");
			} else {
				this._mData["EmployeeInMatrix"] = this._EmployeeInMatrix;
			}
			this._createMatrixData();
			this.handlePositionListClose();
		},

		handlePositionFilterReset: function(oEvent) {
			var oMatchingMatrixTable = this.byId("sId_MatchingMatrixTable");
			var oFacetFilter = this.byId(oEvent.getParameter("id")),
				aFacetFilterLists = oFacetFilter.getLists();
			for (var i = 0; i < aFacetFilterLists.length; i++) {
				aFacetFilterLists[i].setSelectedKeys();
			}
			oMatchingMatrixTable.getBinding("rows").filter([]);
		},

		handleCandidateFilterReset: function(oEvent) {
			var oFacetFilter = this.byId(oEvent.getParameter("id")),
				aFacetFilterLists = oFacetFilter.getLists();
			for (var i = 0; i < aFacetFilterLists.length; i++) {
				aFacetFilterLists[i].setSelectedKeys();
			}
			this._mData["EmployeeInMatrix"] = this._EmployeeInMatrix;
			this._createMatrixData();
		},

		createContent: function (sId, oContext) {
			var oController = this;
			let sHeader = oContext.getObject().sHeader;
			let sProperty = oContext.getObject().sProperty;
			let isFreeze = oContext.getObject().isFreeze;
			let aEmpData = oContext.getObject().aEmpData;
			let mEmployee = oContext.getObject().mEmployee;
			let mEmpData = {
				"sHeader": sHeader,
				"sProperty": sProperty,
				"aEmpData" : aEmpData
			};
			let oLabel = null;
			let sFilter = "", sSort = "";
			let oText = null;
			let sWidth = "3rem";
			let hAlign = "Center";
			if (isFreeze) {
				oLabel = new sap.m.ObjectNumber({
					number: sHeader
				}).addStyleClass("sapUiCandidate sapMObjectNumberLongText");
				if (sProperty === "DiscussionScope" || 
					sProperty === "Position" || sProperty === "Ready") {
						sFilter = sProperty;
						sSort = sProperty;
				}
			} else {
				oLabel = new sap.m.VBox({
					alignItems: "Center",
					justifyContent: "SpaceBetween",
					items : [
						new sap.ui.core.Icon({
							src: "sap-icon://delete",
							color: "#0064d9",
							size: "1rem",
							hoverColor: "red",
							press: function () {

							}
						}),
						new sap.m.ObjectNumber({
							number: sHeader,
							inverted: true,
							state: "Information",
							active: true,
							press: function (oEvent) {
								oController._showEmployeeDetail(oEvent);							
							}
						}).addStyleClass("sapUiCandidate sapMObjectNumberLongText")
						  .data("mEmpData", mEmpData)
					]
				});
			}
			
			switch (sProperty) {
				case "Extract":
					sWidth = "4rem";
					oText = new sap.m.CheckBox({
						selected: false,
						partiallySelected: true
					});
				  break;
				case "DiscussionScope":
					sWidth = "5rem";
					oText = new sap.m.Switch({
						state: true
					});
				  break;
				case "Ready":
					sWidth = "5rem";
					oText = new sap.m.Switch({
						customTextOff: "No",
						customTextOn: "Yes",
						state: "{oModelForMatrix>ready}",
						change: function (oEvent) {
							oController._switchToReady(oEvent);
						}
					});
				  break;
				case "Position":
					sWidth = "18rem";
					oText = new sap.m.HBox({
						alignItems: "Center",
						items : [
							new sap.ui.core.Icon({
								src: "sap-icon://delete",
								color: "#0064d9",
								size: "1rem",
								hoverColor: "red",
								press: function () {
		
								}
							}).addStyleClass("sapUiTinyMarginEnd"),
							new sap.ui.core.Icon({
								src: "sap-icon://group",
								color: "#0064d9",
								size: "1rem",
								hoverColor: "green",
								press: function (oEvent) {
									oController._showSuccessorDetail(oEvent);	
								}
							}).addStyleClass("sapUiTinyMarginEnd"),
							new sap.ui.core.Icon({
								src: "sap-icon://accessibility",
								color: "#0064d9",
								size: "1rem",
								hoverColor: "green",
								press: function (oEvent) {
									oController._showTalentPoolDetail(oEvent);	
								}
							}).addStyleClass("sapUiTinyMarginEnd"),
							new sap.m.ObjectNumber({
								number : "{oModelForMatrix>" + sProperty + "}",
								inverted: true,
								state: "Information",
								active: true,
								press: function (oEvent) {
									oController._showPositionDetail(oEvent);							
								}
							}).addStyleClass("sapUiCandidate sapMObjectNumberLongText")
						]
					});
				  break;
				default:
					sWidth = "8rem";
					hAlign = "Center";
					oText = new sap.m.HBox({
						width: "100%",
						alignItems: "Center",
						justifyContent: "Center",
						items : [
							new sap.m.Button ({
								icon: "inValid",
								type: {
									"parts" : [
										"oModelForMatrix>jobRole", 
										"oModelForMatrix>successor",
										"oModelForMatrix>ready",
										"oModelForMatrix>selected"
									],
									formatter: function(jr ,suc, re, se){  
										if(se.includes(mEmployee.employeeId) && re) {
											return "Success";
										} else if (se.includes(mEmployee.employeeId)) {
											return "Accept";
										} else if (mEmployee.employeeId === suc){
											return "Emphasized";
										} else if (mEmployee.jobRole === jr) {
											return "Attention";
										} 
										return "Transparent";
									}
								}
							}).addStyleClass("sapUiTinyMarginEnd")
							  .data("mEmployee", mEmployee),
							new sap.ui.core.Icon({
								src: {
									parts : [ 
										"oModelForMatrix>selected",
										"oModelForMatrix>ready"
									],
									formatter: function(se, re){ 
										if (se.includes(mEmployee.employeeId) && re) {
											return "sap-icon://employee";
										} else if(se.includes(mEmployee.employeeId) && !re) {
											return "sap-icon://employee-rejections";
										} else {
											return "sap-icon://employee-approvals";
										}
									}
								},
								color: {
									parts : [ 
										"oModelForMatrix>selected",
										"oModelForMatrix>ready"
									],
									formatter: function(se, re){  
										if (se.includes(mEmployee.employeeId) && re) {
											return "green";
										} else if(se.includes(mEmployee.employeeId) && !re) {
											return "red";
										} else {
											return "#0064d9";
										}
									}
								},
								size: "1rem",
								hoverColor: "green",
								press: function (oEvent) {
									oController._selectCandidate(oEvent);
								}
							}).addStyleClass("sapUiTinyMarginTop").data("mEmployee", mEmployee)
						]
					});
					break;
			}
			let oColumn = new sap.ui.table.Column({
				hAlign: hAlign,
				width: sWidth,
				id: sId,
				label: oLabel, 
				template: oText
			});
			if (sFilter !== "") {
				oColumn.setFilterProperty(sFilter)
			}
			if (sSort !== "") {
				oColumn.setSortProperty(sSort)
			}
			return oColumn;
		},

		_showEmployeeDetail : function (oEvent) {
			var oView = this.getView();
			var oModelForMatrix = this.getView().getModel("oModelForMatrix");
			var mEmpDataLocal = oEvent.getSource().data("mEmpData");
			oModelForMatrix.setProperty("/" + mEmpDataLocal.sProperty, mEmpDataLocal);
			if (!this._EmpPopover[mEmpDataLocal.sProperty]) {
				this._EmpPopover[mEmpDataLocal.sProperty] = Fragment.load({
					id: oView.getId() + "_EMP" + mEmpDataLocal.sProperty,
					name: "sap.deloitte.employeemanagement.employeemanagementui.fragments.MatchingMatrixEmployee",
					controller: this
				}).then(function(oPopover) {
					oView.addDependent(oPopover);
					oPopover.bindElement({
						path : "/" + mEmpDataLocal.sProperty,
						model: "oModelForMatrix"
					});
					return oPopover;
				});
			}
			this._EmpPopover[mEmpDataLocal.sProperty].then(function(oPopover) {
				oPopover.openBy(oEvent.getSource());
			});
		},

		_showPositionDetail : function (oEvent) {
			var oView = this.getView();
			var oModelForMatrix = this.getView().getModel("oModelForMatrix");
			var sPath = oEvent.getSource().getBindingContext("oModelForMatrix").getPath();
			var mPosDataLocal = oModelForMatrix.getProperty(sPath);
			oModelForMatrix.setProperty("/SelectedPosition", mPosDataLocal);
			if (!this._PosPopover) {
				this._PosPopover = Fragment.load({
					id: oView.getId() + "_POS",
					name: "sap.deloitte.employeemanagement.employeemanagementui.fragments.MatchingMatrixPosition",
					controller: this
				}).then(function(oPopover) {
					oView.addDependent(oPopover);
					return oPopover;
				});
			}
			this._PosPopover.then(function(oPopover) {
				oPopover.openBy(oEvent.getSource());
			});
		},

		_showSuccessorDetail : function (oEvent) {
			var oView = this.getView();
			var oModelForMatrix = this.getView().getModel("oModelForMatrix");
			var sPath = oEvent.getSource().getBindingContext("oModelForMatrix").getPath();
			var mPosDataLocal = oModelForMatrix.getProperty(sPath);
			oModelForMatrix.setProperty("/SelectedSuccessor", mPosDataLocal);
			if (!this._SuccessorPopover) {
				this._SuccessorPopover = Fragment.load({
					id: oView.getId() + "_SS",
					name: "sap.deloitte.employeemanagement.employeemanagementui.fragments.MatchingMatrixSuccessor",
					controller: this
				}).then(function(oPopover) {
					oView.addDependent(oPopover);
					return oPopover;
				});
			}
			this._SuccessorPopover.then(function(oPopover) {
				oPopover.openBy(oEvent.getSource());
			});
		},

		_showTalentPoolDetail : function (oEvent) {
			var oView = this.getView();
			var oModelForMatrix = this.getView().getModel("oModelForMatrix");
			var sPath = oEvent.getSource().getBindingContext("oModelForMatrix").getPath();
			var mPosDataLocal = oModelForMatrix.getProperty(sPath);
			oModelForMatrix.setProperty("/SelectedTalentPool", mPosDataLocal);
			if (!this._TalentPoolPopover) {
				this._TalentPoolPopover = Fragment.load({
					id: oView.getId() + "_TP",
					name: "sap.deloitte.employeemanagement.employeemanagementui.fragments.MatchingMatrixTalentPool",
					controller: this
				}).then(function(oPopover) {
					oView.addDependent(oPopover);
					return oPopover;
				});
			}
			this._TalentPoolPopover.then(function(oPopover) {
				oPopover.openBy(oEvent.getSource());
			});
		},

		_selectCandidate : function (oEvent) {
			var sSrc = oEvent.getSource().getSrc();
			if (sSrc === "sap-icon://employee") {
				return;
			} 
			var oModelForMatrix = this.getView().getModel("oModelForMatrix");
			var mEmployee = oEvent.getSource().data("mEmployee");
			var sPath = oEvent.getSource().getBindingContext("oModelForMatrix").getPath();
			var mPosDataLocal = oModelForMatrix.getProperty(sPath);
			var aEmployee = mPosDataLocal.selected.split(",");
			if (sSrc === "sap-icon://employee-approvals") {
				aEmployee.push(mEmployee.employeeId);
			} else {
				aEmployee = aEmployee.filter(function(sEmp) {
					return sEmp !== mEmployee.employeeId;
				});
			}
			mPosDataLocal.selected = aEmployee.join(",");
			oModelForMatrix.setProperty(sPath , mPosDataLocal);
			oModelForMatrix.refresh(true);
		},

		_switchToReady: function (oEvent) {
			var state = oEvent.getSource().getParameters().state;
			var oModelForMatrix = this.getView().getModel("oModelForMatrix");
			var sPath = oEvent.getSource().getBindingContext("oModelForMatrix").getPath();
			var mPosDataLocal = oModelForMatrix.getProperty(sPath);
			mPosDataLocal.ready = state;
			oModelForMatrix.setProperty(sPath , mPosDataLocal);
			oModelForMatrix.refresh(true);
		},

		_handleClosePosition: function () {
			if (this._PosPopover) {
				Fragment.byId(this.getView().getId() + "_POS", "sID_Position_Popover").close();
			}
		},

		_handleCloseCandidate: function (oEvent) {
			var sProperty = oEvent.getSource().data("sProperty");
			if (this._EmpPopover[sProperty]) {
				Fragment.byId(this.getView().getId() + "_EMP" + sProperty, "sID_Employee_Popover").close();
			}
		},

		//Matching Matrix End

    });

});