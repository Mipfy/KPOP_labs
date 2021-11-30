function getAllworkers() {
    var workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    var workersCount = workers.length;
    console.log("Workers: " + workersCount);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker_1 = workers_1[_i];
        if (worker_1.available) {
            var workerName = worker_1.Name;
            console.log("Name: " + workerName + ", Surname: " + worker_1.surname);
            return;
        }
    }
}
var workers = getAllworkers();
logFirstAvailable(workers);
/// 1.2
var Category;
(function (Category) {
    Category[Category["BUSSINES_ANALYST"] = 0] = "BUSSINES_ANALYST";
    Category[Category["DEVELOPER"] = 1] = "DEVELOPER";
    Category[Category["DESIGNER"] = 2] = "DESIGNER";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["SCRUM_MASTER"] = 4] = "SCRUM_MASTER";
})(Category || (Category = {}));
function addCategory(workers) {
    for (var i = 0; i < workers.length; ++i) {
        workers[i]["category"] = Category[i];
    }
}
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = Category.DESIGNER; }
    var workers = getAllworkers();
    addCategory(workers);
    var result = [];
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker_2 = workers_2[_i];
        if (worker_2.category == Category[category]) {
            result.push(worker_2.surname);
        }
    }
    return result;
}
function logWorkersNames(workers) {
    for (var _i = 0, workers_3 = workers; _i < workers_3.length; _i++) {
        var worker_3 = workers_3[_i];
        console.log(worker_3);
    }
}
var surnames = getWorkersNamesByCategory(Category.QA);
logWorkersNames(surnames);
/// 1.3
function addId(workers) {
    for (var i = 0; i < workers.length; ++i) {
        workers[i]["id"] = i;
    }
}
addId(workers);
addCategory(workers);
workers.forEach(function (element) {
    if (element.category == Category[1])
        console.log("Name: " + element.Name + ", Surname: " + element.surname);
});
function getWorkerByID(id) {
    var worker = workers.find(function (elem) { return elem.id == id; });
    if (worker)
        return [worker.Name, worker.surname, worker.salary, worker.available];
    return [];
}
var worker = getWorkerByID(2);
console.log(worker);
/// 1.4
function createCustomerID(name, id) {
    return id + "-" + name;
}
var myID = createCustomerID("Ann", 10);
console.log(myID);
var IdGenerator = function (name, id) { return id + "-" + name; };
console.log(IdGenerator("Nazar", 15));
IdGenerator = createCustomerID;
console.log(IdGenerator("Nazar", 26));
/// 1.5
function createCustomer(name, age, city) {
    var result = name;
    if (age)
        result += ", " + age;
    if (city)
        result += ", " + city;
    console.log(result);
}
createCustomer("Nazar");
createCustomer("Nazar", 19);
createCustomer("Nazar", 19, "Kyiv");
console.log(getWorkersNamesByCategory());
logFirstAvailable();
function сheckoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    console.log(customer);
    var result = [];
    for (var _a = 0, workerIDs_1 = workerIDs; _a < workerIDs_1.length; _a++) {
        var id = workerIDs_1[_a];
        var worker_4 = getWorkerByID(id);
        if (worker_4[3]) {
            result.push((worker_4[0] + " " + worker_4[1]));
        }
    }
    return result;
}
var myWorkers = сheckoutWorkers('Ann', 1, 2, 4);
myWorkers.forEach(function (element) {
    console.log(element);
});
