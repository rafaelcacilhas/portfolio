<script>
  import Button from './common/Button.svelte';
  import DetailCard from './common/DetailCard.svelte';
</script>

<section class="section" id="about">
    <div class="hero-about">
        <h1 class="hero-title">Hi, I'm <span class="name">Rafael Cacilhas</span></h1>
        <p class="hero-subtitle">Physicist turned Full-Stack Developer crafting digital experiences since ActionScript days</p>
        <div class="btn-container">
            <Button href="/cv.pdf">Download CV</Button>
            <Button href="#projects" variant="outline">View Projects</Button>
        </div>
    </div>
    
    <div class="section-header">
        <div class="icon">
            <i class="fas fa-user"></i>
        </div>
        <h2 class="section-title">About Me</h2>
    </div>
    
    <div class="about-content">
        <div class="about-text">
            <p>My coding journey began as a teenager around 2005 messing with Flash games and animations with ActionScript, sparking a lifelong passion for digital creation. This early foundation in interactive media evolved into professional expertise in modern web development.</p>
            
            <p>During my Physics degree at University of Viçosa (UFV), I developed scientific simulations that taught me to translate complex real-world systems into elegant code. This unique background gives me a problem-solving approach that combines analytical rigor with creative technical solutions.</p>
            
            <p>Today, I specialize in building full-stack applications with modern JavaScript ecosystems, focusing on creating intuitive user experiences. When not coding, I contribute to open-source projects, write about tech concepts, and explore how game design principles can enhance web interactions.</p>
        </div>
        
        <div class="about-details">
            <DetailCard
                icon="fas fa-laptop-code"
                title="Experience"
                description="10+ years development experience. 3+ years as a full-stack developer"
            />

            <DetailCard
                icon="fas fa-graduation-cap"
                title="Education"
                description="PhD in Physics from Federal University of Viçosa (UFV)."
            />

            <DetailCard
                icon="fas fa-map-marker-alt"
                title="Location"
                description="Based in Minas Gerais, Brazil. Timezone: UTC-3"
            />

            <DetailCard
                icon="fas fa-briefcase"
                title="Freelance"
                description="Available for select projects and consulting"
            />
        </div>
    </div>
</section>

<style>
    .hero-about {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2rem 0;
        margin-bottom: 3rem;
    }

    .hero-title {
        font-size: 3.5rem;
        color: var(--text-main);
        margin-bottom: 1rem;
        line-height: 1.2;
        position: relative;
    }

    .hero-title span {
        color: var(--primary-color);
        position: relative;
    }
    
    .hero-title span::after {
        content: "";
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: rgba(229, 107, 111, 0.3);
        z-index: -1;
    }

    .hero-subtitle {
        font-size: 1.4rem;
        color: var(--text-secondary);
        max-width: 700px;
        margin-bottom: 40px;
    }

    .btn-container {
        display: flex;
        gap: 1rem;
    }

    .about-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        margin: 0 0 5rem 0;
    }

    .about-text {
        padding-right: 1rem;
    }

    .about-text p {
        margin-bottom: 1rem;
        color: var(--text-secondary);
        font-size: 1.1rem;
        line-height: 1.8;
    }

    .about-details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin: 2rem 0;
    }

    .section-header {
        display: flex;
        align-items: center;
        text-align: center ;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid rgba(229, 107, 111, 0.2);
    }

    .section-header h2 {
        font-size: 32px;
        color: var(--primary-color);
        margin-right: 1rem;
    }

    .section-title{
        margin: auto auto auto 1rem;
    }

    .section-header .icon {
        background-color: rgba(229, 107, 111, 0.1);
        color: var(--primary-color);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }

    @media (max-width: 768px) {
        .about-content {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .about-details {
            grid-template-columns: 1fr;
        }

        .hero-title {
            font-size: 2.5rem;
        }

        .hero-subtitle {
            font-size: 1.2rem;
        }

        .btn-container {
            flex-direction: column;
        }
    }

</style>