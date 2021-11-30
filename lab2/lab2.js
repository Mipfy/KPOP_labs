var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 1000] = "BusinessAnalyst";
    Category[Category["Developer"] = 1500] = "Developer";
    Category[Category["Designer"] = 1600] = "Designer";
    Category[Category["QA"] = 1300] = "QA";
    Category[Category["ScrumMaster"] = 2000] = "ScrumMaster";
})(Category || (Category = {}));
function GetAllWorkers() {
    var workers = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.BusinessAnalyst },
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Developer },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Designer },
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.Developer }
    ];
    return workers;
}
function GetWorkersByID(id) {
    var worker = GetAllWorkers().find(function (i) { return i.id === id; });
    return worker;
}
function PrintWorker(worker) {
    console.log(worker.name + " " + worker.surname + " " + worker.salary);
}
PrintWorker(GetWorkersByID(2));
