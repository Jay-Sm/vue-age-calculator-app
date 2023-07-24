<template>
  <div class="bg-white h-4/6 w-1/2 rounded-xl rounded-br-[170px] px-11 pr-16">
    <div class="border-b py-9 px-0">
      <form @submit.prevent="handleSumbit" class="flex mr-52 relative">
        <div class="dateContainer">
          <Label class="dateLabel">DAY</Label>
          <input type="text" placeholder="DD" class="dateInput">
        </div>
        <div class="dateContainer">
          <Label class="dateLabel">MONTH</Label>
          <input type="text" placeholder="MM" class="dateInput">
        </div>
        <div class="dateContainer">
          <Label class="dateLabel">YEAR</Label>
          <input type="text" placeholder="YYYY" class="dateInput">
        </div>
        <button class="bg-appPurple p-4 absolute rounded-full flex justify-center items-center -bottom-[70px] -right-52 hover:bg-opacity-90 active:bg-opacity-80 transition-opacity">
          <img class="w-9 h-9" src="../assets/images/icon-arrow.svg" alt="">
        </button>
      </form>
    </div>

  </div>
</template>

<script setup lang="ts">

function handleSumbit() {
  console.log('submited')
}

</script>

<style></style>