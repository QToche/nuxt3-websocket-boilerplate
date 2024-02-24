<script lang="ts" setup>
const disabled = ref(true);
const roomName = ref("");
const userName = ref("");
const navigateToRoom = () => {
  navigateTo(`/room/${roomName.value.toUpperCase()}?name=${userName.value}`);
};
</script>
<template>
  <div>
    <input
      v-model="roomName"
      placeholder="Room code"
      id="inputCodePartie"
      type="text"
    />
    <input
      v-model="userName"
      placeholder="Username"
      id="inputUsername"
      type="text"
    />
    <button @click="navigateToRoom()">Rejoindre</button>
  </div>
</template>

<style scoped></style>
