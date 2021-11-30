var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.AssistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = "Jack";
favoriteLibrarian.AssistCustomer("John");
