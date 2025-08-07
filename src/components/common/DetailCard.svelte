<script>
  export let icon = '';
  export let title = '';
  export let description = '';
</script>

<div class="detail-card">
  <i class={icon}></i>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .detail-card {
    background: var(--card-background);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 5px 15px var(--shadow-light);
    border: 1px solid var(--border-color);
    transition: var(--transition);
  }

  .detail-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px var(--shadow-medium);
    border-color: var(--primary-color);
  }

  .detail-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 15px;
  }

  .detail-card h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--text-main);
  }

  .detail-card p {
    color: var(--text-secondary);
    font-size: 1rem;
  }
</style>
