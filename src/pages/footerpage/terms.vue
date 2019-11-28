<template>
<div class="terms">
    <div class="bg"></div>
    <h2 class="title">JINGUI交易平台手续费率</h2>
     <p class="title-1">币币交易手续费</p>
    <div class="terms-content">
        <div class="terms-item">
            <p>JINGUI交易区</p>
            <p>买入：0.1%</p>
            <p>卖出：0.1%</p>
        </div>
        <div class="terms-item">
            <p>BTC交易区</p>
            <p>买入：0.1%</p>
            <p>卖出：0.1%</p>
        </div>
        <div class="terms-item">
            <p>ETH交易区</p>
            <p>买入：0.1%</p>
            <p>卖出：0.1%</p>
        </div>
        <div class="terms-item">
            <p>USDT交易区</p>
            <p>买入：0.1%</p>
            <p>卖出：0.1%</p>
        </div>
        <div class="terms-item">
            <p>转币手续费</p>
            <p>充币 ：0</p>
            <p>提币 ：0.3%</p>
        </div>
        <div class="terms-item">
            <p>法币交易手续费</p>
            <p>买入：0.3%</p>
            <p>卖出：0.3%</p>
        </div>
    </div>
</div>
</template>
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
    .title {
        text-align: center;
        height: 97px;
        line-height: 97px;
        border-bottom: 1px dotted #555;
    }
    .title-1 {
        margin: 50px 0px;
        text-align: center;
    }
    .terms-content {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .terms-item {
        flex: 0 0 25%;
            width: 21%;
            text-align: center;
            margin-bottom: 80px;
            p {
                line-height: 50px;
            }
        }
    }
}
</style>