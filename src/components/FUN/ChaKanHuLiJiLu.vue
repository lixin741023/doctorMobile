<template>
    <div class="ChaKanHuLiJiLu">
        <globalTitle funName="查看护理记录">
            <div class="datePicker">
                <span class="fa fa-angle-left"></span>
                <div>
                    2018-09-18
                    <span class="fa fa-caret-down"></span>
                </div>
                <span class="fa fa-angle-right"></span>
            </div>
        </globalTitle>
        <div class="container">
            <div class="right">
                <div class="sideTitle"></div>
                <div class="sideButton">
                    <span v-show="!patientDetails" @click="show_patientDetails" class="fa fa-angle-double-left"></span>
                    <span v-show="patientDetails" @click="hidden_patientDetails" class="fa fa-angle-double-right"></span>
                    <div></div>
                </div>
                <div  class="side">
                    <div>
                        <div>
                            <div class="row row1">
                                <span class="name">ASSD</span>
                                <span class="sex">男</span>
                                <span class="age">123岁</span>
                                <span class="weight">65kg</span>
                            </div>
                            <div class="row">
                                <span>住院号：</span>
                                <span>20180511251355</span>
                            </div>
                            <div class="row">
                                <span>科室：</span>
                                <span>重症医学科</span>
                            </div>
                            <div class="row">
                                <span>住院医生：</span>
                                <span>赵天泽泽</span>
                            </div>
                            <div class="row2">
                                <span>诊断：</span>
                                <span>超感染性流感禽流感传染性扩张过敏性鼻炎肺结核超感染性流感禽流感传染性扩张过敏性鼻炎肺结核</span>
                            </div>
                            <div class="row">
                                <span>过敏史：</span>
                                <span>空</span>
                            </div>
                            <div class="row">
                                <span>患者情况：</span>
                                <span>一般</span>
                            </div>
                            <div class="row">
                                <span>责任护士：</span>
                                <span>张妮妮妮</span>
                            </div>
                            <div class="row">
                                <span>护理级别：</span>
                                <span>三级护理</span>
                            </div>
                            <div class="row">
                                <span>入科时间：</span>
                                <span>2018/08/09 11:12:32</span>
                            </div>
                            <div class="row">
                                <span>入院时间：</span>
                                <span>2018/08/09 11:12:32</span>
                            </div>
                            <div class="row">
                                <span>入院天数：</span>
                                <span>5天</span>
                            </div>
                            <div class="row">
                                <span>入院经办：</span>
                                <span>张航航航</span>
                            </div>
                            <div class="row">
                                <span>费用类别：</span>
                                <span>社保</span>
                            </div>
                            <div class="row">
                                <span>总预交：</span>
                                <span>￥5000.00</span>
                            </div>
                            <div class="row">
                                <span>总预交：</span>
                                <span>￥4800.00</span>
                            </div>
                            <div class="row">
                                <span>担保金额：</span>
                                <span>￥50.00</span>
                            </div>
                            <div class="row">
                                <span>余额：</span>
                                <span>￥-328.00</span>
                            </div>
                            <div class="row2">
                                <span>住址：</span>
                                <span>成都市金牛区 明月路8栋000单元10号成都市金牛区 明月路8栋000单元10号</span>
                            </div>
                            <div class="row">
                                <span>联系方式：</span>
                                <span>18982555555</span>
                            </div>
                            <div style="height: 60px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import globalTitle from '../nav/globalTitle.vue';
    export default {
        name: "ChaKanHuLiJiLu",
        data:()=>({
            patientDetails:true
        }),
        components:{
            globalTitle
        },
        methods:{
            show_patientDetails(){
                $('.ChaKanHuLiJiLu .right').animate({
                    right:0
                },500,()=>{this.patientDetails^=1});
            },
            hidden_patientDetails(){
                $('.ChaKanHuLiJiLu .right').animate({
                    right:'-255px'
                },500,()=>{this.patientDetails^=1});
            }
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .ChaKanHuLiJiLu{
        height: 100%;
        .datePicker{
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100%;
            font-size: 18px;
            padding: 0 15px;
            width: 255px;
            right: 3px;
            .fa-angle-left{
                position: absolute;
                left: 10px;
                font-size: 24px;
                font-weight: bold;
                &:active{
                    color: @theme_deepColor;
                }
            }
            .fa-angle-right{
                position: absolute;
                right: 10px;
                font-size: 24px;
                font-weight: bold;
                &:active{
                    color: @theme_deepColor;
                }
            }
            div:nth-child(2){
                color: @fontColor;
                padding: 0 15px;
            }
        }
        .container{
            position: relative;
            height: calc(100% - 39px);
            background-color: #fff;
            overflow-y: scroll;
            .right{
                position: absolute;
                right: 0;
                width: 255px;
                height: 100%;
                background-color: #f7f7f7;
                .sideTitle{
                    height: 6.5px;
                    background-color: #27b6f5;
                }
                .sideButton{
                    position: absolute;
                    left: -37px;
                    top: calc(50% - 85px);
                    display: flex;
                    padding-left: 13px;
                    align-items: center;
                    width: 45px;
                    height: 50px;
                    border-top-left-radius: 50%;
                    border-bottom-left-radius: 50%;
                    background-color: #27B6F5;
                    color: #fff;
                    font-size: 23px;
                    div{
                        position: absolute;
                        width: 1px;
                        height: 100%;
                        background-color: #e1e1e1;
                        top: 0;
                        right: 6px;
                    }
                }
                .side{
                    .noChoose_HuanZhe{
                        .systemText;
                        margin-top: 80px;
                        margin-left: 47px;
                    }
                    line-height: 2;
                    color: @fontColor;
                    font-size: 14px;
                    border-left: 1px solid #e1e1e1;
                    padding: 0 10px;
                    height: calc(100% - 6.5px);
                    overflow-y: scroll;
                    .row{
                        display: flex;
                        justify-content: space-between;
                    }
                    .row1{
                        display: flex;
                        align-items: flex-end;
                        .name{
                            font-size: 18px;
                            font-weight: bold;
                        }
                    }
                    .row2{
                        display: flex;
                        justify-content: space-between;
                        span:nth-child(1){
                            white-space: nowrap;
                        }
                    }
                    .button{
                        background-color: #27b6f5;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
