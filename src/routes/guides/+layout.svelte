  <script>
    import Title from '$lib/title.svelte';
    import '../../styles/global.css';
  </script>
  
  <header>
  
    <nav>
      <Title title="Ninja Gaming Guides" />
      <div class="links">
        <a href="/">Home</a>
        <a href="/guides">Guides</a>
        <a href="/about">About</a>
      </div>
    </nav>
  </header>
  
  <main>
    <!-- Page Content -->
    <slot></slot>
  </main>
  <footer>
    <p>Copyright 2022 Ninja Gaming Guides</p>
</footer>
  
  <style>
    header {
      text-align: center;
      background-color: rgba(0, 0, 0, 0.1);
    }
    main {
      max-width: 960px;
      margin: 20px auto;
    }
    footer {
      text-align: center;
    }
    .links {
      margin-left: auto;
    }
    .links a {
      margin-left: 10px;
    }
    nav {
      display: flex;
      align-items: center;
      max-width: 960px;
      margin: 0 auto;
    }
  </style>
  