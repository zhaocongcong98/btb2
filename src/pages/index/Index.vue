<template>

  <div>
    <div id="fullpage">
      <div class="section" id="page1">
        <div class="home-bg">
          
          <div class="home-title">
            <slide :slides="slides"  :inv="inv" :style="styleObject"></slide>
          </div>
          <div v-if="picList.length==0" class="spin-wrap" style="height:500px;">
          <Spin size="large" fix></Spin>
        </div>
           <Carousel v-else autoplay :arrow="showArrow" :autoplay-speed="speed" v-model="valueCal" class="carousel-box">
          <CarouselItem v-for="(item,index) in picList" :key="index">
           <div class="carousel-content">
              <div v-for="(tem,index1) in item" v-bind:key="index1" :style="'background-image: url('+tem.url+')'" class="carousel-item">
              <a v-show="tem.linkUrl&&tem.linkUrl!=' '&&tem.linkUrl!='1'" style="display:block;width:100%;height: 100%;" :href="tem.linkUrl" target="_blank"></a>
            </div> 
           </div>
          </CarouselItem>
        </Carousel>
        </div>
        <!-- <div v-if="lang==='简体中文'"> -->
  
      </div>
       <!-- 实时变化趋势 -->
        <div class="change-box">
          <div class="change-item" v-for="(item,key) in changeinfo" v-bind:key="key">
            <div style="width:50%;float:left;height:100%;padding-left:30px;margin-top:10px">
              <p style="height:30px">{{item.symbol}}</p>
               <p style="height:40px;font-size:24px">{{item.usdRate}}</p>
               <p style="height:40px;font-size:px">{{item.chg}}</p>
            </div>
            <div style="width:50%;float:right;height:100%">
              <canvas ref="iconcanvas" style="width:100%;height:100%;margin-top:10px" font="color:#f0A70A"></canvas>
            </div>
          </div>
        </div>
     
      <div class="section" id="page2">
        <div class="page2nav">
          <ul class="brclearfix">
            <li v-show="!(index==4&&!isLogin)" v-for="(item,index) in indexBtn" @click="addClass(index)" :class="{'active':index==choseBtn,'ivu-btn-default':index!=choseBtn}" :key="index">{{item.text}}</li>
          </ul>
        </div>
        <div class="ptjy">
          <Table v-if="choseBtn==4" :columns="favorColumns" :data="dataIndex" class="tables" :disabled-hover="true" :loading="loading" :no-data-text="$t('common.nodata')"></Table>
          <Table v-else :columns="coins.columns" :data="dataIndex" class="tables" :disabled-hover="true" :loading="loading" @on-row-click="gotoBuy" style="cursor: pointer" :no-data-text="$t('common.nodata')"></Table>
        </div>
      </div>
      <div class="section" id="page4">
        <div class="introduce">
          <h2>{{$t('homeadd.introduce.title')}}</h2>
          <div>
            <p>{{$t('homeadd.introduce.p1')}}</p>
            <p>{{$t('homeadd.introduce.p2')}}</p>
          </div>
        </div>
        <ul>
          <li>
            <div><img src="../../assets/images/introduce_icon1.png" alt=""></div>
            <p class="title">{{$t('description.title1')}}</p>
            <p>{{$t('description.message1')}}</p>
          </li>
          <li>
            <div><img src="../../assets/images/introduce_icon2.png" alt=""></div>
            <p class="title">{{$t('description.title2')}}</p>
            <p>{{$t('description.message2')}}</p>
          </li>
          <li>
            <div><img src="../../assets/images/introduce_icon3.png" alt=""></div>
            <p class="title">{{$t('description.title3')}}</p>
            <p>{{$t('description.message3')}}</p>
          </li>
          <li>
            <div><img src="../../assets/images/introduce_icon4.png" alt=""></div>
            <p class="title">{{$t('description.title4')}}</p>
            <p>{{$t('description.message4')}}</p>
          </li>
        </ul>
      </div>
      <div class="section" id="page5">
        <div class="loading_app">
          <p>{{$t('otc.index.bottom1')}}</p>
          <div><span>{{$t('otc.index.bottom2')}}</span></div>
          <ul>
             <li><img src="../../assets/images/ios1.png" alt=""></li> 
            <!--  <li><router-link to="/ethusdtexchange"><img src="../../assets/images/ios1.png" alt=""></router-link></li> --> 
            <li><img src="../../assets/images/android.png" alt=""></li>
            <li><img src="../../assets/images/windows.png" alt=""></li>
          </ul>
        </div>
      <div class="phone_image"></div>
      </div>
    </div>
    <div id="onlineservice">
      <a href="http://kefu.caymanex.pro:80/im/text/15FwEk.html" target="_blank"></a>
    </div>
    <div class="map-box" ref="mapbox">
      <div v-if="mapBox">
        <div style="text-align:center;position:absolute;top:20px;width:100%">
        <h2 class="fadein-up">{{$t('homeadd.mapbox.title')}}</h2>
        <p class="fadein-up">{{$t('homeadd.mapbox.p')}}</p>
      </div>
      <div class="map-item map-dot-active fadein-up" style="left:65%;bottom:76%">
        <p class="map-text">{{$t('homeadd.mapbox.city1')}}</p>
      </div>
      <div class="map-item map-dot-active fadein-up" style="left:45.5%;bottom:68%">
        <p class="map-text">{{$t('homeadd.mapbox.city2')}}</p>
      </div>
      <div class="map-item map-dot-active fadein-up" style="left:72%;bottom:60%">
        <p class="map-text">{{$t('homeadd.mapbox.city3')}}</p>
      </div>
      <div class="map-item map-dot-active fadein-up" style="left:66.9%;bottom:32%">
        <p class="map-text">{{$t('homeadd.mapbox.city4')}}</p>
      </div>
      <div class="map-item map-dot fadein-up" style="left:48.8%;bottom:40%">
        <p class="map-text">{{$t('homeadd.mapbox.city5')}}</p>
      </div>
      <div class="map-item map-dot fadein-up" style="left:34.2%;bottom:25%">
        <p class="map-text">{{$t('homeadd.mapbox.city6')}}</p>
      </div>
      <div class="map-item map-dot fadein-up" style="left:23.6%;bottom:65%">
        <p class="map-text">{{$t('homeadd.mapbox.city7')}}</p>
      </div>
      <div class="map-item map-dot fadein-up" style="left:71.65%;bottom:20%">
        <p class="map-text">{{$t('homeadd.mapbox.city8')}}</p>
      </div>
      </div>
    </div>
    <div class="price-box" ref="pricebox">
      <div v-if="priceBox" class="price-content">
        <div class="price-left">
        <div>
      <countTo :startVal='180244375.00' :endVal='totallamount' :duration='3000' :decimals='2' class="price-number"></countTo>
         <!--  <span class="price-number">210,234,355.83</span> -->
          <span  class="price-type">USDT</span>
        </div>
        <p class="price-title">{{$t('homeadd.pricebox.today')}}</p>
      </div>
      <div class="price-right">
        <div>
          <div>
            <countTo :startVal='0.000' :endVal='btcPrice' :duration='3000' :decimals='3' class="price-number"></countTo>
            <span class="price-type">USDT</span>
          </div>
          <p class="price-title">{{$t('homeadd.pricebox.btcprice1')}}</p>
        </div>
        <div>
          <div>
            <countTo :startVal='0.000' :endVal='ethPrice' :duration='3000' :decimals='3' class="price-number"></countTo>
            <span class="price-type">USDT</span>
          </div>
          <p class="price-title">{{$t('homeadd.pricebox.ethprice1')}}</p>
        </div>
      </div>
      </div>
    </div>
    <div class="welcome">
      <div class="welcome-content">
        <div class="welcome-title">
          <h2>{{$t('homeadd.welcome.title')}}</h2>
          <p>{{$t('homeadd.welcome.p')}}</p>
        </div>
        <ul class="welcome-ul">
        <li style="background-position:0px 0px"></li>
        <li style="background-position:-50px 0px"></li>
        <li style="background-position:-100px 0px"></li>
        <li style="background-position:-150px 0px"></li>
        <li style="background-position:-200px 0px"></li>
        <li style="background-position:-250px 0px"></li>
        <li style="background-position:-300px 0px"></li>
        <li style="background-position:-350px 0px"></li>
        <li style="background-position:-400px 0px"></li>
        <li style="background-position:-450px 0px"></li>
      </ul>
      </div>
    </div>
    <div class="cooperation">
      <div class="cooperation-content">
        <h2>{{$t('homeadd.cooperation.title')}}</h2>
        <ul>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/an-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/an.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/del-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/del.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/ec-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/ec.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/gu-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/gu.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/mexico-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/mexico.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/sort-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/sort.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/tp-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/tp.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/uanl-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/uanl.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/unc-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/unc.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/voyager-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/voyager.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/xi-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/xi.png" alt="" class="active-img">
            </div>
          </li>
          <li>
            <div class="active-bg"></div>
            <div class="imgs">
              <img src="../../assets/images/cooperation/zig-f.png" alt="" class="notactive-img">
              <img src="../../assets/images/cooperation/zig.png" alt="" class="active-img">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import slide from '../../pages/index/slide'
