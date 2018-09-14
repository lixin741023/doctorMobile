<template>
    <div class="leftNav">
        <router-link :to="{name:'optionA'}" tag="div" class="item">
            <img v-show="!view[0]" src="../../images/optionA.png" alt="">
            <img v-show="view[0]" src="../../images/optionA_check.png" alt="">
            <span :class="{'active_item':view[0]}">患者</span>
        </router-link>
        <router-link :to="{name:'optionB'}" tag="div" class="item">
            <img v-show="!view[1]" src="../../images/optionB.png" alt="">
            <img v-show="view[1]" src="../../images/optionB_check.png" alt="">
            <span :class="{'active_item':view[1]}">病历</span>
        </router-link>
        <router-link :to="{name:'optionC'}" tag="div" class="item">
            <img v-show="!view[2]" src="../../images/optionC.png" alt="">
            <img v-show="view[2]" src="../../images/optionC_check.png" alt="">
            <span :class="{'active_item':view[2]}">功能</span>
        </router-link>
        <router-link :to="{name:'optionD'}" tag="div" class="item">
            <img v-show="!view[3]" src="../../images/optionD.png" alt="">
            <img v-show="view[3]" src="../../images/optionD_check.png" alt="">
            <span :class="{'active_item':view[3]}">消息</span>
        </router-link>
        <router-link :to="{name:'optionE'}" tag="div" class="item">
            <img v-show="!view[4]" src="../../images/optionE.png" alt="">
            <img v-show="view[4]" src="../../images/optionE_check.png" alt="">
            <span :class="{'active_item':view[4]}">设置</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "leftNav",
        data:()=>({
            view:[]
        }),
        watch:{
            $route(a,b){
                this.viewControl(a.name)
            }
        },
        methods:{
            viewControl(currentRoute){
                switch (currentRoute) {
                    case 'optionA': this.view=[true,false,false,false,false];break;
                    case 'optionB': this.view=[false,true,false,false,false];break;
                    case 'optionC': this.view=[false,false,true,false,false];break;
                    case 'optionD': this.view=[false,false,false,true,false];break;
                    case 'optionE': this.view=[false,false,false,false,true];break;
                }
            }
        },
        beforeMount:function () {
            this.viewControl(this.$route.name)
        }
    }
</script>

<style scoped lang="less">
    .leftNav{
        position: absolute;
        left: 0;
        width: 8%;
        height: 94%;
        z-index: 3;
        background-color: #f7f7f7;
        border-right: 1px solid #e1e1e1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item:first-child{
            margin-top: 0;
        }
        .item{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 0.25rem;
            img{
                width: 0.3rem;
                height: 0.3rem;
            }
            span{
                margin-top: 0.07rem;
            }
        }
        .active_item{
            color: #27B6f5;
        }
    }
</style>
