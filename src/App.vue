<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.locked{
  overflow: hidden;
}
</style>
