<template>
<div class="info_container">
    <a>Polub nasz profil na facebooku, a dostaniesz <b>trzy procentową</b> zniżkę.</a>
</div>
</template>

<script>
export default {
    name: 'Info'
}
</script>

<style scoped lang="scss">
    .info_container{
        margin: 62px 100px;
        background: #262626;
        color: white;
        padding: 12px 34px;
        text-align: center;
        b{
            color: #06d8d8;
        }
    }
    @media (min-width:1440px){
        .info_container{
            padding: 34px;
        }
    }
</style>