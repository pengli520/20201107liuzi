<template>
  <div class="home">
    <!-- <img src="../assets/1.jpg" alt=""> -->
    <el-button type="warning" class="btn" @click="nextpage"
      >申请成为vip</el-button
    >
    <div class="home-flex">
      <div class="gr" v-for="(item, index) in list" :key="index">
        <p>{{ item.text }}</p>
        <img v-if="item.img" :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  list = [
    {
      text: '购买',
      img: require('@/assets/4.jpg')
    },
    {
      text: '',
      img: ''
    },
    {
      text: '个人中心',
      img: require('@/assets/3.png')
    },
    {
      text: '',
      img: ''
    },
  ]
  nextpage() {
    this.$router.push({ name: "vip" , query: {uid: (this as any).$route.query.uid}});
  }
}
</script>

<style lang="less">
.home {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../assets/1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
/* .home{
  width: 100%;
  height: 100%;
} */
.img {
  width: 100%;
  height: auto;
}
.btn {
  background: #f15a0c;
  position: absolute;
  top: 70%;
  left: calc(50% - 58px);
}
.home-flex{
 position: fixed;
  bottom: 0px;
  display: flex;
}
.gr {
 
  width: 80px;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  color: #fff;
  // text-align: center;
  margin-left: 2px;
  border-radius: 2px;
  p {
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    line-height: 30px;
    height: 30px;
  }
  img {
    width: 20px;
    // height: 20px;
    margin-top: 20px;
  }
}
</style>
