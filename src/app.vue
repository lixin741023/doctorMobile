<template>
    <div class="app">
        <router-view v-if="!view" name="login"></router-view>
        <status-bar v-if="view"></status-bar>
        <left-nav v-if="view"></left-nav>
        <div class="box" v-if="view">
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
        data:()=>({
            view:false
        }),
        components:{
            leftNav,
            statusBar
        },
        watch:{
            $route(to,a,b){
                this.view = to.name !== 'login';
            }
        },
        beforeMount:function () {
            this.view = this.$route.name !== 'login';
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
        font-size: inherit;
        .box{
            position: absolute;
            width: 93%;
            height: 96%;
            right: 0;
            background-color: RED;
            overflow: hidden;
        }
    }
</style>
