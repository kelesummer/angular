angular
  .module('registApp', [])
  // 控制器
  .controller('RegistController', function ($scope) {
    $scope.userName = '';       // 用户名
    $scope.password = '';       // 密码

    $scope.rePwd = '';          // 重复密码
    $scope.isAgree = false;     // 是否同意协议
    $scope.errorMsg = '';       // 错误提示信息

    $scope.regist = function () {
      // 客户端校验 -- 开始 ---
      if ($scope.userName.trim() === '') {
        $scope.errorMsg = '用户名不能为空';
        return;
      }

      if ($scope.password.trim() === '') {
        $scope.errorMsg = '密码不能为空';
        return;
      }

      if ($scope.password.trim() !== $scope.rePwd.trim()) {
        $scope.errorMsg = '两次输入密码不一致';
        return;
      }

      if (!$scope.isAgree) {
        $scope.errorMsg = '必须同意用户协议!';
        return;
      }
      // 所有的验证都通过了, 就清空错误提示
      $scope.errorMsg = '';
      // 客户端校验 -- 结束 ---


      // 怎么将 View 中要保存的数据传递给 Model？？
      //  首先在 Controller 中获取到 View 中的数据
      //  然后，C 调用 Model 中数据操作的方法，并且作为参数传递给 Model

      // Model 怎么告诉 C 数据操作的结果？？
      //  通过 函数的返回值，告诉 C 存储成功还是失败
      

      // 调度 数据模型, 进行数据操作
      var user = new User($scope.userName, $scope.password);
      var isSuccess = user.save();
      if (isSuccess) {
        $scope.errorMsg = '恭喜! 注册成功';
      } else {
        $scope.errorMsg = '用户名已经存在';
      }
    };

  });