<script>
    import axios from "axios";
    import { handle_promise } from "svelte/internal";
    import Bookdetails from "./bookdetails.svelte";
    let Bücher = [];
    function getBücher() {
        axios.get("http://localhost:3001/api/Books").then((response) => {
            Bücher = response.data;
        });
    }
    getBücher();
    let Autoren = [];

    function getAutoren() {
        axios.get("http://localhost:3001/api/Authors").then((response) => {
            Autoren = response.data;
        });
    }
    getAutoren();
    
    

    
    let listentry = {
        Name: "",
        Author: "",
        Userrrating: "",
        Reviews: "",
        Price: "",
        Year: "",
        Genre: "",
    };
    //save values first to var listentry and then to list
    function handle (x){
        listentry.Name=x.Name;
        listentry.Author=x.Author;
        listentry.Userrrating=x.Userrrating;
        listentry.Reviews=x.Reviews;
        listentry.Price=x.Price;
        listentry.Year=x.Year;
        listentry.Genre=x.Genre;
        addtolist();
    }
    function addtolist() {
        axios.post("http://localhost:3001/api/MyList", listentry)
            .then((response) => {
                alert("Book added");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
    let searchTerm=undefined;
    // $: visBücher= searchTerm ?
    // Bücher.filter(Bücher => {Bücher.name.toLowerCase().includes(searchTerm.toLowerCase())}) : Bücher;
    
    
    $: visBücher = searchTerm ? Bücher.filter(b => b.Name.toLowerCase().includes(searchTerm.toLowerCase())) : Bücher;

</script>
<input type="text" bind:value={searchTerm} placeholder="Search...">
<div class="mb-5">
    <h1 class="mt-3">List of all Books</h1>
    <a href="#/create-Book">+ Add Book</a>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Add to List</th>
                <th>Change entry    </th>
            </tr>
        </thead>
        <tbody key={visBücher}>
            {#each visBücher as Bücher}
            
                <tr>
                    <td>
                        {Bücher._id}
                    </td>
                    <td>
                        <a href={"#/Books/" + Bücher._id}>
                            {Bücher.Name}
                        </a>
                    </td>
                    <td>
                        {#each Autoren as Autoren}
                        {#if Bücher.Author===Autoren.Autoren}
                        <a href={"#/Authors/" + Autoren._id} >
                            {Autoren.Autoren}
                        </a>
                        {/if}
                        {/each}
                    </td>
                    <td>
                        <button on:click={handle(Bücher)}>♥</button> 
                    </td>
                    <td>
                        <a href={"/#/changebook/"+Bücher._id}><button ><img src="/images/index.png" width=17 height=17 alt=""></button></a>
                    </td>
                </tr>
                
            {/each}
            <tr>
                
            </tr>
        </tbody>
    </table>
</div>
