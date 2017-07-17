// 数据模型:

// 构造函数
function User(name, pwd) {
  this.name = name;
  this.pwd = pwd;
}

// 原型对象:
User.prototype = {
  // 查询用户信息数据:
  checkUser: function (userList) {
    for (var i = 0; i < userList.length; i++) {
      if (userList[i].name === this.name) {
        return true;
      }
    }

    return false;
  },

  // 将数据保存到数据库(localStorage)中
  save: function () {
    // 获取到localStorage中用户的数据
    var userStr = localStorage.getItem('user')
    var userList = JSON.parse(userStr) || [];
    
    var isExist = this.checkUser(userList);
    if (isExist) {
      // 存在
      return false; // 表示用户已经存在!!!
    } else {
      // 不存在
      // 存储用户信息
      userList.push({ name: this.name, pwd: this.pwd });
      localStorage.setItem('user', JSON.stringify(userList));
      return true;
    }
  }
};