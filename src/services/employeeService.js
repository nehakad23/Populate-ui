 const KEYS={
    employees:'employees',
    employeeId: 'employeeId',

 }
 export const getPlantCollection = ()=>([
    {id:'1', title: 'Plant 1'},
    {id:'2', title: 'Plant 2'},
    {id:'3', title: 'Plant 3'},
    {id:'4', title: 'Plant 4'},
    {id:'5', title: 'Plant 5'},
])

export function insertEmployee(data){
    let employees=getAllEmployees();
    data['id']=generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(data))
}
export function generateEmployeeId(){
    if(localStorage.getItem(KEYS.employeeId)==null)
    localStorage.setItem(KEYS.employeeId, '0')
    var id= parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;

}

export function getAllEmployees(){
    if(localStorage.getItem(KEYS.employees)==null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees))
}

