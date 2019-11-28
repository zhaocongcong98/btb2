<template>
  <div class="nav-rights">
    <div class="nav-right">
      <div class="bill_flow_box">
        <div class="rightarea-con">
          <div class="order-table">
            <Table :no-data-text="$t('common.nodata')" :columns="tableColumnsRecord" :data="tableRecord" :disabled-hover="true" :loading="loading"></Table>
            <div style="margin: 10px;overflow: hidden">
              <div style="float: right;">
                <Page :total="total" :pageSize="pageSize"  :current="page" @on-change="changePage" id="record_pages"></Page>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      loading: false,
      ordKeyword: "",
      rangeDate: "",
      startTime: "",
      endTime: "",
      recordValue: "",
      recordType: [
        {
          value: 0,
          label: this.$t("uc.finance.record.charge")
        },
        {
          value: 1,
          label: this.$t("uc.finance.record.pickup")
        },
        {
          value: 2,
          label: this.$t("uc.finance.record.transaccount")
        },
        {
          value: 3,
          label: this.$t("uc.finance.record.exchange")
        },
        {
          value: 4,
          label: this.$t("uc.finance.record.otcbuy")
        },
        {
          value: 5,
          label: this.$t("uc.finance.record.otcsell")
        },
        {
          value: 6,
          label: this.$t("uc.finance.record.activityaward")
        },
        {
          value: 7,
          label: this.$t("uc.finance.record.promotionaward")
        },
        {
          value: 8,
          label: this.$t("uc.finance.record.dividend")
        },
        {
          value: 9,
          label: this.$t("uc.finance.record.vote")
        },
        {
          value: 10,
          label: this.$t("uc.finance.record.handrecharge")
        },
        {
          value: 11,
          label: this.$t("uc.finance.record.match")
        }
      ],
      coinList: [],
      coinType: "",
      pageSize: 10,
      page: 1,
      total: 0,
      tableRecord: []
    };
  },
  created: function() {
    this.getList(this.page);
  },
  methods: {
    changedate() {
      if (this.rangeDate[0]) {
        this.startTime = this.dateform(this.rangeDate[0]);
        this.endTime = this.dateform(this.rangeDate[1]);
      }
    },
    changePage(pageindex) {
      this.page=pageindex;
      this.getList(this.page);
    },
    queryOrder() {
      if (this.rangeDate.length == 0) {
        this.$Message.error(this.$t('add.add_8'));
        return;
      } else {
        try {
          this.page=1;
          this.getList(this.page);
        } catch (ex) {
          this.$Message.error(this.$t('add.add_8'));
          return;
        }
      }
    },
    getType() {
      // console.log(this.recordValue);
    },
    dateform(time) {
      var date = new Date(time);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    },
    getList(pageNo) {
      //获取tableWithdraw
      let memberId = 0;
      !this.$store.getters.isLogin && this.$router.push("/login");
      this.$store.getters.isLogin && (memberId = this.$store.getters.member.id);
      let startTime = "";
      let endTime = "";
      let symbol = "";
      let type = "";
      this.startTime && (startTime = this.startTime);
      this.endTime && (endTime = this.endTime);
      this.coinType && (symbol = this.coinType);
      if(this.recordValue == 0 || this.recordValue){
        type = this.recordValue;
      }
      // this.recordValue!="" || this.recordValue!=undefined && (type = this.recordValue);
      this.loading = true;
      let params = "?pageNo=" + pageNo + "&pageSize=" + this.pageSize;
      this.$http.get(this.host + "/uc/member/inviter/me" + params).then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            this.loading = false;
            if (resp.data) {
                let trueData =resp.data;
              this.total = trueData.totalElements;
              this.tableRecord = resp.data.content;
              console.log(this.tableRecord);
            }
          } else {
            this.$Message.error(resp.message);
          }
          this.loading = false;
        });
    },
    clear() {
      this.startTime = "";
      this.endTime = "";
    }
  },
  computed: {
    tableColumnsRecord() {
      let columns = [];
      var that = this;
      columns.push({
        title: this.$t("add.name"),
        align: "center",
        width: 160,
        key:"username"
      });
      columns.push({
        title: this.$t("add.tel"),
         align: "center",
        width: 160,
        key:"mobilePhone"
      });
      columns.push({
        title: this.$t("add.rechargeETH"),
        align: "center",
        key:"depositEth"
        // render: (h, param) => {
        //   return h("div", {}, param.row._source.symbol);
        // }
      });
      columns.push({
        title: this.$t("add.rechargeBTC"),
        align: "center",
        key:"depositBTC"
        // render: (h, param) => {
        //   return h("div", {}, param.row._source.symbol);
        // }
      });
      columns.push({
        // title: this.$t("uc.finance.record.num"),
        title: this.$t("add.rechargeUSDT"), //到账数量
        align: "center",
        key: "depositUSDT",
      });
      return columns;
    }
  }
};
</script>
<style scoped lang="scss">
.nav-rights {
  .nav-right {
    height: auto;
    overflow: hidden;
    padding: 0 15px;
    .bill_flow_box .rightarea-con {
      .form-group {
        margin-bottom: 20px;
        text-align: left;
      }
    }
  }
}
</style>
