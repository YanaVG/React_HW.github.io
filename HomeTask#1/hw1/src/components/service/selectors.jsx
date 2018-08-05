export const getVisibleBooks = (allBooks, filter) => 
allBooks.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()));