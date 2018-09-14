<template>
    <div class="statusBar">
        <span>欢迎您：</span>
        <span>赵泽天</span>
        <span>|</span>
        <span class="switchAccount">切换账号</span>
        <span>|</span>
        <span class="network">96ns</span>
    </div>
</template>

<script>
    export default {
        name: "statusBar"
    }
</script>

<style scoped lang="less">
    .statusBar{
        position: absolute;
        z-index: 4;
        display: flex;
        align-items: center;
        width: 100%;
        height: 6%;
        bottom: 0;
        border-top: 1px solid #e1e1e1;
        background-color: #F7F7F7;
        padding-left: 0.05rem;
        .switchAccount{
            &:active{

            }
        }
        .network{
            color: #47C9FB;
        }
    }
</style>
