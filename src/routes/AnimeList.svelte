<script lang="ts">
  import MovieCard from "../components/MovieCard.svelte";
  import { animes as AnimeStore } from "../stores/AnimeStore";

  // Variable
  let animes: any[] = [];

  const unsubscribe = AnimeStore.subscribe((value) => {
    animes = value;
  });
</script>

<main>
  <div class="grid grid-cols-6 gap-5 p-20 ">
    {#if animes.length}
      {#each animes as anime (anime["id"])}
        <MovieCard
          {...{
            id: anime["id"],
            title: anime["title"],
            original_title: anime["original_title"],
            original_title_romanised: anime["original_title_romanised"],
            image: anime["image"],
            release_date: anime["release_date"],
            rt_score: anime["rt_score"],
            running_time: anime["running_time"],
          }}
        />
      {/each}
    {/if}
  </div>
</main>
