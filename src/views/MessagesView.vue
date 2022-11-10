<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";

function deleteMessage(e: Event) {
  const messageIndex = (e.currentTarget as HTMLElement).id;
  // messages.value[Number(messageIndex)] = null;
  messages.value.splice(Number(messageIndex), 1);
}

const messages: Ref<string[]> = ref([
  "Loved meeting you but we've given the room to our mate",
  "Don't think you're the right fit for our house",
  "Sorry but our housemate has now decided not to move out.",
  "Sorry Harper we've chosen another girl this time",
  "Room already taken",
  "My sister wants to move in with us no sorry",
]);
</script>

<template>
  <main
    class="flex flex-col bg-purple-100 w-9/12 p-2 rounded-lg text-slate-200 space-y-3"
  >
    <section class="flex flex-row space-x-2">
      <button
        class="to-purple-800 from-purple-400 flex-1 rounded-lg bg-gradient-to-t"
      >
        NEW
      </button>
      <button
        class="to-purple-800 from-purple-400 flex-1 rounded-lg bg-gradient-to-t opacity-50"
        disabled
      >
        INBOX
      </button>
      <button
        class="to-purple-800 from-purple-400 flex-1 rounded-lg bg-gradient-to-t opacity-50"
        disabled
      >
        SENT
      </button>
      <button
        class="to-purple-800 from-purple-400 flex-1 rounded-lg bg-gradient-to-t opacity-50"
        disabled
      >
        ADMIN
      </button>
    </section>
    <section
      id="messages"
      class="flex flex-col text-sm max-h-screen overflow-y-scroll space-y-4 py-1"
    >
      <transition-group name="toast">
        <div
          class="flex flex-row bg-purple-600 rounded-xl pl-2 max-h-7"
          v-for="(message, index) in messages"
          :key="index"
        >
          <div class="w-1/12 flex place-items-center">
            <img src="/media/profile.jpg" alt="" class="rounded-full h-9" />
          </div>
          <p class="w-10/12 px-1 overflow-x-clip">
            {{ message }}
          </p>
          <router-link to="/viewMessage" class="self-center mr-1">
            <font-awesome-icon icon="fa-solid fa-message" class="" />
          </router-link>
          <font-awesome-icon
            icon="fa-solid fa-delete-left"
            class="self-center"
            :id="String(index)"
            @click="deleteMessage"
          />
        </div>
      </transition-group>
    </section>
  </main>
</template>

<style>
.toast-move,
.toast-enter-active,
.toast-leave-active {
  transition: all 3s ease-in-out;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
