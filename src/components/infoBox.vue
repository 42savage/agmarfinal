<template>
<div class="box_container">
    <div class="icon"><img :src="icon"></div>
    <div class="content">
        <h2 class="contentHeader">{{contentHeader}}</h2>
        <p class="contentText">{{contentText}}</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'infoBox',
    props:{
        icon:{
            type: String
        },
        contentHeader:{
            type: String
        },
        contentText:{
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
.box_container{
    width: 310px;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
    margin: 6px 0;
}
.icon{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    width: 70%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}
.contentText{
    padding-right: 12px;
}
</style>