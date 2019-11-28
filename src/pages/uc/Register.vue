<template>
  <div class="login_form">
    <div class="login_right">
      <Form v-if="allowRegister" ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem style="text-align:center;">
          <ButtonGroup>
            <div class="tel-title">{{$t('common.register')}}</div>
          </ButtonGroup>
        </FormItem>
        <FormItem prop="username">
          <Input type="text" v-model="formInline.username" :placeholder="$t('uc.regist.username')">
          </Input>
        </FormItem>
        <FormItem prop="user" class="phone-content">
          <!-- 下拉 -->
           <Row class="phone-left">
             <div class="phone-icon"></div>
        <Col span="24" style="padding:0px 10px 0px 17px;">
            <Select v-model="countryCode" filterable not-found-text="Not Data" placeholder="Select">
                <Option v-for="(item,index) in cityList" :value="item.areaCode" :label="item.areaCode" :key="index" style="width:100%;background-color:#112039;color:#fff">
                  <span style="float:left;width:50px;text-align:left;margin-left:30px">{{ item.areaCode }}</span>
                  <span style="float:left;width:110px;margin-left:50px;text-align:left;white-space:nowrap;">{{ item.enName }}</span>
                  </Option>
            </Select>
        </Col>
    </Row>
          <Input type="text" v-model="formInline.user" :placeholder="key" class="phone-right">
          </Input>
        </FormItem>

        <FormItem prop="code" v-show="showCode">
          <Input type="text" v-model="formInline.code" :placeholder="$t('uc.regist.smscode')">
          </Input>
          <input id="sendCode" @click="sendCode();" type="Button" :value="this.$t('uc.regist.sendcode')" :disabled='codedisabled'>
          </input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" :placeholder="$t('uc.regist.pwd')">

          </Input>
        </FormItem>
        <FormItem prop="recommand">
          <Input type="text" v-model="formInline.recommand" :value="formInline.recommand" :placeholder="$t('uc.regist.recommand')">
          </Input>
        </FormItem>
        <div class="check-agree" style="">
          <label>
            <Checkbox v-model="agree">{{$t('uc.regist.agreement')}}</Checkbox>
          </label>
          <a href="#/helpdetail?cate=1&id=17&cateTitle=常见问题" target="_blank" style="">《{{$t('uc.regist.userprotocol')}}》</a>
        </div>
        <FormItem>
          <Button class="register_btn" @click="handleSubmit('formInline')" :disabled="registing">{{$t('uc.regist.regist')}}</Button>
        </FormItem>
      </Form>
      <Alert v-else type="warning">
        Coming soon!
        <template slot="desc">
          CEX will open register in Mar 1st
        </template>
      </Alert>
    </div>
  </div>
</template>
<style lang="scss" >
.ivu-select-selection {
    background-color: #192944!important;
    border: none;
}
.ivu-select-item {
  background-color:#112039!important;
}
.ivu-select-dropdown-list {
  width: 100%;
  min-width: 295px!important;
}
.ivu-select-input {
  text-indent: 10px;
}
</style>
<style scoped lang="scss">
.phone-content {
  display: flex;
  .phone-left {
    position: relative;
     float: left;
     width: 110px;
  }
  .phone-right {

     float: right;
    width: 160px;
  }
}
.login_form {
  background: #0b1520 url(../../assets/images/login_bg.jpg) no-repeat center center;
  height: 760px;
  position: relative;
  overflow: hidden;
  .login_right {
    padding: 20px 30px;
    position: absolute;
    background: #192944;
    width: 350px;
    height: 485px;
    left: 50%;
    top: 50%;
    margin-left: -175px;
    margin-top: -255px;
    border-top: 4px solid #f0ac19;
    border-radius: 5px;
    .tel-title{
      color: #fff;
    }
    form.ivu-form.ivu-form-label-right.ivu-form-inline {
      .ivu-form-item {
        .ivu-form-item-content {
          .register_btn.ivu-btn {
            width: 100%;
            background-color: #f0ac19;
            outline: none;
            border-color: #f0ac19;
            color: #fff;
            border-radius: 30px;
            font-size: 18px;
            margin-top: 20px;
            &:focus {
              -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              -webkit-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
            }
          }
          .ivu-input-wrapper.ivu-input-type {
            .ivu-input {
              border: 1px solid red;
            }
          }
          #sendCode {
            position: absolute;
            border: 1px solid #f0ac19;
            background: transparent;
            top: -10px;
            outline: none;
            right: 0;
            width: 30%;
            border-radius: 20px;
            color: #f0ac19;
            cursor: pointer;
          }
        }
      }
      .check-agree {
        color: #979797;
        display: inline-block;
        line-height: 30px;
        font-size: 12px;
        cursor: default;
        a {
          color: #f0ac19;
          margin-left: -10px;
        }
        .ivu-checkbox-wrapper.ivu-checkbox-wrapper-checked {
          .ivu-checkbox.ivu-checkbox-checked {
            .ivu-checkbox-inner {
              border: 1px solid #f0ac19;
              background-color: #f0ac19;
            }
          }
        }
      }
    }
  }
}

