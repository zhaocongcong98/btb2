<template>
  <div class="login_form">
    <div class="login_right">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <div class="login_title">{{$t('uc.login.login')}}</div>
        <FormItem prop="user">
          <Input name="user" type="text" v-model="formInline.user" :placeholder="$t('uc.login.usertip')" class="user">
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" :placeholder="$t('uc.login.pwdtip')" @on-keyup="onKeyup">
          </Input>
        </FormItem>
        <p id="notice" class="hide">{{$t('uc.login.validatemsg')}}</p>
        <p style="height:30px;">
          <router-link to="/findPwd" style="color:#979797;float:right;padding-right:10px;font-size:12px;">
            {{$t('uc.login.forget')}}
          </router-link>
        </p>
        <FormItem style="margin-bottom:15px;">
          <Button class="login_btn">{{$t('uc.login.login')}}</Button>
        </FormItem>
        <div class='to_register'>
          <span>{{$t('add.notAccount')}}</span>
          <router-link to="/register">{{$t('add.goregister')}}</router-link>
        </div>
      </Form>

    </div>
  </div>
</template>
<style scoped lang="scss">
/* 验证码 */
.login_form {
  background: #0b1520 url(../../assets/images/login_bg.jpg) no-repeat center center;
  height: 760px;
  position: relative;
  overflow: hidden;
  .login_right {
    padding: 20px 30px 20px 30px;
    position: absolute;
    background: #17212e;
    width: 350px;
    height: 330px;
    left: 50%;
    top: 50%;
    margin-left: -175px;
    margin-top: -165px;
    border-top: 4px solid #f0ac19;
    border-radius: 5px;
    form.ivu-form.ivu-form-label-right.ivu-form-inline {
      .login_title{
        height: 70px;
        color: #fff;
      }
      .ivu-form-item {
        .ivu-form-item-content {
          .login_btn.ivu-btn {
            width: 100%;
            background-color: #f0ac19;
            outline: none;
            border-color: #f0ac19;
            color: #fff;
            font-size: 18px;
            border-radius: 30px;
            &:focus {
              -moz-box-shadow: 0px 0px 0px #fff, 0px 0px 0px #fff;
              -webkit-box-shadow: 0px 0px 0px #fff, 0px 0px 0px #fff;
              box-shadow: 0px 0px 0px #fff, 0px 0px 0px #fff;
            }
          }
        }
      }
    }
  }
  .to_register {
    overflow: hidden;
    font-size: 12px;
    span {
      float: left;
    }
    a {
      float: right;
      color: #f0ac19;
    }
  }
}
#captcha {
  width: 100%;
  display: inline-block;
}
.show {
  display: block;
}
.hide {
  display: none;
}
#notice {
  color: red;
}
#wait {
  text-align: left;
  color: #666;
  margin: 0;
}
.geetest_wait_dot geetest_dot_1 {
  color: red;
}
.user .ivu-btn,
.ivu-btn:active,
.ivu-btn:focus {
  border-color: #d7dde4;
  box-shadow: none;
}
/*  */
</style>
<script>
import gtInit from "../../assets/js/gt.js";
import $ from "jquery";
export default {
  data() {
    return {
      captchaObj: null,
      _captchaResult: null,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: this.$t("uc.login.loginvalidate"),
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("uc.login.pwdvalidate1"),
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: this.$t("uc.login.pwdvalidate2"),
            trigger: "blur"
          }
        ]
      }
    };
  },
  created: function() {
    //this.init();
  },
  mounted:function(){
    this.init();
  },
  computed: {
    isLogin: function() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    init() {
      if (this.isLogin) {
        this.$router.push("/");
      }else{
        this.handler();
      }
    },
    onKeyup(ev) {
      if (ev.keyCode == 13) {
        $(".login_btn").click();
      }
    },
    /* 腾讯登陆验证 */
    initGtCaptcha() {
      // 直接生成一个验证码对象
      var self = this;
      var captcha1 = new TencentCaptcha("2020208122", function(res) {
        res.ret == 0 &&
          (self.isRegister = true) &&
          (self.ticket = res.ticket) &&
          (self.randStr = res.randstr) &&
          self.success();
      });
      captcha1.show(); // 显示验证码
    },
    success:function(){
      console.log("成功");
      this.handleSubmit("formInline");
    },
    /* initGtCaptcha() {
      var that = this;
      this.$http.get(this.host + this.api.uc.captcha).then(function(res) {
        window.initGeetest(
          {
           
            gt: res.body.gt,
            challenge: res.body.challenge,
            offline: !res.body.success, 
            new_captcha: res.body.new_captcha, 
            product: "bind",
            lang : "en",
            width: "100%"
          },
          this.handler
        );
      });
    }, */
    handler() {
      $(".login_btn").click(() => {
        let reg = /^[0-9]*$/,
          tel = this.formInline.user,
          flagtel = reg.test(tel),
          flagpass = this.formInline.password.length >= 6 ? true : false;
        let result = flagtel && flagpass ;
        if(!result){
          (!flagtel || !flagpass) && this.$Message.error("请填写完整的信息");
          return;
        }
        this.initGtCaptcha();
      });
    },
    logout() {
      this.$http.post(this.host + "/uc/logout", {}).then(response => {
        var resp = response.body;
        if (resp.code == 0) {
          localStorage.setItem("MEMBER", JSON.stringify(null));
          localStorage.setItem("TOKEN", null);
          localStorage.removeItem("USERKEY", null);
        } else {
          // this.$Message.error(resp.message);
        }
      });
    },
    handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            var params = {};
            params["username"] = this.formInline.user;
            params["password"] = this.formInline.password;
            this.$http.post(this.host + this.api.uc.login, params).then(response => {
                var resp = response.body;
                if (resp.code == 0) {
                  this.$Message.success(this.$t("uc.login.success"));
                  this.$store.commit("setMember", response.body.data);
                  if (this.$route.query.key != null && this.$route.query.key != "") {
                    localStorage.setItem("USERKEY", this.$route.query.key);
                  }
                  this.$router.push("/");
                } else {
                  this.$Message.error(resp.message);
                }
              });
          } else {

          }
        });
      
    }
  }
};
</script>
<style lang="scss">
.login_form {
  .login_right {
    form.ivu-form.ivu-form-label-right.ivu-form-inline {
      .ivu-form-item {
        .ivu-form-item-content {
          .ivu-input-wrapper.ivu-input-type {
            .ivu-input {
              background-color:transparent;
              font-size: 14px;
              border: none;
              border-bottom: 1px solid #27313e;
              border-radius:0;
              // color:#fff;
              &:focus {
                border: none;
                border-bottom: 1px solid #27313e;
                -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
                -webkit-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
                box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              }
            }
          }
        }
      }
    }
  }
}
</style>
