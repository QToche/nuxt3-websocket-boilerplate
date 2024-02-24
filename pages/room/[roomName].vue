<script setup lang="ts">
import { User } from "server/types";
import { io, type Socket } from "socket.io-client";
const route = useRoute();
const socket = ref<Socket>();
const currentRoom: Ref<string> = ref("");
const user: Ref<User> = ref({ id: "", room: "", username: "" });
const users: Ref<User[]> = ref([]);

onMounted(() => {
  socket.value = io({
    path: "/api/socket.io",
  });

  user.value.room = (route.params.roomName as string).toUpperCase();
  user.value.username = (route.query.name as string).toUpperCase();

  // join room
  socket.value.emit("joinRoom", user.value);

  socket.value.on("roomUsers", (response: { room: string; users: User[] }) => {
    currentRoom.value = response.room;
    users.value = response.users;
  });
});
</script>

<template>
  <section>
    Room name : {{ currentRoom }}
    <div v-for="data in users">
      {{ data }}
    </div>
  </section>
</template>
