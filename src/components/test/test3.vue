<template>
    <div class="test3">
        <div v-for="(a,b) in arr">{{a}}</div>
        <div style="margin-top: 40px">{{b}}</div>
    </div>
</template>

<script>
    import {lx} from "../../js/global";
    export default {
        name: "test3",
        data:()=>({
           arr:[],
            b:new Date()
        }),
        beforeMount:function () {
            this.arr=[
                new Date(),
                new Date(2018,8,30,11,42,15)
            ]
        },
        mounted:function () {
            for(let i=0; i<this.arr.length; i++){
                lx.con(`时间${i}-:`,this.arr[i]);
            }
        }
    }
</script>

<style scoped lang="less">
    .test3{
        background-color: #fff;
        height: 100%;
    }

</style>