In this project, let's create a books app by applying basic react concepts.

In Home Route, we fetch the books data which we stored in books.json file in src and iterate through that object and display the books that are available in json file.
We have a delete button in Home Route associated to each book item, upon clicking the trash icon the respective book data will be deleted from web page.
We also have a search feature in Home page route, where we can search books using book name or the author name.
Each Book is associated with a unique route using BookDetails component, upon clicking the Book title name in home page, we will be navigated to the web page of that specific book, where you can find the extra details of that particular book.
We have a Add Book button in Home Route upon clicking it, we will be navigated to AddABook Route where we can add the new book to our records which we store in local storage, so that we don't loose the data after the session.



