<script lang="ts">
  // Import
  import { onMount } from "svelte";
  import { GetAnimeByID } from "../service/anime";
  import Pagination from "../components/Pagination.svelte";

  // Variable
  export let id: string = "unknown";
  let anime: object = {};

  // Fetching ghibli info. by ID
  onMount(async () => {
    try {
      const resp = await GetAnimeByID(id);
      anime = resp.data;
      id = anime["id"];
    } catch (err) {
      console.error(err);
    }
  });

  // Try to fetch ghibli api
  function APIDirect() {
    window.open(anime["url"], "_blank");
  }
</script>

<main>
  <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
    <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
      <img
        class="w-full"
        alt="image of {anime['title']}"
        src={anime["image"]}
      />
    </div>
    <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
      <div class="border-b border-gray-200 pb-6">
        <div class="text-sm leading-none text-gray-600 dark:text-gray-300 ">
          <div class="flex w-full mt-1">
            <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
              {anime["original_title"]}
            </div>
            <div class="text-xs text-gray-600">
              • {anime["original_title_romanised"]}
            </div>
          </div>
        </div>
        <h1
          class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"
        >
          {anime["title"]}
        </h1>
      </div>

      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
          Director
        </p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
            {anime["director"]}
          </p>
        </div>
      </div>

      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
          Producer
        </p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
            {anime["producer"]}
          </p>
        </div>
      </div>

      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
          Score
        </p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
            {anime["rt_score"]}
          </p>
        </div>
      </div>

      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4 text-gray-800 dark:text-gray-300">
          Running Time
        </p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
            {anime["running_time"]}
          </p>
        </div>
      </div>

      <div
        class="py-4 border-b border-gray-200 flex items-center justify-between"
      >
        <p class="text-base leading-4 text-gray-800 dark:text-gray-300">Year</p>
        <div class="flex items-center justify-center">
          <p class="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
            {anime["release_date"]}
          </p>
        </div>
      </div>

      <div class="mt-7">
        <p
          class="text-base font-bold leading-4 text-gray-800 dark:text-gray-300"
        >
          Description
        </p>
        <p
          class=" text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-3 mb-7"
        >
          {anime["description"]}
        </p>
      </div>

      <button
        on:click={APIDirect}
        class="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-sky-600 w-full py-4 hover:bg-sky-700 focus:outline-none"
      >
        <svg
          class="mr-3 text-white dark:text-gray-900"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.66699 4.83333V4.84166"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.333 11.5V11.5083"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Fetch API
      </button>
    </div>
  </div>

  <div class="mx-auto w-[900px]">
    <Pagination currId={id} />
  </div>
</main>
