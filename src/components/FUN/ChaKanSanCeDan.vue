<template>
    <div class="ChaKanSanCeDan">
        <globalTitle fun-name="查看三测单">
            <div class="pageControl">
                <label @click="pageIncrease">
                    <span class="fa fa-angle-left"></span>
                    <span>上一页</span>
                </label>
                {{page}}/{{allPage}}
                <label @click="pageDecrease">
                    <span>下一页</span>
                    <span class="fa fa-angle-right"></span>
                </label>
            </div>
        </globalTitle>
        <div class="container">
            <div class="info">
                <div>
                    姓名:
                    <span>张达达达</span>
                </div>
                <div>
                    性别:
                    <span>女</span>
                </div>
                <div>
                    年龄:
                    <span>36岁</span>
                </div>
                <div>
                    科别:
                    <span>重症医学科科科</span>
                </div>
                <div>
                    床位名称:
                    <span>0028</span>
                </div>
                <div>
                    入院日期:
                    <span>2018-08-31 09:36:05</span>
                </div>
                <div>
                    住院号:
                    <span>
                    20180814666666
                </span>
                </div>
            </div>
            <div class="chartBox">
                <div id="main" style="width: 1000px;height: 1000px;"></div>
                <table class="headerTableData" width="795" cellpadding="0" cellspacing="0">
                    <tr class="hosDate"> <!--住院日期-->
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="hosDay"> <!--住院天数-->
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="shuhouDay"> <!--术后天数-->
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <table class="breathTableData" width="795" cellpadding="0" cellspacing="0">
                    <tr class="breathingsTr">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <table class="bloodData" width="795" cellpadding="0" cellspacing="0">
                    <tr class="Blood">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <table class="footerTableData" width="795" cellpadding="0" cellspacing="0">
                    <tr class="weight">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="cacationCoun">
                        <td>123</td>
                        <td>312</td>
                        <td>123</td>
                        <td>312</td>
                        <td>3</td>
                        <td>2</td>
                        <td>44</td>
                    </tr>
                    <tr class="insertSize">
                        <td>55</td>
                        <td>66</td>
                        <td>1</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr class="outSize">
                        <td>7</td>
                        <td>8</td>
                        <td>8</td>
                        <td>9</td>
                        <td>9</td>
                        <td>0</td>
                        <td>33</td>
                    </tr>
                    <tr class="urineSize">
                        <td>1</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                </table>
                <p class="cutLine"></p> <!--37℃分割线-->
                <div class="leftFrame"> <!--左侧划线-->
                    <div class="leftFrameHeader">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div class="leftFrameFooter">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {lx} from "../../js/global";
    import {drawThreeTestList} from "./render_Echarts";
    import globalTitle from '../nav/globalTitle.vue';
    export default {
        name: "ChaKanSanCeDan",
        props:['HuanZhe'],
        components:{
            globalTitle
        },
        data:()=>({
            page:1,
            allPage:undefined
        }),
        methods:{
            pageIncrease(){
                if (this.page <= 1) {
                    lx.tipFailed('当前第一页');
                } else if (this.page >= 1) {
                    this.page--;
                    drawThreeTestList(this.HuanZhe,this.page);
                }
            },
            pageDecrease(){
                if (this.page >= this.allPage) {
                    lx.tipFailed('已是最后一页');
                } else if (this.page <= this.allPage) {
                    this.page++;
                    drawThreeTestList(this.HuanZhe,this.page);
                }
            }
        },
        beforeMount:function () {
            $.ajax({
                type:'get',
                url:this.$store.state.url+'/threetest/findTttotalByClinicId',
                async:false,
                dataType:'json',
                data:{
                    clinicId:this.HuanZhe,
                    rows:7
                },
                success:(data)=>{
                    lx.con('总页数',data);
                    if(data.error){
                        lx.tipFailed(data.message,1500);
                    }else{
                        this.allPage=data.resultDomain;
                        this.page=this.allPage;
                    }
                }
            })
        },
        mounted:function () {
            drawThreeTestList(this.HuanZhe,this.page);
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .ChaKanSanCeDan{
        height: 100%;
        .pageControl{
            display: flex;
            justify-content: space-between;
            position: absolute;
            right: 5px;
            width: 165px;
            label:active{
                color: @theme_deepColor;
            }
        }
        .container{
            padding-left: 15px;
            background-color: #fff;
            height: calc(100% - 39px);
            overflow: scroll;
            .info{
                width: 1000px;
                margin: 10px auto;
                color: @fontColor;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                div{
                    display: inline-block;
                    span{
                        text-decoration: underline;
                    }
                }
            }
            .chartBox{
                position: relative;
                margin: 15px auto 0;
                width: 1000px;
                background-color: #fff;
                .headerTableData{
                    position: absolute;
                    top: 3px;
                    left: 105px;
                    td{
                        width: 14.2%;
                        text-align: center;
                        color: @fontColor;
                    }
                }
                .breathTableData{
                    position: absolute;
                    bottom: 135px;
                    left: 103px;
                    font-size: 12px;
                    tr{
                        display: flex;
                        td{
                            margin: 0;
                            padding: 0;
                            width: 19px;
                            height:20px;
                            line-height: 20px;
                            text-align: center;
                            color: @fontColor;
                        }
                    }
                }
                .bloodData{
                    position: absolute;
                    bottom: 116.5px;
                    left: 103px;
                    font-size: 12px;
                    color: @fontColor;
                    tr{
                        display: flex;
                        td{
                            width:57px;
                            text-align: center;
                        }
                    }
                }
                .footerTableData{
                    position: absolute;
                    bottom: 12px;
                    left: 103px;
                    font-size: 12px;
                    color: @fontColor;
                    tr{
                        display: flex;
                        height:20px;
                        td{
                            width: 114px;
                            text-align: center;
                        }
                    }
                }
                .leftFrame{
                    position: absolute;
                    top: 1px;
                    left: 0;
                    width: 105px;
                    height: 986px;
                    border-left: 1px solid black;
                }
                .leftFrameHeader>p{
                    margin: 0;
                    height: 20px;
                    border-top: 1px solid #000;
                    border-right: 1px solid #000;
                }
                .leftFrameHeader>p:nth-of-type(4){
                    height: 50px;
                }
                .leftFrameFooter{
                    position: absolute;
                    bottom: -18px;
                    width: 104px;
                }
                .leftFrameFooter>p{
                    margin: 0;
                    height: 20px;
                    border-top: 1px solid #000;
                    border-right: 1px solid #000;
                }
                .leftFrameFooter>p:last-child{
                    border-right: 0;
                }
            }
        }
    }
</style>
