<template>
  <div class="footer_container">
      <div class="footer_navigation">
          <div class="logo">
              <h1 class="logo_big">AGMAR.</h1>
              <a class="logo_small">meble kuchenne</a>
          </div>
          <nav class="footer_nav">
              <ul class="footer_items">
                  <li><a>Home</a></li>
                  <li><a>O firmie</a></li>
                  <li><a>Oferta</a></li>
                  <li><a>Realizacje</a></li>
              </ul>
          </nav>
          <p class="author">Created by shizz0@outlook.com</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer_container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}
.logo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.logo_big, .logo_small{
    color: white;
}
.logo_big{
    font-size: 28px;
    line-height: 20px;
}
.logo_small{
    font-size: 14px;
}
.footer_container{
    background: #1a1a1a;
}
.author{
    color: white;
    font-size: 12px;
    margin: 12px 0 6px 0;
}
.footer_nav, .footer_navigation, li, a{
    width: 100%;
    text-align: center;
}
.footer_items{
    list-style-type: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>