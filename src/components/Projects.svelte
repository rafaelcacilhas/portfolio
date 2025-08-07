<script>
    import Button from './common/Button.svelte';
    import ContentSection from './common/ContentSection.svelte';
    export let projects = [];
</script>

<ContentSection
    id="projects"
    title="Projects"
    icon="fas fa-rocket"
    seeAllLink="/projects"
    seeAllText="View All Projects →"
>
    <div class="projects-grid">
      {#each projects as project}
        <div class="project-card">
          <div class="project-header">
            {#if project.image}
              <div class="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            {/if}
            <h3>{project.title}</h3>
          </div>
          <p class="project-description">{project.description}</p>
          <div class="project-tags">
            <span >React</span>
          </div>
          {#if project.link}
            <div class="project-links">
              <Button href={project.link} class="btn-primary">View Details →</Button>
            </div>
          {/if}
        </div>
      {/each}
    </div>
</ContentSection>

<style>

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .project-card {
    background: var(--card-background);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 8px var(--shadow-light);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px var(--shadow-medium);
    border-color: var(--primary-light);
  }

  .project-card::before {
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

  .project-card:hover::before {
    opacity: 1;
  }

  .project-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .project-header h3 {
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

  .project-description {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .project-tags span {
        background-color: var(--primary-lighter);
        color: var(--primary-color);
        padding: 0.5rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 500;
    }

  .project-links {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }

</style>