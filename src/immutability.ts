export type UserType = {
    name: string
    hair: number
    address: { title: string }

}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserWithLaptopType & {
    books: Array<string>
}


export type UserWithCompaniesType = UserWithLaptopType & {
    companies: Array<{ id: number, title: string }>
}


export const makeHairstyle = (u: UserType) => {
    const copy = {
        ...u, hair: u.hair / 2
    }
    return copy
}

export const moveUser = (u: UserWithLaptopType, t: string) => {
    const copy = {
        ...u,
        address: {
            ...u.address,
            title: t
        }
    }

    /*    copy.address = {
            ...copy.address,
            title:t
        }*/

    return copy
}


export const upgradeLaptop = (u: UserWithLaptopType, t: string) => {
    const copy = {
        ...u,
        laptop: {...u.laptop, title: t}

    }
    return copy

}

export const addBooks = (u: UserWithBooksType, x: Array<string>) => {
    return {
        ...u,
        books: [...u.books, ...x]
    }
}


export function changeBook(u: UserWithBooksType, changingBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(m => m === changingBook ? newBook : m)
    }
}

export const deleteBook = (u: UserWithBooksType, bookForDelete: string) => ({
    ...u, books: u.books.filter(f => f !== bookForDelete)
})






















export const addCompanies = (u: UserWithCompaniesType, newCompanie: { id: number, title: string }) => ({
    ...u,
    companies: [...u.companies, newCompanie]

})