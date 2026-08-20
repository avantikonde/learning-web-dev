type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee | Manager; 

let emp: Employee = {
    name: "Raj",
    startDate: new Date("2025-12-01") // Fixed: Initialized as Date object
};

let manager: Manager = {
    name: "Teju",
    department: "CS"
};

let teamLead: TeamLead = {
    name: "Avanti",
    startDate: new Date("2019-01-01"), 
    department: "HR"                   
};

function printTeamLeadDetails(leader: TeamLead) {
    console.log(`Name: ${leader.name}`);
    
    if ("startDate" in leader) {
        console.log(`Start Date: ${leader.startDate.toDateString()}`);
    }
    
    if ("department" in leader) {
        console.log(`Department: ${leader.department}`);
    }
}


printTeamLeadDetails(teamLead);
