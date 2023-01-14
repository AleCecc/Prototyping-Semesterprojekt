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
        axios.get("http://localhost:3001/api/Books/" + id).then((response) => {
            Bücher = response.data;
        });
    }
</script>

<h2>Details zu Buch {Bücher.Name}</h2>
<table>
    <thead>
        <tr>
        <th>Author</th>
        <th>Rating</th>
        <th>Price </th><th>Reviews</th>
        <th>Genre </th><th>Year </th>
    </tr>
    </thead>
    <tbody>
   <tr> <td> {Bücher.Author} </td>
    <td> {Bücher.Userrating}</td>
    <td> {Bücher.Price}</td>
    <td> {Bücher.Reviews}</td>
    <td> {Bücher.Genre}</td>
    <td> {Bücher.Year}</td>
</tr>
</tbody>
</table>

<style>
   table{
    height:100%;
    width: 100%;
    
   }
</style>
