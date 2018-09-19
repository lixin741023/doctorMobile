<template>
    <div class="test1">

        123
<button @click="c">close</button>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    export default {
        name: "test1",
        methods:{
            c(){
                Indicator.close();
            }
        },
        mounted:function () {
            Indicator.open('AA')
        }
    }
</script>

<style scoped lang="less">
    .test1{
        position: relative;
        button{
            position: absolute;
            z-index: 9999;
        }
    }
</style>
