import echarts from 'echarts';
import vv from '../../main.js';
var myUrl;

function connect(url,Data,successFn,errorFn,asyn) {
    if(!asyn){
        asyn = false;
    }else{
        asyn = asyn;
    }
    // var configAddress = "http://" + $("body").attr("address");
    var configAddress = `${myUrl}`;

    $.ajax({
        url : configAddress + url,
        type:"post",
        async:asyn,
        traditional:true,
        data:Data,
        dataType:"json",
        success:successFn,
        error:errorFn
    });
};

function fmtDate(obj){
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}

/*select option长度*/
/*要传的数据*/
var clinicId = "", time = "", eventTimes = [], pulses = [], tempers = [], breathings = [], nurseEventIds = [], bpms = [],
    physicsTemps = [], marks = [], typeIds = [], amBloodsysPre = "", amBloodDiasPre = "", pmBloodsysPre = "",
    pmBloodDiasPre = "", weight = "", cacationCount = "", insertSize = "", outSize = "", urineSize = "";
var saveData = {}, historyDataLen;
/*保存和修改时传的data*/
var beforeOrAfterTime, nowTime, joinTime;
/*前一天后一天及当前时间、入院时间*/
var allPage = 0, nowPage = 0;
/*总页数、当前页码*/
var timerIndex = 0;
/*时间td顺序*/
var breathingNum = 0;
/*呼吸值有几个*/
var monthTime = 0, yearTime = 0;
/*用于三测单入院日期显示*/
/*三测单数据数组*/
var pulsesLen = 0, /*脉搏数据长度*/
    tempersLen = 0, /*摄氏数据长度*/
    hosDateArr = [], hosDateArr1 = [], /*住院日期*/
    hosDayArr = [], /*住院天数*/
    surgeryCountArr = [], /*术后天数*/
    pulsesArr = [], /*脉搏*/
    bpmArr = [], /*心率*/
    tempersArr = [], /*摄氏*/
    physicsTempsArr = [],/*物理降温*/
    coolingArr = [],/*物理降温划线数组*/
    disparityArr = [],/*脉搏和心率差值数据*/
    eventsArr = [], /*事件数组*/
    breathingsArr = [], /*呼吸*/
    BloodArr = [], /*血压*/
    amBloodArr = [], /*上午血压*/
    pmBloodArr = [], /*下午血压*/
    weightArr = [], /*体重*/
    cacationCounArr = [], /*大便次数*/
    insertSizeArr = [], /*入量*/
    outSizeArr = [], /*出量*/
    urineSizeArr = [] /*尿量*/;
