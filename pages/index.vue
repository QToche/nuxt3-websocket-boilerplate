<script lang="ts" setup>
const disabled = ref(true);
const roomName = ref("");
const userName = ref("");
const navigateToRoom = (nickname: string = 'test') => {
    navigateTo(`/room/${roomName.value.toUpperCase()}?name=${userName.value}`);
}

</script>
<template>
    <div class="flex h-screen bg-orange-400 items-center justify-center flex-col">
        <div class="text-5xl mb-3 font-extrabold italic text-white text-center drop-shadow-lg">
            Holi Hola
        </div>
        <div class="home-container bg-white p-5 rounded-xl border-b-4 border-r-4 border-gray-400">
            <div class="container-label-input">
                <input v-model="roomName" placeholder="Code de la partie" id="inputCodePartie" type="text"
                    class="normal-input text-center">
            </div>
            <div class="container-label-input">
                <input v-model="userName" placeholder="Pseudo" id="inputUsername" type="text"
                    class="normal-input text-center mt-2">
            </div>
            <button @click="navigateToRoom()" class="primary-button w-full mt-2">
                Rejoindre
            </button>
            <div class="separator my-5 bg-slate-300 h-1 rounded-lg mx-5"></div>
            <button class="primary-button w-full">
                Créer une partie
            </button>
        </div>
    </div>
</template>

<style scoped></style>