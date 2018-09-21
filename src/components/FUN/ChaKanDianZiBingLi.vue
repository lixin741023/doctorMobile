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
                    <div class="person" v-for="(a,b) in HuanZheList" @click="check_HuanZhe=a.clinicId" :class="{'active_person':check_HuanZhe===a.clinicId}" :data-id="a.clinicId">
                        <span class="name">{{a.patientName}}</span>
                        <span class="num">{{a.number|formatter_number}}</span>
                        <div class="a">
                            <span v-show="a.outHospital">(出)</span>
                            <span v-show="a.superior">(提)</span>
                        </div>
                        <span class="sex">{{a.patientSexName}}</span>
                        <span class="age">{{a.patientAge}}</span>
                        <span v-show="a.clinicId!==check_HuanZhe" class="fa fa-caret-down"></span>
                        <span v-show="a.clinicId===check_HuanZhe" class="fa fa-caret-up"></span>
                    </div>
                    <div class="menu">
                        <li v-for="(a,b) in menuList" :class="{'color_li':a.number}" @click="query_test(a.number)">
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
                        <span class="fa fa-angle-double-left"></span>
                        <!--<span class="fa fa-angle-double-right"></span>-->
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
                    <div class="a">
                        <span>书写人：赵天泽泽</span>
                        <div>
                            <span>保存时间：</span>
                            <select name="" id="">
                                <option value="">2018-09-22 07:12:91</option>
                            </select>
                        </div>
                    </div>
                    <div class="b">1</div>
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
            HuanZheList:[],
            check_HuanZhe:undefined,
            menuList:[],
            searchContent:''
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
            check_HuanZhe(clinicId){
                $.ajax({
                    type:'post',
                    url:this.$store.state.url+'/emr/findClassTreeByParId',
                    async:false,
                    dataType:'json',
                    data:{
                        userId:this.$store.state.userId,
                        clinicId:clinicId,
                    },
                    success:(data)=>{
                        lx.con('查询菜单',data);
                        if(data.error){
                            lx.tipFailed(data.message);
                        }else{
                            // $(`.ChaKanDianZiBingLi .person[data-id=${this.check_HuanZhe}]`);
                            this.menuList=data.resultDomains;
                        }
                    }
                })
            }
        },
        methods:{
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
                        }
                    }
                });
            },
            query_test(number){
                if(number){
                    console.log(123)
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
                .active_person{
                    background-color: #27B6F5;
                }
                .menu{
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
                }
            }
        }
    }
</style>
