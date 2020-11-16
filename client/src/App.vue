<template>
    <main>
      <router-view></router-view>
    </main>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Roboto&display=swap');

body {
  background: $black;
  color: $white;
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
}
</style>