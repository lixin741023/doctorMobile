<template>
    <div class="app">
        <status-bar></status-bar>
        <left-nav></left-nav>
        <div class="box">
            <router-view>
            </router-view>
        </div>
    </div>
</template>

<script>
    import statusBar from './components/bar/statusBar.vue';
    import leftNav from './components/nav/leftNav.vue';
    export default {
        name: "app",
        components:{
            leftNav,
            statusBar
        }
    }
</script>

<style scoped lang="less">
    .app{
        position: relative;
        margin: 0 auto;
        min-width: 768px;
        max-width: 1280px;
        height: 100%;
        .box{
            position: absolute;
            width: 92%;
            height: 94%;
            right: 0;
            /*background-color: #2AC845;*/
            overflow: hidden;
        }
    }
</style>
