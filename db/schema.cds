using { managed } from '@sap/cds/common';
namespace cap.employeeManagment;

entity Employees : managed {

    @title : 'Employee ID'
    key ID: Integer;

    @title: 'Employee Name'
    name: String;

    @title: 'Gender'
    gender: String;

    @title: 'Date of Birth'
    dob: Date;

    @title: 'SSN'
    ssn: String;

    @title: 'Address'
    address: String;

    @title: 'Job Title'
    jobTitle: Association to JobTitles;

    @title: 'Business Unit'
    businessUnit: Association to BusinessUnits;

}

entity JobTitles: managed {

    @title: 'Id'
    key ID: Integer;

    @title: 'Job Title'
    title: String;
    
    @title: 'Employees'
    employees: Association to many Employees on employees.jobTitle = $self;

}

entity BusinessUnits : managed {
    
    @title: 'Id'
    key ID: Integer;

    @title: 'Name'
    name: String;

    @title: 'Employees'
    employees: Association to many Employees on employees.businessUnit = $self;

}