var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReferenceItem = /** @class */ (function () {
    /*title: string;
    year: number;
    constructor(newTitle: string, newYear:number)
    {
        console.log(`Creating a new ReferenceItem...`)
        this.title = newTitle;
        this.year = newYear;
    }
*/
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
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.PrintItem = function () {
        console.log(this.title + " was published in " + this.year + ", department: " + ReferenceItem.department);
        console.log("Edition: " + this.edition + " (" + this.year + ")");
    };
    Encyclopedia.prototype.PrintCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia("Wuthering Heights", 1847, 1);
refBook.PrintCitation();
