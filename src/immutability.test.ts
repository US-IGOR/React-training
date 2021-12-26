import {
    UserType,
    makeHairstyle,
    moveUser,
    UserWithLaptopType,
    upgradeLaptop,
    UserWithBooksType,
    addBooks,
    changeBook,
    deleteBook,
    UserWithCompaniesType,
    addCompanies,
    updateCompanieTitle, updateCompanieTitle2, updateCompanyTitle2
} from './immutability'


test('test by makeHairstyle', () => {
    let user: UserType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Minsk'}
    }


    const awesomeUser = makeHairstyle(user)

    user.address.title = 'London'

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
    expect(user.address.title).toBe('London')
    expect(awesomeUser.address.title).toBe('London')
})


test('upgrade laptop by macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'hp'}
    }


    const userWithNewLaptop = upgradeLaptop(user, 'MacBook')


    expect(user).not.toBe(userWithNewLaptop)
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop)
    expect(user.address).toBe(userWithNewLaptop.address)
    expect(userWithNewLaptop.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('hp')

})


test('add books', () => {
    let user: UserWithBooksType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'hp'},
        books: ['css', 'js', 'react', 'html']
    }


    const userWithNewBooks = addBooks(user, ['algorithms', 'API'])


    expect(user).not.toBe(userWithNewBooks)
    expect(user.laptop).toBe(userWithNewBooks.laptop)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(userWithNewBooks.books[4]).toBe('algorithms')
    expect(userWithNewBooks.books[5]).toBe('API')
    expect(userWithNewBooks.books).toEqual(['css', 'js', 'react', 'html', 'algorithms', 'API'])
    expect(user.books.length).toBe(4)

})


test('change book', () => {
    let user: UserWithBooksType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'hp'},
        books: ['css', 'js', 'react', 'html']
    }


    const userWithChangedBooks = changeBook(user, 'js', 'ts')


    expect(user).not.toBe(userWithChangedBooks)
    expect(user.laptop).toBe(userWithChangedBooks.laptop)
    expect(user.address).toBe(userWithChangedBooks.address)
    expect(userWithChangedBooks.books[1]).toBe('ts')
    expect(user.books.length).toBe(4)

})



test('delete book', () => {
    let user: UserWithBooksType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'hp'},
        books: ['css', 'js', 'react', 'html']
    }


    const userWithDeleteBooks = deleteBook(user, 'html')


    expect(user).not.toBe(userWithDeleteBooks)
    expect(user.laptop).toBe(userWithDeleteBooks.laptop)
    expect(user.address).toBe(userWithDeleteBooks.address)
    expect(userWithDeleteBooks.books.length).toBe(3)
    expect(user.books.length).toBe(4)

})


test('user with companies', () => {
    let user: UserWithCompaniesType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'hp'},
        companies:[{id: 1, title: 'ElectroImpuls'},{id: 2, title: 'Promira'}]
    }

const newCompanie:{ id: number, title: string } = {id : 3, title:'EPAM'}

    const userWithNewCompanies = addCompanies(user, newCompanie)


    expect(userWithNewCompanies.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)
    expect(userWithNewCompanies.companies[2]).toEqual({id:3,title:'EPAM'})
})


test('user with companies update', () => {
    let user: UserWithCompaniesType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'hp'},
        companies:[{id: 1, title: 'ElectroImpuls'},{id: 2, title: 'Promira'}]
    }


    const userWithUpdateCompanies = updateCompanieTitle(user, 2,'EPAM')


    expect(userWithUpdateCompanies.companies.length).toBe(2)
    expect(user.companies.length).toBe(2)
    expect(userWithUpdateCompanies.companies[1]).toEqual({id:2,title:'EPAM'})
})


test('update company', () => {
    let user: UserWithLaptopType = {
        name: 'Igor',
        hair: 32,
        address: {title: 'Minsk'},
        laptop: {title: 'hp'},
    }
let companies = {
        'Igor' : [{id: 1, title: 'ElectroImpuls'},{id: 2, title: 'Promira'}],
        'Zhenia' : [{id: 1, title: 'Cops'},{id: 2, title: 'Broker'}]
}

let copy = updateCompanyTitle2 (companies,'Zhenia',2,'EPAM')


    expect(copy[ 'Zhenia']).not.toBe(companies[ 'Zhenia'])
    expect(copy['Igor']).toEqual(companies['Igor'])
    expect(copy['Zhenia'][1].title).toBe('EPAM')

})
