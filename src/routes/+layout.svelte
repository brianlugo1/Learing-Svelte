<script lang="ts">
    import "../main.css";

    let welcome_message = "Welcome to this awesome Svelte Project Created by Brian Lugo!";

    import current_page from "$lib/current_page";

    $current_page = welcome_message;

    let main_title = "Learning Svelte";

    let footer_title = "Finished Learning Svelte?";

    let button_data = [
        { id: 1, description: "AI Connector Github", link: "ai_connector_github" },

        { id: 2, description: "Openai Python Library", link: "openai_python_library" },

        { id: 3, description: "Postgresql Python Library", link: "postgresql_python_library" },

        { id: 4, description: "Ask Llama-2-Crime Model Questions", link: "ask_llama_2_crime_model_questions" }
    ];
</script>

<div id="main_div">
    <div id="main_header">
        <a href="/" class="header_a" on:click={() => {$current_page = welcome_message;}}>
            <h1 id="main_title">
                {main_title}
            </h1>
        </a>

        <div id="main_nav_div">
            {#each button_data as btn_dd}
                <a href={"/"+btn_dd["link"]} on:click={() => {$current_page = btn_dd["description"]}}>{btn_dd["description"]}</a>
            {/each}
        </div>
    </div>

    <div id="main_body">
        <div class="top_row">
            <slot />
        </div>
    </div>

    <div id="main_footer">
        <h2>{footer_title}</h2>
    </div>
</div>
