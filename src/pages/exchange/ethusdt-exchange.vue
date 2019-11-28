<template>
  <div class="ethusdtexchange">
      <div class="bg"></div>
      <ul class="top">
          <li v-for="(item,index) in week" :key="index" v-bind:class="{'dayactive':index===3}">
              <p style="margin-bottom:5px;font-size:18px">{{item.day}}</p>
              <p>{{$t('ethusdt.ethexchange')}}{{item.scale}}ZFL</p>
          </li>
      </ul>
      <div class="title">
          <h3>{{$t('ethusdt.bobotco')}}</h3>
          <p>{{$t('ethusdt.plan')}}</p>
      </div>
      <div class="exchange_box">
          <div class="exchange_top">
              <div class="left">
                  <span>{{$t('ethusdt.currentPrice')}}</span>
                  <span>{{currentPrice}}</span>
              </div>
              <div class="right">
                  <span>{{$t('ethusdt.todayPrice')}}</span>
                  <span style="margin-right:20px" >{{todayPrice}}</span>
              </div>
          </div>
          <div class="exchange_center">
              <div style="margin-top:10px">
                  <span style="float:left;margin-left:40px">{{$t('ethusdt.exchangeTop')}}</span>
                  <span style="float:right;margin-right:40px">{{percent}}</span>
              </div>
              <div class="range">
                  <div class="percent" ref="percent"></div>
              </div>
              <div class="exchange_input">
                  <input type="text" :placeholder="$t('ethusdt.placehold')" v-model="buyAmount">
                  <button v-if="buystatus === 'buy'" type="button" @click="buy" class="buybutton1">{{$t('ethusdt.buy')}}</button>
                  <button v-else-if="buystatus === 'notopen'" type="button" class="buybutton1 buybutton2">{{$t('ethusdt.notStart')}}</button>
                  <button v-else type="button"  class="buybutton1 buybutton2">{{$t('ethusdt.grab')}}</button>
                  <p class="message">{{message}}</p>
              </div>
              <p class="notice">{{$t('ethusdt.notice')}}</p>
          </div>
      </div>
      <div class="exchange_rules">
          <h3>{{$t('ethusdt.rule1')}}</h3>
          <p>{{$t('ethusdt.rule11')}}</p>
          <p>{{$t('ethusdt.rule12')}}</p>
          <p>{{$t('ethusdt.rule13')}}</p>
          <p>{{$t('ethusdt.rule14')}}</p>
          <p>{{$t('ethusdt.rule15')}}</p>
          <h3>{{$t('ethusdt.rule2')}}</h3>
          <p>{{$t('ethusdt.rule21')}}</p>
          <p>{{$t('ethusdt.rule22')}}</p>
          <p>{{$t('ethusdt.rule23')}}</p>
          <p>{{$t('ethusdt.rule24')}}</p>
          <p>{{$t('ethusdt.rule25')}}</p>
          <p>{{$t('ethusdt.rule26')}}</p>
          <h3>{{$t('ethusdt.rule3')}}</h3>
          <p>{{$t('ethusdt.rule31')}}</p>
          <p>{{$t('ethusdt.rule32')}}</p>
          <p>{{$t('ethusdt.rule33')}}</p>
          <p>{{$t('ethusdt.rule34')}}</p>
          <p>{{$t('ethusdt.rule35')}}</p>
          <p>{{$t('ethusdt.rule36')}}</p>
          <p>{{$t('ethusdt.rule37')}}</p>
          <p>{{$t('ethusdt.rule38')}}</p>
          <p>{{$t('ethusdt.rule39')}}</p>
      </div>
      <!-- <div class="code">
          <img src="../../assets/images/bbccode.jpg" alt="" style="width:300px;height:300px">
            <div class="service">
                <p class="service_title">{{$t('ethusdt.service')}}</p>
                <p class="service_text">{{$t('ethusdt.title')}}</p>
            </div>
      </div> -->
  </div>
