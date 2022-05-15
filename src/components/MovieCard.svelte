<script lang="ts">
  import { useNavigate, NavigateFn } from "svelte-navigator";

  export let id: string = "unknown";
  export let title: string = "unknown";
  export let original_title = "unknown";
  export let original_title_romanised = "unknown";
  export let image: string = "https://picsum.photos/200";
  export let release_date: string = "unknown";
  export let rt_score: number = 0;
  export let running_time: number = 0;

  const navigate: NavigateFn = useNavigate();

  // Handle Navigate to Ghibli detail by ID
  function handleDirect() {
    navigate(`/detail/${id}`);
  }
</script>

<div
  class="col-span-6 mt-5 bg-opacity-50 border border-gray-100 rounded shadow-lg cursor-pointer bg-gradient-to-b from-gray-200 backdrop-blur-20 to-gray-50 md:col-span-3 lg:col-span-2 hover:shadow-xl transition-shadow"
  on:click={handleDirect}
>
  <div class="flex flex-row px-2 py-3 mx-3">
    <div class="flex flex-col mt-1 mb-2 ml-4">
      <div class="text-sm text-gray-600">{title}</div>
      <div class="flex w-full mt-1">
        <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
          {original_title}
        </div>
        <div class="text-xs text-gray-600">• {original_title_romanised}</div>
      </div>
    </div>
  </div>

  <div
    class="flex justify-center px-2 mx-3 my-2 text-sm font-medium text-gray-400"
  >
    <img
      class="w-[300px] h-[300px] rounded-full shadow-2xl object-cover"
      src={image}
      alt="image of {title}"
    />
  </div>

  <div class="mb-5 border-t border-gray-50">
    <div
      class="flex flex-wrap justify-start mx-5 mt-6 text-xs sm:justify-center "
    >
      <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
        score:
        <div class="ml-1 text-gray-500 text-ms">{rt_score}</div>
      </div>

      <div class="flex mb-2 mr-4 font-normal text-gray-700 ">
        runtime: <div class="ml-1 text-gray-500 text-ms">{running_time}</div>
      </div>

      <div class="flex mb-2 mr-4 text-gray-700 ">
        year: <div class="ml-1 text-gray-500 text-ms">{release_date}</div>
      </div>
    </div>
  </div>
</div>
