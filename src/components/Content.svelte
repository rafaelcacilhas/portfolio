<script>
  const content = $$props.content;
  const title = $$props.title;
  const seeAllLink = $$props.seeAllLink;

  let mainContent;
  let otherContents = [];

  content.map((item, index) => {
    if (index == 0) {
      mainContent = item;
      return;
    }
    otherContents.push(item);
  });
</script>

<section class="container">
  <p class="sectionTitle">{title}</p>

  <div class="mainContainer">
    <a href={mainContent.link} class="main">
      {#if mainContent.image}
        <div class="mainImage">
          <img alt="main illustration for article" src={mainContent.image} />
        </div>
      {/if}

      <div class="content">
        <p class="title">{mainContent.title}</p>
        <p class="description">{mainContent.description}</p>
      </div>
    </a>

    <div class="others">
      {#each otherContents as otherContent}
        <a
          href={otherContent.link}
          class={otherContent.image ? "otherContent" : "otherContentNoImage"}
        >
          {#if otherContent.image}
            <div class="otherImage">
              <img
                alt="main illustration for article"
                src={otherContent.image}
              />
            </div>
          {/if}

          <div class="content">
            <p class="title">{otherContent.title}</p>
            <p class="description">{otherContent.description}</p>
          </div>
        </a>
      {/each}

      <div class="allProjects">
        <a class="seeAll" href={seeAllLink}>See all</a>
      </div>
    </div>
  </div>
</section>

<style>
  a {
    text-decoration: none;
  }
  .sectionTitle {
    font-size: 2em;
  }
  .container {
    min-width: 90%;
    margin: 2em 0;
  }
  .mainContainer {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
  }
  .main {
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
    background-color: var(--background-secondary);
    padding: 1rem;
    width: 50%;
    max-height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .mainImage {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .title {
    color: var(--primary-color);
    font-size: large;
    margin-bottom: 0;
  }
  .description {
    color: lightgray;
    font-size: medium;
    margin-top: 0;
  }
  .others {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .otherContent {
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
    background-color: var(--background-secondary);
    padding: 1rem;
    margin-top: 0;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .otherContentNoImage {
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
    background-color: var(--background-secondary);
    padding: 1rem;
    margin-top: 0;
    width: 95%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .otherImage {
    width: 100%;
    padding-top: 2rem;
    max-width: 150px;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .allProjects {
    width: 50%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
