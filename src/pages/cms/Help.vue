<template>
  <div class="help">
    <img class="bannerimg" src="../../assets/images/help_banner.png">
    <div class="yellow-line"></div>
    <div class="help_container">
      <h1>{{$t('add.help')}}</h1>
      <div class="main">
        <div class="section" v-for="(section,index) in helpData" v-bind:key="index">
          <h3>{{section.title}}</h3>
          <div class="list-wrap">
            <router-link class="item" :title="item.title" v-for="(item, index) in section.content" :to="{path:'helpdetail',query:{cate:section.cate,id:item.id,cateTitle:section.title}}" :key="index">
              <span class="text">{{item.title}}</span>
              <img v-show="item.isTop==0" class="iconimg" src="../../assets/images/icon-top.png" alt="">
            </router-link>
          </div>
          <div class="route-wrap">
            <router-link :to="{path:'helplist',query:{cate:section.cate,cateTitle:section.title}}">{{$t('otc.index.more')}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.yellow-line {
  width: 100%;
  height: 30px;
  background-color:  #0b1520;
}
.help {
  background: none;
  height: 100%;
  background-size: cover;
  position: relative;
  overflow: hidden;
  color: #fff;
  background-color: #fff;
}
.help .bannerimg {
  display: block;
  width: 100%;
}
.help_container {
  padding: 0 12%;
  text-align: center;
  height: 100%;
padding-bottom: 30px;
  color:  #fff;
   background: #1d293a;
  > h1 {
    font-size: 32px;
    line-height: 1;
    padding: 50px 0;
  }
  .list-wrap{
     color: #fff;
  }
}
.help .main {
  display: flex;
  justify-content: space-around;
  .section {
    flex: 0 0 40%;
    width: 40%;
    font-size: 16px;
    text-align: left;
    margin: 0 20px;
    position: relative;
    padding-bottom: 30px;
    > h3 {
      font-size: 24px;
      line-height: 1;
      padding: 30px 0;
      // color:#666;
      text-align: center;
    }
    .item {
      display: block;
      position: relative;
      padding: 16px 0;
      line-height: 1;
      // color: #333;
      border-bottom: 1px solid #27313e;
      .text {
        display: inline-block;
        max-width: calc(100% - 25px);
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .iconimg {
      display: inline-block;
      width: 14px;
      margin-left: 6px;
    }
  }
  .route-wrap {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    a {
      // color: #222;
      color: #fff;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      helpData: []
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.post(this.host + "/uc/ancillary/more/help").then(res => {
        if (res.status == 200 && res.body.code == 0) {
          this.helpData = res.body.data;
        } else {
          this.$Message.error(res.body.message);
        }
      });
    }
  }
};
</script>
