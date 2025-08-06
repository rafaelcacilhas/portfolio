<script>
  import ThemeToggleButton from './ThemeToggleButton.svelte';
  
  export let projects = [];
  export let posts = [];
</script>

<div class="main-content">
  <div class="theme-toggle-container">
    <ThemeToggleButton />
  </div>

  <!-- About Section -->
  <section class="content-section" id="about">
    <div class="section-header">
      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
        </svg>
      </div>
      <h2>About Me</h2>
    </div>
    
    <div class="about-content">
      <div class="about-card">
        <h3>Background</h3>
        <p>I'm a passionate full-stack developer with over 5 years of experience building web applications. I love solving complex problems and creating elegant solutions that make a difference.</p>
        
        <p>When I was a kid around 2004 I started learning HTML, Photoshop and Flash. I remember that I also studied javascript and PHP, but I cant honestly say I remember anything.</p>
        
        <p>Learning Action Script was not easy, specially since my english skills were basic null. But then I went to the University to study Physics and there I learned a lot about coding. Learned the basics of C++ and used a lot of FORTRAN to make scientific simulations and mathematical calculations.</p>
        
        <p>Now I <strong>came back</strong> to javascript and things started to click a lot better. Coding is kinda fun.</p>
      </div>
      
      <div class="about-card">
        <h3>Skills & Technologies</h3>
        <div class="skills-grid">
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">React</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">PostgreSQL</span>
          <span class="skill-tag">MongoDB</span>
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">Vue.js</span>
        </div>
      </div>

      <div class="about-card">
        <h3>Experience</h3>
        <div class="experience-item">
          <h4>Senior Developer at TechCorp</h4>
          <span class="experience-period">2022 - Present</span>
          <p>Leading development of enterprise applications and mentoring junior developers. Focus on scalable architecture and performance optimization.</p>
        </div>
        <div class="experience-item">
          <h4>Full-Stack Developer at StartupXYZ</h4>
          <span class="experience-period">2020 - 2022</span>
          <p>Built the core platform from scratch using modern web technologies. Implemented CI/CD pipelines and automated testing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="content-section" id="projects">
    <div class="section-header">
      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
        </svg>
      </div>
      <h2>Featured Projects</h2>
    </div>
    
    <div class="projects-grid">
      {#each projects as project}
        <div class="project-card">
          <div class="project-header">
            <h3>{project.title}</h3>
            {#if project.image}
              <div class="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            {/if}
          </div>
          <p>{project.description}</p>
          <div class="project-tags">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
          </div>
          {#if project.link}
            <div class="project-links">
              <a href={project.link} class="btn-primary">View Project →</a>
            </div>
          {/if}
        </div>
      {/each}
    </div>
    
    <div class="see-all">
      <a href="/projects" class="see-all-link">View All Projects →</a>
    </div>
  </section>

  <!-- Blog Section -->
  <section class="content-section" id="blog">
    <div class="section-header">
      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      </div>
      <h2>Recent Posts</h2>
    </div>
    
    <div class="blog-posts">
      {#each posts as post}
        <article class="blog-card">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <div class="post-meta">
            <span class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/>
              </svg>
              March 15, 2024
            </span>
            <span class="meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
              </svg>
              5 min read
            </span>
          </div>
          {#if post.link}
            <a href={post.link} class="read-more">
              Read More 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
              </svg>
            </a>
          {/if}
        </article>
      {/each}
    </div>
    
    <div class="see-all">
      <a href="/blog" class="see-all-link">View All Posts →</a>
    </div>
  </section>
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

  .content-section {
    margin-bottom: 4rem;
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;
  }

  .content-section:nth-child(2) { animation-delay: 0.2s; }
  .content-section:nth-child(3) { animation-delay: 0.4s; }
  .content-section:nth-child(4) { animation-delay: 0.6s; }

  .section-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px dashed var(--primary-lighter);
  }

  .section-icon {
    background: var(--primary-lighter);
    color: var(--primary-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .section-header h2 {
    font-size: 2.2rem;
    margin: 0;
    color: var(--primary-color);
    font-family: var(--font-family-sans);
    font-weight: 700;
  }

  /* About Section Styles */
  .about-content {
    display: grid;
    gap: 2rem;
  }

  .about-card {
    background: var(--background-body);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 8px var(--shadow-light);
    transition: var(--transition);
  }

  .about-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px var(--shadow-medium);
    border-color: var(--primary-light);
  }

  .about-card h3 {
    color: var(--primary-color);
    font-family: var(--font-family-sans);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 1rem 0;
  }

  .skill-tag,
  .tech-tag {
    background: var(--primary-lighter);
    color: var(--primary-color);
    padding: 0.4rem 0.8rem;
    border-radius: 16px;
    font-size: 0.8rem;
    font-family: var(--font-family-sans);
    font-weight: 600;
    transition: var(--transition);
  }

  .skill-tag:hover,
  .tech-tag:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-1px);
  }

  .experience-item {
    margin: 1.5rem 0;
    padding: 1.5rem;
    background: var(--background-secondary);
    border-radius: 8px;
    border-left: 4px solid var(--primary-color);
  }

  .experience-item h4 {
    color: var(--text-main);
    margin-bottom: 0.5rem;
  }

  .experience-period {
    color: var(--text-secondary);
    font-style: italic;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 0.75rem;
  }

  /* Projects Section Styles */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .project-card,
  .blog-card {
    background: var(--background-body);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 8px var(--shadow-light);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }

  .project-card:hover,
  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px var(--shadow-medium);
    border-color: var(--primary-light);
  }

  .project-card::before,
  .blog-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
    opacity: 0;
    transition: var(--transition);
  }

  .project-card:hover::before,
  .blog-card:hover::before {
    opacity: 1;
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .project-header h3,
  .blog-card h3 {
    color: var(--text-main);
    font-family: var(--font-family-sans);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .project-image {
    width: 80px;
    height: 60px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .project-links {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
  }

  .btn-primary {
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: var(--transition);
    font-family: var(--font-family-sans);
    background: var(--primary-color);
    color: white;
    display: inline-block;
  }

  .btn-primary:hover {
    background: #e55a75;
    transform: translateY(-1px);
  }

  /* Blog Section Styles */
  .blog-posts {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .meta-item svg {
    color: var(--primary-color);
  }

  .read-more {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    font-family: var(--font-family-sans);
    transition: var(--transition);
  }

  .read-more:hover {
    color: var(--primary-light);
  }

  .read-more svg {
    transition: var(--transition);
  }

  .read-more:hover svg {
    transform: translateX(3px);
  }

  .see-all {
    text-align: center;
    margin-top: 2rem;
  }

  .see-all-link {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: bold;
    font-family: var(--font-family-sans);
    font-size: 1.1rem;
  }

  .see-all-link:hover {
    color: var(--primary-color);
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

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .project-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
