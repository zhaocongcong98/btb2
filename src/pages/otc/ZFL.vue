<template>
  <div class="content-wraps">
    <div class="top">
      <div class="title">
        <img src="../../assets/images/launchpad/zfl_icon.png" alt="" width="100px">
        <h2>Payment Chain(ZFL)</h2>
        <h2>{{$t("zfl.title")}}</h2>
      </div>
    </div>
    <div class="line"></div>
    <div class="zfl-content">
      <div class="page1">
        <div class="left page1-left">
          <div class="left-content">
            <h2>{{$t("zfl.page1title")}}</h2>
          <p>{{$t("zfl.page1text")}}</p>
          </div>
        </div>
        <div class="right">
          <img src="../../assets/images/launchpad/Img-home-hero-zfl.png" alt="" width="100%">
        </div>
      </div>
       <div class="page2">
        
        <div class="left page2-left">
          <img src="../../assets/images/launchpad/Img-card-hero.png" alt="" width="100%">
        </div>
        <div class="right page2-right">
          <div class="right-content">
            <h2>{{$t("zfl.page2title")}}</h2>
          <p>{{$t("zfl.page2text")}}</p>
          </div>
        </div>
      </div>
      <div class="zfl-title">
        <div style="display:flex;align-items:center">
          <div class="zfl-line" style="width:6px;height:30px;border-radius:3px;background-color:#29BBB1;margin-left:50px"></div>
          <h2 class="name" style="margin-left:10px">ZFL</h2>
        </div>
        <div class="zfl-content">
          <div class="zfl-left">
            <p>{{$t("zfl.zflLeft1")}}</p>
            <p>{{$t("zfl.zflLeft2")}}</p>
            <p>{{$t("zfl.zflLeft3")}}</p>
            <p>{{$t("zfl.zflLeft4")}}</p>
            <p>{{$t("zfl.zflLeft5")}}</p> 
            <p>{{$t("zfl.zflLeft6")}}</p>
          </div>
          <div class="zfl-right">
            <p>{{$t("zfl.zflRight1")}}</p>
            <p>{{$t("zfl.zflRight2")}}</p>
            <p>{{$t("zfl.zflRight3")}}</p>
            <p>{{$t("zfl.zflRight4")}}</p>
            <p>{{$t("zfl.zflRight5")}}</p>
            <p>
              <router-link to="/exchange/zfl_eth"><button>ETH</button></router-link>
              <router-link to="/exchange/zfl_btc"><button>BTC</button></router-link>
              <router-link to="/exchange/zfl_usdt"><button>USDT</button></router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
   .router-link-exact-active.router-link-active {
      div {
         width: 100%;
        height: 100%;
        color: #fdc101!important;
        border-bottom: 2px solid #fdc101; 
      }        
   }
.content-wraps {
  background-color: #fff;
  .top {
    position: relative;
    text-align: center;
    width: 100%;
    padding: 19.34% 0%;
    background:url("../../assets/images/launchpad/zfl_bg.png") no-repeat;
    background-size: cover;
    .title {
      color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      h2 {
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 30px;
      }
    }
  }
  .line {
    width: 100%;
    height: 40px;
    background-color: #fdc101;
  }
  .zfl-content {
    background-color: #fff;
    color: #333;
    .page1,.page2 {
      display: flex;
      .page1-left {
 background-color: #f5f6f5;
      }
      .page2-left {
        background-color: #212323;
      }
      .left,.right {
        width: 50%;
        padding: 40px 8%;
        .left-content,.right-content {
          max-width: 560px;
          margin: 0 auto;
          h2 {
            font-size: calc(56px + 8 * ((100vw - 1025px) / 415));
            font-weight: normal;
            margin-bottom: 20px;
          }
          p {
            font-size: 24px;
            letter-spacing: -.12px;
          }
        }
      }

    }
    .zfl-title {
      margin: 30px 0px;
      width: 100%;
      color: #29BBB1;
      .name {
        font-weight: normal;
        font-size: 30px;
      }
      .zfl-content {
        font-size: 16px;
        padding-left: 50px;
        color: #29BBB1;
        line-height: 30px;
        display: flex;
        p {
          margin: 5px 0px;
        }
        .zfl-left {
          font-weight: 700;
        }
        .zfl-right {
          margin-left: 150px;
          button {
            cursor: pointer;
            background-color: #29BBB1;
            color: #fff;
            border: none;
            padding: 0 10px;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      coins: [],
      activeMenuName: "coin-1"
    };
  },
  computed: {
    isLogin: function() {
      return this.$store.getters.isLogin;
    }
  },
  watch:{
    $route(to, from) {
      this.activeMenu();
    }
  },
  methods: {
    init() {
      this.$store.commit("navigate", "nav-otc");
      this.$http.post(this.host + this.api.otc.coin).then(response => {
        if (response.body.code == 0) {
          this.coins = response.body.data;
          this.activeMenu();
          this.$nextTick(function() {
            this.$refs.navMenu.updateActiveName();
          });
        }
      });
    },
    goBusiness() {
      if (this.isLogin) {
        this.$router.push({
          path: "/identbusiness"
        });
      } else {
        this.$Message.warning(this.$t('add.add_18'));
      }
    },
    menuSelected(menuName) {
      if (menuName.startsWith("coin")) {
        var coin = this.coins[menuName.split("-")[1]];
        this.$router.push("/otc/trade/" + coin.unit);
      } else {
        this.$router.push("/otc/" + menuName);
      }
    },
    activeMenu() {
      let coin = this.$route.params[0] || "USDT";
      coin = coin.toUpperCase();
      let index=0;
      this.coins.forEach((v,i)=>{
        if(v.unit===coin){
          index=i;
        }
      })
      this.activeMenuName = `coin-${index}`;
      this.$nextTick(function() {
        this.$refs.navMenu.updateActiveName();
      });
    }
  },
  created: function() {
    this.init();
    // this.activeMenuName = "coin-1";
    // this.$nextTick(function() {
    //   this.$refs.navMenu.updateActiveName();
    // });
  }
};
</script>