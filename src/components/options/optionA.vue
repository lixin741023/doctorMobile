<template>
    <div class="optionA">
        <div class="top">
            <div class="KeShi">
                <span>科室:</span>
                <select name="" id="" v-model="KeShi_check">
                    <option value="0">所有科室</option>
                    <option v-for="(a,b) in KeShi_list" :value="a.groupId">{{a.groupName}}</option>
                </select>
            </div>
            <div class="search">
                <input type="text" maxlength="15" placeholder="根据住院号/姓名查询" v-model="searchBox">
                <button @click="query">查询</button>
            </div>
            <div class="switch">
                <span>危急</span>
                <mt-switch v-model="WeiJi"></mt-switch>
            </div>
            <div class="switch">
                <span>管床</span>
                <mt-switch v-model="GuanChuang"></mt-switch>
            </div>
        </div>
        <div class="merge">
            <div class="left" v-infinite-scroll="loadMore" infinite-scroll-immediate-check="false">
                <div v-show="HuanZhe_List.length===0" class="noQuery_HuanZhe">没有查询到患者</div>
                <div v-for="(a,b) in HuanZhe_List" class="item" @click="chooseHuanZhe(b)" >
                    <div class="grid1" :class="{'bg':b===chooseHuanZhe_i-1}">
                        <span>{{a.name}}</span>
                        <span>{{a.bedName}}</span>
                    </div>
                    <div class="grid2" :class="{'border':b===chooseHuanZhe_i-1}">
                        <div class="row1">
                            <span>{{a.gender}}</span>
                            <span>{{a.age}}</span>
                            <span>{{a.clinicNumber|standBy_clinicNumber}}</span>
                        </div>
                        <div class="row2">
                            <span>流行性感冒传热肺结核病</span>
                        </div>
                        <div class="row3">
                            <span>{{a.doctorName}}</span>
                            <span>{{a.diseaseAreaName}}</span>
                        </div>
                    </div>
                    <div class="grid3" :class="{'border':b===chooseHuanZhe_i-1}">
                        <div class="row1">
                            <span>张妮妮</span>
                            <span>普外科病区</span>
                        </div>
                        <div class="row2">
                            <span>护理级别</span>
                            <span>三级护理</span>
                        </div>
                    </div>
                    <div class="grid4" :class="{'border':b===chooseHuanZhe_i-1}">
                        <div>
                            <img src="../../images/YiZhuICON.png" alt="">
                            <span>24</span>
                        </div>
                        <div>
                            <img src="../../images/YiZhuICON.png" alt="">
                            <span>14</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="sideTitle"></div>
                <div class="sideButton">
                    <span v-show="!patientDetails" @click="show_patientDetails" class="fa fa-angle-double-left"></span>
                    <span v-show="patientDetails" @click="hidden_patientDetails" class="fa fa-angle-double-right"></span>
                    <div></div>
                </div>
                <div  class="side">
                    <div>
                    <div v-if="chooseHuanZhe_i">
                        <div class="row row1">
                            <span class="name">{{HuanZhe_List[chooseHuanZhe_i-1].name}}</span>
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
                    <div v-if="!chooseHuanZhe_i" class="noChoose_HuanZhe">选择左侧患者</div>
                </div>
            </div>
        </div>
        <mt-popup class="popupBox" v-model="popupVisible" position="bottom">
            <div>医嘱管理</div>
            <div>查看电子病历</div>
            <div>查看护理病历</div>
            <div>查看护理记录</div>
            <div>查看三测单</div>
        </mt-popup>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Switch } from 'mint-ui';
    Vue.component(Switch.name, Switch);
    import { InfiniteScroll } from 'mint-ui';
    Vue.use(InfiniteScroll);
    import {lx} from "../../js/global";
    import { Indicator } from 'mint-ui';
    import { Popup } from 'mint-ui';
    Vue.component(Popup.name, Popup);
    export default {
        name: "optionA",
        components:{

        },
        data:()=>({
            patientDetails:false,
            GuanChuang:true,
            WeiJi:true,
            KeShi_check:undefined,
            KeShi_list:[],
            searchBox:'',
            page:1,
            total:1,
            HuanZhe_List:[],
            onceTip:true,
            chooseHuanZhe_i:undefined,
            popupVisible:false
        }),
        watch:{
            KeShi_check:function () {
                $('.optionA .left').scrollTop(0);
                this.chooseHuanZhe_i=undefined;
                this.page=1;
                this.onceTip=true;
                this.HuanZhe_List=[];
                this.query_patient(1);
            },
            GuanChuang:function () {
                $('.optionA .left').scrollTop(0);
                this.chooseHuanZhe_i=undefined;
                this.page=1;
                this.onceTip=true;
                this.HuanZhe_List=[];
                this.query_patient(1);
            },
            WeiJi:function () {
                $('.optionA .left').scrollTop(0);
                this.chooseHuanZhe_i=undefined;
                this.page=1;
                this.onceTip=true;
                this.HuanZhe_List=[];
                this.query_patient(1);
            }
        },
        filters:{
            standBy_clinicNumber(a){
                return a.slice(0,13);
            }
        },
        computed:{

        },
        methods:{
            chooseHuanZhe(index){
                if(this.chooseHuanZhe_i===index+1){
                    this.chooseHuanZhe_i=undefined;
                }else{
                    this.chooseHuanZhe_i=index+1;
                }
            },
            loadMore(){
                if(this.HuanZhe_List.length<this.total){
                    this.page++;
                    this.query_patient();
                }else{
                    if(this.onceTip){
                        lx.tipFailed('没有更多患者了');
                        this.onceTip=false;
                    }
                }
            },
            show_patientDetails(){
                this.patientDetails^=1;
                let leftWidth=$('.optionA .left').width()-255+39;
                $('.optionA .right').animate({
                    right:'0'
                },500);
                $('.optionA .left').animate({
                    width: leftWidth
                },500);
            },
            hidden_patientDetails(){
                this.patientDetails^=1;
                $('.optionA .right').animate({
                    right:'-255px'
                },500);
                $('.optionA .left').animate({
                    width: '100%'
                },500);
            },
            query_KeShi(){
                $.ajax({
                    type:'post',
                    url:this.$store.state.url+'/workingGroup/findWorkingGroupsByUserId',
                    async:false,
                    dataType:'json',
                    data:{
                        userId:this.$store.state.userId
                    },
                    success:(data)=>{
                        lx.con('请求科室：',data);
                        if(data.error){
                            lx.tipFailed(data.message)
                        }else{
                            this.KeShi_list=data.resultDomains;
                            this.KeShi_check=0;
                        }
                    }
                })
            },
            query(){
                $('.optionA .left').scrollTop(0);
                this.chooseHuanZhe_i=undefined;
                this.page=1;
                this.onceTip=true;
                this.HuanZhe_List=[];
                this.query_patient(1);
            },
            query_patient(type){
                if(type){Indicator.open('加载中...')}
                $.ajax({
                    type:'post',
                    url:this.$store.state.url+'/patientInfo/findPatientsInfoByPage',
                    async:false,
                    dataType:'json',
                    data:{
                        workGroupId:this.KeShi_check,
                        text:this.searchBox,
                        isOneself:this.GuanChuang,
                        isSerious:this.WeiJi,
                        userId:this.$store.state.userId,
                        page:this.page,
                        rows:20
                    },
                    success:(data)=>{
                        lx.con('患者列表：',data);
                        if(data.error){
                            lx.tipFailed(data.message)
                        }else{
                            if(type){
                                setTimeout(()=>{
                                    Indicator.close();
                                },500);
                            }
                            for(let i=0; i<data.rows.length; i++){
                                this.HuanZhe_List.push(data.rows[i]);
                            }
                            this.total=data.total;
                        }
                    }
                })
            }
        },
        beforeMount:function () {
            this.query_KeShi();
        },
        mounted:function () {
            new BScroll.default('.optionA .side');
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .optionA{
        height: 100%;
        .top{
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 10px;
            height: 45px;
            background-color: #F7F7F7;
            .KeShi{
                color: @fontColor;
                display: flex;
                align-items: center;
                font-size: 16px;
                select{
                    width: 110px;
                }
            }
            .search{
                display: flex;
                align-items: center;
                margin-left: 0.2rem;
                input{
                    width: 2rem;
                    padding: 8px 5px;
                }
                button{
                    margin-left: 10px;
                    color: #fff;
                    background-color: #27B6F5;
                    padding: 8px 16px;
                    &:active{
                        background-color: @theme_deepColor;
                    }
                }
            }
            .switch{
                color: @fontColor;
                position: absolute;
                display: flex;
                align-items: center;
                span{
                    font-size: 16px;
                    margin-right: 3px;
                }
            }
            .switch:nth-child(3){
                right: 10px;
            }
            .switch:nth-child(4){
                right: 119px;
            }
        }
        .merge{
            position: relative;
            height: calc(100% - 45px);
            .left{
                position: absolute;
                left: 0;
                width: calc(100%);
                height: 100%;
                background-color: #fff;
                padding-bottom: 10px;
                padding-right: 39px;
                overflow-y: scroll;
                .noQuery_HuanZhe{
                    .systemText;
                    text-align: center;
                    margin-top: 20%;
                }
                .item{
                    .border{
                        border: 1.5px solid #27B6F5!important;
                        border-top: 0!important;
                    }
                    .bg{
                        background-color: #27B6F5!important;
                        color: #fff!important;
                    }
                    float: left;
                    margin-top: 10px;
                    margin-left: 10px;
                    width: 200px;
                    font-size: 12px;
                    .grid1,.grid2,.grid3{
                        padding: 3px 5px;
                    }
                    .grid1{
                        background-color: #E3E3E3;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                        color: @fontColor;
                        span:first-child{
                            font-size: 24px;
                        }
                        span:nth-child(2){
                            font-size: 13px;
                        }
                    }
                    .grid2{
                        line-height: 1.7;
                        border: 1.5px solid #e3e3e3;
                        border-top: 0;
                        .row1,.row2,.row3{
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    .grid3{
                        line-height: 1.7;
                        border: 1.5px solid #e3e3e3;
                        border-top: 0;
                        .row1,.row2{
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    .grid4{
                        display: flex;
                        padding: 4px 5px 1px 5px;
                        line-height: 1.7;
                        border: 1.5px solid #e3e3e3;
                        border-top: 0;
                        div{
                            margin-right: 6px;
                            width: 20px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            span{
                                margin-top: 2px;
                                font-family: "Segoe Script";
                                font-weight: bold;
                                color: #13227A;
                            }
                        }
                    }
                }
            }
            .right{
                position: absolute;
                right: -255px;
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
        .popupBox{
            width: 100%;
            div{
                font-size: 16px;
                background-color: #fff;
                padding: 9px 0;
                border-bottom: 1px solid #e1e1e1;
                text-align: center;
                &:active{
                    background-color: @grey_activeColor;
                }
            }
        }
    }
</style>
<style lang="less">
    .optionA{
        .top{
            .mint-switch-input:checked+.mint-switch-core{
                background-color: #64BD63;
                border-color: #64BD63;
            }
        }
    }
</style>
