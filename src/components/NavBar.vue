<script lang="ts" setup></script>

<template>
  <main>
    <nav class="flex flex-col place-items-center text-purple-800">
      <section class="flex flex-row w-9/12 justify-between">
        <div class="flex flex-row space-x-2 flex-1">
          <h1
            class="font-black text-2xl lg:text-4xl flex flex-col place-content-center"
          >
            <router-link to="/">ROOMIES</router-link>
          </h1>
          <form @submit.prevent="" class="flex flex-row place-items-center">
            <input
              type="text"
              id="searchArea"
              name="serchArea"
              placeholder="SEARCH"
              class="border bg-purple-300 p-1 text-sm rounded-lg"
            />
            <label for="searchArea" class="">
              <font-awesome-icon
                icon="fa-solid fa-search-location"
                class="p-1 rounded-full to-purple-900 from-purple-400 bg-gradient-to-tr text-slate-300"
              />
            </label>
          </form>
        </div>
        <div class="flex flex-row space-x-2 flex-1 justify-end">
          <div class="flex flex-col w-4/12">
            <div class="flex-1 self-center">
              <img
                src="/media/profile.jpg"
                alt="profile picture"
                class="rounded-full"
              />
            </div>
            <h2 class="self-center font-bold flex-1">Harper</h2>
            <button class="w-fit text-xs self-center flex-1">Log Out</button>
          </div>
          <div class="flex flex-col place-content-center text-slate-200">
            <button
              class="to-purple-800 from-purple-400 bg-gradient-to-t rounded-lg px-3 mb-2"
            >
              ACCOUNT
            </button>
            <router-link to="/help" class="self-center">
              <button
                class="to-purple-800 from-purple-400 bg-gradient-to-b rounded-lg px-3"
              >
                HELP
              </button>
            </router-link>
          </div>
        </div>
      </section>
      <section
        class="flex flex-col place-items-center bg-purple-300 w-full p-2"
      >
        <div class="flex flex-row w-9/12 justify-between">
          <div class="flex flex-row space-x-5">
            <button class="w-fit">Properties</button>
            <button class="w-fit">Landlords</button>
            <button class="w-fit">Tenants</button>
          </div>
          <div class="flex flex-row space-x-5">
            <button class="w-fit">FAQs</button>
            <button class="w-fit">Contact Us</button>
          </div>
        </div>
      </section>
      <section class="flex flex-row w-9/12 font-bold py-1">
        <button class="hover:underline">Harper></button>
        <button class="hover:underline">My Account></button>
        <router-link to="/messages"
          ><button class="hover:underline">Messages</button></router-link
        >
      </section>
    </nav>
  </main>
</template>
