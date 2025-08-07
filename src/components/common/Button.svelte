<script>
  export let href = null;
  export let variant = 'primary'; // 'primary' or 'outline'
  export let target = '_self';
  export let rel = '';
  export let type = 'button'; // for button element
  export let disabled = false;
  export let onClick = null;

  // Determine if we should render a button or link
  $: isButton = !href || onClick;

  const handleClick = (event) => {
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
</script>

{#if isButton}
  <button
    {type}
    {disabled}
    class="btn"
    class:btn-outline={variant === 'outline'}
    on:click={onClick}
  >
    <slot />
  </button>
{:else}
  <a
    {href}
    {target}
    {rel}
    class="btn"
    class:btn-outline={variant === 'outline'}
    on:click={handleClick}
  >
    <slot />
  </a>
{/if}

<style>
  .btn {
    min-width: 12rem;
    margin: 0.5rem 0 0 0;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: none;
    background-color: var(--primary-color);

    color: white;    
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    cursor: pointer;
    font-size: 16px;
    font-family: inherit;
    line-height: 1;
    
    display: inline-block;

  }

  button.btn {
    border: 2px solid var(--primary-color);
  }

  button.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  button.btn:disabled:hover {
    background-color: var(--primary-color);
    transform: none;
    box-shadow: none;
  }

  .btn:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(229, 107, 111, 0.3);
  }

  .btn-outline {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }

  .btn-outline:hover {
    background-color: var(--primary-light);
    border-color: var(--primary-light);
    color: white;
  }

  button.btn-outline:disabled {
    background-color: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
</style>
