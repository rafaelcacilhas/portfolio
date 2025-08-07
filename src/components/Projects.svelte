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
    <!-- Featured project -->
    {#if projects.length > 0}
      <div class="project-card featured">
        <div class="project-header">
          {#if projects[0].image}
            <div class="project-image">
              <img src={projects[0].image} alt={projects[0].title} />
            </div>
          {/if}
          <h3>{projects[0].title}</h3>
          <p class="role-duration"><strong>{projects[0].duration} | {projects[0].role}</strong></p>
        </div>
        <p class="project-description">{projects[0].description}</p>

        {#if projects[0].role && projects[0].duration}
          <div class="featured-extra-info">

            {#if projects[0].servingInfo}
              <p class="serving-info">Modernized public affairs platform serving:</p>
              <ul class="serving-list">
                {#each projects[0].servingInfo as item}
                  <li>• {item}</li>
                {/each}
              </ul>
            {/if}

            {#if projects[0].contributions}
              <p class="contributions-title"><strong>Notable Contributions:</strong></p>
              <ul class="contributions-list">
                {#each projects[0].contributions as contribution}
                  <li>- {contribution}</li>
                {/each}
              </ul>
            {/if}
          </div>
        {/if}

        {#if projects[0].tags && projects[0].tags.length > 0}
          <div class="project-tags">
            {#each projects[0].tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        {/if}
        {#if projects[0].link}
          <div class="project-links">
            <Button href={projects[0].link} class="btn-primary">View Details →</Button>
          </div>
        {/if}
      </div>
    {/if}

    <!-- Non-featured projects -->
    <div class="non-featured-container">
      {#each projects.slice(1) as project}
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
          {#if project.tags && project.tags.length > 0}
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          {/if}
          {#if project.link}
            <div class="project-links">
              <Button href={project.link} class="btn-primary">Details</Button>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</ContentSection>

<style>

  .projects-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
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

  .project-card.featured {
    grid-column: 1;
    grid-row: 1 / -1;
    padding: 2rem;
    background: linear-gradient(135deg, var(--card-background) 0%, var(--primary-lighter) 100%);
    border: 2px solid var(--primary-color);
    min-height: 400px;
    display: flex;
    flex-direction: column;
  }

  .project-card.featured h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  .project-card.featured .project-description {
    font-size: 1.1rem;
    flex-grow: 1;
  }

  .project-card.featured .project-tags {
    margin-top: auto;
  }

  .project-card.featured .project-links {
    margin-top: 1rem;
  }

  .role-duration {
    font-size: 1rem;
    margin: -1rem 0 0 0;
    color: var(--text-main);
  }

  .serving-info, .contributions-title {
    font-weight: 400;
    font-size: medium;
    margin-bottom: 0.5rem;
    color: var(--text-main);
  }

  .serving-list, .contributions-list {
    margin: 0rem 0rem 1rem 1rem;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.2rem 1rem;
  }

  .serving-list li, .contributions-list li {
    margin: 0rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }

  .project-card.featured .project-image {
    width: auto;
    height: 200px;
  }

  .project-card.featured .project-image img {
    width: 100%;
    height: 100%;
    min-width:12.5rem;
    object-fit: cover;
  }

  .non-featured-container {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .project-card:not(.featured) {
    height: fit-content;
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

  .tag {
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
    justify-content: center;
  }

  .project-links :global(.btn-primary) {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
      .projects-grid {
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
        gap: 1rem;
      }

      .project-card.featured {
        grid-column: unset;
        grid-row: unset;
        width: 100%;
        padding: 1.5rem;
        margin-bottom: 1rem;
        min-height: auto;
        text-align: center;
      }

      .project-card.featured .project-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .project-card.featured .project-image {
        margin: 0 auto 1rem auto;
      }

      .project-card.featured h3 {
        text-align: center;
        margin: 1rem 0;
      }

      .project-card.featured .project-description {
        text-align: center;
      }

      .project-card.featured .project-tags {
        justify-content: center;
      }

      .project-card.featured .project-links {
        text-align: center;
      }

      .non-featured-container {
        grid-column: unset;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        align-items: stretch;
      }

      .project-card:not(.featured) {
        width: calc(50% - 0.5rem);
        padding: 1rem;
        font-size: 0.9rem;
        margin-bottom: 0;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .project-card:not(.featured) .project-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .project-card:not(.featured) .project-image {
        margin: 0 auto 0.5rem auto;
      }

      .project-card:not(.featured) h3 {
        font-size: 1.1rem;
        text-align: center;
        margin: 0.5rem 0;
      }

      .project-card:not(.featured) .project-description {
        font-size: 0.9rem;
        text-align: center;
        flex-grow: 1;
      }

      .project-card:not(.featured) .project-tags {
        justify-content: center;
        margin-top: auto;
      }

      .project-card:not(.featured) .project-links {
        text-align: center;
        margin-top: 1rem;
      }

      .project-card:not(.featured) .project-links :global(.btn) {
        width: 80%;
        max-width: none;
      }

      .project-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }

</style>