<script>
    import axios from "axios";
    let Bücher =[];
    function getListe() {
        axios.get("http://localhost:3001/api/MyList").then((response) => {
            Bücher = response.data;
        });
    }
    let büchernamen=[];
    function getBücher() {
        axios.get("http://localhost:3001/api/Books").then((response) => {
            büchernamen = response.data;
        });
    }
    getBücher();
    getListe();
    let Autoren = [];

    function getAutoren() {
        axios.get("http://localhost:3001/api/Authors").then((response) => {
            Autoren = response.data;
        });
    }
    let del={
        _id:"",
        Name: "",
        Author: "",
        Userrrating: "",
        Reviews: "",
        Price: "",
        Year: "",
        Genre: "",
    };
    getAutoren();
    function delet(x){
        del._id=x._id;
        deletefromlist();
    }
    function deletefromlist() {
        
        axios.delete("http://localhost:3001/api/MyList/"+del._id)
            .then((response) => {
                alert("Book deleted");
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">List of my books</h1>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {#each Bücher as Bücher}
                <tr>
                    <td>{Bücher._id}</td>
                    <td>
                        {#each büchernamen as namen}
                            {#if Bücher.Name===namen.Name}
                            <a href={"#/Books/" + namen._id} >
                                {namen.Name}
                            </a>
                            {/if}
                            {/each}
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
                        <button on:click={delet(Bücher)} >🗑</button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
