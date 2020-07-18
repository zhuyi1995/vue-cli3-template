// 处理换行
export default {
  // 处理换行
  br_show: (val) => {
    if (val && typeof(val) == "string") {
      return val.replace(/[<>]/g, (a) => {
        return {"<": "&lt;", ">": "&gt;",}[a];
      }).replace(/\n/g, "<br/>");
    }
    else if (val) {
      return String(val).replace(/[<>]/g, (a) => {
        return {"<": "&lt;", ">": "&gt;",}[a];
      }).replace(/\n/g, "<br/>");
    }
    else {
      return "";
    }
  },
  // 解析树数据 参数：数据 ，子集key，存放的新数组，取出的数据
  filter_data: function (data, son, object, answer) {
    let storage = {};
    if (!Array.isArray(data)) {
      return;
    }
    for (let i = 0; i < data.length; i++) {
      for (let key in object) {
        storage[key] = data[i][key];
      }
      answer.push(storage);
      storage = {};
      if (data[i][son] && (data[i][son].length != 0)) {
        this.filterData(data[i][son], son, object, answer);
      }
    }
    return answer;
  },
  // 校验权限
  comparison: (rule, roles) => {
    let result = false
    for (let i = 0; i < rule.length; i++) {
      if (roles.indexOf(rule[i]) !== -1) {
        result = result || true
      }
    }
    return result
  },
  // 过滤搜索内容 参数-对象Object
  filter_search(val) {
    return new Promise((resolve) => {
      let result = {};
      for (let k in val) {
        if (val[k].value && val[k].value.length) {
          result[k] = val[k]
        }
      }
      resolve(result)
    })
  }
}
