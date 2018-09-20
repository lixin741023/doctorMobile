<template>
    <div class="optionC">
        <div class="tabTitle">
            <span v-for="(a,b) in menuList" :class="{'active_tabTitle':active_tabContainer===a.id}" @click="active_tabContainer=a.id">{{a.name}}</span>
        </div>
        <mt-tab-container class="tabContainer" v-model="active_tabContainer" :swipeable="true">
            <mt-tab-container-item class="tabContainerItem" v-for="(a,b) in menuList" :id="a.id" :key="a.id">
                <div v-for="(x,y) in a.children" class="item" @touchstart="gtouchstart(popupVisibleControl,x.id)" @touchmove="gtouchmove()" @touchend="gtouchend(R_fun,x.url)">
                    <span v-show="whether_mark(x.id)" class="mark">常用</span>
                    <img :src="$store.state.url+x.icon" alt="">
                    <span class="name">{{x.name}}</span>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-popup v-model="popupVisible" position="bottom" class="setting">
            <div v-show="whether_setButton" @click="oftenControl('add')" class="add">设为常用</div>
            <div v-show="!whether_setButton" @click="oftenControl('remove')" class="remove">移除常用</div>
            <div @click="popupVisible=false" class="cancel">取消</div>
        </mt-popup>
    </div>
</template>

<script>
    import {lx} from "../../js/global.js";
    import Vue from 'vue';
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import { Popup } from 'mint-ui';
    Vue.component(Popup.name, Popup);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    let timeOutEvent;
    export default {
        name: "optionC",
        data:()=>({
            active_tabContainer:undefined,
            menuList:[],
            popupVisible:false,
            often:[],
            funItem:undefined,
            whetherHasChange_setting:false,
            GS:undefined
        }),
        watch:{

        },
        computed:{
            whether_setButton(){
                return this.often.indexOf(this.funItem)===-1;
            }
        },
        methods:{
            popupVisibleControl(funItem_id){
                this.popupVisible=true;
                this.funItem=funItem_id;
            },
            gtouchstart:function gtouchstart(fun,funItem_id){
                timeOutEvent = setTimeout(function(){
                    timeOutEvent = 0;
                    fun(funItem_id);
                },500);
                return false;
            },
            gtouchmove:function gtouchmove(){
                clearTimeout(timeOutEvent);
                timeOutEvent = 0;
            },
            gtouchend:function gtouchend(fun,url){
                clearTimeout(timeOutEvent);
                if(timeOutEvent!==0){
                    fun(url);
                }
                return false;
            },
            R_fun(a){
                this.$store.commit('commit_funType',a);
                this.$router.push({
                    name:'HuanZheList'
                });
            },
            whether_mark(funId){
                return this.often.indexOf(funId) !== -1;
            },
            oftenControl(type){
                if(type==='add'){
                    this.often.push(this.funItem)
                }else if(type==='remove'){
                    this.often.splice(this.often.indexOf(this.funItem),1);
                }
                lx.tipTop('设置成功');
                this.whetherHasChange_setting=true;
            },
            query_menu(){
                $.ajax({
                    type:'post',
                    url:this.$store.state.url+'/operatorAddress/queryUserOpeToAdd',
                    async:false,
                    dataType:'json',
                    data:{
                        userId:this.$store.state.userId,
                        platformId:lx.platform_YiSheng
                    },
                    success:(data)=>{
                        lx.con('菜单返回',data);
                        if(data.error){
                            lx.tipFailed(data.error)
                        }else{
                            this.GS=data.parameter;
                            this.menuList=data.resultDomains;
                            this.active_tabContainer=data.resultDomains[0].id;
                            for(let i=0; i<data.resultDomains.length; i++){
                                for(let x=0; x<data.resultDomains[i].children.length; x++){
                                    if(data.resultDomains[i].children[x].often){
                                        this.often.push(data.resultDomains[i].children[x].id);
                                    }
                                }
                            }
                        }
                    }
                })
            }
        },
        beforeMount:function () {
            this.query_menu();
        },
        beforeRouteLeave(a,b,c){
            if(!this.whetherHasChange_setting){
                c();
            }else{
                $.ajax({
                    type:'post',
                    url:this.$store.state.url+'/operatorAddress/saveAndUpdateMed',
                    async:false,
                    dataType:'json',
                    data:{
                        'id':this.GS,
                        'userId.id':this.$store.state.userId,
                        'content':JSON.stringify(this.often),
                        'platformId.id':lx.platform_YiSheng
                    },
                    success:(data)=>{
                        lx.con('配置上传：',data);
                        if(data.error){
                            lx.tipFailed(data.message);
                        }else{
                            lx.tipSuccess('保存设置成功',1000,function () {
                                c();
                            })
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .optionC{
        height: 100%;
        padding-top: 1px;
        background-color: #fff;
        .setting{
            width: 100%;
            background-color: transparent;
            div{
                background-color: #fff;
                font-size: 16px;
                text-align: center;
                border-bottom: 1px solid #e1e1e1;
                padding: 9px 0;
                &:active{
                    background-color: @grey_activeColor;
                }
            }
            .remove{
                color: red;
            }
            .cancel{
                margin-top: 15px;
            }
        }
        .tabTitle{
            margin-top: 2%;
            display: flex;
            justify-content: space-around;
            span{
                padding: 0 6px 3px 6px;
                font-size: 18px;
                color: @fontColor;
            }
            .active_tabTitle{
                border-bottom: 5px solid #27B6F5;
            }
        }
        .tabContainer{
            height: 88%;
        }
        .tabContainerItem{
            display: flex;
            flex-wrap: wrap;
        }
        .item{
            margin-top: 2%;
            margin-left: 2%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 160px;
            height: 160px;
            border: 1px solid #ccc;
            overflow: hidden;
            &:active{
                background-color: @grey_activeColor;
            }
            .mark{
                position: absolute;
                left: 55px;
                top: 11px;
                transform: rotateZ(45deg);
                background-color: #27B6F5;
                color: #fff;
                font-size: 15px;
                padding: 3px 0;
                width: 100%;
                text-align: center;
            }
            img{
                margin-top: 40px;
                width: 60px;
                height: 60px;
            }
            .name{
                margin-top: 20px;
                font-size: 16px;
            }
        }
    }
</style>
