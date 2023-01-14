<script>
    import axios from "axios";

    let Autoren = [];

    function getAutoren() {
        axios.get("http://localhost:3001/api/authors").then((response) => {
            Autoren = response.data;
        });
    }
    getAutoren();
    
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Authors</h1>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Lebzeit</th>
                <th>Nationalität</th>
            </tr>
        </thead>
        <tbody>
            {#each Autoren as Autoren}
                <tr>
                    <td>
                        {Autoren._id}
                    </td>
                    <td>
                        <a href={"#/Authors/" + Autoren._id}>
                            {Autoren.Autoren}
                        </a>
                    </td>
                    <td>
                        {Autoren.Lebzeit}
                        
                    </td>
                    <td>
                        {Autoren.Nationalität}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
