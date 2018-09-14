<template>
    <div class="optionA">
        <div class="item">
            <div class="grid1">
                <span>张达达达</span>
                <span>5211床</span>
            </div>
            <div class="grid2">
                <div class="row1">
                    <span>男</span>
                    <span>125岁</span>
                    <span>20180855152459</span>
                </div>
                <div class="row2">
                    <span>流行性感冒传热肺结核病</span>
                </div>
                <div class="row3">
                    <span>越天泽泽</span>
                    <span>重症医学观察科</span>
                </div>
            </div>
            <div class="grid3">
                <div class="row1">
                    <span>张妮妮</span>
                    <span>普外科病区</span>
                </div>
                <div class="row2">
                    <span>护理级别</span>
                    <span>三级护理</span>
                </div>
            </div>
            <div class="grid4">
                <span>待定</span>
            </div>
        </div>
        <div class="side">
            <div class="title"></div>

            <div>
                <span>张达达达</span>
                <span>男</span>
                <span>123岁</span>
                <span>65kg</span>
            </div>
            <div class="">
                <span>住院号:</span>
                <span>20180511251355</span>
            </div>
            <div>
                <span>科室:</span>
                <span>重症医学科</span>
            </div>
            <div>
                <span>住院医生:</span>
                <span>赵天泽泽</span>
            </div>
            <div>
                <span>诊断:</span>
                <span>laudantium magnam minima porro quasi.</span>
            </div>
            <div>
                <span>过敏史:</span>
                <span>空</span>
            </div>
            <div>
                <span>患者情况:</span>
                <span>一般</span>
            </div>
            <div>
                <span>责任护士:</span>
                <span>张妮妮妮</span>
            </div>
            <div>
                <span>护理级别:</span>
                <span>三级护理</span>
            </div>
            <div>
                <span>入科时间:</span>
                <span>2018/08/09 11:12:32</span>
            </div>
            <div>
                <span>入院时间:</span>
                <span>2018/08/09 11:12:32</span>
            </div>
            <div>
                <span>入院天数:</span>
                <span>5天</span>
            </div>
            <div>
                <span>入院经办:</span>
                <span>张航航航</span>
            </div>
            <div>
                <span>费用类别:</span>
                <span>社保</span>
            </div>
            <div>
                <span>总预交:</span>
                <span>￥5000.00</span>
            </div>
            <div>
                <span>总预交:</span>
                <span>￥4800.00</span>
            </div>
            <div>
                <span>担保金额:</span>
                <span>￥50.00</span>
            </div>
            <div>
                <span>余额:</span>
                <span>￥-328.00</span>
            </div>
            <div>
                <span>住址:</span>
                <span>成都市</span>
            </div>
            <div>
                <span>联系方式:</span>
                <span>18982555555</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "optionA"
    }
</script>

<style scoped lang="less">
    .optionA{
        .item{
            margin-top: 5px;
            margin-left: 5px;
            width: 200px;
            font-size: 12px;
            .grid1,.grid2,.grid3,.grid4{
                padding: 3px 5px;
            }
            .grid1{
                background-color: #E3E3E3;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                span:first-child{
                    font-size: 24px;
                }
                span:nth-child(2){
                    font-size: 13px;
                }
            }
            .grid2{
                line-height: 1.7;
                border: 1px solid #e3e3e3;
                border-top: 0;
                .row1,.row2,.row3{
                    display: flex;
                    justify-content: space-between;
                }
            }
            .grid3{
                line-height: 1.7;
                border: 1px solid #e3e3e3;
                border-top: 0;
                .row1,.row2{
                    display: flex;
                    justify-content: space-between;
                }
            }
            .grid4{
                line-height: 1.7;
                border: 1px solid #e3e3e3;
                border-top: 0;
            }
        }
        .side{
            position: relative;
            font-size: 14px;
            .title{
                height: 7px;
                background-color: #27b6f5;
            }
            .button{
                background-color: #27b6f5;
                color: #fff;

            }
        }
    }
</style>
