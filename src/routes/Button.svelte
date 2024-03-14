<style>
    @import '../button.css';
</style>

<script>
    export let current_page;
    export let id;
    export let description;
</script>

<div class="btn_div">
    <button class="btn_{id}" on:click={() => {current_page = description}}>
        {description}
    </button>
</div>
