<template>
    <div class="globalTitle">
        <span class="fa fa-angle-left backIcon" @click="R_back()">返回</span>
        <span class="fun">{{funName}}</span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "globalTitle",
        props:['funName'],
        methods:{
            R_back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .globalTitle{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f7f7f7;
        border-bottom: 1px solid #e1e1e1;
        height: 39px;
        .backIcon{
            position: absolute;
            left: 15px;
            font-size: 16px;
        }
        .fun{
            color: @fontColor;
            font-size: 16px;
        }
    }
</style>
