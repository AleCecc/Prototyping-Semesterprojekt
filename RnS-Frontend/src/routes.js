// Pages
import Home from "./pages/Home.svelte";
import Autoren from "./pages/Autoren/authors.svelte"
import AutorenDetails from "./pages/Autoren/authordetails.svelte"
import xyz from "./pages/Bücher/bookdetails.svelte"
import CreateBuch from "./pages/Bücher/createbook.svelte"
import books from "./pages/Bücher/books.svelte"
import mylist from "./pages/Merkliste/MyList.svelte"
import changebook from "./pages/Bücher/changebook.svelte"

export default {
    // Home
    '/': Home,
    '/home': Home,

    // Autoren
    '/Authors/:id': AutorenDetails,
    '/Authors/': Autoren,

    // Books
    '/create-Book': CreateBuch,
    '/books': books,
    '/books/:id': xyz,
    '/changebook/:id':changebook,
    // MyList
    '/MyList':mylist
}
