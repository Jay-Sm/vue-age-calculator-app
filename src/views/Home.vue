<template>
  <div class="bg-white h-4/6 w-7/12 min-w-[640px]  rounded-xl rounded-br-[170px] px-11 pr-16">
    <div class="border-b py-9 px-0 w-full">
      <form @submit.prevent="handleSumbit" class="flex mr-52 relative">
        <div class="dateContainer">
          <Label class="dateLabel">DAY</Label>
          <input type="text" placeholder="DD" class="dateInput" v-model="birthDay">
        </div>
        <div class="dateContainer">
          <Label class="dateLabel">MONTH</Label>
          <input type="text" placeholder="MM" class="dateInput" v-model="birthMonth">
        </div>
        <div class="dateContainer">
          <Label class="dateLabel">YEAR</Label>
          <input type="text" placeholder="YYYY" class="dateInput" v-model="birthYear">
        </div>
        <button
          class="bg-appPurple p-4 absolute rounded-full flex justify-center items-center -bottom-[70px] -right-52 hover:bg-opacity-90 active:bg-opacity-80 transition-opacity">
          <img class="w-9 h-9" src="../assets/images/icon-arrow.svg" alt="">
        </button>
      </form>
    </div>
    <div>
      <h1 class="dateTitle"><span class="text-appPurple">--</span> years</h1>
      <h1 class="dateTitle"><span class="text-appPurple">--</span> months</h1>
      <h1 class="dateTitle"><span class="text-appPurple">--</span> days</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// const allowedChars = ['1','2','3','4','5','6','7','8','9']

let birthDay = ref('');
// watch(birthDay, (newValue) => {
//   if (newValue.length > 2) {
//     birthDay.value = newValue.slice(0, 2);
//   }
//   if (!allowedChars.includes(newValue.charAt(newValue.length - 1))) {
//     birthDay.value = newValue.slice(0, newValue.length - 1);
//   }
// })

let birthMonth = ref('');
// watch(birthMonth, (newValue) => {
//   if (newValue.length > 2) {
//     birthMonth.value = newValue.slice(0, 2);
//   }
//   if (!allowedChars.includes(newValue.charAt(newValue.length - 1))) {
//     birthMonth.value = newValue.slice(0, newValue.length - 1);
//   }
// })

let birthYear = ref('');
// watch(birthYear, (newValue) => {
//   if (newValue.length > 4) {
//     birthYear.value = newValue.slice(0, 4);
//   }
//   if (!allowedChars.includes(newValue.charAt(newValue.length - 1))) {
//     birthYear.value = newValue.slice(0, newValue.length - 1);
//   }
// })

function handleSumbit() {

}
</script>

<style></style>