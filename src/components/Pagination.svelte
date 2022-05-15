<script lang="ts">
  import { Link } from "svelte-navigator";
  import { animes as AnimeStore } from "../stores/AnimeStore";

  // Variable
  export let currId: string = "unknown";

  let currInd: number = undefined;
  let prev: object = null;
  let next: object = null;
  const unsubscribe = AnimeStore.subscribe((animes) => {
    currInd = animes.findIndex((value, _) => value["id"] === currId);
    if (currInd > 0) {
      prev = animes[currInd - 1];
    }

    if (currInd < animes.length - 1) {
      next = animes[currInd + 1];
    }
  });
</script>

<!-- component -->
<div class="row">
  <div class="w-full mx-auto">
    <div class="sm:grid grid-cols-4 gap-5 mx-auto px-16">
      <div class="col-start-1 col-end-3 my-2">
        {#if prev}
          <a href="/detail/{prev && prev['id']}">
            <div
              class="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-2xl rounded border-b-4 border-sky-500 shadow-xl"
            >
              <h3 class="text-2xl mb-3 font-semibold inline-flex">
                <svg
                  class="mr-2"
                  width="24"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                    fill="currentColor"
                  /></svg
                >
                Prev
              </h3>
              <p class="text-lg">{prev["title"]}</p>
            </div>
          </a>
        {/if}
      </div>

      <div class="col-end-5 col-span-2 my-2">
        {#if next}
          <a href="/detail/{next && next['id']}">
            <div
              class="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-2xl rounded border-b-4 border-sky-500 shadow-xl text-right"
            >
              <h3 class="text-2xl mb-3 font-semibold inline-flex ">
                Next
                <svg
                  class="ml-2"
                  width="24"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                    fill="currentColor"
                  /></svg
                >
              </h3>
              <p class="text-lg">{next["title"]}</p>
            </div>
          </a>
        {/if}
      </div>
    </div>
  </div>
</div>
