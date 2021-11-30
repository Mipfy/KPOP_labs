interface Person
{
    name: string;
    email: string;
}

interface Author extends Person
{
    numBooksPublished:number;
}

interface Librarian extends Person
{
    department: string;
    AssistCustomer(custName:string): void;
}


class UniversityLibrarian implements Librarian
{
    name: string;
    email: string;
    department: string;
    AssistCustomer(custName: string)
    {
        console.log(`${this.name} is assisting ${custName}`)

    }
}

let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "Jack";
favoriteLibrarian.AssistCustomer("John");