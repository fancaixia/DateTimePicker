// 转换时间
const getDate = (year, month, day, hour, minute) => {
  const newyear = year.substr(0, year.length - 1);
  const setmonth = month.substr(0, month.length - 1);
  const newmonth = setmonth < 10 ? '0' + setmonth : setmonth;
  const setday = day.substr(0, day.length - 1);
  const newday = setday < 10 ? '0' + setday : setday;

  // const sethour = hour.substr(0, hour.length - 1);
  const newhour = hour < 10 ? '0' + hour : hour;
  // const setminute = minute.substr(0, minute.length - 1);

  const newminute = minute < 10 ? '0' + minute : minute;

  return newyear + '-' + newmonth + '-' + newday + ' ' + newhour + ":" + newminute;
}
// 将时间戳转换为时间
const getobjDate = (date)=> {
  let now;
  if (date){
     now = new Date(date)
  }else{
     now = new Date()
  }
    let y = now.getFullYear(),
    m = now.getMonth() + 1,
    d = now.getDate(),
    h = now.getHours(), //获取当前小时数(0-23)
    f = now.getMinutes(),

      n = (Math.ceil((now.getMinutes()) / 10))*10; //获取当前分钟数(0-59)  取整数
  return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + (h < 10 ? "0" + h : h) + ":" + (f < 10 ? "0" + f : f);

}

//根据年月  获取天数
const mGetDate = (year, month) => {
  var d = new Date(year, month, 0);
  return d.getDate();
}
//根据时间2019-01-02 09：12  得到 ['2019','1','2','9','12']
const getarrWithtime = (str) => {
  let arr = [];
  let arr1 = str.split(' ');
  let arr2 = (arr1[0]).split('-');
  let arr3 = arr1[1].split(':');
  arr = arr2.concat(arr3);
  arr[1] = arr[1].startsWith('0') ? arr[1].substr(1, arr[1].length) : arr[1];
  arr[2] = arr[2].startsWith('0') ? arr[2].substr(1, arr[2].length) : arr[2];
  arr[3] = arr[3].startsWith('0') ? arr[3].substr(1, arr[3].length) : arr[3];
  arr[4] = arr[4].startsWith('0') ? arr[4].substr(1, arr[4].length) : arr[4];
  return arr;
}
module.exports = {
  getDate,
  getobjDate,
  mGetDate,
  getarrWithtime,

}
