<template>
    <div class="YiZhuGuanLi">
        <global-title fun-name="医嘱管理"></global-title>
        <div class="filter">
            <div>
                开始时间：<select name="" id="">
                <option value="">2018-04-22 16:24</option>
                <option value="">2018-04-22 16:24</option>
            </select>
            </div>
            <div>
                停止时间：<select name="" id="">
                <option value="">2018-04-22 16:24</option>
                <option value="">2018-04-22 16:24</option>
            </select>
            </div>
            <div>
                校期：<select name="" id="">
                <option value="">全部</option>
                <option value="">临时</option>
                <option value="">长期</option>
            </select>
            </div>
            <div>
                类型：<select name="" id="">
                <option value="">全部</option>
                <option value="">类型A</option>
                <option value="">类型B</option>
            </select>
            </div>
            <div>
                状态：<select name="" id="">
                <option value="">全部</option>
                <option value="">状态A</option>
                <option value="">状态B</option>
            </select>
            </div>
        </div>
        <div class="container">
            <div class="btnList">
                <div class="cell1">
                    <span class="a topLeft_radius bottomLeft_radius">审核</span>
                    <span class="b"></span>
                    <span class="a topRight_radius bottomRight_radius">提交</span>
                </div>
                <div class="cell2">
                    <span class="a topLeft_radius bottomLeft_radius">停止</span>
                    <span class="b"></span>
                    <span class="a">作废</span>
                    <span class="b"></span>
                    <span class="a topRight_radius bottomRight_radius">删除</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import globalTitle from '../nav/globalTitle.vue';
    export default {
        name: "YiZhuGuanLi",
        props:['HuanZhe'],
        data:()=>({

        }),
        components:{
            globalTitle
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .YiZhuGuanLi{
        .topRight_radius{
            border-top-right-radius: 4px;
        }
        .bottomRight_radius{
            border-bottom-right-radius: 4px;
        }
        .topLeft_radius{
            border-top-left-radius: 4px;
        }
        .bottomLeft_radius{
            border-bottom-left-radius: 4px;
        }
        height: 100%;
        .filter{
            height: 55px;
            padding: 0 15px;
            border-bottom: 1px solid #e1e1e1;
            background-color: #f7f7f7;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }
        .container{
            position: relative;
            height: calc(100% - 39px - 55px);
            background-color: #fff;
            .btnList{
                display: flex;
                align-items: center;
                border-bottom: 1px solid #e1e1e1;
                padding-left: 25px;
                height: 60px;
                color: #fff;
                .cell1{
                    border-radius: 4px;
                    background-color: #27B6F5;
                    width: 120px;
                    height: 38px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    .a{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 49%;
                        height: 100%;
                        &:active{
                            background-color: @theme_deepColor;
                        }
                    }
                    .b{
                        height: 80%;
                        width: 1px;
                        background-color: #e1e1e1;
                    }
                }
                .cell2{
                    margin-left: 40px;
                    border-radius: 4px;
                    width: 190px;
                    height: 30px;
                    background-color: #FF9898;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    .a{
                        width: 33%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        &:active{
                            background-color: darken(#FF9898,10%);
                        }
                    }
                    .b{
                        height: 80%;
                        width: 1px;
                        background-color: #E1E1E1;
                    }
                }
            }
        }
    }
</style>
