var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
    }
    ReferenceItem.prototype.Get_Publisher = function () {
        return this._publisher.toUpperCase();
    };
    ReferenceItem.prototype.Set_Publisher = function (newPublisher) {
        this._publisher = newPublisher;
    };
    ReferenceItem.prototype.PrintItem = function () {
        console.log(this.title + " was published in " + this.year + ", department: " + ReferenceItem.department);
    };
    ReferenceItem.department = "administration";
    return ReferenceItem;
}());
var ref = new ReferenceItem("Wuthering Heights", 1847);
ref.PrintItem();
ref.Set_Publisher("Emily");
console.log(ref.Get_Publisher());
