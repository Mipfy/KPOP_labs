var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 1000] = "BusinessAnalyst";
    Category[Category["Developer"] = 1500] = "Developer";
    Category[Category["Designer"] = 1600] = "Designer";
    Category[Category["QA"] = 1300] = "QA";
    Category[Category["ScrumMaster"] = 2000] = "ScrumMaster";
})(Category || (Category = {}));
var logPrize = function (el) { return console.log(el); };
var worker = {
    id: 4,
    name: "Evgen",
    surname: "Zhukov",
    available: true,
    salary: Category.Designer,
    markPrize: logPrize
};
worker.markPrize("mark Prize");
