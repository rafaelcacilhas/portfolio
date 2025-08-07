---
title: Quorum
publishDate: 28 Feb 2025
description: Policy engagement platform for governments and advocacy groups
image: "https://avatars.githubusercontent.com/u/6657795?s=200&v=4"
link: "/projects/quorum"
tags: ["React", "Django", "Python"]

role: Full-stack Engineer
duration: 2.5 years
servingInfo:
- Legislative offices  
- Advocacy groups  
- Corporate GR teams  
- NGOs

contributions:
- Frontend architecture redesign
- Backend systems development  
- Cross-functional team 

---

      {#if projects[0].role && projects[0].duration}
          <div class="featured-extra-info">
            <p class="role-duration"><strong>{projects[0].duration} | {projects[0].role}</strong></p>

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


![Quorum - data driven politics](/assets/projects/quorum_logo.png)

My Time at Quorum

For two and a half years, I worked as a full-stack engineer at Quorum, primarily focused on frontend development with React. The platform—a powerful but complex public affairs tool used by governments and advocacy groups—underwent a complete transformation during my tenure.

I was part of a fluid, multicultural team that typically included around eight engineers, one exceptional product manager, and a designer. Under the guidance of two great managers, Akshata and Willy, we created a new frontend architecture that allowed new pages to be added with ease. The old system had grown organically over years, but our new purple-themed UI, while a color adjustment for me, ultimately created a more intuitive experience for the users.

![Old design](/assets/projects/quorum_old.png)![New design](/assets/projects/quorum_new.png)

Through the "Persona Project," we restructured the interface without removing functionality—just reorganizing it based on how different users actually worked. Seeing policy professionals navigate the platform more easily after our changes was incredibly rewarding. The codebase was massive, and we maintained rigorous testing with unit tests, integration tests, and Cypress end-to-end scenarios, which had to pass to allow the deployment CI/CD pipeline.

My final six months brought an exciting shift when I transferred permanently to a backend team working on the Grassroots product. Daily Python work with Django gave me deeper insight into our abstracted DjangIO layer that connected frontend and backend—knowledge that immediately improved my contributions.

Beyond coding, Quorum taught me how large-scale applications work and evolve in practice. The collaboration across disciplines was invaluable: working with Designers on interface changes, partnering with QA to bulletproof features, and seeing how Product balanced user needs with technical constraints. In a company with over 100 engineers across 4 continents clear communication and thoughtful architecture decisions became second nature.

What I'll Remember Most:

- Late-night debugging sessions with teammates who became lifelong friends

- Beeing on call and seeing bugs appear after a deployment, even after all the tests. Rollback *NOW* and go fix it!

- The satisfaction of seeing our redesigned interface in daily use by policymakers

- Learning that good design sometimes means sacrificing personal preferences (I miss you, navy blue) for usability
