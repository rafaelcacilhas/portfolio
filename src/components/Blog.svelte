<script>
    import ContentSection from './common/ContentSection.svelte';
    export let posts = [];
</script>

<ContentSection
    id="blog"
    title="Recent posts"
    icon="fas fa-rocket"
    seeAllLink="/blog"
    seeAllText="View All Posts →"
>
    <div class="blog-posts">
        {#each posts as post}
        <article class="blog-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div class="post-meta">
            <span class="meta-item">
                <i class="far fa-calendar"></i>
                {post.publishDate}
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
</ContentSection>


<style>
    

  .blog-posts {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .blog-card {
    background: var(--card-background);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 8px var(--shadow-light);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }

  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px var(--shadow-medium);
    border-color: var(--primary-light);
  }

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

  .blog-card:hover::before {
    opacity: 1;
  }

.blog-card h3 {
    color: var(--text-main);
    font-family: var(--font-family-sans);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .blog-card p {
    color: var(--text-secondary);
    font-size: 0.75rem;
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: var(--primary-color);
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

  @media (max-width: 768px) {
    .blog-posts {
      width: 100%;
    }

    .blog-card {
      width: 100%;
      max-width: none;
    }
  }


</style>