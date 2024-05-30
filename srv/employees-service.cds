using { cap.employeeManagment as emp } from '../db/schema';

service Employees @(path:'/Employees') { 

  @requires: 'authenticated-user'
  entity Employees as projection on emp.Employees;
  entity JobTitles as projection on emp.JobTitles;
  entity BusinessUnits as projection on emp.BusinessUnits;

}
