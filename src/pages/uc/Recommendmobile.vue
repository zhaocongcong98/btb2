<template>
    <div style="text:center">
        <p slot="header" style="text-align: center;">{{$t('add.add_23')}}</p>
        <br>
        <div class="show-qrcode" style="text-align: center;">
        <qriously :value="qvalue" :size="qsize" foreground="#fff" />
        </div>
        <br>
          <p>{{$t('add.add_24')}}</p>
        <p slot="header" style="text-align: center;">{{$t('add.add_25')}}{{qvalue}}</p>
    </div>
</template>
<script>
import Vue from "vue";
import VueQriously from "vue-qriously";
Vue.use(VueQriously);

export default {
  components: {
    VueQriously
  },
  data() {
    return {
        qvalue: "",
        qsize: 200, 
    }
  },
  mounted:function() {
      this.getMember();
  },
 methods: {
    getMember() {
        //获取个人安全信息
        var self = this;
        this.$http
            .post(this.host + "/uc/approve/security/setting")
            .then(response => {
            var resp = response.body;
            
                this.user = resp.data;
                // this.qvalue ="http://47.244.45.34:80/#/register?promotionCode=" +this.user.username;
                this.qvalue ="http://jingui360.com/#/register?promotionCode=" +this.user.username;
                // this.qvalue ="http://192.168.1.28:9595/#/register?promotionCode=" +this.user.username;
            });
        }
    }
}
</script>
