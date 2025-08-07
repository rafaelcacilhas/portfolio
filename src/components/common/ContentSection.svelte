<script>
  export let id = '';
  export let title = '';
  export let icon = '';
  export let seeAllLink = '';
  export let seeAllText = 'View All →';
</script>

<section class="content-section" {id}>
  <div class="section-header">
    <div class="icon">
      <i class={icon}></i>
    </div>
    <h2 class="section-title">{title}</h2>
  </div>

  <div class="section-content">
    <slot />
  </div>

  {#if seeAllLink}
    <div class="see-all">
      <a href={seeAllLink} class="see-all-link">{seeAllText}</a>
    </div>
  {/if}
</section>

<style>
  .content-section {
    margin-bottom: 4rem;
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;
  }

  .section-header {
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--primary-lighter);
  }

  .section-header h2 {
    font-size: 32px;
    color: var(--primary-color);
    margin-right: 1rem;
  }

  .section-title {
    margin: auto auto auto 1rem;
  }

  .section-header .icon {
    background-color: var(--primary-lighter);
    color: var(--primary-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .section-content {
    margin-bottom: 2rem;
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
    transition: var(--transition);
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

  /* Staggered animation delays */
  .content-section:nth-child(1) { animation-delay: 0.2s; }
  .content-section:nth-child(2) { animation-delay: 0.4s; }
  .content-section:nth-child(3) { animation-delay: 0.6s; }
  .content-section:nth-child(4) { animation-delay: 0.8s; }
</style>