var Stomp = require("stompjs");
var SockJS = require("sockjs-client");
var moment = require("moment");
import SvgLine from "@components/exchange/SvgLine.vue";
import $ from "@js/jquery.min.js";
import countTo from 'vue-count-to';
export default {
  components: { SvgLine,
  countTo,
  slide
  //  slide
  },
  data() {
    let self = this;
    return {
       slides: [
          {
            src: '../../../banner/2019-11-26-网站banner1.png'
          },
          {
            src: '../../../banner/2019-11-26-网站banner2.png'
          },
          {
            src: '../../../banner/2019-11-26-网站banner3.png'
          }
        ],
        inv: 4000,
        styleObject: {
          width:"100%",
          height: '100%'
        },
      loading: false,
      // progress: 0,
      // already: 0,
      percent: 0,
      timer3: null,
      pageNo: 1,
      pageSize: 50,
      totalNum: 0,
      FAQList: [],
      // safetyAndAssoction: 0,
      // currentBonusETHBnous: 0,
      yesDayCashDividensBonusETH: 0,
      // yesDayMineAmountBHB: 0,
      CNYRate: null,
      dataIndex: [],
      pageNo: 1,
      pageSize: 50,
      totalNum: 0,
      FAQList: [],
      favorColumns: [
        {
          title: self.$t("service.favor"),
          align: "center",
          key: "collection",
          width: 60,
          render: (h, params) => {
            let flag = this.isLogin;
            return h("Icon", {
              props: {
                color: "#f0a70a",
                size: "18",
                type: params.row.isFavor
                  ? "ios-star"
                  : "ios-star-outline"
              },
              nativeOn: {
                click: () => {
                  if (this.isLogin) {
                    event.stopPropagation(); //阻止事件冒泡
                    if (
                      event.currentTarget.className ==
                      "ivu-icon ivu-icon-ios-star"
                    ) {
                      // 解除收藏
                      this.cancelCollect(params.index, params.row);
                      event.currentTarget.className ==
                        "ivu-icon ivu-icon-ios-star-outline";
                    } else {
                      // 收藏
                      this.collect(params.index, params.row);
                      event.currentTarget.className =
                        "ivu-icon ivu-icon-ios-star";
                    }
                  } else {
                    this.$Message.warning(this.$t('add.add_18'));
                  }
                }
              }
            });
          }
        },
        {
          title: self.$t("service.symbol"),
          align: "center",
          width: 70,
          key: "symbol"
        },
        {
          title: self.$t("service.NewPrice"),
          align: "center",
          key: "price",
          minWidth:120,
          sortable: true,
          sortMethod: function(a, b, type) {
            let a1 = parseFloat(a);
            let b1 = parseFloat(b);
            if (type == "asc") {
              return a1 - b1;
            } else {
              return b1 - a1;
            }
          },
          render: function(h, params) {
            // var rmb = self.round(self.mul(params.row.price, 6.5), 2);
            // if (self.CNYRate != null)
            //   rmb = self.round(self.mul(params.row.price, self.CNYRate), 2);
            let CNYRate = self.CNYRate || 6.5,
              rmb = self.round(self.mul(params.row.usdRate, CNYRate), 2);
            const isgreen =
              parseFloat(params.row.rose) < 0 ? "none" : "inline-block";
            const nogreen =
              parseFloat(params.row.rose) < 0 ? "inline-block" : "none";
            return h("div", [
              h("span", {}, "$" + params.row.price + " /￥" + rmb),
              h(
                "Icon",
                {
                  props: {
                    type: "arrow-up-c"
                  },
                  style: {
                    display: isgreen,
                    fontSize: "16px",
                    marginLeft: "5px",
                    verticalAlign: "middle"
                  },
                  class: {
                    green: true
                  }
                },
                "↑"
              ),
              h(
                "Icon",
                {
                  props: {
                    type: "arrow-down-c"
                  },
                  style: {
                    display: nogreen,
                    fontSize: "16px",
                    marginLeft: "5px",
                    verticalAlign: "middle"
                  },
                  class: {
                    red: true
                  }
                },
                "↓"
              )
            ]);
          }
        },
        {
          title: self.$t("service.Change"),
          align: "center",
          key: "rose",
          minWidth:70,
          sortable: true,
          sortMethod: function(a, b, type) {
            let a1 = a.replace(/[^\d|.|-]/g, "") - 0;
            let b1 = b.replace(/[^\d|.|-]/g, "") - 0;
            if (type == "asc") {
              return a1 - b1;
            } else {
              return b1 - a1;
            }
          },
          render: (h, params) => {
            const row = params.row;
            const className = parseFloat(row.rose) < 0 ? "red" : "green";
            return h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              row.rose
            );
          }
        },
        {
          title: self.$t("service.high"),
          align: "center",
          key: "high",
          render: (h, params) => {
            return h("div", {}, params.row.high);
          }
        },
        {
          title: self.$t("service.low"),
          align: "center",
          key: "high",
          render: (h, params) => {
            return h("div", {}, params.row.low);
          }
        },
        {
          title: self.$t("service.ExchangeNum"),
          align: "center",
          key: "volume",
          // width: 110,
          sortable: true,
          sortMethod: function(a, b, type) {
            let a1 = parseFloat(a);
            let b1 = parseFloat(b);
            if (type == "asc") {
              return a1 - b1;
            } else {
              return b1 - a1;
            }
          }
        },
        // {
        //   title: self.$t("service.OpenPrice"),
        //   align: "center",
        //   key: "open",
        //   width: 150,
        //   sortable: true,
        //   sortMethod: function(a, b, type) {
        //     let a1 = parseFloat(a);
        //     let b1 = parseFloat(b);
        //     if (type == "asc") {
        //       return a1 - b1;
        //     } else {
        //       return b1 - a1;
        //     }
        //   }
        // },

        {
          title: self.$t("service.PriceTrend"),
          align: "center",
          render: function(h, params) {
            let valus = null;
            let len = params.row.trend.length;
            valus =
              len > 0
                ? params.row.trend
                : [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                  ];
            return h(SvgLine, {
              props: {
                values: valus,
                rose: params.row.rose,
                width: 100,
                height: 40
              }
            });
          }
        },
        {
          title: self.$t("service.Exchange"),
          // align: "center",
          key: "buyBtn",
          width: 60,
          render: function(h, params) {
            return h("div", [
              h("img", {
                attrs: {
                  src: require("../../assets/images/to_del.png")
                },
                style: {
                  width: "18px",
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginTop: "8px"
                },
                on: {
                  click: function() {
                    self.$router.push("/exchange/" + params.row.href);
                  }
                }
              })
            ]);
          }
        }
      ],
      //当前市场上的交易币种，按交易对分
      coins: {
        _map: [],
        QC: [],
        USDT: [],
        BTC: [],
        ETH: [],
        favor: [],
        columns: [
          {
            title: self.$t("service.favor"),
            align: "center",
            key: "collection",
            width: 60,
            // renderHeader: (h, params) => {
            // return h("Icon", {
            //   props: {
            //     color: "#f0a70a",
            //     size: "18",
            //     type: "android-star-outline"
            //   }
            // });
            // },
            render: (h, params) => {
              let flag = this.isLogin;
              return h("Icon", {
                props: {
                  color: "#f0a70a",
                  size: "18",
                  type: params.row.isFavor
                    ? "ios-star"
                    : "ios-star-outline"
                },
                nativeOn: {
                  click: (event) => {
                    if (this.isLogin) {
                      event.stopPropagation(); //阻止事件冒泡
                      if (
                        event.currentTarget.className ==
                        "ivu-icon ivu-icon-ios-star"
                      ) {
                        // 解除收藏
                        this.cancelCollect(params.index, params.row);
                        event.currentTarget.className ==
                          "ivu-icon ivu-icon-ios-star-outline";
                      } else {
                        // 收藏
                        this.collect(params.index, params.row);
                        event.currentTarget.className =
                          "ivu-icon ivu-icon-ios-star";
                      }
                    } else {
                      this.$Message.warning(this.$t('add.add_18'));
                    }
                  }
                }
              });
            }
          },
          {
            title: self.$t("service.COIN"),
            align: "center",
            key: "coin",
            width: 70,
            render: function(h, params) {
              const className = params.row.href + "icon" + " indexicon";
              var iconName = "";
              if (params.row.coin == "BTC") {
                iconName = "比特币";
              } else if (params.row.coin == "ETH") {
                iconName = "以太币";
              } else if (params.row.coin == "GCC") {
                iconName = "银河链";
              }
              return h("div", [
                h(
                  "span",
                  {
                    attrs: {
                      //class: className
                    }
                  },
                  params.row.memberName
                ),
                h("span", {}, params.row.coin)
              ]);
            }
          },
          {
            title: self.$t("service.NewPrice"),
            align: "center",
            key: "price",
            minWidth: 120,
            sortable: true,
            sortMethod: function(a, b, type) {
              let a1 = parseFloat(a);
              let b1 = parseFloat(b);
              if (type == "asc") {
                return a1 - b1;
              } else {
                return b1 - a1;
              }
            },
            render: function(h, params) {
              // var rmb = self.round(self.mul(params.row.price, 6.5), 2);
              // if (self.CNYRate != null)
              //   rmb = self.round(self.mul(params.row.price, self.CNYRate), 2);
              let CNYRate = self.CNYRate || 6.5,
                rmb = self.round(self.mul(params.row.usdRate, self.CNYRate), 2);
              const isgreen =
                parseFloat(params.row.rose) < 0 ? "none" : "inline-block";
              const nogreen =
                parseFloat(params.row.rose) < 0 ? "inline-block" : "none";
              return h("div", [
                h("span", {}, "$" + params.row.price + " /￥" + rmb),
                h(
                  "Icon",
                  {
                    props: {
                      type: "arrow-up-c"
                    },
                    style: {
                      display: isgreen,
                      fontSize: "16px",
                      marginLeft: "5px",
                      verticalAlign: "middle"
                    },
                    class: {
                      green: true
                    }
                  },
                  "↑"
                ),
                h(
                  "Icon",
                  {
                    props: {
                      type: "arrow-down-c"
                    },
                    style: {
                      display: nogreen,
                      fontSize: "16px",
                      marginLeft: "5px",
                      verticalAlign: "middle"
                    },
                    class: {
                      red: true
                    }
                  },
                  "↓"
                )
              ]);
            }
          },
          {
            title: self.$t("service.Change"),
            align: "center",
            key: "rose",
            minWidth: 70,
            sortable: true,
            sortMethod: function(a, b, type) {
              let a1 = a.replace(/[^\d|.|-]/g, "") - 0;
              let b1 = b.replace(/[^\d|.|-]/g, "") - 0;
              if (type == "asc") {
                return a1 - b1;
              } else {
                return b1 - a1;
              }
            },
            render: (h, params) => {
              const row = params.row;
              const className = parseFloat(row.rose) < 0 ? "red" : "green";
              return h(
                "span",
                {
                  attrs: {
                    class: className
                  }
                },
                row.rose
              );
            }
          },
          {
            title: self.$t("service.high"),
            align: "center",
            key: "high",
            render: (h, params) => {
              return h("div", {}, params.row.high);
            }
          },
          {
            title: self.$t("service.low"),
            align: "center",
            key: "high",
            render: (h, params) => {
              return h("div", {}, params.row.low);
            }
          },
          {
            title: self.$t("service.ExchangeNum"),
            align: "center",
            key: "volume",
            // minWidth: 110,
            sortable: true,
            sortMethod: function(a, b, type) {
              let a1 = parseFloat(a);
              let b1 = parseFloat(b);
              if (type == "asc") {
                return a1 - b1;
              } else {
                return b1 - a1;
              }
            }
          },
          // {
          //   title: self.$t("service.OpenPrice"),
          //   align: "center",
          //   key: "open",
          //   width: 150,
          //   sortable: true,
          //   sortMethod: function(a, b, type) {
          //     let a1 = parseFloat(a);
          //     let b1 = parseFloat(b);
          //     if (type == "asc") {
          //       return a1 - b1;
          //     } else {
          //       return b1 - a1;
          //     }
          //   }
          // },
          {
            title: self.$t("service.PriceTrend"),
            align: "center",
            render: function(h, params) {
              let valus = null;
              let len = params.row.trend.length;
              valus =
                len > 0
                  ? params.row.trend
                  : [
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                    ];
              return h(SvgLine, {
                props: {
                  values: valus,
                  rose: params.row.rose,
                  width: 100,
                  height: 40
                }
              });
            }
          },
          {
            title: self.$t("service.Exchange"),
            align: "center",
            key: "buyBtn",
            width: 60,
            // minWidth: 60,
            render: function(h, params) {
              return h("div", [
                h("img", {
                  attrs: {
                    src: require("../../assets/images/to_del.png")
                  },
                  style: {
                    width: "18px",
                    marginLeft: "10px",
                    marginTop: "8px"
                  },
                  /* on: {
                    click: function() {
                      self.$router.push("/exchange/" + params.row.href);
                    }
                  } */
                })
              ]);
            }
          }
        ]
      },
      indexBtn: [
        {
          text: this.$t("service.USDT")
        },
        {
          text: this.$t("service.BTC")
        },
        {
          text: this.$t("service.ETH")
        },
        {
          text: this.$t("service.CUSTOM")
        }
      ],
      choseBtn: 0,
      valueCal: 0,
      showArrow: "never",
      speed: 5000,
      symbol: "",
      usdtData: [],
      qcList: [],
      usdtList: [],
      btcList: [],
      ethList: [],
      picList: [],
      changeinfo:[],
      priceBox:false,
      mapBox:false,
      changeval:null,
      langType:null,
      totallamount:"",
      btcPrice:0,
      ethPrice:0,
    };
  },
  created: function() {
    this.stop();
    this.init();
    this.totallamount = this.randomamount();
  },
  computed: {
    isLogin: function() {
      return this.$store.getters.isLogin;
    },
    lang: function() {
      return this.$store.state.lang;
    }
  },
  watch: {
    lang: function() {
      this.updateLangData();
    }
  },
  mounted: function() {
    this.getCNYRate();
    this.getSymbol();
   setTimeout(()=>{
     window.addEventListener('scroll', this.handleScroll);
   },1000);
   /* 切换时 */
  /*  if(this.$i18n.locale == "en"){
               this.changePic("English");
            } */
  },
  methods: {
    gotoBuy:function(data){
      console.log(data);
      this.$router.push("/exchange/" + data.href);
    },
    randomamount:function(){
      let random =parseFloat(( (Math.random()*(5e9 - 2e9)+2e9)/100).toFixed(2));
      return random;
    },
    changePic:function(newval){
      this.langType = newval;
      if(newval!== "Chinese"){
        for(let i=0;i<this.picList.length;i++){
         for(let j=0;j<this.picList[i].length;j++){
            let arr= this.picList[i][j];
          arr.url = arr.url.replace(/_cn./, "_en.");
        this.$set(this.picList[i],j,arr);
         }
      }
      }else{
for(let i=0;i<this.picList.length;i++){
         for(let j=0;j<this.picList[i].length;j++){
            let arr= this.picList[i][j];
          arr.url = arr.url.replace(/_en./, "_cn.");
        this.$set(this.picList[i],j,arr);
         }
      }
      }
    },
    strde(str) {
      str = str.trim();
      return str.length > 30 ? str.slice(0, 30) + "..." : str;
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
    },
    updateLangData() {
      this.indexBtn = [
        {
          text: this.$t("service.USDT")
        },
        {
          text: this.$t("service.BTC")
        },
        {
          text: this.$t("service.ETH")
        },
        {
          text: this.$t("service.CUSTOM")
        }
      ];

      this.coins.columns[0].title = this.$t("service.favor");
      this.coins.columns[1].title = this.$t("service.COIN");
      this.coins.columns[2].title = this.$t("service.NewPrice");
      this.coins.columns[3].title = this.$t("service.Change");
      this.coins.columns[4].title = this.$t("service.high");
      this.coins.columns[5].title = this.$t("service.low");
      this.coins.columns[6].title = this.$t("service.ExchangeNum");
      this.coins.columns[7].title = this.$t("service.PriceTrend");
      this.coins.columns[8].title = this.$t("service.Exchange");

      this.favorColumns[0].title = this.$t("service.favor");
      this.favorColumns[1].title = this.$t("service.symbol");
      this.favorColumns[2].title = this.$t("service.NewPrice");
      this.favorColumns[3].title = this.$t("service.Change");
      this.favorColumns[4].title = this.$t("service.high");
      this.favorColumns[5].title = this.$t("service.low");
      this.favorColumns[6].title = this.$t("service.ExchangeNum");
      this.favorColumns[7].title = this.$t("service.PriceTrend");
      this.favorColumns[8].title = this.$t("service.Exchange");

      // this.coins.columns[4].title = this.$t("service.OpenPrice");
    },
    openActivity(url) {
      // console.log(url);
    },
    init() {
      this.$store.commit("navigate", "nav-index");
      this.$store.state.HeaderActiveName = "1-1";
      // this.loadPicData();
      this.addClass(0);
      this.getmoneyData();
      this.loadDataPage(this.pageNo);
    },
    stop: function() {
      clearInterval(this.timer3);
    },
    getStyle(obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      } else {
        return getComputedStyle(obj, false)[attr];
      }
    },
    move() {
      clearInterval(this.timer3);
      var self = this;
      this.cal = document.getElementsByClassName("carsoul")[0];
      this.list = this.cal.getElementsByClassName("cal-content1");
      let l = this.list[0].cloneNode(true);
      this.cal.appendChild(l);
      this.startMove();
    },
    startMove() {
      clearInterval(this.timer3);
      var self = this;
      let len = this.list.length;
      let maxT = 40 * len;
      this.timer3 = setInterval(() => {
        let t = parseInt(this.getStyle(this.cal, "top"));
        t -= 40;
        if (t <= -maxT) {
          t = 0;
          $(".carsoul").animate({ top: "0px" }, 0);
        }
        let p = t + "px";
        $(".carsoul").animate({ top: p });
      }, 3000);
    },
    loadDataPage(pageIndex) {
      var param = {};
      (param["pageNo"] = pageIndex),
        (param["pageSize"] = this.pageSize),
        this.$http
          .post(this.host + this.api.uc.announcement, param)
          .then(response => {
            var resp = response.body;
            if (resp.code == 0) {
              if (resp.data.content.length == 0) return;
              let FAQList = resp.data.content;
              let len = FAQList.length;
              let n = 2; //假设每行显示2个
              let lineNum = len % 2 === 0 ? len / 2 : Math.floor(len / 2 + 1);
              let res = [];
              for (let i = 0; i < lineNum; i++) {
                let temp = FAQList.slice(i * n, i * n + n);
                res.push(temp);
              }
              this.FAQList = res;
              this.totalNum = resp.data.totalElements;
              this.$nextTick(function() {
                this.move();
              });
            } else {
              this.$Notice.error({
                title: this.$t("common.tip"),
                desc: resp.message
              });
            }
          });
    },
    getCNYRate() {
      this.$http
        .post(this.host + "/market/exchange-rate/usd-cny")
        .then(response => {
          var resp = response.body;
          this.CNYRate = resp.data;
        });
    },
    donwload(type) {
      const title = this.$t("common.tip");
      const content = "<p>" + this.$t("common.expect") + "</p>";
      this.$Modal.info({
        title: title,
        content: content,
        closable: true
      });
    },
    //轮播图
    // loadPicData() {
    //   let param = {};
    //   param["sysAdvertiseLocation"] = 1;
    //   this.$http
    //     .post(this.host + "/uc/ancillary/system/advertise", param)
    //     .then(response => {
    //       var result = response.body;
    //       if (result.code == 0 && result.data.length > 0) {
    //         var picList = [];
    //         for(let i=0;i<Math.floor(result.data.length/3);i++){
    //           let list =[];
    //           list.push(result.data[i*3]);
    //            list.push(result.data[i*3+1]);
    //             list.push(result.data[i*3+2]);
    //             picList.push(list);
    //         }
    //         this.picList = picList;
    //         if(this.$i18n.locale === 'en'){
    //            this.changePic("English");
    //         }
    //       }
          //this.picList = [ 
          //  { url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543327741218&di=b286255494bc798195c72eb32a86fea5&imgtype=0&src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F14433416-0c931c25e5e76dc6.jpg"},
           // { url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543327741216&di=f04ac7344212fc647589c044511b43e7&imgtype=0&src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F10504865-2791dc0e6cb5c937.jpg"},
           
           // ];

    //     });
    // },
    getCoin(symbol) {
      return this.coins._map[symbol];
    },
    startWebsock() {
      var stompClient = null;
      var that = this;
      var socket = new SockJS("http://47.75.35.234:28985" + that.api.market.ws);
      stompClient = Stomp.over(socket);
      stompClient.debug = false;
      stompClient.connect({}, function(frame) {
        //订阅价格变化消息
        stompClient.subscribe("/topic/market/thumb", function(msg) {
          var resp = JSON.parse(msg.body);
          var coin = that.getCoin(resp.symbol);
          if (coin != null) {
            // coin.price = resp.close.toFixed(2);
            coin.price = resp.close;
            coin.rose =
              resp.chg > 0
                ? "+" + (resp.chg * 100).toFixed(2) + "%"
                : (resp.chg * 100).toFixed(2) + "%";
            // coin.close = resp.close.toFixed(2);
            // coin.high = resp.high.toFixed(2);
            // coin.low = resp.low.toFixed(2);
            coin.close = resp.close;
            coin.high = resp.high;
            coin.low = resp.low;
            coin.turnover = parseInt(resp.volume);
          }
        });
      });
    },
    round(v, e) {
      var t = 1;
      for (; e > 0; t *= 10, e--);
      for (; e < 0; t /= 10, e++);
      return Math.round(v * t) / t;
    },
    mul(a, b) {
      var c = 0,
        d = a.toString(),
        e = b.toString();
      try {
        c += d.split(".")[1].length;
      } catch (f) {}
      try {
        c += e.split(".")[1].length;
      } catch (f) {}
      return (
        Number(d.replace(".", "")) *
        Number(e.replace(".", "")) /
        Math.pow(10, c)
      );
    },
    addClass(index) {
      this.choseBtn = index;
      if (index == 0) {
        this.dataIndex = this.coins.USDT;
      } else if (index == 1) {
        this.dataIndex = this.coins.BTC;
      } else if (index == 2) {
        this.dataIndex = this.coins.ETH;
      } else if (index == 3) {
        this.dataIndex = this.coins.favor;

        // if (this.isLogin) {
        //   this.dataIndex = this.coins.favor;
        // } else {
        //   this.$router.push("/login");
        // }
      }
    },
    getSymbol() {
      this.loading = true;
      this.$http
        .post(this.host + this.api.market.thumbTrend, {})
        .then(response => {
          var resp = response.body;
          for (var i = 0; i < resp.length; i++) {
            var coin = resp[i];
            coin.price = resp[i].close;
            coin.rose =
              resp[i].chg > 0
                ? "+" + (resp[i].chg * 100).toFixed(2) + "%"
                : (resp[i].chg * 100).toFixed(2) + "%";
               
            coin.coin = resp[i].symbol.split("/")[0];
            
            coin.base = resp[i].symbol.split("/")[1];
            
            coin.href = (coin.coin + "_" + coin.base).toLowerCase();
            coin.isFavor = false;
            this.coins._map[coin.symbol] = coin;
            this.coins[coin.base].push(coin);
            /* 修改 */
            if(resp[i].symbol === "BTC/USDT"){
              this.btcPrice = resp[i].close;
            }
            if(resp[i].symbol === "ETH/USDT"){
              this.ethPrice = resp[i].close;
            }

          }
          if (this.isLogin) {
            this.getFavor();
          }
          this.startWebsock();
          this.loading = false;
          /* 显示趋势图 */
          for(let i=0;i<3;i++){
            let data = {};
            data.symbol = resp[i].symbol;
            data.chg = (resp[i].chg*100).toFixed(2) + "%";
            data.usdRate = resp[i].close;
            console.log(data)
            this.changeinfo.push(data);
           setTimeout(()=>{
              let dom = this.$refs.iconcanvas[i];
             if(data.chg.slice(0,1)=="-"){
                this.iconcanvas(dom,false,data.chg);
             }else{
               this.iconcanvas(dom,true,data.chg);
             }
           },500);
          }
        });
    },
    getFavor() {
      //查询自选
      this.$http
        .post(this.host + this.api.exchange.favorFind, {})
        .then(response => {
          var resp = response.body;
          for (var i = 0; i < resp.length; i++) {
            var coin = this.getCoin(resp[i].symbol);
            this.coins.favor.push(coin);
          }
        });
    },
    getFavor() {
      //查询自选(收藏)
      this.$http
        .post(this.host + this.api.exchange.favorFind, {})
        .then(response => {
          var resp = response.body;
          this.coins.favor = [];
          for (var i = 0; i < resp.length; i++) {
            var coin = this.getCoin(resp[i].symbol);
            if (coin != null) {
              coin.isFavor = true;
              this.coins.favor.push(coin);
            }
          }
        });
    },
    collect(index, row) {
      if (!this.isLogin) {
        this.$Message.info(this.$t("common.logintip"));
        return;
      }
      var params = {};
      params["symbol"] = row.symbol;
      this.$http
        .post(this.host + this.api.exchange.favorAdd, params)
        .then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            this.$Message.info(this.$t("exchange.do_favorite"));
            this.getCoin(row.symbol).isFavor = true;
            row.isFavor = true;
            this.coins.favor.push(row);
          }
        });
    },
    cancelCollect(index, row) {
      if (!this.isLogin) {
        this.$Message.info(this.$t("common.logintip"));
        return;
      }
      var params = {};
      params["symbol"] = row.symbol;
      this.$http
        .post(this.host + this.api.exchange.favorDelete, params)
        .then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            this.$Message.info(this.$t("exchange.cancel_favorite"));
            this.getCoin(row.symbol).isFavor = false;
            for (var i = 0; i < this.coins.favor.length; i++) {
              var favorCoin = this.coins.favor[i];
              if (favorCoin.symbol == row.symbol) {
                this.coins.favor.splice(i, 1);
                break;
              }
            }
          }
        });
    },
    getmoneyData() {
      this.$http.get(this.host + this.api.market.indexData).then(res => {
        if (res.body.code == 0) {
          let data = res.body.data;
          this.safetyAndAssoction = data.safetyAndAssoction || 0;
          this.currentBonusETHBnous = data.currentBonusETHBnous || 0;
          this.yesDayMineAmountBHB = data.yesDayMineAmountBHB || 0;
          this.yesDayCashDividensBonusETH =
            data.yesDayCashDividensBonusETH || 0;
          let total = 6000000000;
          this.already = data.bhbAmount;
          this.progress = data.bhbAmount / total * 100;
        } else {
          this.$Message.error(res.body.message);
        }
      });
    },
    /* 调用canvas画图 */
    iconcanvas:function(ele,type,text){
      let ctx = ele.getContext('2d');
      ctx.strokeStyle= "#fdc101";
      ctx.lineWidth= "3";
      ctx.fillStyle ="red";
      ctx.lineJoin= "round";
     if(type){
       let x=10;
      let y = 110;
      ctx.moveTo(x, y);
      for(let i=0;i<30;i++){
         let random = Math.random();
       if(random>0.5){
         let random1 = -Math.floor(Math.random()*(4 - 2) + 2);
         ctx.lineTo(x+10,y+random1);
         y+=random1;
       }else{
          let random1 = Math.floor(Math.random()*(3 - 1) + 1);
         ctx.lineTo(x+10,y+random1);
         y+=random1;
       }
       x+=5;
      }
      if(y>=80){
        ctx.lineTo(x+20,80 - Math.floor(Math.random()*(6 - 3) + 3));
      }
     }else{
        let x=10;
      let y = 50;
      ctx.moveTo(x, y);
       for(let i=0;i<30;i++){
         let random = Math.random();
       if(random>0.5){
         let random1 = Math.floor(Math.random()*(4 - 2) + 2);
         console.log(random1);
         ctx.lineTo(x+10,y+random1);
         y+=random1;
       }else{
          let random1 = -Math.floor(Math.random()*(3 - 1) + 1);
         ctx.lineTo(x+10,y+random1);
         y+=random1;
       }
       x+=5;
      }
      if(y<=80){
        ctx.lineTo(x + 20,80 + Math.floor(Math.random()*(6 - 3) + 3));
      }
     }
      ctx.stroke();
      ctx.font="30px SimHei";
      ctx.fillText(text + "",160,30);
    },
    handleScroll:function(event){
      if(!document.getElementsByClassName("map-box")[0]){
        return;
      }
      var mapbox = document.getElementsByClassName("map-box")[0];
      var pricebox = document.getElementsByClassName("price-box")[0];
      let scrolltop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
       var top1=mapbox.offsetTop;
       var top2= pricebox.offsetTop;
       var height1 =mapbox.offsetHeight;
       var height2 = pricebox.offsetHeight;
            var size=window.innerHeight;
            if(scrolltop>=(top1-size + 0.5*height1)){
                this.mapBox =true;
            }
            if(scrolltop>=(top2-size + 0.5*height2)){
                this.priceBox =true;
            }
    },
  }
};
</script>
<style scoped lang="scss" >
@keyframes fadeinUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.change-box {
    color:#f0A70A;
    width: 100%;
    height: 100px;
    // padding-top:20px;
    // padding-bottom:20px;
    // box-sizing:border-box;
    // margin-top:10px;
    // margin-bottom:10px;
    display: flex;
    background-color:#0b1520;
    overflow:hidden;
  
    .change-item {
      flex: 1;
      border-right: 3px solid #fdc101;
    }
    .change-item:nth-child(3) {
      border-right: none;
    }
  }
