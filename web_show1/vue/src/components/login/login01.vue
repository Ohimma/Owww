<template>
  <div class="login01">
    <div class="login-msg">
      <div class="title">
        <!-- <img src="../assets/img/login-logo.png" alt=""> -->
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F8851510617%2F640.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618458458&t=5bdab2e5e4d75abf5595723d479ca382" alt="">
        <span>管理后台</span>
      </div>
      <!-- 
        :model指定表单使用的数据 :rules进行表单校验规则 ref是提交的对象名字
        prop表单校验的属性
        input 绑定的元素必须是model的直接属性 
        prefix 左边 suffix 右边 clearable 删除所有输入 
        :loading  true时会转圈加载 false时正常
        status-icon 添加校验结果反馈显示图标
      -->
      <el-form :model="loginData" :rules="loginDataRules" ref="loginForm">
        <el-form-item prop="name">
          <el-input type="text" 
            v-model="loginData.name" 
            prefix-icon="el-icon-user" 
            placeholder="请输入用户名"
            tabindex="1"
            auto-complete="on">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginData.password"
            type="password"
            placeholder="请输入密码"  
            prefix-icon="el-icon-unlock"
            clearable show-password
            
            
            auto-complete="on">
          </el-input>
        </el-form-item>

        <!-- @keyup.enter="loginBtn" -->
        <el-form-item>
          <el-button 
            type="primary"
            :loading="loading" 
            >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginData: {
        name: '',
        password: ''
      },
      loginDataRules: {
        account: [{required: true, message: '请输入用户名', trigger: 'change'}],
      },
      loading: false,
    }
  },
  
}
</script>

<style scoped>
.login01  {
  height: 100%;
  width: 100%;
  background: #090d09 url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.yyxt.com%2Fuploads%2Fallimg%2F160318%2F11-16031Q11350.jpg&refer=http%3A%2F%2Fwww.yyxt.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618457703&t=6d3f1fd89769961b75784d049e106d73') 
              no-repeat right bottom;
  background-size: 90% 100%;
  transition: all 1s;

  position: relative;
}

.login01  .login-msg {
    position: absolute;
    left: 10%;
    top: 50%;
    width: 27%;
    margin: -100px 0 0 0;
}

.login01  .login-msg .title {
    width: 100%;
    height: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
}
.login01  .login-msg .title img {
    width: 50px;
    height: 30px;
}
.login01  .login-msg .title span {
  font-size: 20px;
  line-height: 40px;
  color: #FFFFFF;
}

.el-button {
  width: 100%;
  height: 40px;
  margin-top: 25px;
  
  background: #204CC0;
  border: 0;
  border-radius: 4px;

  color: #fff;
  font-size: 20px;
}
.el-button:hover,
.el-button.is-fouse {
  background: #4d73da;
} 


</style>

<style >
.login01  .el-form .el-input__inner {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #fff;
  padding-left: 40px;

  font-size: 17px;
  letter-spacing: 2px;
  color: #fff;
  font-family: "MingLiu";
}
</style>