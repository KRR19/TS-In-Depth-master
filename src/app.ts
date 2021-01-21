/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ---------------------------------------------------------
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }
function getAllBooks() {
    const books = <const>[
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

function logFirstAvalible(books: readonly any[] = getAllBooks()) {
    console.log(`Number of books: ${books.length}`);
    const book = books.find((book: { available: boolean }) => book.available);
    console.log(`First avalible book ${book.title}`);

}

function getBookTitlesCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();

    return books.filter((book: any) => book.category === category)
        .map(book => book.title);
}

function logBookTitle(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

function createCustomerID(name: string, id: number): string {
    return `${name} - ${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name ${name}`);

    if (age) console.log(`Customer age: ${age}`);
    if (age) console.log(`Customer city: ${city}`);
}

function getBookByID(id: number): any {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function checoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);
    return bookIDs.map(id => {
        const book = getBookByID(id);
        if (book?.available) {
            return book.title;
        }
    });
}

function getTitles(author: string): string[];
function getTitles(avalible: boolean): string[];
function getTitles(id: number, avalible: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, avalible] = args;

        if (typeof id === 'number' && typeof avalible === 'boolean') {
            return books.filter(book => book.id === id && book.available === avalible).map(book => book.title);
        }
    }
}

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

// Task 02.01
// logFirstAvalible(getAllBooks());
// logBookTitle(getBookTitlesCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());


// Task03.01
// const myID: string = createCustomer('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomer;
// console.log(idGenerator('Boris', 20));
// Task03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesCategory());
// logFirstAvalible();

// console.log(getBookByID(1));
// const myBooks = checoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 3.03
// console.log(getTitles(1, true));
// console.log(getTitles(false));

// TAsk 03.04

console.log(bookTitleTransform(''));
console.log(bookTitleTransform(100));






