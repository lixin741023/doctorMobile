<template>
    <div class="HuanZheList">
        <div class="global_filters">
            <span class="fa fa-angle-left" @click="R_back()">返回</span>
            <span>筛选</span>
            <span>分类</span>
        </div>
        <ul class="list" v-infinite-scroll="queryListOfPatient" >
            <li v-for="(a,b) in patientList" @click="R_fun(a.clinicId)">
                <span class="name">{{a.name}}</span>
                <span class="sex">{{a.sex}}</span>
                <span class="age">{{a.age}}</span>
                <span class="status" :class="{'status_red':whethere_red(a.doctorsId)}">{{a.doctors}}</span>
                <span class="HuLi">一级护理</span>
                <span class="fa fa-chevron-right"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { InfiniteScroll } from 'mint-ui';
    Vue.use(InfiniteScroll);
    import {lx} from "../../js/global";
    export default {
        name: "HuanZheList",
        data:()=>({
            patientList:[],
            page:1,
            pageTotal:1,
            pageRows:20,
        }),
        methods:{
            R_back(){
                this.$router.go(-1);
            },
            R_fun(HuanZheId){
                this.$router.push({
                    name:this.$store.state.funType,
                    params:{
                        HuanZhe:HuanZheId
                    }
                })
            },
            queryListOfPatient(){
                if(this.patientList.length<this.pageTotal){
                    $.ajax({
                        type:'post',
                        url:this.$store.state.url+'/patientInfo/findDocPatByUserIdMed',
                        async:false,
                        dataType:'json',
                        data:{
                            userId:this.$store.state.userId,
                            page:this.page,
                            rows:this.pageRows
                        },
                        success:(data)=>{
                            lx.con('患者列表',data);
                            if(data.error){
                                lx.tipFailed(data.message);
                            }else{
                                for(let i=0; i<data.rows.length; i++){
                                    this.patientList.push(data.rows[i]);
                                }
                                this.page++;
                                this.pageTotal=data.total;
                            }
                        }
                    })
                }else{
                    lx.tipFailed('没有更多患者了');
                }
            },
            whethere_red(redStatusId){
                return !(redStatusId === '8c03350ef1cf5933829989b7bc109ea0' || redStatusId === 'cc82870c48c750ef873905adc8c38095');
            }
        },
        beforeMount:function () {
            // this.queryListOfPatient();
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .HuanZheList{
        height: 100%;
        background-color: #f7f7f7;
        .list{
            height: calc(100% - 39px);
            overflow-y: scroll;
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
                    left: 170px;
                    font-size: 14px;
                    color: @fontColor;
                }
                .age{
                    left: 230px;
                    font-size: 14px;
                    color: @fontColor;
                }
                .status{
                    left: 320px;
                    font-size: 14px;
                    color: @fontColor;
                }
                .status_red{
                    color: red;
                }
                .HuLi{
                    left: 420px;
                    font-size: 15px;
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
        .global_filters{
            .fa{
                position: absolute;
                left: 15px;
            }
        }
    }
</style>
