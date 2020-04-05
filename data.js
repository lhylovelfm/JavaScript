function clock () {
  // 实例化当前时间
  let time = new Date();
  //年月日周
  let y = time.getFullYear(),
    m = time.getMonth() + 1,
    day = time.getDate(),
    week = toWeek(time.getDay());
  //小时，分钟，秒
  let h = time.getHours(),
    miu = time.getMinutes(),
    s = time.getSeconds(),
    ms = time.getMilliseconds();
  var resultTimne = `今天是 ${y}年${m}月${day}日 ${week} ${h}时${miu}分${s}秒${ms}毫秒`;
  return resultTimne;
}
function toWeek (week) {
  let resuleWeek = '';
  switch (week) {
    case 0:
      resuleWeek = '日';
    case 1:
      resuleWeek = '一';
    case 2:
      resuleWeek = '二';
    case 3:
      resuleWeek = '三';
    case 4:
      resuleWeek = '四';
    case 5:
      resuleWeek = '五';
    case 6:
      resuleWeek = '六';
  }
  return '星期' + resuleWeek;
}
console.log(clock());