.price-box {
  color: #111;
  width: 100%;
  height: 690px;
  background: #fff url("../../assets/images/price-bg.png") no-repeat;
  background-size: 100% 100%;
  .price-content {
    width: 100%;
    height: 100%;
    display: flex;
  justify-content: space-around;
  align-items: center;
   background-color:#0b1520;
  }
  .price-right {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .price-title {
    font-size: 16px;
    text-align: center;
    color:#f0A70A;
  }
  .price-number {
    font-size: 48px;
   color:#f0A70A;
  }
  .price-type {
    font-size: 30px;
    color:#f0A70A;
  }
}
.welcome {
  position: relative;
  width: 100%;
  height: 0;
  text-align: center;
  color: #fff;
  padding: 15.6% 0%; 
  background-origin: padding-box;
  background: url("../../assets/images/welcome.png") no-repeat;
  background-size: cover;
  .welcome-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  .welcome-title {
    margin-top: 70px;
    h2 {
      font-size: 30px;
      margin-bottom: 30px;
    }
    p {
      padding: 0 100px;
      font-size: 20px;
    }
  }
  .welcome-ul {
    position: absolute;
    bottom: 30px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      flex: 0 0 50px;
      width: 50px;
      height: 50px;
      background:url("../../assets/images/welcome_icons.png") no-repeat;
      transition: all 0.2s ease;
    }
    li:hover {
      transform: scale(1.2);
    }
  }
  }
}
.cooperation {
  text-align: center;
  color: #333;
  width: 100%;
   background-color:#0b1520;
  background-color: #fff;
  overflow:hidden;
  .cooperation-content {
    // width: 90%;
    padding:1px 60px;

    margin: 0 auto;
     background-color:#0b1520;
    h2 {
      // margin-top: 60px;
      padding-top:60px;
      margin-bottom: 40px;
      font-size: 30px;
       background-color:#0b1520;
        color:#f0A70A;
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 50px;
      li {
        overflow: hidden;
        position: relative;
          background-color: #f7f7f7;
         background-origin: padding-box;
        list-style: none;
        width: 25%;
        box-sizing: border-box;
        border: 0.5px solid #e1e1e1;
        transition: all 0.3s linear;
       .active-bg {
         position: absolute;
         top: 0;
         left: 0;
         display: none;
         width: 100%;
         height: 100%;
         background:url("../../assets/images/cooperation/partners-overlay.png") no-repeat;
        background-size: contain;
       }
       .imgs {
         padding-top: 47.2%;
         position: relative;
         z-index: 2;
       }
       .notactive-img {
         max-width: 100%;
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%,-50%);
         background-size: cover;
       }
       .active-img {
         max-width: 100%;
         position: absolute;
         left: 50%;
         top: 50%;
         display: none;
         background-size: cover;
        transform: translate(-50%,-50%);
         transition: all 0.3s ease;
       }
      }
      li:hover {
        z-index: 5;
        border-radius: 10px;
       box-shadow: 0px 0px 8px 8px rgba(87,87,87,0.3);
       transform: scale(1.05);
      }
      li:hover .active-bg {
        display: block;
        
      }
      li:hover .active-img {
        display: block;
      }
      li:hover .notactive-img {
        display: none;
      }
    }
  }
}
.map-box {
  overflow: hidden;
  color: #fff;
  position: relative;
  width: 100%;
  height: 0px;
  padding: 19.27% 0%;
  background: url("../../assets/images/map-bg.png") no-repeat;
  background-origin: padding-box;
  background-size: cover;
  .fadein-up {
    animation: fadeinUp 1.5s;
  }
  .map-item:hover {
    transform: scale(1.1);
    color: #f0a70a;
  }
  .map-dot {
    position: absolute;
    width: 18px;
    height: 30px;
    background: url("../../assets/images/position.png") no-repeat;
    transition: all 0.2s linear;
  }
   .map-dot-active {
      position: absolute;
    width: 18px;
    height: 30px;
    background: url("../../assets/images/position-active.png") no-repeat;
    transition: all 0.2s linear;
  }
  .map-text {
    position: absolute;
    bottom: -23px;
    left: -40px;
    width: 100px;
    text-align: center;
    transition: all 0.2s linear;
  }
}
.cal-content1 {
  color: #000;
}
.page1 {
  position: relative;
  overflow: hidden;
}
.home-bg {
  position: relative;
  width: 100%;
  height: 0px;
  padding: 16.2% 0%;
  background: url("../../assets/images/bg.png");
  background-size: cover;
  background-origin: border-box;
  box-sizing: border-box;
  .home-title {
    position: absolute;
    text-align: center;
    top: 0px;
    width: 100%;
    height:100%;
   
    img{
      width:100%;
      height:100%;
    }
    h2 {
      font-size: 30px;
      color: #fff;

    }
    .logo-text {
      display: flex;
      justify-content: center;
    .text {
      padding: 0px 10px;
      font-size: 20px;
    }
      .jiantou {
        width: 48px;
        background:url('../../assets/images/jiantou.png')no-repeat;
        background-size: cover;
      }
   
    }
  }
}
#pagetips {
  background: #FDC101;
  padding: 0 14%;
  overflow: hidden;
  .topnav {
    width: 100%;
    line-height: 40px;
    height: 40px;
    // float: left;
    margin: 0 auto;
    .carl {
      width: 100%;
      height: 40px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      position: relative;
      .laba {
        width: 5%;
        img {
          vertical-align: middle;
        }
      }
      .carsoul {
        width: 100%;
        margin-left: 20px;
        position: absolute;
        a {
          color: #000;
          font-size: 14px;
          line-height: 40px;
          display: inline-block;
        }
        .cal-content {
          // height: 40px;
          // width: 100%;
          line-height: 40px;
          color: #000;
          font-size: 14px;
          display: inline;
        }
        .cal-content:nth-child(1) {
          padding-right: 20px;
        }
        .cal-content:nth-child(2) {
          border-left: 1px solid #f0ac19;
          padding-left: 20px;
        }
      }
      .more {
        position: absolute;
        z-index: 12;
        right: 0;
        a {
          color: #000;
          font-size: 14px;
        }
      }
    }
  }
  .frinend_wakuang {
    width: 50%;
    float: right;
    text-align: right;
    height: 100%;
    line-height: 40px;
    a {
      color: #f0a70a;
      font-size: 14px;
    }
  }
}
#page6 {
  padding: 20px 14%;
  ul {
    list-style-type: none;
  }
  .page6-out {
    padding: 30px 20px;
    overflow: hidden;
    .page6-list {
      width: 33.33333%;
      float: left;
      .list-op {
        .special {
          line-height: 26px;
          .num {
            color: #f0a70a;
          }
        }
        .list-opBHB {
          text-align: left;
        }
        .text {
          text-align: left;
          word-break: break-all;
          margin-right: 20px;
          .num {
            font-size: 30px;
            color: #f0a70a;
            font-weight: 500;
          }
          .type {
            font-size: 16px;
            color: #f0a70a;
            font-weight: 500;
          }
        }
        .num2 {
          color: #f0a70a;
        }
      }
    }
  }
}
#progress {
  padding: 20px 14%;
  .title {
    color: #f0a70a;
    overflow: hidden;
    line-height: 30px;
    font-size: 16px;
    .already {
      float: left;
    }
    .total {
      float: right;
      color: #f0ac19;
    }
  }
  .ivu-progress.ivu-progress-normal {
    .ivu-progress-inner {
      background: #fff;
      border-radius: 0;
      .ivu-progress-bg {
        border-radius: 0;
      }
    }
  }
}
#page2 {
  background: #0b1520;
  height: auto;
  min-height: 320px;
  padding: 40px 14%;
  .page2nav {
    line-height: 40px;
    font-size: 20px;
    margin-bottom: 20px;
    .brclearfix {
      display: flex;
      justify-content: space-around;
      li {
        float: left;
        cursor: pointer;
        color: #000;
        background: #eee;
        list-style: none;
        font-size: 16px;
        padding: 0 50px;
        border-radius: 10px;
        &:hover {
          color: #f0a70a;
        }
      }
      li.active {
        background: #fdc101;
        color: #fff;
        border-radius: 10px;
        position: relative;
      }
    }
  }
  .ptjy {
    height: 100%;
    .tables {
      border: none;
      .ivu-table {
        .ivu-table-header {
          .ivu-table-column-center {
            background: none;
          }
        }
      }
    }
  }
}
#page4 {
  background: #0b1520;
  color: #f0a70a;
  height: auto;
  padding: 50px 0 80px 0;
