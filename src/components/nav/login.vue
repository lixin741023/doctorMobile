<template>
    <div class="login">
        <img src="../../images/login.png" alt="">
        <label for="">
            <span>账号：</span>
            <input type="text" maxlength="15" placeholder="请输入账号" v-model="user">
            <span v-show="user!==''" @click="user=''" class="fa fa-close"></span>
        </label>
        <label for="">
            <span>密码：</span>
            <input type="password" maxlength="15" placeholder="请输入密码" v-model="pas">
            <span v-show="pas!==''" v-on:click="pas=''" class="fa fa-close"></span>
        </label>
        <button v-show="!whetherShow_loginBtnIng" class="loginBtn" @click="signIn">登录</button>
        <button v-show="whetherShow_loginBtnIng" class="loginBtnIng">登录中...</button>
        <span class="more" @click="show_zzc1__serverBox">
            更多<span class="fa fa-angle-right"></span>
        </span>
        <transition name="serverBox_Animation">
            <div class="serverBox" v-show="whetherShow_serverBox">
            <ul class="serverList">
                <li v-for="(a,b) in serverList" @click="serverListControl(a,b)">
                    {{a}}
                    <span class="fa fa-remove"></span>
                </li>
            </ul>
            <div>
                <input type="text" maxlength="50" placeholder="新增服务器地址" v-model="serverContainer"/>
                <button @click="addServer">add</button>
            </div>
        </div>
        </transition>
        <zzc1 class="zzc1" v-show="whetherShow_zzc1"></zzc1>
    </div>
</template>

<script>
    import zzc1 from '../zzc/zzc1.vue';
    import {lx} from "../../js/global";
    export default {
        name: "login",
        data:()=>({
            user:'',
            pas:'',
            serverList:[],
            serverContainer:'',
            whetherShow_serverBox:false,
            whetherShow_loginBtnIng:false,
            whetherShow_zzc1:false,
        }),
        components:{
          zzc1
        },
        watch:{
            serverList(){

            }
        },
        methods:{
            show_zzc1__serverBox(){
                this.whetherShow_serverBox=true;
                this.whetherShow_zzc1=true;
            },
            signIn(){
                this.whetherShow_loginBtnIng=true;
                this.whetherShow_zzc1=true;
                $.ajax({
                    type:'post',
                    url:this.$store.state.url+'/user/checkLogin',
                    async:true,
                    dataType:'json',
                    data:{
                        username:this.user,
                        password:this.pas,
                        platformId:lx.platform_YiSheng
                    },
                    error:()=>{
                        setTimeout(()=>{
                            lx.tipFailed('错误:无法连接到服务器！');
                            this.whetherShow_loginBtnIng=false;
                            this.whetherShow_zzc1=false;
                        },5000);
                    },
                    success:(data)=>{
                        this.whetherShow_zzc1=false;
                        lx.con('登录结果',data);
                        if(data.error){
                            lx.tipFailed(data.message);
                            this.whetherShow_loginBtnIng=false;
                        }else{
                            this.$store.commit('commit_userId',data.resultDomain.user.id);
                            lx.tipSuccess('登录成功',1500,()=>{
                                this.$router.push({
                                    name:'optionA'
                                });
                            });
                        }
                    }
                })
            },
            addServer(){
                if(!this.serverContainer){
                    lx.tipFailed('服务器地址不能为空');
                    return
                }
                this.serverList.push(this.serverContainer);
                this.serverContainer='';
                localStorage.setItem('serverList',this.serverList);
            },
            serverListControl(ip,i){
                if(event.target.getAttribute('class')){
                    this.serverList.splice(i,1);
                    localStorage.setItem('serverList',this.serverList);
                }else{
                    this.$store.commit('commit_url',ip);
                    lx.tipTop(`链接地址已更换为：${ip}`);
                    this.whetherShow_serverBox=false;
                    this.whetherShow_zzc1=false;
                }
            }
        },
        beforeMount:function () {
            let arr=localStorage.getItem('serverList').split(',');
            this.serverList=arr;
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .login{
        .zzc1{
            background-color: transparent;
        }
        position: relative;
        background-color: #F7F7F7;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            margin-top: 11%;
            width: 240px;
            height: 240px;
        }
        label{
            display: flex;
            align-items: center;
            position: relative;
            width: 450px;
            margin-top: 30px;
            font-size: 16px;
            input{
                font-size: 14px;
                width: 86%;
                padding: 15px 5px;
                border-radius: 6px;
            }
            .fa{
                position: absolute;
                right: 25px;
            }
        }
        .loginBtnIng{
            margin-top: 20px;
            width: 445px;
            color: #fff;
            padding: 11px 0;
            background-color: @theme_deepColor;
        }
        .loginBtn{
            margin-top: 20px;
            width: 445px;
            background-color: #27B6F5;
            color: #fff;
            padding: 11px 0;
            &:active{
                background-color: @theme_deepColor;
            }
        }
        .more{
            margin-top: 35px;
        }
        .serverBox{
            z-index: 6;
            -webkit-box-shadow: 2px 2px 5px #cccccc;
            -moz-box-shadow: 2px 2px 5px #cccccc;
            box-shadow: 2px 2px 5px #cccccc;
            -webkit-border-radius: 7px;
            -moz-border-radius: 7px;
            border-radius: 7px;
            background-color: #fff;
            position: absolute;
            top: 20%;
            .serverList{
                width: 320px;
                height: 200px;
                overflow-y: scroll;
                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 7px 8px;
                    border-bottom: 1px solid #e1e1e1;
                }
            }
            div{
                border-top: 1px solid #e1e1e1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 45px;
                input{
                    width: 220px;
                }
                button{
                    background-color: #27B6F5;
                    margin-right: 8px;
                    height: 30px;
                    padding: 0 15px;
                    color: #fff;
                    &:active{
                        background-color: @theme_deepColor;
                    }
                }
            }
        }
        .serverBox_Animation-enter-active{
            transition: 0.5s;
        }
        .serverBox_Animation-enter-to{
            opacity: 1;
            top: 20%;
        }
        .serverBox_Animation-enter{
            opacity: 0;
            top: 15%;
        }
        .serverBox_Animation-leave{
            opacity: 1;
            top: 20%;
        }
        .serverBox_Animation-leave-to{
            opacity: 0;
            top: 35%;
        }
        .serverBox_Animation-leave-active{
            transition: 0.5s;
        }
    }
</style>