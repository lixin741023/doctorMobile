<template>
    <div class="YiZhuGuanLi">
        <global-title fun-name="医嘱管理"></global-title>
        <div class="filter">
            <div>
                开始时间：<select name="" id="" v-model="yStartDate">
                <option value="">2018-10-2 16:24</option>
                <option value="">2018-10-2 16:24</option>
            </select>
            </div>
            <div>
                停止时间：<select name="" id="" v-model="yEndDate">
                <option value="">2018-10-15 16:24</option>
                <option value="">2018-10-15 16:24</option>
            </select>
            </div>
            <div>
                效期：<select name="" id="" v-model="yXiaoQi">
                <option value="">全部</option>
                <option value="0">长期</option>
                <option value="1">临时</option>
            </select>
            </div>
            <div>
                类型：<select name="" id="" v-model="yType">
                <option value="">全部</option>
                <option value="">类型A</option>
                <option value="">类型B</option>
            </select>
            </div>
            <div>
                状态：<select name="" id="" v-model="yStatus">
                <option value="">全部</option>
                <option value="0">已录入</option>
                <option value="1">已审核</option>
                <option value="2">已提交</option>
                <option value="3">已校对</option>
                <option value="4">已取消</option>
                <option value="5">已停止</option>
                <option value="6">待停止</option>
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
            <div class="right rightShadow">
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
                                <span class="name">ASD</span>
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
            <div class="tableArea">
                <div class="tableBox">
                    <table border="1" cellspacing="0">
                        <thead>
                        <tr>
                            <td></td>
                            <td>组号</td>
                            <td style="text-align: center">内容</td>
                            <td>开停时间</td>
                            <td>类别</td>
                            <td>效期</td>
                            <td>状态</td>
                            <td>类型</td>
                            <td>开嘱医师</td>
                            <td>停止医师</td>
                            <td>校对护士</td>
                            <td>执行次数</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="checkCell">
                                <div class="check" @click="aatest"></div>
                            </td>
                            <td>2</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis dolorum facere fugit nihil non nulla obcaecati possimus temporibus totam. Cum deleniti deserunt eveniet exercitationem facere fugiat iste ratione suscipit.</td>
                            <td>2018-10-08 14:32~2018-10-09 15:33</td>
                            <td>西医</td>
                            <td>长期</td>
                            <td>已录入</td>
                            <td>常规</td>
                            <td>赵天泽</td>
                            <td>越天泽</td>
                            <td>张丽</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td class="checkCell">
                                <div class="check" @click="aatest"></div>
                            </td>
                            <td>2</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis dolorum facere fugit nihil non nulla obcaecati possimus temporibus totam. Cum deleniti deserunt eveniet exercitationem facere fugiat iste ratione suscipit.</td>
                            <td>2018-10-08 14:32~2018-10-09 15:33</td>
                            <td>西医</td>
                            <td>长期</td>
                            <td>已录入</td>
                            <td>常规</td>
                            <td>赵天泽</td>
                            <td>越天泽</td>
                            <td>张丽</td>
                            <td>5</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {lx} from "../../js/global";
    import globalTitle from '../nav/globalTitle.vue';
    export default {
        name: "YiZhuGuanLi",
        props:['HuanZhe'],
        data:()=>({
            patientDetails:true,
            yStartDate:'',
            yEndDate:'',
            yXiaoQi:'',
            yType:'',
            yStatus:''
        }),
        components:{
            globalTitle
        },
        methods:{
            aatest(){
                let a=event.target;
                if(a.classList.contains('hasCheck')){
                    event.target.classList.remove('hasCheck');
                }else{
                    event.target.classList.add('hasCheck');

                }
            },
            show_patientDetails(){
                $('.YiZhuGuanLi .right').animate({
                    right: 0
                },500,()=>{
                    this.patientDetails^=1;
                    $('.YiZhuGuanLi .sideButton').removeClass('sideButton_shadow');
                })
            },
            hidden_patientDetails(){
                $('.YiZhuGuanLi .right').animate({
                    right: '-255'
                },500,()=>{
                    this.patientDetails^=1;
                    $('.YiZhuGuanLi .sideButton').addClass('sideButton_shadow');
                })
            },
            query_YiZhu(){
                $.ajax({
                    type:'post',
                    url:this.$store.state.url+'/doctorAdvice/findDasByCid',
                    async:false,
                    dataType:'json',
                    data:{
                        'clinic.id':1,
                        startTime:this.yStartDate,
                        endTime:this.yEndDate,
                        doctorAdviceEffective:this.yXiaoQi,
                        'doctorAdviceType.id':1,
                        status:this.yStatus
                    },
                    success:(data)=>{
                        lx.con('医嘱条目',data);
                        if(data.error){
                            lx.tipFailed(data.message);
                        }else{

                        }
                    }
                })
            }
        },
        mounted:function () {
            new BScroll.default('.YiZhuGuanLi .side');
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
            .rightShadow{
                box-shadow: -2px -2px 4px #e1e1e1;
            }
            .right{
                position: absolute;
                top: 0;
                right: 0;
                width: 255px;
                height: 100%;
                background-color: #f7f7f7;
                .sideTitle{
                    height: 6.5px;
                    background-color: #27b6f5;
                }
                .sideButton_shadow{
                    opacity: 0.3;
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
            .tableArea{
                height: calc(100% - 60px);
                /*overflow-x: scroll;*/
                /*overflow-y: scroll;*/
                overflow: auto;
                .tableBox{
                    width: 1190px;
                    table{
                        width: 100%;
                        border-color: #e1e1e1;
                        border-top: 0;
                        border-left: 0;
                        td{
                            text-align: center;
                        }
                        tr td:nth-child(3){
                            width: 400px;
                            padding: 5px;
                            text-align: left;
                        }
                        tr td:nth-child(4){
                            width: 200px;
                        }
                    }
                    .checkCell{
                        .check{
                            position: relative;
                            margin: 0 auto;
                            width: 25px;
                            height: 25px;
                            border: 1px solid #e1e1e1;
                            border-radius: 50%;
                        }
                        .hasCheck{
                            /*transition: left 0.5s,right 0.5s;*/
                            transition: transform 0.5s;
                            background-color: #27B6F5;
                            border: 1px solid #27B6F5;
                        }
                        .hasCheck:after{
                            content: '';
                            position: absolute;
                            width: 4px;
                            height: 8px;
                            border: 2px solid #fff;
                            border-top: 0;
                            border-left: 0;
                            transform: rotateZ(45deg) scale(1);
                            left: 9px;
                            top: 5px;
                        }
                    }
                }
            }
        }
    }
</style>
