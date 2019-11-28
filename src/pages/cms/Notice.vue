<template>
  <div class="notice">
    <div class="banner">
      <!-- <img class="bannerimg" src="../../assets/images/help_banner.png"> -->
    </div>
    <div class="line"></div>
    <div class="main">
      <h3 style="font-size:28px;text-align:center; margin-bottom:30px">{{$t('add.announcement')}}</h3>
      <div class="list">
        <div class="item" v-for="(item,index) in FAQList" v-bind:key="index" @click="noticedeail(item.id)">
          <span class="text">{{item.title}}</span>
          <img v-show="item.isTop==0" class="iconimg" src="../../assets/images/icon-top.png" alt="">
          <span class="time">
            {{item.createTime}}
          </span>
        </div>
      </div>
      <div class="page">
        <Page :total="totalNum" :pageSize="pageSize" :current="pageNo" @on-change="loadDataPage"></Page>
      </div>
    </div>
    <!-- <div class="help_container">
          <div style="line-height: 40px;font-size:16px;"><router-link to="/help" style="color:#f0a70a;">{{$t('cms.servicecenter')}}</router-link>->{{$t('cms.notice')}}</div>

            <Col span="24" style="padding:0 2%;color:#000;font-size:18px;background:#fff">
                <div class="faqlist">
                    <div v-for="item,index in FAQList" class="faqitem" @click="noticedeail(item.id)" v-if="titleLang(item.title)===lang">{{item.title}}
                        <span style="float:right">{{item.createTime}}</span>
                    </div>
                </div>
            </Col>

        </div>
        <Col span="24" style="padding:100px 0;">


         </Col> -->
  </div>
</template>
<style lang="scss" scoped>
.line {
  height: 30px;
  background-color:#0b1520;
  color:#fff;
}
.notice {
  background-color: #0b1520;
  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15.57% 0%;
    background: linear-gradient(to right, #001a40, #000109);
    background-image: url("../../assets/images/notice_banner.png");
    background-size: cover;
    color: #fff;
    font-size: 40px;
  }
  .main {
    width: 70%;
  // padding:0 180px;
    margin: 0 auto;
    background-color:#0b1520;
  color:#fff;
    // box-shadow: 0 0 2px #ccc;
    // border-radius: 6px;
    padding: 10px 50px 100px 10px;
    .list {
      font-size: 14px;
      .item {
        line-height: 40px;
        border-bottom: 1px solid #27313e;
        cursor: pointer;
        .iconimg {
          width: 14px;
          vertical-align: sub;
          margin-left: 20px;
        }
        .time {
          float: right;
          color: #999;
          font-size: 14px;
        }
      }
    }
    .page {
      text-align: right;
      margin-top: 20px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      totalNum: 0,
      FAQList: []
    };
  },
  created: function() {
    this.init();
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  },
  methods: {
    init() {
      this.$store.state.HeaderActiveName = "1-7";
      this.$store.commit("navigate", "nav-service");
      this.loadDataPage(this.pageNo);
    },
    loadDataPage(pageIndex) {
      var param = {};
      (param["pageNo"] = pageIndex),
        (param["pageSize"] = this.pageSize),
        this.$http
          .post(this.host + this.api.uc.announcement, param)
          .then(response => {
            // console.log(response);
            var resp = response.body;
            if (resp.code == 0) {
              if (resp.data.content.length == 0) return;
              this.FAQList = resp.data.content;
              this.totalNum = resp.data.totalElements;
            } else {
              this.$Notice.error({
                title: this.$t("common.tip"),
                desc: resp.message
              });
            }
          });
    },
    noticedeail(id) {
      var path = { path: "/notice/index", query: { id: id } };
      this.$router.push(path);
    },
    titleLang(str) {
      const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
      if (reg.test(str)) {
        return "Chinese";
      } else {
        return "English";
      }
    }
  }
};
</script>

