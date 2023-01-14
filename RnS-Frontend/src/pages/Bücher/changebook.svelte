<script>
    import axios from "axios";
    export let params = {};
    let id;
    let Bücher = {};
    function getBücher() {
        axios.get("http://localhost:3001/api/Books").then((response) => {
            Bücher = response.data;
        });
    }
$: {
    // "Reactive Statement":
    // This block of is executed whenever the value of a variable in it changes.
    // See https://svelte.dev/tutorial/reactive-statements
    id = params.id;
    getBücher();
}

    let newbook = {
        Name: "",
        Author: "",
        Userrrating: 0,
        Reviews: 0,
        Price: 0,
        Year: 0,
        Genre: "",
    };
    function Changebook(){
        
        axios.put("http://localhost:3001/api/changebook/"+id,newbook)
            .then((response) => {
                alert("Book changed");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    
    }
    /*
    <script>
    import axios from "axios";

    export let params = {};

    let id;

    $: {
        // "Reactive Statement":
        // This block of is executed whenever the value of a variable in it changes.
        // See https://svelte.dev/tutorial/reactive-statements
        id = params.id;
        getBücher();
    }

    let Bücher = {};

    function getBücher() {
        axios.get("http://localhost:3001/api/Books/" + id)
            .then((response) => {
                Bücher = response.data;
            });
    }
    */
</script>

<h1>Change book </h1>

<form>
    <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input class="form-control" type="text" bind:value={newbook.Name} />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Author</label>
        <input class="form-control" type="text" bind:value={newbook.Author} />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Userrating</label>
        <input
            class="form-control"
            type="number"
            bind:value={newbook.Userrrating}
        />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Reviews</label>
        <input class="form-control" type="number" bind:value={newbook.Reviews} />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Price</label>
        <input class="form-control" type="number" bind:value={newbook.Price} />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Year</label>
        <input class="form-control" type="number" bind:value={newbook.Year} />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Genre</label>
        <input class="form-control" type="text" bind:value={newbook.Genre} />
    </div>
    <button on:click={Changebook} type="button" class="btn btn-primary">
        Change Book
    </button>
</form>

<style>
</style>
