<script lang="ts">
  import { LIMIT_MOVIE } from "../constants/const";
  import { GetAllAnime } from "../service/anime";
  import { onMount } from "svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import { animes as AnimeStore } from "../stores/AnimeStore";
  import AnimeDetail from "./AnimeDetail.svelte";
  import AnimeList from "./AnimeList.svelte";

  // Fetch Ghiblies info
  onMount(async () => {
    try {
      const resp = await GetAllAnime(LIMIT_MOVIE);
      AnimeStore.update(() => resp.data);
    } catch (err) {
      console.error(err);
    }
  });
</script>

<main>
  <Router primary={false}>
    <!-- Header -->
    <h1
      class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center mt-20 cursor-pointer"
    >
      <a href="/">
        <span class="block  text-sky-600 xl:inline">Ghibli</span>
        <span class="block xl:inline">List</span>
      </a>
    </h1>

    <!-- MovieDetail -->
    <Route path="/detail/:id" let:params>
      <AnimeDetail id={params.id} />
    </Route>

    <!-- [PRIMARY] MovieList Route -->
    <Route path="/">
      <AnimeList />
    </Route>

    <!-- Page Not Found Route -->
    <Route path="*">
      <div
        class="h-screen w-full flex flex-col justify-center items-center bg-white"
      >
        <h1 class="text-9xl font-extrabold text-sky-600 tracking-widest">
          404
        </h1>
        <div
          class="bg-sky-600 text-white px-2 text-sm rounded rotate-12 absolute"
        >
          Page Not Found
        </div>
        <button class="mt-5">
          <div
            class="relative inline-block text-sm font-medium text-sky-600 group active:text-sky-600 focus:outline-none focus:ring"
          >
            <span
              class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-sky-600 group-hover:translate-y-0 group-hover:translate-x-0"
            />

            <span
              class="relative block px-8 py-3 bg-white border border-current"
            >
              <Link to="/">Go Home</Link>
            </span>
          </div>
        </button>
      </div>
    </Route>
  </Router>
</main>