.introduce {
  text-align: center;
  margin-bottom: 50px;
  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  p {
    padding: 0 100px;
    text-align: left;
    font-size: 20px;
    line-height: 35px;
  }
}
  ul {
    width: 88%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      flex: 0 0 50%;
      display: inline-block;
      width: 50%;
      padding: 0 15px;
      div {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        vertical-align: middle;
        text-align: center;
        margin: 0 auto;
        img {
          width: 90px;
          height: 90px;
        }
      }
      p {
        font-size: 15px;
        margin: 20px 0;
        text-align: center;
      }
      p.title {
        color: #f0a70a;
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
}
#page5 {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 517px;
  padding: 0 5%;
  box-sizing: border-box;
  position: relative;
  background-color:#0b1520;
  background-size: 100% 517px;
  overflow: hidden;
  
  .loading_app {
    width: 500px;
    float: left;
    height: 100%;
    box-sizing: border-box;
    padding: 100px 20px;
     color: #f0a70a;
    p {
      font-weight: 500;
      font-size: 26px;
      margin-bottom: 20px;
    }
    ul {
      li {
        display: inline-block;
        margin: 15px 30px 15px 0px;
        img {
           width: 130px;
          height: 39px;
        }
      }
    }
  }
  .phone_image {
    width: 300px;
    float: right;
    margin-right: 20px;
    height: 100%;
    background: url("../../assets/images/phone_img.png") no-repeat left 150px;
    background-size: 100%;
  }
  .download {
    float: right;
    list-style-type: none;
    .qrcode {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      margin-top: 140px;
      text-align: left;
      line-height: 40px;
      margin-bottom: 14px;
      font-weight: 900;
    }
    .wrapper {
      width: 160px;
      height: 300px;
      float: left;
      padding: 0;
      margin-right: 20px;
      .download_app {
        height: 160px;
        img {
          width: 100%;
        }
      }
      .abstract {
        text-align: center;
        display: flex;
        margin-top: 14px;
        justify-content: center;
        align-items: center;
        height: 30px;
        .image {
          width: 18px;
          img {
            vertical-align: middle;
          }
        }
        .content {
          font-size: 12px;
          text-align: left;
          color: #fff;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
<style lang="scss">

.ivu-table-wrapper .ivu-table {
  background: transparent;
}
#progress {
  .ivu-progress.ivu-progress-normal {
    .ivu-progress-inner {
      background: #fff;
      border-radius: 5px;
      border: 1px solid #f0a70a;
      .ivu-progress-bg {
        border-radius: 0;
        background: #f0a70a;
      }
    }
  }
}
#page2 {
  .ptjy {
    .tables {
      .ivu-table {
        .ivu-table-header {
          background: none;
          color:#888;
          th {
            border-color:#f2f6fa;
            color: #1f1e19;
          }
          .ivu-table{
            &:after{
              background:#27313e;
            }
          }
        }
        .ivu-table-header,
        .ivu-table-body {
          .ivu-table-cell {
            padding: 5px 0;
          }
        }
        .ivu-table-body table .ivu-table-tbody {
            tr td{
              background-color:#0b1520;
              color:#f0a70a;
              polygon{
                height:20px;
                z-index:50;
                display:block;
              }
              polyline{
                height:20px;
                z-index:50;
                display:block;

              }
            }
        }
      }
    }
  }
}
</style>


<style>


.section .ivu-carousel-dots-inside {
  bottom: 20px;
}

.green {
  color: #03b585 !important;
}

.red {
  color: #de1d35 !important;
}

.brclearfix:after {
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}

#fullpage {
  background: #fff;
}
.carousel-box {
  position: absolute!important;
 /*  margin-top: -16.2%; */
 bottom: 0;
  width: 1000px;
  left: 50%;
  margin-left: -500px;
 top: 50%;
}
.carousel-content {
  overflow: hidden;
  height: 100%;
  width: 100%;
  max-width: 1600px;
  min-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.carousel-item {
  width: 300px;
  height: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all 0.3s linear;
}
.carousel-item:hover {
  transform: scale(1.1);
}

.demo-carousel1 {
  /* background: url(../../assets/images/banner1.jpg) no-repeat center; */
  height: 575px;
  background-size: cover;
}

.demo-carousel2 {
  /* background: url(../../assets/images/banner2.jpg) no-repeat center; */
  height: 575px;
  background-size: cover;
}

.demo-carousel-btn {
  width: 100%;
  height: 100%;
  padding-top: 345px;
}

.demo-carousel1 a {
  display: inline-block;
  width: 250px;
  height: 55px;
  margin: 0 15px;
}

/*.register {
  background: url(../../assets/images/register.png) no-repeat;
}*/

/* .usdt {
  float: left;
  width: 100%;
} */

.usdt_icon {
  float: left;
  width: 18%;
  height: 290px;
  background: #1d293a;
  padding-top: 125px;
  margin: 5px;
}
.btc,
.eth {
  float: left;
  width: 100%;
  margin-top: 10px;
}

.btc_icon,
.eth_icon {
  float: left;
  width: 18%;
  height: 140px;
  background: #1d293a;
  padding-top: 50px;
  margin: 5px;
}

#nav {
  position: fixed;
  right: 10%;
  top: 50%;
  z-index: 100;
}

#nav ul li {
  display: block;
  /* width: 120px; */
  height: 25px;
  margin: 7px;
  position: relative;
  padding-right: 20px;
  text-align: right;
  color: #fff;
}

#nav ul li span {
  display: none;
}

