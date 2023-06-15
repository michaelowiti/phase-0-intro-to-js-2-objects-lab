// Write your solution in this file!
const employee ={ name: "lolita",
                  streetAddress:"newJersey"};

function updateEmployeeWithKeyAndValue(employee,object,key,value){
const newEmployee={...employee,
                     name:"Sam",
                    streetAddress:"11 Broadway"};

    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.streetAddress="12 Broadway"
               
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    
    const newObject= {...employee,}
        delete newObject.name;
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee
}