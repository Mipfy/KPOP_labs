class ReferenceItem{

    constructor(public title: string, private year: number){}
    private _publisher: string;
    static department = "administration";

    Get_Publisher()
    {
        return this._publisher.toUpperCase();
    }

    Set_Publisher(newPublisher: string)
    {
        this._publisher = newPublisher;
    }

    PrintItem()
    {
        console.log(`${this.title} was published in ${this.year}, department: ${ReferenceItem.department}`);
    }
}

let ref = new ReferenceItem("Wuthering Heights",1847);
ref.PrintItem();
ref.Set_Publisher("Emily");
console.log(ref.Get_Publisher());