.login_title {
  text-align: center;
  height: 80px;
  font-size: 25px;
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
.tel-title {
  font-size: 25px;
}
.login_left {
  display: none;
}
.phone-icon {
  width: 20px;
  height: 20px;
  background:url('../../assets/images/phone-icon.png') no-repeat;
  background-size: cover;
  z-index: 2;
  position: absolute;
  top: 5px;
  left: 5px;
}
</style>
<script>
//   import gtInit from '../../assets/js/gt.js';
import $ from "jquery";
export default {
 
  data() {
    const validateUser = (rule, value, callback) => {
      if (this.changeActive == 0) {
        var reg = /^[0-9]*/;
        if (value == "") {
          callback(new Error(this.$t("uc.regist.teltip")));
        } else if (!reg.test(this.formInline.user)) {
          callback(new Error(this.$t("uc.regist.telerr")));
        } else {
          callback();
        }
      } else {
        var reg = /[0-9]*$/;
        if (value == "") {
          callback(new Error(this.$t("uc.regist.emailtip")));
        } else if (!reg.test(this.formInline.user)) {
          callback(new Error(this.$t("uc.regist.emailerr")));
        } else {
          callback();
        }
      }
    };
    const validateRepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("uc.regist.confirmpwdtip")));
      } else if (value !== this.formInline.password) {
        callback(new Error(this.$t("uc.regist.confirmpwderr")));
      } else {
        callback();
      }
    };
    return {
      countryCode:"0086",
      cityList:[],
      codedisabled:false,
      sendcodeValue: this.$t("uc.regist.sendcode"),
      isRegister: false,
      ticket: "",
      randStr: "",
      registing: false,
      captchaObj: null,
      modal1: false,
      _captchaResult: null,
      agree: true,
      allowRegister: true,
      buttonLists: [
        {
          text: this.$t("uc.regist.telregist")
        },
        {
          text: this.$t("uc.regist.emailregist")
        }
      ],
      areas: [],
      changeActive: 0,
      showCode: true,
      countdown: 60,
      formInline: {
        username: "",
        // country: "",
        user: "",
        code: "",
        areaCode: "",
        password: "",
        repassword: "",
        recommand: ""
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: this.$t("uc.regist.usernametip"),
            trigger: "blur"
          },
          {
            type: "string",
            min: 3,
            max: 15,
            message: this.$t("uc.regist.usernamemsg"),
            trigger: "blur"
          }
        ],
        // country: [
        //   {
        //     required: true,
        //     message: this.$t("uc.regist.countrytip"),
        //     trigger: "blur"
        //   }
        // ],
        user: [{ validator: validateUser, trigger: "blur" }],
        code: [
          {
            required: true,
            message: this.$t("uc.regist.smscodetip"),
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("uc.regist.pwdtip"),
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: this.$t("uc.regist.pwdmsg"),
            trigger: "blur"
          }
        ],
        repassword: [{ validator: validateRepassword, trigger: "blur" }],
        recommand:[{
            required: false,
            message: this.$t("uc.regist.recommandtip"),
            trigger: "blur"
          },
          {
            type: "string",
            min: 3,
            max: 15,
            message: this.$t("uc.regist.recommandmsg"),
            trigger: "blur"
          }
        ],
      },
      key: "",
      code: ""
    };
  },
  watch: {
    changeActive: function(val) {
      this.$refs["formInline"].resetFields();
      // if (val == 0) this.initGtCaptcha();
    },
    lang: function() {
      this.updateLangData();
    }
  },
  computed: {
    lang: function() {
      return this.$store.state.lang;
    },
    isLogin: function() {
      return this.$store.getters.isLogin;
    }
  },
  created: function() {
    window.scrollTo(0, 0);
    // var oDiv = document.getElementById("example-navbar-collapse");
    // oDiv && (oDiv.className = "navbar-collapse collapse");
    this.init();
    this.actives(this.changeActive);
  },
  mounted:function(){
    this.getCountry();
  },
  methods: {
    selcetAcitive:function(val){
      console.log(val);

    },
    getCountry:function(){
   this.$http.get(this.host + this.api.common.country).then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            console.log(resp.data);
            this.cityList = resp.data;
          }
        
        });
  },
    updateLangData() {
      this.buttonLists = [
        {
          text: this.$t("uc.regist.telregist")
        },
        {
          text: this.$t("uc.regist.emailregist")
        }
      ];

      if (this.changeActive == 0) {
        this.key = this.$t("uc.regist.telno");
      } else {
        this.key = this.$t("uc.regist.email");
      }
    },
    init() {
     this.formInline.recommand= this.$route.query.recommend ;
      if (this.isLogin) {
        this.$router.push("/");
      }
      // this.getAreas();
      // this.initGtCaptcha();
      
    },
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
    onAreaChange(value) {
      for (var i = 0; i < this.areas.length; i++) {
        if (this.areas[i].zhName == value) {
          this.formInline.areaCode = this.areas[i].areaCode;
        }
      }
    },
    getAreas() {
      this.$http.post(this.host + this.api.common.area).then(response => {
        var resp = response.body;
        this.areas = resp.data;
        this.formInline.country = this.areas[0].zhName;
        this.formInline.areaCode = this.areas[0].areaCode;
      });
    },
    actives: function(index) {
      this.changeActive = index;
      if (this.changeActive == 0) {
        this.showCode = true;
        this.key = this.$t("uc.regist.telno");
        this.ruleInline.code = [
          {
            required: true,
            message: this.$t("uc.regist.smscodetip"),
            trigger: "blur"
          }
        ];
      } else {
        this.showCode = false;
        this.key = this.$t("uc.regist.email");
        this.ruleInline.code = [];
      }
    },
    handleSubmit(name) {
      console.log(this.countryCode);
      this.$refs[name].validate(valid => {
        if (valid) {
          if (this.agree == true) {
            if (this.changeActive == 1) {
              this.openValidateModal();
            } else {
              if (this.isRegister) {
                this.registing = true;
                var params = {};
                params["phone"] = this.formInline.user;
                params["username"] = this.formInline.username;
                params["password"] = this.formInline.password;
                params["reccommand"] = this.formInline.recommand;
                if(!params["reccommand"]){
                    params["reccommand"]='13600000000';
                }
                params["code"] = this.formInline.code;
                params["country"] = this.countryCode;
                params["superPartner"] = this.formInline.superType;
                params["ticket"] = this.ticket;
                params["randStr"] = this.randStr;
                this.$http
                  .post(this.host + "/uc/register/phone", params)
                  .then(response => {
                    this.registing = false;
                    var resp = response.body;
                    if (resp.code == 0) {
                      if (
                        this.formInline.superType == "1" ||
                        this.formInline.superType == "2"
                      ) {
                        this.$Notice.success({
                          title: this.$t("common.tip"),
                          desc: "注册申请已提交，请耐心等待审核结果"
                        });
                        var that = this;
                        setTimeout(() => {
                          that.$router.push("/");
                        }, 3000);
                      } else {
                        this.$Notice.success({
                          title: this.$t("common.tip"),
                          desc: resp.message
                        });
                        var that = this;
                        setTimeout(() => {
                          that.$router.push("login");
                        }, 3000);
                      }
                    } else {
                      this.$Notice.error({
                        title: this.$t("common.tip"),
                        desc: resp.message
                      });
                    }
                  });
              } else {
                this.$Notice.error({
                  title: this.$t("common.tip"),
                  desc: resp.message
                });
              }
            }
          } else {
            this.$Notice.error({
              title: this.$t("common.tip"),
              desc: this.$t("uc.regist.agreementtip")
            });
          }
        } else {
        }
      });
    },
    settime() {
      this.sendcodeValue = this.countdown;
      this.codedisabled = true;
      let timercode = setInterval(() => {
        this.countdown--;
        this.sendcodeValue = this.countdown;
        if (this.countdown <= 0) {
          clearInterval(timercode);
          this.codedisabled = false;
          this.sendcodeValue = this.$t("uc.regist.sendcode");
          this.countdown = 60;
        }
      }, 1000);
    },
    sendCode() {
      var mobilePhone = this.formInline.user;
      let reg = /^[0-9]*$/;
      this.initGtCaptcha();
    },
    success() {
      var params = {};
      params["phone"] = this.formInline.user;
      params["country"] = this.countryCode;
      var reg = /^[0-9]*$/;
      reg.test(params["phone"]) && this.$http.post(this.host + "/uc/mobile/code", params).then(response => {
            var resp = response.body;
            resp.code == 0 && this.$Notice.success({title: this.$t("common.tip"),desc: resp.message});
            resp.code == 0 && this.settime();
            resp.code != 0 && this.$Notice.error({title: this.$t("common.tip"),desc: resp.message});
          });
      !reg.test(params["phone"]) &&this.$Notice.error({title: this.$t("common.tip"),desc: this.$t("uc.finance.withdraw.telerr")});
    }
  }
};
</script>
<style lang="scss">
.login_form {
  .login_right {
    form.ivu-form.ivu-form-label-right.ivu-form-inline {
      text-align:center;
      .ivu-form-item {
        .ivu-form-item-content {
          .ivu-input-wrapper.ivu-input-type {
            .ivu-input {
              border: none;
              border-bottom: 1px solid #27313e;
              font-size: 14px;
              background:transparent;
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
      .check-agree {
        .ivu-checkbox-wrapper {
          .ivu-checkbox-input {
            &:focus {
              border: none;
              outline: none;
              -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              -webkit-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
            }
          }
        }
        .ivu-checkbox-wrapper.ivu-checkbox-wrapper-checked {
          .ivu-checkbox.ivu-checkbox-checked {
            .ivu-checkbox-inner {
              border: 1px solid #f0ac19;
              background-color: #f0ac19;
            }
          }
          
        }
        .ivu-checkbox-wrapper.ivu-checkbox-default{
          .ivu-checkbox{
            .ivu-checkbox-inner{
              background:transparent;
            }
          }
        }
      }
    }
  }
}
</style>
