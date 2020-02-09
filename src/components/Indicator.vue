<template>
  <div class="indicator_container">
    <div class="top_container">
      <div>
        <h4 class="logo">AGMAR</h4>
        <h2 class="title">{{title}}</h2>
      </div>
      <h1 class="counter">{{counter}}</h1>
    </div>
    <p class="content">{{content}}</p>
  </div>
</template>

<script>
export default {
    name: 'Indicator',
    props:{
      title:{
        type: String,
      },
      content:{
        type: String,
      },
      counter:{
        type: String,
      }
    }
}
</script>

<style scoped lang="scss">
.indicator_container{
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}
.logo{
  color: #008b8b;
}
.counter{
  color: hsla(0,0%,50.2%,.527);
  font-weight: 300;
}
.top_container{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 34px;
  position: relative;
}
.top_container::after{
  content: '';
  width: 82%;
  height: 2px;
  background: #525252;
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.content{
  margin-top: 24px;
  padding: 0 34px;
}
@media (min-width: 1440px){
  .indicator_container{
    width: 100%;
    padding: 0 100px;
  }
  .top_container{
    padding: 0;
    &::after{
      width: 100%;
    }
  }
  .title{
    font-size: 32px;
  }
  .logo{
    font-size: 18px;
  }
  .content{
    padding: 0;
    width: 400px;
  }
}
</style>