</template>
<style scoped lang="scss">
.range {
    margin:90px 20px 20px 20px;
    height: 20px;
    background-color: #aaa;
    border-radius: 10px;
    .percent {
        width: 0%;
        height: 100%;
        background: linear-gradient(to right, rgb(255, 198, 24), rgb(249, 135, 0));
        border-radius: 10px;
    }
}
.ethusdtexchange {
    position: relative;
    width: 100%;
    max-width: 1920px;
    min-width: 1180px;
    .top {
        position: absolute;
        width: 100%;
        max-width: 1920px;
        min-width: 1000px;
        left: 0px;
        top: 60px;
        height: 80px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        li {
            float: left;
            width: 14.25%;
            height: 100%;
            background-color: #9d1fec;
            list-style: none;
        }
         .dayactive {
            background-color: #c266fd;
        }
    }
    .title {
        position: absolute;
        left: 200px;
        top: 150px;
        h3 {
            font-size: 40px;
            font-weight: 600;
        }
        p {
            font-size: 20px;
        }
    }
    .exchange_box {
        position: absolute;
        left: 50%;
        top: 350px;
        margin-left: -350px;
        width: 700px;
        .exchange_top {
            width: 100%;
            height: 80px;
            background: linear-gradient(to bottom, #ffe467 0%,#e48d04 100%);
            border-radius: 24px 24px 0px 0px;
            .left {
                float: left;
            }
            .right {
                float: right;

            }
             span {
                    margin-left: 20px;
                    line-height: 80px;
                    font-size: 18px;
                }
        }
        .exchange_center {
            overflow: hidden;
            width: 100%;
            background-color: #fff;
            color: #222;
            border-radius: 0px 0px 24px 24px;
            .exchange_input {
                position: relative;
                margin: 50px auto 50px auto;
                input {
                    width: 400px;
                    height: 50px;
                    margin-left: 50px;
                    border: none;
                    background-color: #e3e4e5;
                    border-radius: 5px;
                    vertical-align:top;
                    text-align: center;
                    outline: none;
                }
                .buybutton1 {
                    width: 150px;
                    height: 50px;
                    vertical-align:top;
                    margin-left: 50px;
                    border: none;
                    background: linear-gradient(to bottom, #ffe467 0%,#e48d04 100%);
                    border-radius: 8px;
                    box-shadow: 1px 4px 1px #b36e43;
                    font-size: 24px;
                    color: #fff;
                    cursor: pointer;
                    outline: none;
                }
                .buybutton2 {
                    background: linear-gradient(to bottom, #ffffff 0%,#9E9E9E 100%);
                    box-shadow: 1px 4px 1px #9e9e9e; 
                    color: #646464;
                }
                .message {
                    width: 400px;
                    height: 40px;
                    position: absolute;
                    left: 50px;
                    top: 50px;
                    line-height: 40px;
                    font-size: 24px;
                    color: 	#DC143C;
                    text-align: center;
                }
            }
            .notice {
                color: #efb12d;
                text-align: center;
                padding-bottom: 30px;
            }
        }
    }
    .exchange_rules {
        color: #454545;
        font-size: 16px;
        background-color: #fff;
        width: 100%;
        padding: 100px 10% 50px 10%;
        p {
            line-height: 40px;
        }
        h3 {
            color: #e69309;
            margin-top: 20px;
        }
    }
    .code {
        background-color: #fff;
         overflow: hidden;
        position: relative;
        width: 100%;
        height: 500px;
        text-align: center;
        img {
            position: absolute;
            left: 50%;
            margin-left: -150px;
        }
        .service {
            margin-top: 350px;
        }
        .service_title {
            color: #e6930a;
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 30px;
        }
        .service_text {
            color: #454545;
            font-weight: 500;
        }
    }
}
.bg {
   width: 100%;
    height: 700px;
    background:url("../../assets/images/ethusdt_bg.png");
    background-size: cover;
}
</style>
<script>
export default {
  data() {
    let self = this;
    return {
        buyAmount:"",/* 购买的数量 */
        buystatus:"",
        todayPrice:"1ETH=0000ZFL",
        currentPrice: "1ETH=0000ZFL",
        percent: "剩余100%",
        message: "",
        week:[] /* 七天 */
    };
  },
  computed: {

  },
  watch: {
    
  },
  created: function() {
    
  },
  mounted:function(){
      this.zfl();
      this.getSevenDay();
  },
  watch:{
   
  },
  methods: {
      /* 获取eth兑换zfl */
    zfl:function(){
        this.$http.get(this.host + this.api.ethzfl.tnt).then(function(res) {
        let days = this.get_day(res.body.data.startTime);
       this.back_zfl(res.body.data.startScale,days,res.body.data.stepScale);
       this.percentFuc(res.body.data.balance,res.body.data.total);
      });
    },
    /* 计算每天的兑换比率 */
    everyExchange:function(todayScale,stepScale){
        let beforeThree = todayScale+stepScale*3;
        for(let i=0;i<7;i++){
            this.$set(this.week[i],'scale',beforeThree); //正确姿势
            beforeThree -= stepScale;
        }
    },
    /* 获取七天的日期并设置数组 */
    getSevenDay:function(){
        let today = new Date().getTime();
        let beforeThree = parseInt(today-1000*60*60*24*3);
        for(let i=0;i<7;i++){
            let days = new Date(beforeThree);
            let year = days.getFullYear();
            let month = days.getMonth()+1;
            let day = days.getDate();
            let dayinfo = {
                day: year + "-" + month + "-" + day
            };
            this.week.push(dayinfo);
            beforeThree += 1000*60*60*24;
        }
    },
    /* 计算剩余多少 */
    percentFuc:function(current,total){
        let time =new Date();
        let hour = time.getHours();
        let percent = current/total*100;
        if(hour>=15 && hour<24){
        if(percent>0 && percent<=100){
            this.percent = this.$t('ethusdt.remaining') + percent + "%"
            this.buystatus = "buy";
        }else{
            this.percent = this.$t('ethusdt.grab');
            this.buystatus = "";
        }
        }else{
            this.percent = this.$t('ethusdt.notStart') + "";
            this.buystatus = "notopen";    
        }
        console.log(this.$refs.percent.style);
        this.$refs.percent.style.width = percent + "%";
    },
    /* 兑换zfl */
    exchangeZfl:function(){
        let amount = this.buyAmount;
        let param = {
            srcCurrency:"ETH",
            targetCurrency: "ZFL",
            amount: amount
        };
       this.$http.post(this.host + this.api.ethzfl.buyZfl,JSON.stringify(param)).then(function(res){
           console.log(res);
           if(res.body.code === 0){
               this.showMessage(this.$t('ethusdt.buySuccess'));
               this.buyAmount = "";
                this.zfl();
           }else{
               this.showMessage(res.body.message);
           }
       });  
    },
    /* 购买提示 */
    showMessage:function(text){
         this.message = text + "";
         setTimeout(()=>{
             this.message = "";
         },2000);
    },
    back_zfl:function(startScale,days,stepScale){
        let amount = startScale - days*stepScale;
        this.todayPrice ="1ETH=" + amount + "ZFL";
        this.currentPrice = "1ETH=" + parseInt(amount/3) + "ZFL";
        this.everyExchange(amount,stepScale);
    },
    /* 计算今天到固定时间的天数 */
    get_day:function(times){
        let nowday =new Date();
        let nowtime = nowday.getTime();
        let day = Math.floor((nowtime - times)/(1000*60*60*24));
        return day;
    },
    /* 购买币种 */
    buy:function(){
        this.exchangeZfl();
    }
  }
};
</script>

