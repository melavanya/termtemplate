export interface EmployeeDetails {
    empName: string;
    empID: number;
    empJobTitle: string;
    empReportsTo: string;
    empEndDate: string;
    reason: string;
    SUPER: {status: string, color: string};
    HR: { status: string, color: string };
    IT: { status: string, color: string };   
}

export interface TerminationProcessDetils {
    empID: number;
    empName: string;
    stepID: Array<number>;
    completedBy: string;
    activity: any;
 }
  
export const EmployeeData: EmployeeDetails[] = [
    { empName: 'Marleen Simmons', empID: 909100, empJobTitle: 'Supervisor', empReportsTo: 'Derek Fogge', empEndDate: 'June 19, 2020', reason: 'Resignation', SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Asher Woods', empID: 919121, empJobTitle: 'Manager', empReportsTo: 'Nicolas Contreas', empEndDate: 'June 30, 2020',  reason: 'Job Abandonment',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Olivia Taylor', empID: 903451, empJobTitle: 'Lead', empReportsTo: 'Edgar Jones', empEndDate: 'June 15, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Jasper Kim', empID: 958761, empJobTitle: 'Tech2', empReportsTo: 'Julie Cetoute', empEndDate: 'June 17, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Amelia Benson', empID: 909132, empJobTitle: 'Admin2', empReportsTo: 'Amanda Gibson', empEndDate: 'June 22, 2020',  reason: 'Job Abandonment',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Cora Moore', empID: 909378, empJobTitle: 'Manager', empReportsTo: 'Jessica Dawson', empEndDate: 'June 20, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Isabella Cooper', empID: 909198, empJobTitle: 'Planner1', empReportsTo: 'Gabriella Henry', empEndDate: 'June 30, 2020', reason: 'Resignation', SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Levi Jackson', empID: 908714, empJobTitle: 'Supervisor', empReportsTo: 'Maria Parker', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Violet Williams', empID: 906423, empJobTitle: 'MHTech2', empReportsTo: 'Margaret Strong', empEndDate: 'June 30, 2020', reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Thomas Peterson', empID: 905009, empJobTitle: 'Tech Writer', empReportsTo: 'William Sanders', empEndDate: 'June 30, 2020',  reason: 'Job Abandonment',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Arthur Jones', empID: 904532, empJobTitle: 'Trainer', empReportsTo: 'Christopher Fox', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Elizabeth Durham', empID: 904571, empJobTitle: 'Supervisor', empReportsTo: 'Joseph Curry', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Charlotte Naik', empID: 907892, empJobTitle: 'Janitorial', empReportsTo: 'Nancy Lynch', empEndDate: 'June 30, 2020',  reason: 'Job Abandonment',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'}},
    { empName: 'Theodore Thompson', empID: 902321, empJobTitle: 'Tech1', empReportsTo: 'Alex Hill', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Isla James', empID: 998765, empJobTitle: 'Supervisor', empReportsTo: 'Keith Slaton', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Jane Brown', empID: 945632, empJobTitle: 'Lead', empReportsTo: 'Jimmy Green', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Dia Malik', empID: 909104, empJobTitle: 'ASMTech2', empReportsTo: 'Victor Cox', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Sherry Goodwin', empID: 909700, empJobTitle: 'Manager', empReportsTo: 'Ricky Simmons', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Alex wilson', empID: 909400, empJobTitle: 'Trainer', empReportsTo: 'Shakira Redding', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} },
    { empName: 'Ankit Arora', empID: 909160, empJobTitle: 'Supervisor', empReportsTo: 'Brent Butler', empEndDate: 'June 30, 2020',  reason: 'Resignation',SUPER: { status: 'Initiated', color: 'black'}, IT: { status:'Initiated',color:'black'},HR: {status:'Initiated',color:'black'} }
];
export interface StepDetails {
    select: boolean;
    stepID: Number;
    stepDesc: string;
    dept: string;
}
export const StepData: StepDetails[] = [
    { stepID: 1, stepDesc: 'Disable Badge', dept:'HR', select:false },
    { stepID: 2, stepDesc: 'Deactivate in Epicor', dept: 'HR', select:false },
    { stepID: 3, stepDesc: 'Create open position', dept: 'HR', select:false },
    { stepID: 4, stepDesc: 'Retrieve Equipment', dept: 'HR' , select:false},
    { stepID: 5, stepDesc: 'Free up Locker', dept: 'HR', select:false },
    { stepID: 6, stepDesc: 'Retrieve Badge', dept: 'HR', select:false },
    { stepID: 7, stepDesc: 'Retrieve clear bag', dept: 'HR', select:false },
    { stepID: 8, stepDesc: 'Sign release form', dept: 'HR' , select:false},
    { stepID: 9, stepDesc: 'Exit Interview', dept: 'HR', select:false },
    { stepID: 10, stepDesc: 'Disable Active Directory', dept: 'IT', select:false },
    { stepID: 11, stepDesc: 'Disable Email/Drive access', dept: 'IT', select:false },
    { stepID: 12, stepDesc: 'Delete phone data', dept: 'IT', select:false },
    { stepID: 13, stepDesc: 'Backup laptop data', dept: 'IT' , select:false},
    { stepID: 14, stepDesc: 'Backup email', dept: 'IT', select:false },
    { stepID: 15, stepDesc: 'Reassign drive docs', dept: 'IT', select:false },
    { stepID: 16, stepDesc: 'Delete bugzilla account', dept: 'IT', select:false}
];