enum Category
{
    BusinessAnalyst = 1000,
    Developer = 1500,
    Designer = 1600,
    QA = 1300,
    ScrumMaster = 2000
}


interface Worker_
{
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
}

function GetAllWorkers()
{
    let workers: Worker_[] = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: Category.BusinessAnalyst},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: Category.Developer},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: Category.Designer},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: Category.Developer}
    ]
    return workers;
}

function GetWorkersByID(id:number)
{
    let worker = GetAllWorkers().find(i => i.id === id);
    return worker
}

function PrintWorker(worker: Worker_)
{
    console.log(`${worker.name} ${worker.surname} ${worker.salary}`);
}

PrintWorker(GetWorkersByID(2));