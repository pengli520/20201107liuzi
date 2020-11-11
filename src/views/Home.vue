<!--
 * @Author: your name
 * @Date: 2020-11-09 17:53:47
 * @LastEditTime: 2020-11-11 18:08:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \20201107liuzi\src\views\Home.vue
-->
<template>
  <div class="home">
    <!-- <img src="../assets/1.jpg" alt=""> -->
    <!-- <el-button type="warning" class="btn" @click="nextpage"
      >申请成为vip</el-button
    > -->
    <!-- <div class="home-flex">
      <div class="gr" v-for="(item, index) in list" :key="index" @click="nextWin(item.path)">
        <p>{{ item.text }}</p>
        <img v-if="item.img" :src="item.img" alt="" />
      </div>
    </div> -->

    <div class="div-img">
      <img src="../assets/bg.png" alt="">
      <div class="one" @click="nextWin(list[0].path)"></div>
      <div class="two"  @click="nextpage"></div>
      <div class="three" @click="nextWin(list[3].path)"></div>
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
      img: require('@/assets/4.jpg'),
      path: 'https://shop44664174.m.youzan.com/wscgoods/detail/2omqbqf2bm6d2?alias=2omqbqf2bm6d2&reft=1604973161071&spm=f.86157138&sf=wx_sm&form=kdt',
    },
    {
      text: '',
      img: ''
    },
    {
      text: '',
      img: ''
    },
    {
      text: '个人中心',
      img: require('@/assets/3.png'),
      path: 'https://shop44664174.youzan.com/wscuser/membercenter?alias=6Mq8xyUsWH&reft=1604973374351&spm=f.86157138&sf=wx_sm&form=kdt&kdt_id=44472006'
    },
  ]
  nextpage() {
    this.$router.push({ name: "vip" , query: {uid: (this as any).$route.query.uid}});
  }

  nextWin(path: string) {
    window.open(path)
  }
}
</script>

<style lang="less">
// .home {
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   background: url("../assets/bg.png");
//   // background-size: cover;
//   background-repeat: no-repeat;
// }
 .home{
  width: 100%;
  height: 100%;
    background: -moz-linear-gradient(top,rgb(46,2,2) 90%, rgb(46,2,2) 100%);
    background: -webkit-linear-gradient(top,rgb(46,2,2) 90%,rgb(46,2,2) 100%);
    background: -o-linear-gradient(top,rgb(46,2,2) 90%,rgb(46,2,2) 100%);
    background: -ms-linear-gradient(top,rgb(46,2,2) 90%,rgb(46,2,2) 100%);
    background: linear-gradient(to bottom,rgb(46,2,2) 90%,rgb(46,2,2) 100%);
  position: absolute;
} 
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
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
}
.gr {
 
  width: 25%;
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
    color: #fff;
  }
  img {
    width: 20px;
    // height: 20px;
    margin-top: 20px;
  }
}
.div-img{
  position: relative;
  width: 100%;
  img{
    width: 100%;
  }
  div{
    width: 40%;
    height: 50px;
    // background: aqua;
    position: absolute;
    z-index: 99;
    // opacity: .5;
  }
  .one{
    bottom: 10%;
    left: 0%;
  }
  .two{
    bottom: 10%;
    right: 0%;
  }
  .three{
    bottom: 0%;
    right:  30%;    
  }
}
</style>
