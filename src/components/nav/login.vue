<template>
    <div class="login">
        <img src="../../images/login.png" alt="">
        <label for="">
            <span>账号:</span>
            <input type="text" maxlength="15" placeholder="请输入账号" v-model="user">
        </label>
        <label for="">
            <span>密码:</span>
            <input type="password" maxlength="15" placeholder="请输入密码" v-model="pas">
        </label>
        <button>登录</button>
        <span class="more">
            更多<span class="fa fa-angle-right"></span>
        </span>
    </div>
</template>

<script>
    import {lx} from "../../js/global";
    export default {
        name: "login",
        data:()=>({
            user:'',
            pas:''
        }),
        methods:{
            a(){
                this.$router.push({
                    name:'optionA'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import url('../../styles/custom.less');
    .login{
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
            width: 450px;
            margin-top: 30px;
            font-size: 16px;
            input{
                font-size: 14px;
                width: 90%;
                padding: 15px 5px;
                border-radius: 6px;
            }
        }
        button{
            margin-top: 20px;
            width: 460px;
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
    }
</style>