<script>
    import '../styles/global.css';
    let title = 'Ninja Gaming';
    import { page } from '$app/stores';
</script>

<div class="title">
    <img src="/controller.svg" alt="site logo" />
    <h1>{title}</h1>
</div>

<div class="error">
    <h2>ERROR</h2>
    <p>Page Not Found</p>
    <a href="/guides">View The Guide</a>
</div>

<footer>
    <p>Copyright 2022 Ninja Gaming Guides</p>
</footer>>

<style>
    .error {
        text-align: center;
        margin-top: 20px auto;
    }
    .title {
        display:flex;
        justify-content: center;
    }
    .title img {
        max-width: 20px;
        display:inline-block;
        filter: invert(0) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    }
    .title h1 {
        margin-left: 10px;
    }
    footer {
        text-align: center;
    }
    
</style>