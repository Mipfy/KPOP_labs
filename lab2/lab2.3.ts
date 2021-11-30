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

let favoriteAuthor: Author =
{
    name: "John",
    email: "johnyy@gmail.com",
    numBooksPublished: 3
}

let favoriteLibrarian: Librarian =
{
    name: "Jack",
    email: "jjack@gmail.com",
    department: "cataloging",
    AssistCustomer(custName: string){}
}

console.log(favoriteAuthor);
console.log(favoriteLibrarian);