function drawThreeTestList(clinicId, page) {
    myUrl=vv.$store.state.url;
    hosDateArr = [], hosDateArr1 = [], /*住院日期*/
        hosDayArr = [], /*住院天数*/
        surgeryCountArr = [], /*术后天数*/
        pulsesArr = [], /*脉搏*/
        bpmArr = [],/*心率*/
        tempersArr = [], /*摄氏*/
        physicsTempsArr = [],/*物理降温*/
        coolingArr = [],/*物理降温划线数组*/
        disparityArr = [],/*脉搏和心率差值数据*/
        eventsArr = [],/*事件数组*/
        breathingsArr = [], /*呼吸*/
        BloodArr = [], /*血压*/
        amBloodArr = [], /*上午血压*/
        pmBloodArr = [], /*下午血压*/
        weightArr = [], /*体重*/
        cacationCounArr = [], /*大便次数*/
        insertSizeArr = [], /*入量*/
        outSizeArr = [], /*出量*/
        urineSizeArr = [] /*尿量*/;
    yearTime = 0, monthTime = 0;
    var myChart = echarts.init(document.getElementById("main"), 'light');
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        legend: {
            right: '0',
            top: "center",
            orient: "vertical",
            data: ['脉搏','心率','体温']
        },
        xAxis: [
            {
                type: 'category',
                position: "top",
                offset: 155,
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                }
            },
            {
                /*日期天数*/
                type: 'category',
                position: "top",
                offset: 135,
                name: "日期",
                nameLocation: 'start',
                nameTextStyle: {
                    padding: [0, 10, 20, 0]
                },
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                },
                axisLabel: {
                    verticalAlign: 'middle'
                }
            },
            {
                /*住院天数*/
                type: 'category',
                position: "top",
                offset: 115,
                name: "住院天数",
                nameLocation: 'start',
                nameTextStyle: {
                    padding: [0, 10, 20, 0]
                },
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                },
                axisLabel: {
                    verticalAlign: 'middle'
                }
            },
            {
                /*术后天数*/
                type: 'category',
                position: "top",
                offset: 95,
                name: "术后天数",
                nameLocation: 'start',
                nameTextStyle: {
                    padding: [0, 10, 20, 0]
                },
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                }
            },
            {
                /*时间*/
                type: 'category',
                position: "top",
                offset: 70,
                splitLine: {show: true},
                data: ['上午', '下午', '上午', '下午', '上午', '下午', '上午', '下午', '上午', '下午', '上午', '下午', '上午', '下午'],
                axisTick: {
                    /*刻度*/
                    length: 25,
                },
                name: "时间",
                nameLocation: 'start',
                nameTextStyle: {
                    padding: [10, 10, 20, 0]
                }
            },
            {
                /*小时细格子*/
                type: 'category',
                position: "top",
                offset: 70,
                data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    length: 780,
                    inside: true
                }
            },
            {
                /*小时*/
                type: 'category',
                position: "top",
                offset: 45,
                data: ['4', '8', '12', '16', '20', '24', '4', '8', '12', '16', '20', '24', '4', '8', '12', '16', '20', '24', '4', '8', '12', '16', '20', '24', '4', '8', '12', '16', '20', '24', '4', '8', '12', '16', '20', '24', '4', '8', '12', '16', '20', '24'],
                axisTick: {
                    /*刻度*/
                    show: false
                },
            },
            {
                /*头部样式细格子2*/
                type: 'category',
                position: "top",
                offset: 30,
                data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                }
            },
            {
                /*头部样式细格子1*/
                type: 'category',
                position: "top",
                offset: 15,
                data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                }
            },
            {
                /*底部样式细格子1*/
                type: 'category',
                position: "bottom",
                offset: 15,
                data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                }
            },
            {
                /*底部样式细格子2*/
                type: 'category',
                position: "bottom",
                offset: 30,
                data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                }
            },
            {
                /*呼吸*/
                type: 'category',
                position: "bottom",
                offset: 45,
                name: "呼吸（次/分）",
                nameLocation: "start",
                nameTextStyle: {
                    padding: [15, 0, 0, 5]
                },
                data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                }
            },
            {
                /*血压*/
                type: 'category',
                position: "bottom",
                offset: 65,
                name: "血压 mmHg",
                nameLocation: "start",
                nameTextStyle: {
                    padding: [20, 0, 0, 0]
                },
                data: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    // show:false
                    length: 20
                },
                axisLabel: {
                    verticalAlign: 'middle'
                }
            },
            {
                /*体重 Kg*/
                type: 'category',
                position: "bottom",
                offset: 85,
                name: "体重 Kg",
                nameLocation: "start",
                nameTextStyle: {
                    padding: [20, 0, 0, 0]
                },
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                },
                axisLabel: {
                    verticalAlign: 'middle'
                }
            },
            {
                /*大便次数*/
                type: 'category',
                position: "bottom",
                offset: 105,
                name: "大便次数",
                nameLocation: "start",
                nameTextStyle: {
                    padding: [20, 0, 0, 0]
                },
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                },
                axisLabel: {
                    verticalAlign: 'middle'
                }
            },
            {
                /*入量 ml*/
                type: 'category',
                position: "bottom",
                offset: 125,
                name: "入量 ml",
                nameLocation: "start",
                nameTextStyle: {
                    padding: [20, 0, 0, 0]
                },
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                },
                axisLabel: {
                    verticalAlign: 'middle'
                }
            },
            {
                /*出量 ml*/
                type: 'category',
                position: "bottom",
                offset: 145,
                name: "出量 ml",
                nameLocation: "start",
                nameTextStyle: {
                    padding: [20, 0, 0, 0]
                },
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    show: false
                },
                axisLabel: {
                    verticalAlign: 'middle'
                }
            },
            {
                /*尿量 ml*/
                type: 'category',
                position: "bottom",
                offset: 165,
                name: "尿量 ml",
                nameLocation: "start",
                nameTextStyle: {
                    padding: [20, 0, 0, 0]
                },
                data: ['', '', '', '', '', '', ''],
                axisLabel: {
                    verticalAlign: 'middle'
                }
            },
            {
                /*最后横线*/
                type: 'category',
                position: "bottom",
                offset: 185,
                data: ['', '', '', '', '', '', ''],
                axisTick: {
                    /*刻度*/
                    length: 984,
                    inside: true,
                    lineStyle: {
                        color: "#FF0000"
                    }
                }
            }
        ],
        grid: {
            left: '3%',
            right: '10%',
            bottom: '12%',
            containLabel: true
        },
        yAxis: [
            {
                type: 'value',
                name: '脉搏',
                position: 'left',
                offset: 50,
                axisPointer: {
                    snap: true
                },
                axisTick: {
                    /*刻度*/
                    show: false
                },
                nameTextStyle: {
                    /*name水平居中*/
                    padding: [0, 30, 10, 0]
                },
                min: 20,
                max: 180,
                splitNumber: 10
            },
            {
                type: 'value',
                name: '摄氏',
                position: 'left',
                axisLabel: {
                    formatter: '{value} ℃'
                },
                axisTick: {
                    /*刻度*/
                    length: 795,
                    inside: true,
                    lineStyle: {
                        width: 2
                    }
                },
                nameTextStyle: {
                    /*name水平居中*/
                    padding: [0, 30, 10, 0]
                },
                min: 34,
                max: 42,
                splitNumber: 10
            },
            {
                /*小细格子*/
                type: 'value',
                position: 'left',
                axisLabel: {
                    formatter: ''
                },
                axisTick: {
                    /*刻度*/
                    length: 795,
                    inside: true
                },
                min: 34,
                max: 42,
                splitNumber: 40
            }
        ],
        series: [
            {
                name: '心率',
                type: 'line',
                connectNulls: true,
                data: bpmArr,
                yAxisIndex: 0,
                xAxisIndex: 7,
                symbolSize: 8,
                markLine:{
                    data:disparityArr,
                    // lineStyle:{
                    //     type:'solid'
                    // }
                },
                smooth: true,
                itemStyle: {
                    normal: {
                        color: "#FF0000",
                        lineStyle: {
                            color: "#FF0000"
                        }
                    }
                }
            },
            {
                name: '脉搏',
                type: 'line',
                connectNulls: true,
                data: pulsesArr,
                yAxisIndex: 0,
                xAxisIndex: 7,
                symbol: "circle",
                symbolSize: 8,
                smooth: true,
                itemStyle: {
                    normal: {
                        color: "#FF0000",
                        lineStyle: {
                            color: "#FF0000"
                        }
                    }
                }
            },
            { /*写事件*/
                type: 'line',
                connectNulls: true,
                yAxisIndex: 1,
                xAxisIndex: 7,
                markLine:{
                    data:eventsArr
                },
                itemStyle: {
                    normal: {
                        color: "#000",
                        lineStyle: {
                            color: "#000"
                        }
                    }
                }
            },
            {
                name: '摄氏',
                type: 'line',
                connectNulls: true,
                data: tempersArr,
                yAxisIndex: 1,
                xAxisIndex: 7,
                symbol: "circle",
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: "#0000FF",
                        lineStyle: {
                            color: "#0000FF"
                        }
                    }
                }
            },
            {
                name: '物理降温',
                type: 'line',
                connectNulls: true,
                data: physicsTempsArr,
                yAxisIndex: 1,
                xAxisIndex: 7,
                symbolSize: 8,
                markLine:{
                    data:coolingArr
                },
                itemStyle: {
                    normal: {
                        color: "#FF0000",
                        lineStyle: {
                            opacity: 0
                        }
                    }
                }
            }
        ]
    };
    var firstDate = "";
    connect("/threetest/findThreeTestByClinicId", {clinicId: clinicId, page: page, rows: 7}, function (data) {
        var nurseEventHtml = "";
        if (data.resultDomain.queryList) {
            if (data.resultDomain.queryList[0]) {
                if (data.resultDomain.queryList[0].hosDate) {
                    firstDate = data.resultDomain.queryList[0].hosDate.substr(0, 10);
                }
            }

            for (var y = 0; y < 7; y++) {
                /*补全日期*/
                nurseEventHtml = "";
                hosDateArr1.push(firstDate);

                console.log('------------------------------------');
                // console.log(firstDate);//stand by
                // console.log(new Date(firstDate));//stand by
                // console.log(new Date(firstDate).getTime() + 24 * 60 * 60 * 1000);//stand by
                // console.log(fmtDate(new Date(firstDate).getTime() + 24 * 60 * 60 * 1000));//stand by
                // firstDate = new Date(new Date(firstDate).getTime() + 24 * 60 * 60 * 1000).Format("yyyy-MM-dd");//stand by
                firstDate=fmtDate(new Date(firstDate).getTime() + 24 * 60 * 60 * 1000);

                if (data.resultDomain.queryList[y]) {
                    if (data.resultDomain.queryList[y].hosDate) {
                        hosDayArr.push(data.resultDomain.queryList[y].hosDay);
                    }
                    /*上午血压*/
                    if (data.resultDomain.queryList[y].amBloodDiasPre && data.resultDomain.queryList[y].amBloodsysPre) {
                        amBloodArr.push(data.resultDomain.queryList[y].amBloodsysPre + "/" + data.resultDomain.queryList[y].amBloodDiasPre);
                    } else {
                        amBloodArr.push("");
                    }
                    /*下午血压*/
                    if (data.resultDomain.queryList[y].pmBloodDiasPre && data.resultDomain.queryList[y].pmBloodsysPre) {
                        pmBloodArr.push(data.resultDomain.queryList[y].pmBloodsysPre + "/" + data.resultDomain.queryList[y].pmBloodDiasPre);
                    } else {
                        pmBloodArr.push("");
                    }
                    /*大便次数*/
                    if (data.resultDomain.queryList[y].cacationCount) {
                        cacationCounArr.push(data.resultDomain.queryList[y].cacationCount);
                    } else {
                        cacationCounArr.push("");
                    }
                    /*尿量*/
                    if (data.resultDomain.queryList[y].urineSize) {
                        urineSizeArr.push(data.resultDomain.queryList[y].urineSize);
                    } else {
                        urineSizeArr.push("");
                    }
                    /*入液量*/
                    if (data.resultDomain.queryList[y].insertSize) {
                        insertSizeArr.push(data.resultDomain.queryList[y].insertSize);
                    } else {
                        insertSizeArr.push("");
                    }
                    /*出液量*/
                    if (data.resultDomain.queryList[y].outSize) {
                        outSizeArr.push(data.resultDomain.queryList[y].outSize);
                    } else {
                        outSizeArr.push("");
                    }
                    /*体重*/
                    if (data.resultDomain.queryList[y].weight) {
                        weightArr.push(data.resultDomain.queryList[y].weight);
                    } else {
                        weightArr.push("");
                    }
                    /*术后天数*/
                    if (data.resultDomain.queryList[y].surgeryCount) {
                        surgeryCountArr.push(data.resultDomain.queryList[y].surgeryCount);
                    } else {
                        surgeryCountArr.push("");
                    }
                    /*三测单折线图数据*/
                    if (data.resultDomain.queryList[y].threeTestList) {
                        pulsesLen = data.resultDomain.queryList[y].threeTestList.length;
                        if (pulsesLen != 0) {
                            for (var k = 0; k < pulsesLen; k++) {
                                /*脉搏*/
                                if (data.resultDomain.queryList[y].threeTestList[k].pulse) {
                                    pulsesArr.push(data.resultDomain.queryList[y].threeTestList[k].pulse);
                                } else {
                                    pulsesArr.push("-");
                                }
                                /*脉搏和心率差值*/
                                if (data.resultDomain.queryList[y].threeTestList[k].pulse && data.resultDomain.queryList[y].threeTestList[k].bpm) {
                                    if (data.resultDomain.queryList[y].threeTestList[k].pulse != data.resultDomain.queryList[y].threeTestList[k].bpm) {
                                        if (data.resultDomain.queryList[y].threeTestList[k].pulse > data.resultDomain.queryList[y].threeTestList[k].bpm) {
                                            disparityArr.push([{xAxis:y*6+k,yAxis:data.resultDomain.queryList[y].threeTestList[k].pulse,symbol:'none'},{xAxis:y*6+k,yAxis:data.resultDomain.queryList[y].threeTestList[k].bpm,symbol:'none'}]);
                                        } else {
                                            disparityArr.push([{xAxis:y*6+k,yAxis:data.resultDomain.queryList[y].threeTestList[k].pulse,symbol:'none'},{xAxis:y*6+k,yAxis:data.resultDomain.queryList[y].threeTestList[k].bpm,symbol:'none'}]);
                                        }
                                    }
                                    // disparityArr.push([{xAxis:y*6+k,yAxis:data.resultDomain.queryList[y].threeTestList[k].pulse,symbol:'none'},{xAxis:y*6+k,yAxis:data.resultDomain.queryList[y].threeTestList[k].bpm,symbol:'none'}]);
                                }
                                /*事件*/
                                if (data.resultDomain.queryList[y].threeTestList[k].nurseEventName && data.resultDomain.queryList[y].threeTestList[k].nurseEventTime) {
                                    nurseEventHtml = data.resultDomain.queryList[y].threeTestList[k].nurseEventName + "|" + data.resultDomain.queryList[y].threeTestList[k].nurseEventTime.split(" ")[1].split("分")[0] + "分";
                                    for (var t = 0;t<nurseEventHtml.length;t++) {
                                        eventsArr.push([{xAxis:y*6+k,yAxis:41.9-(0.2*t),symbol:'none',name:nurseEventHtml[t]},{xAxis:y*6+k,yAxis:41.9-(0.2*t),symbol:'none'}]);
                                    }
                                }
                                /*心率*/
                                if (data.resultDomain.queryList[y].threeTestList[k].bpm) {
                                    bpmArr.push(data.resultDomain.queryList[y].threeTestList[k].bpm);
                                } else {
                                    bpmArr.push("-");
                                }
                                /*呼吸*/
                                if (data.resultDomain.queryList[y].threeTestList[k].breathing) {
                                    breathingsArr.push(data.resultDomain.queryList[y].threeTestList[k].breathing);
                                } else {
                                    breathingsArr.push("");
                                }
                                /*摄氏*/
                                if (data.resultDomain.queryList[y].threeTestList[k].temper) {
                                    if (data.resultDomain.queryList[y].threeTestList[k].ttid == "0296dd8922c54f2abc6a126a2d87e0a9") { /*腋温*/
                                        tempersArr.push({value:data.resultDomain.queryList[y].threeTestList[k].temper,symbol:'image://resources/images/temper.png'});
                                    } else if (data.resultDomain.queryList[y].threeTestList[k].ttid == "30d09130b2b74a729b8a1704d547d8bc") { /*口温*/
                                        tempersArr.push({value:data.resultDomain.queryList[y].threeTestList[k].temper,symbol:'circle'});
                                    } else if (data.resultDomain.queryList[y].threeTestList[k].ttid == "45ee5fc013764d23bc90266e903d056a") { /*肛温*/
                                        tempersArr.push({value:data.resultDomain.queryList[y].threeTestList[k].temper,symbol:'emptyCircle'});
                                    }

                                } else {
                                    tempersArr.push("-");
                                }
                                /*物理降温*/
                                if (data.resultDomain.queryList[y].threeTestList[k].physicsTemp) {
                                    physicsTempsArr.push(data.resultDomain.queryList[y].threeTestList[k].physicsTemp);
                                    coolingArr.push([{xAxis:y*6+k,yAxis:data.resultDomain.queryList[y].threeTestList[k].temper,symbol:'none'},{xAxis:y*6+k,yAxis:data.resultDomain.queryList[y].threeTestList[k].physicsTemp,symbolSize:8}]);
                                } else {
                                    physicsTempsArr.push("-");
                                }
                            }
                        } else {
                            pulsesArr.push('-', '-', '-', '-', '-', '-');
                            bpmArr.push('-', '-', '-', '-', '-', '-');
                            tempersArr.push('-', '-', '-', '-', '-', '-');
                            physicsTempsArr.push('-', '-', '-', '-', '-', '-');
                            breathingsArr.push('', '', '', '', '', '');
                        }
                    } else {
                        pulsesArr.push('-', '-', '-', '-', '-', '-');
                        bpmArr.push('-', '-', '-', '-', '-', '-');
                        tempersArr.push('-', '-', '-', '-', '-', '-');
                        physicsTempsArr.push('-', '-', '-', '-', '-', '-');
                        breathingsArr.push('', '', '', '', '', '');
                    }
                } else {
                    hosDayArr.push("");
                    surgeryCountArr.push("");
                    amBloodArr.push("");
                    pmBloodArr.push("");
                    cacationCounArr.push("");
                    urineSizeArr.push("");
                    insertSizeArr.push("");
                    outSizeArr.push("");
                    weightArr.push("");
                    pulsesArr.push('-', '-', '-', '-', '-', '-');
                    bpmArr.push('-', '-', '-', '-', '-', '-');
                    tempersArr.push('-', '-', '-', '-', '-', '-');
                    physicsTempsArr.push('-', '-', '-', '-', '-', '-');
                    breathingsArr.push('', '', '', '', '', '');
                }
            }
            for (var m = 0; m < amBloodArr.length; m++) {
                BloodArr.push(amBloodArr[m]);
                BloodArr.push(pmBloodArr[m]);
            }
            for (var x = 0; x < hosDateArr1.length; x++) { /*入院日期*/
                if (x == 0) {
                    hosDateArr.push(hosDateArr1[0].substr(0, 10));
                } else {
                    if (hosDateArr1[x].substr(0, 4) != hosDateArr1[0].substr(0, 4)) {
                        if (yearTime == 0) {
                            hosDateArr.push(hosDateArr1[x].substr(0, 10));
                        } else {
                            hosDateArr.push(hosDateArr1[x].substr(8, 2));
                        }
                        yearTime++;
                    } else {
                        if (hosDateArr1[x].substr(5, 2) != hosDateArr1[0].substr(5, 2)) {
                            if (monthTime == 0) {
                                hosDateArr.push(hosDateArr1[x].substr(5, 5));
                            } else {
                                hosDateArr.push(hosDateArr1[x].substr(8, 2));
                            }
                            monthTime++;
                        } else {
                            hosDateArr.push(hosDateArr1[x].substr(8, 2));
                        }
                    }
                }
            }
            for (var u1 = 0; u1 < hosDateArr.length; u1++) { /*入院日期*/
                $(".hosDate").find("td").eq(u1).html(hosDateArr[u1]);
            }
            for (var u2 = 0; u2 < hosDayArr.length; u2++) { /*入院天数*/
                $(".hosDay").find("td").eq(u2).html(hosDayArr[u2]);
            }
            for (var u10 = 0; u10 < surgeryCountArr.length; u10++) { /*术后天数*/
                $(".shuhouDay").find("td").eq(u10).html(surgeryCountArr[u10]);
            }
            for (var u3 = 0; u3 < breathingsArr.length; u3++) { /*呼吸*/
                $(".breathingsTr").find("td").eq(u3).html(breathingsArr[u3]);
                if (breathingsArr[u3] != "") {
                    breathingNum++;
                    if (breathingNum % 2 == 1) {
                        $(".breathingsTr").find("td").eq(u3).css({"text-align": "left"});
                        $(".breathingsTr").find("td").eq(u3).attr("valign", "top");
                    } else if (breathingNum % 2 == 0) {
                        $(".breathingsTr").find("td").eq(u3).css({"text-align": "right"});
                        $(".breathingsTr").find("td").eq(u3).attr("valign", "bottom");
                    }
                }
            }
            for (var u4 = 0; u4 < BloodArr.length; u4++) { /*血压*/
                $(".Blood").find("td").eq(u4).html(BloodArr[u4]);
            }
            for (var u5 = 0; u5 < weightArr.length; u5++) { /*体重*/
                $(".weight").find("td").eq(u5).html(weightArr[u5]);
            }
            for (var u6 = 0; u6 < cacationCounArr.length; u6++) { /*大便次数*/
                $(".cacationCoun").find("td").eq(u6).html(cacationCounArr[u6]);
            }
            for (var u7 = 0; u7 < insertSizeArr.length; u7++) { /*入量*/
                $(".insertSize").find("td").eq(u7).html(insertSizeArr[u7]);
            }
            for (var u8 = 0; u8 < outSizeArr.length; u8++) { /*出量*/
                $(".outSize").find("td").eq(u8).html(outSizeArr[u8]);
            }
            for (var u9 = 0; u9 < urineSizeArr.length; u9++) { /*尿量*/
                $(".urineSize").find("td").eq(u9).html(urineSizeArr[u9]);
            }
            myChart.setOption(option, true);
        }
    });
};

export {drawThreeTestList};
