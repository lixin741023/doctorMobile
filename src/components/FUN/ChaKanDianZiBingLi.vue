<template>
    <div class="ChaKanDianZiBingLi">
        <globalTitle funName="查看电子病历"></globalTitle>
        <div class="left">
            <div class="searchBox">
                <input type="text" placeholder="患者姓名/住院号">
                <button>搜索</button>
            </div>
            <div class="list">
                <div>
                    <span>张大大大</span>
                    <span>20666666</span>
                    <span>(出)</span>
                    <span>(提)</span>
                    <span>男</span>
                    <span>100岁</span>
                    <span class="fa fa-caret-down"></span>
                    <!--<span class="fa fa-caret-up"></span>-->
                </div>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
    import globalTitle from '../nav/globalTitle.vue';
    export default {
        name: "ChaKanDianZiBingLi",
        components:{
            globalTitle
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .ChaKanDianZiBingLi{
        height: 100%;
        background-color: #f7f7f7;
        .left{
            width: 325px;
            height: calc(100% - 39px);
            background-color: #fff;
            .searchBox{
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 55px;
                border-bottom: 1px solid #e1e1e1;
                input{
                    width: 200px;
                    height: 40px;
                    background-color: #F3F3F3;
                    border-radius: 8px;
                    font-size: 16px;
                }
                button{
                    font-size: 16px;
                    width: 75px;
                    height: 40px;
                    background-color: #27B6F5;
                    color: #fff;
                    &:active{
                        background-color: @theme_deepColor;
                    }
                }
            }
            .list{

            }
        }
    }
</style>
