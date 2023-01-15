export const author = {
    fullName: "Bob Alice",
    books: ["Forest", "Aqua", "Skylines"],
    printBooks() {
      this.books.forEach(book => console.log(book + ' by ' +
         this.fullName));
    }
 }