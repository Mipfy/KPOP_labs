abstract class ReferenceItem
{
    /*title: string;
    year: number;
    constructor(newTitle: string, newYear:number)
    {
        console.log(`Creating a new ReferenceItem...`)
        this.title = newTitle;
        this.year = newYear;
    }
*/
    constructor(public title: string, protected year: number){}
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

    abstract PrintCitation():void;
}

class Encyclopedia extends ReferenceItem
{
    edition: number;

    constructor(title: string, year: number, edition: number)
    {
        super(title,year);
        this.edition = edition;
    }

    PrintItem()
    {
        console.log(`${this.title} was published in ${this.year}, department: ${ReferenceItem.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`)
    }

    PrintCitation()
    {
        console.log(`${this.title} - ${this.year}`);
    }
}

let refBook = new Encyclopedia("Wuthering Heights", 1847, 1);
refBook.PrintCitation();