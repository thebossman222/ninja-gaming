<script>
    export let title = 'Ninja Gaming';
</script>

<div class="title">
    <img src="/controller.svg" alt="site logo" />
    <h1>{title}</h1>
</div>

<style>
    .title {
        display:flex;
    }
    .title img {
        max-width: 20px;
        display:inline-block;
        filter: invert(0) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    }
    .title h1 {
        margin-left: 10px;
    }
</style>