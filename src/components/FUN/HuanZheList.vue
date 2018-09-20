<template>
    <div class="HuanZheList">
        <div class="global_filters">
            <span>筛选</span>
            <span>分类</span>
        </div>
        <ul class="list">
            <li>
                <span class="name">刘德一二</span>
                <span class="sex">男</span>
                <span class="age">100岁</span>
                <span class="status status_red">危重</span>
                <span class="HuLi">一级护理</span>
                <span class="fa fa-chevron-right"></span>
            </li>
            <li>
                <span class="name">刘德一</span>
                <span class="sex">男</span>
                <span class="age">10岁</span>
                <span class="status status_red">危重</span>
                <span class="HuLi">一级护理</span>
                <span class="fa fa-chevron-right"></span>
            </li>
            <li>
                <span class="name">刘德二</span>
                <span class="sex">男</span>
                <span class="age">180岁</span>
                <span class="status status_red">危重</span>
                <span class="HuLi">一级护理</span>
                <span class="fa fa-chevron-right"></span>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "HuanZheList",
        data:()=>({

        })
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .HuanZheList{
        height: 100%;
        background-color: #f7f7f7;
        .list{
            li{
                position: relative;
                height: 45px;
                display: flex;
                align-items: center;
                padding: 8px;
                font-size: 18px;
                background-color: #fff;
                border-bottom: 1px solid #e1e1e1;
                &:active{
                    background-color: @grey_activeColor;
                }
                .name{
                    left: 30px;
                    color: @fontColor;
                }
                .sex{
                    left: 150px;
                    font-size: 14px;
                    color: @fontColor;
                }
                .age{
                    left: 210px;
                    font-size: 14px;
                    color: @fontColor;
                }
                .status{
                    left: 300px;
                    font-size: 14px;
                }
                .status_red{
                    color: red;
                }
                .HuLi{
                    font-size: 15px;
                    left: 400px;
                    color: #8278FF;
                }
                .fa{
                    right: 15px;
                    color: inherit;
                }
                span{
                    position: absolute;
                }
            }
        }
    }
</style>