#nav ul li a {
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: url(../../assets/images/page.png) no-repeat;
  position: absolute;
  z-index: 1;
}

#nav ul li a:hover,
#nav ul li a.active {
  top: 0;
  right: -3px;
  width: 18px;
  height: 18px;
  background: url(../../assets/images/page_active.png) no-repeat;
  position: absolute;
  z-index: 1;
}

#page3 {
  position: relative;
  color: #979797;
  /* background: url(../../assets/images/section3.png) no-repeat center; */
}

#page3 label {
  position: absolute;
  top: 30%;
  left: 20%;
  font-size: 30px;
}

@-webkit-keyframes fadeinB {
  0% {
    top: 50%;
    opacity: 0;
  }
  100% {
    top: 30%;
    opacity: 1;
  }
}

@keyframes fadeinB {
  0% {
    top: 50%;
    opacity: 0;
  }
  100% {
    top: 30%;
    opacity: 1;
  }
}

@-webkit-keyframes fadeinA {
  0% {
    top: 60%;
    opacity: 0;
  }
  100% {
    top: 40%;
    opacity: 1;
  }
}

@keyframes fadeinA {
  0% {
    top: 60%;
    opacity: 0;
  }
  100% {
    top: 40%;
    opacity: 1;
  }
}

#page3 p {
  position: absolute;
  top: 40%;
  left: 20%;
  font-size: 15px;
}

.news_1 {
  color: #202b3c;
  font-size: 12px;
}

.news_2 {
  color: #505c6f;
  font-size: 13px;
}

.news_3 {
  color: #fff;
  font-size: 18px;
}

.news_title {
  color: #fff;
  font-size: 20px;
}

.news_date {
  color: #505c6f;
}

.news_detail {
  color: #98999f;
  margin-top: 10px;
}
</style>


