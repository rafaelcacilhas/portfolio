<script>
  import { onMount, onDestroy } from 'svelte';
  import ThemeToggleButton from './ThemeToggleButton.svelte';
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Blog from './Blog.svelte';
  import { activeSection } from '../stores/navigation.js';

  export let projects = [];
  export let posts = [];

  let observer;
  let mainContentElement;

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeEntry = null;

        entries.forEach(entry => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeEntry = entry;
          }
        });

        if (activeEntry && maxRatio > 0.3) {
          const sectionId = activeEntry.target.id;
          activeSection.set(sectionId);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -20% 0px', // Trigger when section is 20% into viewport
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1.0]
      }
    );

    const sections = mainContentElement.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<div class="main-content" bind:this={mainContentElement}>
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
      padding: 4rem 1rem 0;
    }

    .theme-toggle-container {
      position:fixed;
      top: 1.75rem;
      right: 0;
      z-index: 100;
    }

  }
</style>
