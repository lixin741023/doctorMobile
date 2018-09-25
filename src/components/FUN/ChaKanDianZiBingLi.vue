<template>
    <div class="ChaKanDianZiBingLi">
        <globalTitle funName="查看电子病历"></globalTitle>
        <div class="phoenix">
            <div class="left">
                <div class="searchBox">
                    <input type="text" placeholder="患者姓名/住院号" v-model="searchContent">
                    <button @click="query_HuanZheList()">搜索</button>
                </div>
                <div class="list">
                    <div class="person" v-for="(a,b) in HuanZheList" @click="query_menu(a.clinicId)" :class="{'active_person':check_HuanZheId===a.clinicId}" :data-id="a.clinicId">
                        <span class="name">{{a.patientName}}</span>
                        <span class="num">{{a.number|formatter_number}}</span>
                        <div class="a">
                            <span v-show="a.outHospital">(出)</span>
                            <span v-show="a.superior">(提)</span>
                        </div>
                        <span class="sex">{{a.patientSexName}}</span>
                        <span class="age">{{a.patientAge}}</span>
                        <span v-show="a.clinicId!==check_HuanZheId" class="fa fa-caret-down"></span>
                        <span v-show="a.clinicId===check_HuanZheId" class="fa fa-caret-up"></span>
                    </div>
                    <div class="noPerson" v-show="HuanZheList.length===0">没有查询到患者</div>
                    <div class="menu">
                        <li v-for="(a,b) in menuList" :class="{'color_li':a.number}" @click="query_BingLi_top(a.number,a.id,a.single)">
                            <div>
                                <span>{{a.name}}</span>
                                <span v-show="a.number">({{a.number}})</span>
                            </div>
                            <span v-show="a.number">
                                <span class="fa fa-angle-right"></span>
                            </span>
                        </li>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="top">
                    <div class="arrow">
                        <span v-show="whetherShow_HuanZheList" class="fa fa-angle-double-left" @click="enlarge()"></span>
                        <span v-show="!whetherShow_HuanZheList" class="fa fa-angle-double-right" @click="narrow()"></span>
                    </div>
                    <div class="Nav">
                        <div class="item">
                            <span class="af">张大大大-医嘱临时打击绯闻</span>
                            <!--<span class="fa fa-close"></span>-->
                        </div>
                        <div class="item">
                            <span class="af">张大大大-医嘱临时打击绯闻</span>
                            <!--<span class="fa fa-close"></span>-->
                        </div>
                        <div class="item item_active">
                            <span class="af">张大大大-医嘱临时打击绯闻</span>
                            <span class="fa fa-close"></span>
                        </div>
                        <div class="item item_active">
                            <span class="af">张大大大-医嘱临时打击绯闻</span>
                            <span class="fa fa-close"></span>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="a" v-show="whetherShow_BingLiTop">
                        <span>书写人：<span v-if="BingLi_top.length!==0">{{BingLi_top[0].name}}</span></span>
                        <div>
                            <span>保存时间：</span>
                            <select name="" id="" v-model="BingLi_top_emrId">
                                <option v-for="(a,b) in BingLi_top" :class="{'typeId':a.typeId}" :value="a.typeId?a.typeId:a.emrId">{{a.emrName}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="b">
                        <div class="YiZhu_table" v-show="!whetherShow_BingLiTop">
                            <h2>临时医嘱单</h2>
                            <div class="itemTotal">
                                <div class="item">
                                    姓名：{{YiZhuTableTitle.patientName}}
                                </div>
                                <div class="item">
                                    科别：{{YiZhuTableTitle.workingGroupName}}
                                </div>
                                <div class="item">
                                    病室：{{YiZhuTableTitle.bedName}}
                                </div>
                                <div class="item">
                                    床号：{{YiZhuTableTitle.bedNum}}
                                </div>
                                <div class="item">
                                    住院号：{{YiZhuTableTitle.clinicNumber}}
                                </div>
                            </div>
                            <table border="1" cellspacing="0">
                                <thead>
                                <tr>
                                    <td class="cell100">时间</td>
                                    <td>医嘱</td>
                                    <td class="cell80">医师签名</td>
                                    <td class="cell100">执行时间</td>
                                    <td class="cell80">执行者签名</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(a,b) in YiZhuTable">
                                    <td>{{a.startTime}}</td>
                                    <td>{{a.content}}</td>
                                    <td>{{a.startDoctorName}}</td>
                                    <td>{{a.executeTime}}</td>
                                    <td>{{a.executeNurse}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import globalTitle from '../nav/globalTitle.vue';
    import {lx} from "../../js/global";
    export default {
        name: "ChaKanDianZiBingLi",
        data:()=>({
            searchContent:'',
            HuanZheList:[],
            check_HuanZheId:undefined,
            whetherShow_HuanZheList:true,
            whetherShow_BingLiTop:true,

            menuList:[],
            BingLi_top:[],
            BingLi_top_emrId:undefined,
            YiZhuTableTitle:{},
            YiZhuTable:[]
        }),
        components:{
            globalTitle
        },
        filters:{
            formatter_number(string){
                return string.slice(-6);
            }
        },
        watch:{
            searchContent(searchContent){
                if(searchContent===''){
                    this.query_HuanZheList();
                }
            },
            BingLi_top_emrId(id){

            }
        },
        methods:{
            enlarge(){
                let a=$('.ChaKanDianZiBingLi .left');
                let b=$('.ChaKanDianZiBingLi .right');
                a.animate({
                    left:'-325px'
                },500);
                b.animate({
                    width:'100%'
                },500,()=>{this.whetherShow_HuanZheList^=1});
            },
            narrow(){
                let a=$('.ChaKanDianZiBingLi .left');
                let b=$('.ChaKanDianZiBingLi .right');
                let bWidth=b.width()-325;
                a.animate({
                    left:'0'
                },500,()=>{this.whetherShow_HuanZheList^=1});
                b.animate({
                    width:bWidth
                },500);
            },
            query_HuanZheList(){
                $.ajax({
                    type:'post',
                    url:this.$store.state.url+'/patientInfo/findPatByTerm',
                    async:false,
                    dataType:'json',
                    data:{
                        userId:this.$store.state.userId,
                        type:0,
                        patientName:this.searchContent
                    },
                    success:(data)=>{
                        lx.con('患者列表',data);
                        if(data.error){
                            lx.tipFailed(data.message);
                        }else{
                            this.HuanZheList=data.resultDomains;
                            this.$nextTick(()=>{
                                let HuanZhe_row=$(`.ChaKanDianZiBingLi .person[data-id=${this.check_HuanZheId}]`);
                                let menu=$('.ChaKanDianZiBingLi .menu');
                                if(HuanZhe_row.length===0){
                                    menu.css('display','none');
                                }else{
                                    menu.insertAfter(HuanZhe_row);
                                    menu.css('display','block');
                                }
                            });
                        }
                    }
                });
            },
            query_menu(clinicId){
                if(this.check_HuanZheId===clinicId){
                    this.check_HuanZheId=undefined;
                    let menu=$('.ChaKanDianZiBingLi .menu');
                    menu.css('display','none');
                }else{
                    this.check_HuanZheId=clinicId;
                    $.ajax({
                        type:'post',
                        url:this.$store.state.url+'/emr/findClassTreeByParId',
                        async:false,
                        dataType:'json',
                        data:{
                            userId:this.$store.state.userId,
                            clinicId:clinicId
                        },
                        success:(data)=>{
                            lx.con('查询菜单',data);
                            if(data.error){
                                lx.tipFailed(data.message);
                            }else{
                                this.menuList=data.resultDomains;
                                let HuanZhe_row=$(`.ChaKanDianZiBingLi .person[data-id=${this.check_HuanZheId}]`);
                                let menu=$('.ChaKanDianZiBingLi .menu');
                                menu.insertAfter(HuanZhe_row);
                                menu.css('display','block');
                            }
                        }
                    })
                }
            },
            query_BingLi_top(number,menuId,single){
                if(number){
                    if(single===0||single===1){
                        $.ajax({
                            type:'post',
                            url:this.$store.state.url+'/doctorAdvice/findExcedByCliIdAndCate',
                            async:false,
                            dataType:'json',
                            data:{
                                clinicId:this.check_HuanZheId,
                                docAdviEffe:single,
                            },
                            success:(data)=>{
                                lx.con('病历头（医嘱）',data);
                                if(data.error){
                                    lx.tipFailed(data.message);
                                }else{
                                    this.YiZhuTableTitle=data.resultDomain.patientInfo;
                                    this.YiZhuTable=data.resultDomain.doctorExecute;
                                    this.whetherShow_BingLiTop=false;
                                }
                            }
                        })
                    }else{
                        $.ajax({
                            type:'post',
                            url:this.$store.state.url+'/emr/findEmrByCliIdAndClassId',
                            async:false,
                            dataType:'json',
                            data:{
                                clinicId:this.check_HuanZheId,
                                classId:menuId,
                                userId:this.$store.state.userId
                            },
                            success:(data)=>{
                                lx.con('病历头',data);
                                if(data.error){
                                    lx.tipFailed(data.message);
                                }else{
                                    this.whetherShow_BingLiTop=true;
                                    this.BingLi_top=data.resultDomains;
                                    for(let i=0; i<this.BingLi_top.length; i++){
                                        if(this.BingLi_top[i].typeId){
                                            this.BingLi_top_emrId=this.BingLi_top[i].typeId;
                                            return;
                                        }
                                    }
                                    this.BingLi_top_emrId=this.BingLi_top[0].emrId;
                                }
                            }
                        });
                    }
                }
            }
        },
        beforeMount:function () {
            this.query_HuanZheList();
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .ChaKanDianZiBingLi{
        height: 100%;
        background-color: #f7f7f7;
        .phoenix{
            position: relative;
            height: calc(100% - 39px);
            overflow: hidden;
        }
        .left{
            position: absolute;
            left: 0;
            top: 0;
            float: left;
            width: 325px;
            height: 100%;
            background-color: #fff;
            border-right: 1px solid #e1e1e1;
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
                height: calc(100% - 55px);
                overflow-y: scroll;
                .person{
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #e1e1e1;
                    position: relative;
                    font-size: 12px;
                    height: 46px;
                    background-color: #bbb;
                    color: #fff;
                    .name,.num,.a,.sex,.age,.fa{
                        position: absolute;
                    }
                    .name{
                        font-size: 16px;
                        left: 5px;
                    }
                    .num{
                        left: 83px;
                    }
                    .a{
                        left: 150px;
                    }
                    .sex{
                        font-size: 16px;
                        left: 220px;
                    }
                    .age{
                        font-size: 16px;
                        left: 245px;
                    }
                    .fa{
                        font-size: 18px;
                        right: 10px;
                    }
                }
                .noPerson{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .systemText;
                    height: 100%;
                }
                .active_person{
                    background-color: #27B6F5;
                }
                .menu{
                    display: none;
                    li{
                        display: flex;
                        font-size: 14px;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 5px;
                        border-bottom: 1px solid #e1e1e1;
                        height: 40px;
                    }
                    .color_li{
                        color: #27B6F5;
                        &:active{
                            background-color: lighten(@grey_activeColor,10%);
                        }
                    }
                }
            }
        }
        .right{
            position: absolute;
            right: 0;
            top: 0;
            width: calc(100% - 325px);
            height: 100%;
            .top{
                background-color: #fff;
                height: 55px;
                border-bottom: 1px solid #e1e1e1;
                .arrow{
                    float: left;
                    width: 30px;
                    height: 100%;
                    border-right: 1px solid #e1e1e1;
                    font-size: 22px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:active{
                        background-color: @grey_activeColor;
                    }
                }
                .Nav{
                    float: left;
                    width: calc(100% - 30px);
                    height: 100%;

                    padding: 0 5px;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    font-size: 18px;
                    white-space: nowrap;
                    .item{
                        display: inline-block;
                        overflow: hidden;
                        width: 170px;
                        height: 100%;
                        margin-right: 10px;
                        .af{
                            float: left;
                            width: 83%;
                            height: 100%;
                            line-height: 55px;
                            overflow: hidden;
                        }
                        .fa{
                            float: right;
                            width: 15%;
                            height: 100%;
                            line-height: 55px;
                            text-align: center;
                            &:active{
                                background: radial-gradient(#eee,#eee);
                            }
                        }
                    }
                    .item_active{
                        width: 200px;
                        border-bottom: 4px solid #27B6F5;
                        color: #27B6F5;
                    }
                }
            }
            .bottom{
                padding-top: 1px;
                height: calc(100% - 55px);
                .a{
                    width: 95%;
                    min-width: 480px;
                    overflow: scroll;
                    height: 50px;
                    color: @fontColor;
                    font-size: 18px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 10px;
                    margin: 20px auto 0;
                    background-color: #fff;
                    select{
                        width: 191px;
                    }
                }
                .b{
                    width: 95%;
                    min-width: 480px;
                    overflow: scroll;
                    height: calc(100% - 90px);
                    margin: 20px auto 0;
                    background-color: #fff;
                    padding: 10px;
                    .YiZhu_table{
                        margin: 0 auto;
                        width: 800px;
                        h2{text-align: center}
                        .itemTotal{
                            display: flex;
                            justify-content: space-between;
                        }
                        table{
                            width: 100%;
                            margin-top: 5px;
                            border-color: #DDDDDD;
                            td{
                                padding: 10px 0;
                            }
                            thead{
                                text-align: center;
                                tr{
                                    .cell100{
                                        width: 100px;
                                    }
                                    .cell80{
                                        width: 80px;
                                    }
                                }
                            }
                            tbody{
                                tr{
                                    td:nth-child(1){
                                        text-align: center;
                                    }
                                    td:nth-child(2){
                                        padding: 10px 15px;
                                    }
                                    td:nth-child(3){
                                        text-align: center;
                                    }
                                    td:nth-child(4){
                                        text-align: center;
                                    }
                                    td:nth-child(5){
                                        text-align: center;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
