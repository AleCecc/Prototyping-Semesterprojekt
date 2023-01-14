<script>
    import axios from "axios";

    let Bücher = {
        Name: "",
        Author: "",
        Userrrating: "",
        Reviews: "",
        Price: "",
        Year: "",
        Genre: "",
    };

    function addBuch() {
        axios.post("http://localhost:3001/api/Books", Bücher)
            .then((response) => {
                alert("Buch added");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a book</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input class="form-control" type="text" bind:value={Bücher.Name} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Author</label>
            <input class="form-control" type="text" bind:value={Bücher.Author} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Userrating</label>
            <input class="form-control" type="number" bind:value={Bücher.Userrrating} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Reviews</label>
            <input class="form-control" type="number" bind:value={Bücher.Reviews} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Price</label>
            <input class="form-control" type="number" bind:value={Bücher.Price} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Year</label>
            <input class="form-control" type="number" bind:value={Bücher.Year} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Genre</label>
            <input class="form-control" type="text" bind:value={Bücher.Genre} />
        </div>
        <button on:click={addBuch} type="button" class="btn btn-primary">
            Add Book
        </button>
    </form>
</div>
