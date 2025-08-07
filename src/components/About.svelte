<script>
  import Button from './common/Button.svelte';
  import DetailCard from './common/DetailCard.svelte';
</script>

<section class="section" id="about">
    <div class="hero-about">
        <h1 class="hero-title">Hi, I'm <span class="name">Rafael Cacilhas</span></h1>
        <p class="hero-subtitle">Full Stack Developer & Tech Enthusiast with 8+ years of experience creating innovative web solutions</p>
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
            <p>I'm a passionate developer with a strong background in creating robust web applications. My journey in tech started when I was 16, and I've been coding professionally for over 8 years.</p>
            
            <p>I specialize in JavaScript ecosystems, with expertise in React, Node.js, and modern frontend frameworks. My approach combines technical excellence with creative problem-solving to deliver exceptional user experiences.</p>
            
            <p>When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new technologies. I believe in continuous learning and sharing knowledge with the developer community.</p>
        </div>
        
        <div class="about-details">
            <DetailCard
                icon="fas fa-laptop-code"
                title="Experience"
                description="8+ years developing web applications for startups and enterprises"
            />

            <DetailCard
                icon="fas fa-graduation-cap"
                title="Education"
                description="BSc in Computer Science from University of Lisbon"
            />

            <DetailCard
                icon="fas fa-map-marker-alt"
                title="Location"
                description="Based in sunny Lisbon, Portugal"
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