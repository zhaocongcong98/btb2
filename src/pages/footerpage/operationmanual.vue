<template>
<div class="terms">
    <div class="bg"></div>
    <div class="content">
        <ul class="left">
            <li v-for="(item,index) in operationList" v-bind:key="index" @click="changeClass(index)" :class="{'active-btn':index==choseBtn,'default-btn':index!=choseBtn}">{{item.title}}</li>     
        </ul>
        <div class="right"></div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            operationList:[
                {
                    title:"新手交易",

                },
                {
                    title:"币币交易",
                }
            ],
            choseBtn: 0,
        }
    },
    methods:{
        changeClass:function(index){
            this.choseBtn = index;
        },
    },
}
</script>
<style scoped lang="scss">
.terms {
    width: 100%;
    height: 100%;
    color: #333;
    .bg {
        width: 100%;
        height: 80px;
        background: #555;
    }
    .content {
        width: 1155px;
        margin: 50px auto 0px auto;
        display: flex;
        justify-content: space-around;
        .left {
            width: 100px;
            flex: 0 0 100px;
            li {
                cursor: pointer;
                text-align: center;
                list-style: none;
                height: 40px;
                line-height: 40px;
                margin-bottom: 20px;
                border-radius: 5px;
            }
            .active-btn {
                color: #fff;
                background-color: #4267b2;
            }
            .default-btn {
                color: #fff;
                background-color: #888;
            }
        }
        .right {
            width: 1000px;
            background-color: #eee;
            box-shadow: 0px 0px 2px 2px rgba(210,210,210,0.7);
        }
    }
}
</style>