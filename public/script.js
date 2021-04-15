const bookList = document.querySelector("#books-list")

//Add Book
const book = document.querySelector(".book")
const input = document.querySelector(".add-book input")

const addBook = document.querySelector(".add-book button")
addBook.addEventListener("click", () => {
    const newBook = book.cloneNode(true)
    const span = newBook.children[0].children[0].children[0]
    const newBookName = input.value

    span.textContent = newBookName
    bookList.appendChild(newBook)

    input.value = "" 

    initRemoveBook()
})

//Remove book
function initRemoveBook() {
    const removeBook = document.querySelectorAll(".book span i")
    removeBook.forEach((book) => {
        book.addEventListener("click", (event) => {
            const remove = event.currentTarget
            remove.parentNode.parentNode.parentNode.remove()
        })
    })
}

initRemoveBook()

//Find book
const searchBooks = document.forms["search-books"]

searchBooks.addEventListener("keyup", function (event) {
    const term = event.target.value.toUpperCase()
    const books = bookList.getElementsByTagName("div")

    Array.from(books).forEach(function (job) {
        const title = job.textContent

        if (title.toUpperCase().indexOf(term) != -1) {
            job.style.display = "flex"

        } else {
            job.style.display = "none"
        }
    })
})