<script>
    import axios from "axios";
    import Books from "../Bücher/books.svelte";

    export let params = {};

    let id;

    $: {
        // "Reactive Statement":
        // This block of is executed whenever the value of a variable in it changes.
        // See https://svelte.dev/tutorial/reactive-statements
        id = params.id;
        getAutoren();
    }
    let Bücher = [];
    function getBücher() {
        axios.get("http://localhost:3001/api/Books").then((response) => {
            Bücher = response.data;
        });
    }
    getBücher();

    let Autoren = {};

    function getAutoren() {
        axios
            .get("http://localhost:3001/api/Authors/" + id)
            .then((response) => {
                Autoren = response.data;
            });
    }
</script>

<h2>Details zu {Autoren.Autoren}</h2>
<table class="table">
    <tr>ID: {Autoren._id}</tr>

    <tr>Lebzeit: {Autoren.Lebzeit}</tr>
</table>
<h1>Books by this author</h1>
<table class="table">
    <thead>
        <tr> Name of book </tr>
    </thead>
    <tbody>
        {#each Bücher as Bücher}
            <tr>
                
                    {#if Bücher.Author === Autoren.Autoren}
                    <td>
                        <a href={"#/Books/" + Bücher._id}>
                            {Bücher.Name}
                        </a>
                    </td>
                    {/if}
                
            </tr>
        {/each}
    </tbody>
</table>

<style>
    
</style>
