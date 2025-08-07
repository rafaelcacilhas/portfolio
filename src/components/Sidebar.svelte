<script>
  import { onMount } from 'svelte';
  import { activeSection } from '../stores/navigation.js';

  let currentActiveSection = 'about';
  let isCollapsed = false;

  activeSection.subscribe(value => {
    currentActiveSection = value;
  });

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      return;
    }

    isCollapsed = !isCollapsed;

    document.documentElement.style.setProperty(
      '--sidebar-width',
      isCollapsed ? '6rem' : '16rem'
    );
  };

  const handleNavClick = (event, targetId) => {
    event.preventDefault();

    if (window.location.pathname !== '/') {
      window.location.href = `/${targetId}`;
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      activeSection.set(targetId.replace('#', ''));
    }
  };

  onMount(() => {
    const updateSidebarWidth = () => {
      if (window.innerWidth <= 768) {
        isCollapsed = true;
        document.documentElement.style.setProperty('--sidebar-width', '0rem');
      } else {
        document.documentElement.style.setProperty(
          '--sidebar-width',
          isCollapsed ? '6rem' : '16rem'
        );
      }
    };

    updateSidebarWidth();
    window.addEventListener('resize', updateSidebarWidth);

    return () => {
      window.removeEventListener('resize', updateSidebarWidth);
    };
  });

</script>

<aside class="sidebar" class:collapsed={isCollapsed}>
  <button
    class="collapse-btn"
    on:click={toggleSidebar}
    title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
  >
    {#if isCollapsed}
      <i class="fas fa-chevron-right"></i>
    {:else}
      <i class="fas fa-chevron-left"></i>
    {/if}
  </button>

  <div class="profile-section">
    <div class="profile-image" class:small={isCollapsed}>
      <img src="/assets/eu.png" alt="Rafael Cacilhas" />
    </div>
    {#if !isCollapsed}
      <p class="name">Rafael Cacilhas</p>
      <p class="tagline">Physicist turned Full-Stack Developer</p>
    {/if}
    
    <nav class="sidebar-nav">
      <ul>
        <li><a href="#about" class="nav-link" class:active={currentActiveSection === 'about'} class:icon-only={isCollapsed} title="About" on:click={(e) => handleNavClick(e, '#about')}>
          <i class="fas fa-user"></i>
          {#if !isCollapsed}About{/if}
        </a></li>
        <li><a href="#projects" class="nav-link" class:active={currentActiveSection === 'projects'} class:icon-only={isCollapsed} title="Projects" on:click={(e) => handleNavClick(e, '#projects')}>
          <i class="fas fa-briefcase"></i>
          {#if !isCollapsed}Projects{/if}
        </a></li>
        <li><a href="#blog" class="nav-link" class:active={currentActiveSection === 'blog'} class:icon-only={isCollapsed} title="Blog" on:click={(e) => handleNavClick(e, '#blog')}>
          <i class="fas fa-blog"></i>
          {#if !isCollapsed}Blog{/if}
        </a></li>
      </ul>
    </nav>

    <div class="social-links" class:vertical={isCollapsed}>
        <a href="https://github.com/rafaelcacilhas" target="_blank" rel="noreferrer" aria-label="GitHub" class="social-link"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/rafaelcacilhas/" target="_blank" rel="noreferrer" aria-label="LinkedIn" class="social-link"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://twitter.com/RafaelCacilhas" target="_blank" rel="noreferrer" aria-label="Twitter" class="social-link"><i class="fab fa-twitter"></i></a>
        <a href="mailto:rafaelcacilhas@gmail.com" target="_blank" rel="noreferrer" aria-label="Email" class="social-link"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</aside>

<style>
  .sidebar {
    width: 16rem;
    border-right: 1px dashed var(--primary-color);
    background: var(--background-body);
    color: var(--text-main);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
    transition: var(--transition);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.05);
  }

  .sidebar.collapsed {
    width: 6rem;
    padding: 1rem;
  }

  .collapse-btn {
    width: 1.5rem;
    height: 1.5rem;
    z-index: 1000;
    box-shadow: 0 2px 4px var(--shadow-light);
    pointer-events: auto;
      
    position: absolute;
    top: 0.3rem;
    right: 0rem;
    
    border: none;
    border-radius: 50%;

    background: var(--primary-color);
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    transition: var(--transition);
  }

  .collapse-btn:hover {
    background: var(--primary-light);
    transform: scale(1.05);
  }

  .profile-section {
    text-align: center;
  }

  .profile-image {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 0;
    transition: var(--transition);
  }

  .profile-image.small {
    width: 60px;
    height: 60px;
  }

  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 700;
    margin: -1rem;
    color: var(--text-main)
  }

  .tagline {
    font-size: 1rem;
    color: var(--text-secondary);
    font-style: italic;
    margin-bottom: 0 auto 4rem;
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
    max-height: 3rem;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

  
    text-decoration: none;
    color: var(--text-main);
    transition: var(--transition);
    font-size: 0.8rem;
    font-weight: 400;
    font-family: var(--font-family-sans);
  }

  .nav-link:hover,
  .nav-link.active {
    background: var(--primary-lighter);
    color: var(--primary-color);
    transform: translateX(3px);
  }

  .nav-link i {
    flex-shrink: 0;
    width: 16px;
    text-align: center;
  }

  .nav-link.icon-only {
    justify-content: center;
    padding: 0.75rem;
  }

  .social-links {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px dashed rgba(229, 107, 111, 0.3);
  }

  .social-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--primary-lighter);
      color: var(--primary-color);
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1rem;
  }

  .social-links a:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateY(-3px);
  }

    .sidebar.collapsed .social-links {
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

  @media (max-width: 768px) {
    .sidebar,
    .sidebar.collapsed {
      position: fixed;
      width: 100%;
      height: auto;
      flex-direction: row;
      align-items: center;
      padding: 0.75rem 1rem;
      border: 0;
      border-bottom: 1px dashed var(--primary-color);
    }

    .collapse-btn {
      display: none; 
    }

    .profile-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }

    .profile-image {
      width: 50px !important;
      height: 50px !important;
      margin: 0;
    }

    .sidebar-nav {
      margin: 0 3rem 0 0;
      flex: 1;
    }

    .sidebar-nav ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sidebar-nav li {
      margin-bottom: 0;
      width:3rem;
      height: 3rem;
    }

    .nav-link {
      padding: 0.5rem;
      justify-content: center;
    }

    .social-links{
      display: none;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 6px;
      background: var(--primary-lighter);
      transition: all 0.3s ease;
      width: 2.5rem;
      height: 2.5rem;
    }

    .social-link:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }

    .sidebar.collapsed .social-link {
      width: 2rem;
      height: 2rem;
      padding: 0.5rem;
    }

    .social-link i {
      font-size: 1rem;
    }
  }
</style>
