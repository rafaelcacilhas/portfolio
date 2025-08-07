<script>
  import ThemeToggleButton from './ThemeToggleButton.svelte';
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Blog from './Blog.svelte';

  export let projects = [];
  export let posts = [];
</script>

<div class="main-content">
  <div class="theme-toggle-container">
    <ThemeToggleButton />
  </div>

  <About />

  <Projects {projects} />

  <Blog {posts} />

</div>

<style>
  .main-content {
    padding: 2rem;
    flex: 1;
    min-height: 100vh;
  }

  .theme-toggle-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    width: 75px;
    margin-left: auto;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .main-content {
      padding: 1rem;
    }

  }
</style>
