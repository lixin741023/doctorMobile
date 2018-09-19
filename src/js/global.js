import { Toast } from 'mint-ui';
class lx{
    static con(text,data){
        console.log('----------------');
        console.log(text,data);
        console.log('--------------------------------');
    };
    static tipFailed(text,time=2000,fun){
        Toast({
            message:text,
            position:'bottom',
            duration:time,
        });
        if(fun){
            setTimeout(()=>{
                fun()
            },time+150);
        }
    };
    static tipTop(text,time=1250,fun){
        Toast({
            message:text,
            position:'top',
            duration:time
        });
        if(fun){
            setTimeout(()=>{
                fun()
            },time+150);
        }
    };
    static tipSuccess(text,time=1000,fun){
        Toast({
            message:text,
            position:'middle',
            duration:time,
            iconClass:'fa fa-check'
        });
        if(fun){
            setTimeout(()=>{
                fun()
            },time+150);
        }
    }
}
lx.platform_YiHu='31b648901b0943ca8363b926de44758e';
lx.platform_YiSheng='28e11226288343b882fa2ac28c45a65a';

export {lx};
