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
            },time+100);
        }
    }
}

export {lx};
