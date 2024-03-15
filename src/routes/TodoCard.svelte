<script>
    import "../main.css";

    export let id = 0;

    export let userId = 0;

    export let title = "";

    export let completed = false;
</script>

<div class="todo_card_div">
    <h2>Title: {title}</h2>

    <h2>Todo ID: {id}</h2>

    <h2>User ID: {userId}</h2>

    <div class="todo_completed_div">
        <label for="todoCompletedCheckbox">Is Todo Complete</label>

        <input id="todoCompletedCheckbox" type="checkbox" value={completed}/>
    </div>
</div>