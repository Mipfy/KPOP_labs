enum Category
{
    BusinessAnalyst = 1000,
    Developer = 1500,
    Designer = 1600,
    QA = 1300,
    ScrumMaster = 2000
}


interface PrizeLogger
{
    (el:string):void;
}

interface Worker_
{
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: Category;
    markPrize: PrizeLogger
}

let logPrize:PrizeLogger = (el:string ) => console.log(el);

let worker: Worker_ ={
    id: 4,
    name: "Evgen",
    surname: "Zhukov",
    available: true,
    salary:Category.Designer,
    markPrize: logPrize
}

worker.markPrize("mark Prize");