<template>
  <div class="container">
      <div class="header">
        <div class="close" @click="back"></div>
        <div class="login">
          <router-link to="/login">登录</router-link>
        </div>
        <div class="add">
          <router-link to="/add">注册</router-link>
        </div>
      </div>
      <div class="logo"><span></span></div>
      <form class="form">
        <div class="phone border-b1px">
          <label class="phone-icon"></label>
          <input type="number" id="phone" placeholder="手机号">
        </div>
        <div class="pwd border-b1px">
          <label class="pwd-icon"></label>
          <input type="text" id="pwd" placeholder="密码">
          <span class="eye-icon" id="eye_icon" @click="eye"></span>
        </div>
        <button type="button" @click="login" class="login">登录</button>
        <router-link to="/forgetpwd/forgetpwd" class="forget">忘记密码？</router-link>
      </form>
  </div>
</template>
  <script>
    const ERR_OK = 0;
    export default {
      data() {
        return {
          simple: {},
          uploadShow: false
        };
      },
      methods: {
        back() {
          this.$router.go(-1);
        },
        eye(){
          if($("#pwd").attr("type") == "text"){
            $("#pwd").attr("type","password");
            $(".eye-icon").css("backgroundPosition","-318px -34px")
          } else {
            $("#pwd").attr("type","text");
            $(".eye-icon").css("backgroundPosition","-278px -34px");
          }
        },
        login(){
          var phone = $("#phone").val();
          console.log(phone);
          var pwd = $("#pwd").val();
          this.$http.post('http://172.35.2.246:9001/api/user/login',{"phone":"123123","pwd":"asdasd","inviter":"456456","vc":"validcode"}).then((response) => {
            response = response.body;
            if(response.errcode === ERR_OK) {
              var simple;
              this.simple = response;
              if(phone == "") {
                alert("请输入手机号");
              } else {
                if(phone == this.simple.data){
                  console.log("手机号输入正确")
                  console.log(this.simple.errmsg);
                  if(pwd == "") {
                    alert("请输入密码");
                  } else {
                    if(pwd == this.simple.data){
                      console.log("密码输入正确")
                      console.log(this.simple.errmsg);
                      this.$router.push({
                        path:'/index',
                        query: {phone:phone}
                      });
                    }else{
                      alert("密码输入有误！");
                    }
                  };
                }else{
                  alert("手机号输入有误！");
                }
              };
              
            };
          })   
        }
        
      }
    };
  </script>

  <style lang="stylus" type="type/stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/base.styl";
    @import "../../common/stylus/mixin.styl";
    @import "./css/login.styl";
  </style>
