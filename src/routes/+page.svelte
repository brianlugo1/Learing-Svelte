<script>
    import current_page from "$lib/current_page";

    import { getTodo, getValueFromEvent } from "$lib/data";

    import TodoCard from "./TodoCard.svelte";
    
    import "../main.css";

    let todo_id = 1;

    let todo_data = getTodo(todo_id);
</script>

<div class="home_body_div">
    <div class="home_retrieve_todo_div">
        <h1 class="home_current_page_title">{$current_page}</h1>

        <p class="home_p_description">Toggle through 200 Fake Todos below!</p>

        <div class="home_todo_div">
            <button
                class="fetch_todo_button"

                on:click={() => {
                    if(isNaN(todo_id)) return;

                    if(todo_id < 1) todo_id = 2;

                    if(todo_id > 200) todo_id = 201;

                    if(todo_id - 1 < 1) return;

                    todo_id = todo_id - 1;

                    todo_data = getTodo(todo_id);
                }}
            >
                {"<"}
            </button>

            <input
                class="todo_id_input"

                value={todo_id}

                on:change={(event) => {
                    if (event.target == null) return;

                    todo_id = getValueFromEvent(event);
                }}

                on:input={(event) => {
                    let new_todo_id = getValueFromEvent(event);

                    if (new_todo_id.charAt(0) == '-') return;

                    if (isNaN(new_todo_id)) return;

                    if (new_todo_id == "" || new_todo_id < 1 || new_todo_id > 200) return;

                    todo_data = getTodo(parseInt(new_todo_id));
                }}
            />

            <button
                class="fetch_todo_button"

                on:click={() => {
                    if(isNaN(todo_id)) return;

                    if(todo_id < 1) todo_id = 0;

                    if(todo_id > 200) todo_id = 199;

                    if(todo_id + 1 > 200) return;

                    todo_id = todo_id + 1;

                    todo_data = getTodo(todo_id)
                }}
            >
                {">"}
            </button>
        </div>
    </div>

    <div class="home_display_todos_div">
        {#await todo_data then data}
            {#if data.length > 1}
                {#each data as value}
                    <TodoCard id={value["id"]} userId={value["userId"]} title={value["title"]} completed={value["completed"]}/>
                {/each}

            {:else}
                <TodoCard id={data["id"]} userId={data["userId"]} title={data["title"]} completed={data["completed"]}/>
            {/if}
        {/await}
    </div>
</div>
