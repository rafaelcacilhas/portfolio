<!-- portfolio/src/components/MetrodroneDemo.svelte -->
<script lang="ts">
  import { MetrodroneApp } from '../components/metrodrone/src/lib/index.js';
  import { onDestroy } from 'svelte';
  
  let isFullscreen = $state(false);
  let containerRef: HTMLDivElement;
  
  onDestroy(() => {
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.removeEventListener('msfullscreenchange', handleFullscreenChange);
  });
  
  function handleFullscreenChange() {
    isFullscreen = !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).msFullscreenElement
    );
  }
  
  async function toggleFullscreen() {
    if (!containerRef) return;
    
    if (isFullscreen) {
      await exitFullscreen();
    } else {
      await enterFullscreen(containerRef);
    }
  }
  
  async function enterFullscreen(element: HTMLElement) {
    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if ((element as any).webkitRequestFullscreen) {
        await (element as any).webkitRequestFullscreen();
      } else if ((element as any).msRequestFullscreen) {
        await (element as any).msRequestFullscreen();
      }
    } catch (err) {
      console.error('Failed to enter fullscreen:', err);
    }
  }
  
  async function exitFullscreen() {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        await (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        await (document as any).msExitFullscreen();
      }
    } catch (err) {
      console.error('Failed to exit fullscreen:', err);
    }
  }
</script>

<div 
  class="metrodrone-container" 
  class:fullscreen={isFullscreen}
  bind:this={containerRef}
>
  <div class="demo-content">
      <MetrodroneApp />
  </div>
  
  {#if isFullscreen && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}
    <div class="mobile-tip">
      <p>💡 Rotate device for better experience</p>
    </div>
  {/if}
</div>

<!-- <button 
    class="fullscreen-btn" 
    onclick={toggleFullscreen}
    aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
>
    {#if isFullscreen}
    <span class="icon">[]</span> 
    {:else}
    <span class="icon">[]</span> 
    {/if}
</button> -->

<p>
I built this to help me practice intervals along a drone, inspired by 
Harmonic Experience by W. A. Mathieu and The Advancing Guitarist by 
Mick Goodrick. Both books emphasize singing (with your voice or instrument) 
over a constant note to internalize intervals. This tool started as a
 small personal utility and became a deeper dive into the Web Audio API.
</p>

<p>
Under the hood, it's a TypeScript audio engine handling real-time synthesis, 
with a Svelte frontend for controls. State flows through a reactive store 
that bridges UI and audio—adjusting a slider updates the engine directly.
The drone visualization is built using the Web Audio API's Fourier transform,
giving you a live look at the frequency spectrum as you play (inspired by
<a href="https://www.youtube.com/watch?v=VXWvfrmpapI" target="_blank">this video</a>).
</p>
<br/>

<h3>Whats next</h3>
<p>
Taking a short break on this, but v2.0 ideas are floating around: 
expanding the sound library, adding pattern presets, swing timing, and more. 
Code and ideas are on <a href="https://github.com/rafaelcacilhas/metrodrone-web" target="_blank">GitHub </a>; feedback and PRs are always welcome.
</p>

<style>
  .metrodrone-container {
    margin: 0 auto;
    padding: 1.5rem;
    color:white;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .metrodrone-container.fullscreen {
    max-width: none;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  /* .fullscreen-btn {
    padding: 0.5rem 1rem;
    background: rgba(229, 107, 111, 0.1);
    border: 1px solid rgba(229, 107, 111, 0.3);
    border-radius: 8px;
    color: #e56b6f;
    font-weight: 600;
    cursor: pointer;

  } */
  
  /* .fullscreen-btn:hover {
    background: rgba(229, 107, 111, 0.2);
    transform: translateY(-2px);
  }
  
  .fullscreen-btn:active {
    transform: translateY(0);
  } */

  .demo-content {
    margin-left: -4rem;
    background: #000;
    min-height: 500px;
    min-width:700px;
    width:100%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .mobile-tip {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-size: 0.9rem;
    animation: fadeInUp 0.5s ease;
    z-index: 1000;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  .fullscreen .demo-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    .metrodrone-container {
      padding: 0;
      margin: 0;
    }

    .demo-content {
      min-width: 0;
    }
  }
</style>