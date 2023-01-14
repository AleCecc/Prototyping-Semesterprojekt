<script>
    let video, currentTime;
    let playing = false;
    function toggle() {
        let frame;
        if (!playing) {
            playing = true;
            video.play();
        } else {
            playing = false;
            video.pause();
        }
    }
    
</script>
<section>
  <br>

<div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
       <center><img src="images/cover3.jpg" height=500px width=500px alt="cover3"></center>
       
      </div>
      <div class="carousel-item">
        
        <center><img src="images/cover2.jpg" height=500px width=500px alt="cover2"></center>
        
      </div>
      <div class="carousel-item">
        <center><img src="images/cover1.jpg" height=500px width=500px alt="cover1"></center>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

<center><h1 class="mt-3">Welcome to Read n' Share</h1></center>
<center>
    <p>to see the idea behind the app press play</p>
{#if !playing}
	<button on:click={toggle}>
		Play
	</button>
{:else}
	<button on:click={toggle}>
		Pause
	</button>
{/if}
</center>
<center>
    
    <video
      poster="images/svelte_logo.png" class ="logo"
		src="videos/Leistungsnachweis1-Prototyping-Gr14.mp4"	 
		bind:this={video}
	  bind:currentTime
    >
		<track kind="captions">
    </video>
    
</center>
</section>
<style>
    .logo {
        height: 500px;
    }
  
  

    .carousel-control-prev, .carousel-control-next {
        height: 100px;
        width: 100px;
        
    }

    h1 {
        margin-top: 50px;
    }

    video {
        margin-top: 50px;
        width: 1000;
        height: 1000;
    }

    button {
        margin-top: 20px;
    }
    
    #carouselExample{
      margin-top:50px;
    }
    section{
      margin-top:100px;
      background-color: rgba(144, 139, 139, 0.886);
      border-radius:50px;
      margin-bottom:100px;
    }
</style>


