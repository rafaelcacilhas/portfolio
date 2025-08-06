<script>
  import { onMount } from 'svelte';

  let activeSection = 'about';
  let isCollapsed = true;

  function toggleSidebar() {
    isCollapsed = !isCollapsed;
  }

  onMount(() => {
    // Handle smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
        }
      });
    });

    // Update active section on scroll
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  });

  function setActiveSection(sectionId) {
    activeSection = sectionId;
    // Update nav link active states
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }
</script>

<aside class="sidebar" class:collapsed={isCollapsed}>
  <button class="collapse-btn" on:click={toggleSidebar} title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      {#if isCollapsed}
        <path d="M9,5V19L16,12L9,5Z"/>
      {:else}
        <path d="M15,5V19L8,12L15,5Z"/>
      {/if}
    </svg>
  </button>

  <div class="profile-section">
    <div class="profile-image" class:small={isCollapsed}>
      <img src="/assets/eu.png" alt="Rafael Cacilhas" />
    </div>
    {#if !isCollapsed}
      <h1>PORTFOLIO</h1>
      <p class="name">Rafael Cacilhas</p>
      <p class="tagline">All things programming</p>
    {/if}
    
    <nav class="sidebar-nav">
      <ul>
        <li><a href="#about" class="nav-link" class:active={activeSection === 'about'} class:icon-only={isCollapsed} title="About">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
          </svg>
          {#if !isCollapsed}About{/if}
        </a></li>
        <li><a href="#projects" class="nav-link" class:active={activeSection === 'projects'} class:icon-only={isCollapsed} title="Projects">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
          </svg>
          {#if !isCollapsed}Projects{/if}
        </a></li>
        <li><a href="#blog" class="nav-link" class:active={activeSection === 'blog'} class:icon-only={isCollapsed} title="Blog">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
          {#if !isCollapsed}Blog{/if}
        </a></li>
      </ul>
    </nav>

    <div class="social-links" class:vertical={isCollapsed}>
      <a href="https://twitter.com/RafaelCacilhas" target="_blank" rel="noreferrer" class="social-link" title="Twitter">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" class="social-icon">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/rafaelcacilhas/" target="_blank" rel="noreferrer" class="social-link" title="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" class="social-icon">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
        </svg>
      </a>
      <a href="https://github.com/rafaelcacilhas" target="_blank" rel="noreferrer" class="social-link" title="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" class="social-icon">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
      </a>
    </div>
  </div>
</aside>

<style>
  .sidebar {
    width: 320px;
    background: var(--background-body);
    color: var(--text-main);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: var(--transition);
    position: relative;
  }

  .sidebar.collapsed {
    width: 6rem;
    padding: 1rem;
  }

  .collapse-btn {
    position: absolute;
    top: 1rem;
    right: -12px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    z-index: 10;
  }

  .collapse-btn:hover {
    background: var(--primary-light);
    transform: scale(1.1);
  }

  .profile-section {
    text-align: center;
  }

  .profile-image {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.5rem;
    transition: var(--transition);
  }

  .profile-image.small {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .sidebar h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    font-family: var(--font-family-serif);
  }

  .name {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
    opacity: 0.9;
  }

  .tagline {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 2rem;
  }

  .sidebar-nav {
    margin: 2rem 0;
  }

  .sidebar-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar-nav li {
    margin-bottom: 0.5rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    padding: 1rem;
    text-decoration: none;
    color: var(--text-main);
    border-radius: 8px;
    transition: var(--transition);
    font-weight: 500;
    font-family: var(--font-family-sans);
    gap: 0.75rem;
  }

  .nav-link:hover,
  .nav-link.active {
    background: var(--primary-lighter);
    color: var(--primary-color);
    transform: translateX(5px);
  }

  .nav-link svg {
    flex-shrink: 0;
  }

  .nav-link.icon-only {
    justify-content: center;
    padding: 0.75rem;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px dashed var(--border-color);
    transition: var(--transition);
  }

  .social-links.vertical {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    text-decoration: none;
    padding: 0.75rem;
    border-radius: 50%;
    background: var(--background-secondary);
    transition: all 0.3s ease;
    width: 50px;
    height: 50px;
  }

  .sidebar.collapsed .social-link {
    width: 40px;
    height: 40px;
    padding: 0.5rem;
  }

  .social-link:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }

  .social-icon {
    fill: currentColor;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      min-height: auto;
    }
  }
</style>
