<style lang="scss" scoped>
.about_us_container {
  background-color: #192330;
  // background-color: #eee;
  padding: 60px 0 20px 0;
  .wrapper {
    margin: 30px 12%;
    padding: 0 40px;
    h2 {
      font-weight: 400;
      height: 50px;
      font-size: 20px;
      border-bottom: 1px solid #27313e;
      line-height: 50px;
    }
    .wrapper_logo ul {
      display: flex;
      justify-content: space-between;
      align-items: top;
      padding-top: 30px;
      border-bottom: 1px solid #27313e;
      li {
        padding: 20px 20px;
        width: 33.3%;
        height: 100%;
        list-style-type: none;
        text-align: center;
        h5 {
          line-height: 50px;
          font-size: 20px;
        }
        span {
          color: #999;
          font-size: 14px;
        }
      }
    }
    .content_wrapper {
      padding: 20px 0;
      .content1 {
        border-bottom: 1px solid #27313e;
        padding-bottom: 20px;
        margin-bottom: 20px;
        h5 {
          font-size: 18px;
          line-height: 40px;
          font-weight: 500;
        }
        p {
          font-size: 14px;
          line-height: 20px;
          color: #8f8f90;
          margin-bottom: 10px;
          // margin-bottom: 14px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="about_us_container">
    <div class="wrapper">
      <h2 class="title">{{$t('add.aboutUs')}}</h2>
      <div class="wrapper_logo">
        <ul>
          <li>
            <img src="../../assets/images/feature_safe.png" alt="">
            <h5>{{$t('description.title1')}}</h5>
            <span>{{$t('description.message1')}}</span>
          </li>
          <li>
            <img src="../../assets/images/feature_fast.png" alt="">
            <h5>{{$t('description.title2')}}</h5>
            <span>{{$t('description.message2')}}</span>
          </li>
          <li style="border:none;">
            <img src="../../assets/images/feature_experience.png" alt="">
            <h5>{{$t('description.title3')}}</h5>
            <span>{{$t('description.message3')}}</span>
          </li>
        </ul>
      </div>
      <div class="content_wrapper">
        <div class="content1">
          <h5>{{$t('add.aboutUs')}}</h5>
		       {{$t('add.aboutText')}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  created() {},
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  },
  methods: {}
};
</script>
<style scoped>
.container {
  background: #fff;
  overflow-x: hidden;
}

.content-wrap {
  padding-top: 20px;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  min-height: 600px;
}

.leftmenu {
  border: 1px solid #efefef;
}

.leftmenu .divider {
  font-size: 20px;
  padding: 5px;
  background: #efefef;
}

.leftmenu li {
  font-size: 14px;
  line-height: 30px;
  padding: 5px;
}

.leftmenu li a {
  color: #444;
}

.leftmenu li a:hover {
  color: #f0a70a;
}

.leftmenu li.cur a {
  color: #f0a70a;
}
.content {
  padding-top: 20px;
  /*padding-left: 200px;*/
  padding-bottom: 20px;
  text-align: left;
  padding-left: 20px;
}

.content .ivu-col {
  text-align: left;
}

.content p {
  text-indent: 2em;
  margin-bottom: 10px;
  font-size: 16px;
}
.content > div {
  padding-bottom: 20px;
}
.content h3 {
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 20px;
}
.content h5 {
  font-size: 14px;
}
.WordSection1 span {
  color: black;
}
</style>
