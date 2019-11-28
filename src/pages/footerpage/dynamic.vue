
<template>
<div class="news clearfloat">
    <div class="bg"></div>
    <h2 class="title">{{$t("footer.ul3li2")}}</h2>
    <div class="news-content">
        <div class="news-box">
            <Table style="cursor: pointer" :row-class-name="rowClassName" class="tables" :show-header="false" :no-data-text="$t('common.nodata')" :columns="newList" :data="newsData" :disabled-hover="true" :loading="loading"></Table>
        </div>
         <div style="margin-top:20px;">
            <Page  :total="total" :pageSize="pageSize"  :current="page" @on-change="changePage"></Page>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data(){
            return {
                total:8,
                pageSize:10,
                page: 1,
                newsData:[
                    {
                        number:"1.",
                        title: this.$t('add.dynamic_1'),
                        time: "2019-8-28",
                        reader: "122"+this.$t('add.read'),
                    },
                     {
                        number:"2.",
                        title: this.$t('add.dynamic_2'),
                        time: "2018-11-28",
                        reader: "122"+this.$t('add.read'),
                    },
                     {
                        number:"3.",
                        title: this.$t('add.dynamic_3'),
                        time: "2018-11-20",
                        reader: "224"+this.$t('add.read'),
                    },
                     {
                        number:"4.",
                        title: this.$t('add.dynamic_4'),
                        time: "2018-7-20",
                        reader: "358"+this.$t('add.read'),
                    },
                     {
                        number:"5.",
                        title: this.$t('add.dynamic_5'),
                        time: "2018-6-29",
                        reader: "368"+this.$t('add.read'),
                    },
                     {
                        number:"6.",
                        title: this.$t('add.dynamic_6'),
                        time: "2018-6-20",
                        reader: "410"+this.$t('add.read'),
                    },
                     {
                        number:"7.",
                        title: this.$t('add.dynamic_7'),
                        time: "2018-5-15",
                        reader: "449"+this.$t('add.read'),
                    },
                     {
                        number:"8.",
                        title: this.$t('add.dynamic_8'),
                        time: "2018-5-10",
                        reader: "872"+this.$t('add.read'),
                    },
                ],
                newList:[
                     {
                        align: "right",
                        width: 60,
                        key:"number",
                    },
                    {
                        align: "left",
                        minWidth: 400,
                        key:"title"
                    },
                    {
                        align: "center",
                        width: 200,
                        key:"time"
                    },
                    {
                        align: "center",
                        width: 100,
                        key: "reader",
                    },
                ]
            };
        },
       computed:{
      
        },

    }
</script>
<style  lang="scss">
.ivu-table-wrapper .ivu-table {
    background: transparent;
}
.rowClassName {
    background-color: #fff;
    color: #333;
}
.tables td {
    background-color: #fff!important;
    color: #333!important;
}
/*清除浮动代码*/
.clearfloat:after{
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
    }
.clearfloat{
    zoom:1
}
.news {
     .bg {
        width: 100%;
        height: 80px;
        background: #333;
    }
    .title {
        padding-top :30px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 28px;
        font-weight: normal;
        background: #f6f6f6;
        text-align: center;
        color: #333;
    }
    .news-content {
        width: 100%;
        height: 100%;
        background: #f6f6f6;
        padding: 40px 60px 100px;
        .news-box {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
            position: relative;
            background-color: #d8d8d8;
        }
    }
}

</style>