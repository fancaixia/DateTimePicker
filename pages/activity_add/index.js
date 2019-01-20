const utils = require('../../utils/activity_util')

// 初始化日期模态框数据
let date = new Date();
let years = [];
let months = [];
let days = [];
let hours = [];
let minutes = [];

for (let i = date.getFullYear(); i <= (date.getFullYear()+5); i++) {
  years.push(i + "年")
}
for (let i = 1; i <= 12; i++) {
  months.push(i + "月")
}
for (let i = 1; i <= 31; i++) {
  days.push(i + "日")
}
for (let i = 0; i <= 23; i++) {
  hours.push(i+"")
}
for (let i = 0; i <= 59; i++) {
  minutes.push(i + "")
}

Page({

  data: {
    changefalg:false,
    value: [0, 1, 1, 1, 1],
    openflag: true,  //1日期控件显示  2控件滚动选择 底部页面不滚动
    years: years,   //时间可选范围模态框数据
    months: months,
    days: days,
    hours:hours,
    minutes:minutes,
    year:'',  //时间值
    month:'',
    day:'',
    hour:'',
    minute:'',
    starttime: utils.getobjDate(),
  },

  onLoad(options){

  },
  onShow () {

  },

  tap(ev) {

    // 根据选择项目  传去对应数据  根据开始结束时间获取索引  设置面板默认数据

    let value = [2019,0,0,0,0];
    let arr=[];
      arr = utils.getarrWithtime(this.data.starttime);

    const { years, months, days, hours, minutes, openflag } = this.data;
    //根据arr  数据索引
    value[0] = years.indexOf(arr[0]+'年');
    value[1] = months.indexOf(arr[1] + '月');
    value[2] = days.indexOf(arr[2] + '日');
    value[3] = hours.indexOf(arr[3]);
    value[4] = minutes.indexOf(arr[4]);

    this.setData({
      value,
      openflag: false,
      years,   //日期模态框数据
      months,
      days,
      hours,
      minutes,
    })

  },
  // 取消
  canslebtn (){

    this.setData({
      openflag: true,
      changefalg: false,
    })
  },
  // 确定  如果不选择那么默认重置
  closebtn () {

    this.setData({
      openflag: true,
    })
    const { curindex, year, month, day, hour, minute } = this.data;

    if (this.data.changefalg){
      let starttime = utils.getDate(year, month, day, hour, minute)
      console.log('starttime', starttime)
        this.setData({
          starttime,
          changefalg:false,
        })
    }
  },

  bindChange: function (ev) {
    
    const e = ev;
    let val = e.detail.value;

    const year = this.data.years[val[0]];
    const month = this.data.months[val[1]];
    const day = this.data.days[val[2]];
    const hour = this.data.hours[val[3]];
    const minute = this.data.minutes[val[4]];

    //如果点击月份  那么后面日跟着变换数据
    let days = [];
    const daynum = utils.mGetDate(year.substr(0, year.length - 1), month.substr(0, month.length - 1));
    for (let i = 1; i <= daynum; i++) {
      days.push(i + "日")
    }

    this.setData({
      days,
      year,
      month,
      day,
      hour,
      minute,
      changefalg:true,
    })
  },


})