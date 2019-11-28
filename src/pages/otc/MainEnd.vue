<template>
  <div class="all-content">
    <!-- <div class="launchpad-ing">
      <h2>正在进行</h2>
      <ul>
        <li>
          <div class="launchpad-img"><img src="../../assets/images/launchpad/dcr.png" alt=""></div>
        </li>
      </ul>
    </div> -->
    <div class="launchpad-end">
      <h2>{{$t('add.end')}}</h2>
      <ul>
        <li>
          <div class="launchpad-img" v-if="currentlan==='ch'"><img src="../../assets/images/launchpad/dcr.png" alt=""></div>
          <div class="launchpad-img" v-else><img src="../../assets/images/launchpad/dcr-en.png" alt=""></div>
          <div class="end-icon" v-if="currentlan==='ch'"></div>
          <div class="end-icon-en" v-else></div>
        </li>
        <li>
          <div class="launchpad-img" v-if="currentlan==='ch'"><img src="../../assets/images/launchpad/mco.png" alt=""></div>
          <div class="launchpad-img" v-else><img src="../../assets/images/launchpad/mco-en.png" alt=""></div>
          <div class="end-icon" v-if="currentlan==='ch'"></div>
          <div class="end-icon-en" v-else></div>
        </li>
        <li>
          <div class="launchpad-img" v-if="currentlan==='ch'"><img src="../../assets/images/launchpad/nexo.png" alt=""></div>
          <div class="launchpad-img" v-else><img src="../../assets/images/launchpad/nexo-en.png" alt=""></div>
          <div class="end-icon" v-if="currentlan==='ch'"></div>
          <div class="end-icon-en" v-else></div>
        </li>
        <li>
          <div class="launchpad-img" v-if="currentlan==='ch'"><img src="../../assets/images/launchpad/xzc.png" alt=""></div>
          <div class="launchpad-img" v-else><img src="../../assets/images/launchpad/xzc-en.png" alt=""></div>
          <div class="end-icon" v-if="currentlan==='ch'"></div>
          <div class="end-icon-en" v-else></div>
        </li>
        <li>
          <div class="launchpad-img" v-if="currentlan==='ch'"><img src="../../assets/images/launchpad/zec.png" alt=""></div>
          <div class="launchpad-img" v-else><img src="../../assets/images/launchpad/zec-en.png" alt=""></div>
          <div class="end-icon" v-if="currentlan==='ch'"></div>
          <div class="end-icon-en" v-else></div>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped lang="scss">
.all-content {
  width: 100%;
  background-color: #fff;
  color: #333;
  .launchpad-ing ,.launchpad-end {
    margin: 50px 0px;
    h2 {
        text-indent: 50px;
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 30px;
    }
    ul {
      display: flex;
      width: 100%;
      margin: 0 auto;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
          cursor: pointer;
        position: relative;
        list-style: none;
        width: 28%;
        min-width: 250px; 
        box-shadow: 0px 0px 2px 2px rgba(88,88,88,0.3);
        margin: 30px 2.65%;
        transition: all 0.3s linear;
        .launchpad-img {
          position: relative;
          width: 100%;
          height: 0px;
          padding: 68.15% 0%;
          img {
            width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        }
        .end-icon {
      position: absolute;
      width: 100px;
      height: 100px;
      left: 50%;
      top: 10%;
      margin-left: -50px;
      background: url("../../assets/images/launchpad/end_icon.png") no-repeat;
      background-size: cover;
    }
       .end-icon-en {
      position: absolute;
      width: 100px;
      height: 100px;
      left: 50%;
      top: 10%;
      margin-left: -50px;
      background: url("../../assets/images/launchpad/end_icon-en.png") no-repeat;
      background-size: cover;
    }
      }
      li:hover {
        transform: translateY(-2%);
        box-shadow: 0px 0px 6px 6px rgba(88,88,88,0.4);
      }
    }
  }
}
</style>
<<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      currentlan:"en",
    }
  },
  mounted:function(){
    this.$store.commit("initLang");
  },
  computed:{
    lang: function() {
      let newval =this.$store.state.lang;
      this.changePic(newval);
      return this.$store.state.lang;
    },
  },
  watch:{
     lang(newval,oldval){
      /* 处理图片中英文切换 */
      this.changePic(newval);
    }
  },
  methods:{
    changePic:function(newval){
      if(newval ==="Chinese"){
        this.currentlan = "ch";
      }else{
        this.currentlan = "en";
      }
    },
  },
}
</script>