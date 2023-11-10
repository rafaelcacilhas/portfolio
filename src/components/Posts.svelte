<script>

</script>

<section>

	<p class="title">Latest Blog Posts</p>

	<div class="container">

		<div class="main">
			<div>
				<p class="projectTitle">Blog Post 1</p>
				<p class="projectDescription">An introduction to the blog post. This blog post is about the latest trends in technology. We will be discussing the impact of AI on various industries, the rise of blockchain technology, and the future of cloud computing. Stay tuned for an in-depth analysis and expert opinions.
				</p>
				<p>Read More</p>
			</div>

		</div>

		<div class="others">
			<div class="otherPost">
				<p class="projectTitle">Blog Post 1</p>
				<p class="projectDescription">An introduction to the blog post.
				</p>
				<p>Read More</p>
			</div>
			<div class="otherPost">
				<p class="projectTitle">Blog Post 1</p>
				<p class="projectDescription">An introduction to the blog post.
				</p>
				<p>Read More</p>
			</div>
			<div class="allProjects">
					<p class="seeAll">See all</p>
			</div>
		</div>

	</div>

</section>

<style>
	.title {
		font-size: 2em;
	}
	.container {
		width: 100%;
		display: flex;
	}

	.main {
		border: 1px solid var(--primary-color);
		border-radius: 1rem;
		background-color: var(--background-secondary);
		padding: 1rem;
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.mainImage {
		width: 50%
	}

	.projectImage{
		width: 50%
	}
	.others {
		width: 50%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;

	}

	.otherPost{
		border: 1px solid var(--primary-color);
		border-radius: 1rem;
		background-color: var(--background-secondary);
		padding: 1rem;
		margin-top: 0;
		width: 95%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.projectTitle{
		color: var(--primary-color);
		font-size: large;

	}

	.projectDescription{
		color: gray;
		font-size: medium;
	}

	.allProjects{
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	svg {
		width: 100%;
		height: 100%;
	}

	path {
		fill: white;
		opacity: 1;
	}

</style>