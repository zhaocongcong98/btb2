
<style lang="scss" scoped>
.entrusthistory {
  float: left;
  width: 75%;
 min-width: 900px;
}

.page {
  text-align: right;
  margin-top: 20px;
}
.table {
  border-radius: 4px;
}
.table .ivu-table-wrapper {
  position: relative;
  /* border: 1px solid #dddee1; */
  border-bottom: 0;
  border-right: 0;
  // box-shadow: 0 0 2px #ccc;
  border-radius: 4px;
  // overflow: hidden;
}
.form.ivu-form-inline .ivu-form-item {
  display: inline-block;
}
</style>
<style lang="scss">
.entrusthistory .ivu-table th,
.entrusthistory .ivu-table td {
  text-align: center;
}
.table .ivu-table-cell-expand {
  color: #f0a70a;
}
</style>



<template>
  <div class="entrusthistory">
    <Form class="form" :model="formItem" :label-width="65" inline>
      <FormItem :label="$t('add.start_end_tiime')" label-width="90">
        <DatePicker type="daterange" v-model="formItem.date" style="width:100px;"></DatePicker>
      </FormItem>
      <FormItem :label="$t('add.jiaoyidui')+':'">
        <Select v-model="formItem.symbol" style="width:100px;" :placeholder="$t('add.select_input')">
          <Option v-for="(item,index) in symbol" :key="index" :value="item.symbol">{{item.symbol}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('add.type')+':'" >
        <Select v-model="formItem.type" style="width:70px;" :placeholder="$t('add.select_input')">
          <Option value="LIMIT_PRICE">{{$t('add.add_2')}}</Option>
          <Option value="MARKET_PRICE">{{$t('add.add_3')}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('add.direction')">
        <Select v-model="formItem.direction" style="width:70px;" :placeholder="$t('add.select_input')">
          <Option value="0">{{$t('add.add_4')}}</Option>
          <Option value="1">{{$t('add.add_5')}}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button type="warning" @click="handleSubmit">{{$t('add.add_6')}}</Button>
        <Button style="margin-left: 8px" @click="handleClear" class="clear_btn">{{$t('add.add_7')}}</Button>
      </FormItem>
    </Form>
    <div class="table">
      <Table :columns="columns" :data="orders" :loading="loading" :no-data-text="$t('common.nodata')"></Table>
      <div class="page">
        <Page :total="total" :pageSize="pageSize" :current="pageNo" @on-change="loadDataPage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
var moment = require("moment");
import expandRow from "@components/exchange/expand.vue";

export default {
  components: { expandRow },
  data() {
    const self = this;
    return {
      loading: false,
      pageSize: 10,
      pageNo: 1,
      total: 10,
      symbol: [],
      formItem: {
        symbol: "",
        type: "",
        direction: "",
        date: ""
      },
      columns: [
        {
          title: this.$t("exchange.time"),
          key: "time",
          minWidth: 30,
          render: (h, params) => {
            return h("span", {}, this.dateFormat(params.row.time));
          }
        },
        {
          title: this.$t("add.jiaoyidui"),
          key: "symbol",
          minWidth: 100,
        },
        {
          title: this.$t("add.type"),
          minWidth: 40,
          render(h, params) {
            return h(
              "span",
              params.row.type === "LIMIT_PRICE" ? "限价" : "市价"
            );
          }
        },
        {
          title: this.$t("exchange.direction"),
          key: "direction",
          minWidth: 50,
          render: (h, params) => {
            const row = params.row;
            const className = row.direction.toLowerCase();
            return h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              row.direction == "BUY"
                ? this.$t("exchange.buyin")
                : this.$t("exchange.sellout")
            );
          }
        },
        {
          title: this.$t("exchange.price"),
          key: "price",
          minWidth:50,
          render(h, params) {
            return h(
              "span",
              {
                attrs: {
                  title: params.row.price
                }
              },
              self.toFloor(params.row.price)
            );
          }
        },
        {
          title: this.$t("exchange.num"),
          key: "amount",
          minWidth: 50,
          render(h, params) {
            return h(
              "span",
              {
                attrs: {
                  title: params.row.amount
                }
              },
              self.toFloor(params.row.amount)
            );
          }
        },
        {
          title: this.$t("exchange.done"),
          key: "tradedAmount",
          minWidth:50,
          render(h, params) {
            return h(
              "span",
              {
                attrs: {
                  title: params.row.tradedAmount
                }
              },
              self.toFloor(params.row.tradedAmount)
            );
          }
        },
        {
          title: this.$t("add.endAmount"),
          key: "turnover",
          minWidth:60,
          render(h, params) {
            return h(
              "span",
              {
                attrs: {
                  title: params.row.turnover
                }
              },
              self.toFloor(params.row.turnover)
            );
          }
        },
        {
          title: this.$t("exchange.status"),
          key: "status",
          minWidth: 60,
          render: (h, params) => {
            const status = params.row.status;
            if (status == "COMPLETED") {
              return h(
                "span",
                {
                  style: {
                    color: "#f0a70a"
                  }
                },
                this.$t("exchange.finished")
              );
            } else if (status == "CANCELED") {
              return h(
                "span",
                {
                  style: {
                    color: "#f0a70a"
                  }
                },
                this.$t("exchange.canceled")
              );
            } else {
              return h("span", {}, "--");
            }
          }
        }
      ],
      orders: []
    };
  },
  created() {
    this.getHistoryOrder();
    this.getSymbol();
  },
  methods: {
    dateFormat: function(tick) {
      return moment(tick).format("YYYY-MM-DD HH:mm:ss");
    },
    loadDataPage(data) {
      this.pageNo = data;
      this.getHistoryOrder();
    },
    handleSubmit() {
      this.pageNo = 1;
      this.getHistoryOrder();
    },
    handleClear() {
      this.formItem = {
        symbol: "",
        type: "",
        direction: "",
        date: ""
      };
    },
    getHistoryOrder() {
      //查询历史委托
      this.loading = true;
      const { symbol, type, direction, date: rangeDate } = this.formItem,
        startTime = new Date(rangeDate[0]).getTime() || "",
        endTime = new Date(rangeDate[1]).getTime() || "";
      let params = {};
      if (symbol) params.symbol = symbol;
      if (direction) params.direction = direction;
      if (type) params.type = type;
      if (startTime) params.startTime = startTime;
      if (endTime) params.endTime = endTime;
      params.pageNo = this.pageNo;
      params.pageSize = this.pageSize;
      var that = this;
      this.orders = [];
      this.$http
        .post(this.host + "/exchange/order/personal/history", params)
        .then(response => {
          var resp = response.body;
          let rows = [];
          if (resp.content.length > 0) {
            this.total = resp.totalElements;
            for (var i = 0; i < resp.content.length; i++) {
              var row = resp.content[i];
              row.price =
                row.type == "MARKET_PRICE"
                  ? that.$t("exchange.marketprice")
                  : row.price;
              rows.push(row);
            }
            this.orders = rows;
          }
          this.loading = false;
        });
    },
    getSymbol() {
      this.$http.post(this.host + this.api.market.thumb, {}).then(response => {
        var resp = response.body;
        if (resp.length > 0) {
          this.symbol = resp;
        }
      });
    }
  }
};
</script>

