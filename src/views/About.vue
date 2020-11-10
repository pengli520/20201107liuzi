<template>
  <div class="vip">
    <div class="img">
      <img class="img-style" src="../assets/2.jpg" alt="" />
      <p class="new-text">
        申请成为八宝丹尊享VIP
      </p>
    </div>

    <div class="main">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="pass">
          <el-input
            type="text"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="checkPass">
          <el-input
            type="number"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="社会背景" prop="age">
          <el-input v-model.number="ruleForm.age" placeholder="xx公司总经理/xx学院教授/xx部处长"></el-input>
        </el-form-item>

        <el-form-item label="省份城市" prop="adder">
          <div class="list">
          <el-select v-model="ruleForm.adder.province" placeholder="请选择" >
            <el-option
              v-for="item in list.p"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
          <el-select v-model="ruleForm.adder.city" placeholder="请选择">
            <el-option
              v-for="item in list.c[index]"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
          </div>

        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            class="vip-btn"
            @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import axios from "axios";
import { Loading, Message  } from 'element-ui';
import { Toast } from 'mint-ui';
@Component
export default class Vip extends Vue {
  list = {
    p: [
      "请选择",
      "北京",
      "上海",
      "天津",
      "重庆",
      "山东",
      "河南",
      "湖北",
      "湖南",
      "广东",
      "河北",
      "山西",
      "辽宁",
      "吉林",
      "内蒙古",
      "黑龙江",
      "江苏",
      "浙江",
      "安微",
      "福建",
      "江西",
      "四川",
      "贵州",
      "云南",
      "陕西",
      "甘肃",
      "青海",
      "广西",
      "西藏",
      "宁夏",
      "新疆",
      "海南",
      "香港",
      "澳门",
      "台湾",
    ],
    c: [
      [],
      [
        "",
        "东城",
        "西城",
        "海淀",
        "朝阳",
        "丰台",
        "石景山",
        "通州",
        "顺义",
        "房山",
        "大兴",
        "昌平",
        "怀柔",
        "平谷",
        "门头沟",
        "密云",
        "延庆",
      ],
      [
        "",
        "黄浦",
        "浦东",
        "徐汇",
        "长宁",
        "静安",
        "普陀",
        "闸北",
        "虹口",
        "杨浦",
        "闵行",
        "宝山",
        "嘉定",
        "金山",
        "松江",
        "青浦",
        "奉贤",
        "崇明",
      ],
      [
        "",
        "和平",
        "河西",
        "南开",
        "河东",
        "河北",
        "红桥",
        "东丽",
        "津南",
        "西青",
        "北辰",
        "滨海新区",
      ],
      [
        "",
        "万州",
        "黔江",
        "涪陵",
        "渝中",
        "大渡口",
        "江北",
        "沙坪坝",
        "九龙陂",
        "南岸",
        "北碚",
        "渝北",
        "巴南",
        "长区",
        "江津",
        "合川",
        "永川",
        "南川",
        "綦江",
        "大足",
        "铜梁",
      ],
      [
        "",
        "济南",
        "青岛",
        "淄博",
        "枣庄",
        "东营",
        "烟台",
        "潍坊",
        "济宁",
        "泰安",
        "威海",
        "日照",
        "滨州",
        "德州",
        "聊城",
        "临沂",
        "菏泽",
        "莱芜",
      ],
      [
        "",
        "郑州",
        "开封",
        "洛阳",
        "平顶山",
        "安阳",
        "鹤壁",
        "新乡",
        "焦作",
        "濮阳",
        "许昌",
        "漯河",
        "三门峡",
        "商丘",
        "周口",
        "驻马店",
        "南阳",
        "信阳",
        "济源",
      ],
      [
        "",
        "武汉",
        "黄石",
        "十堰",
        "荆州",
        "宜昌",
        "襄阳",
        "鄂州",
        "荆门",
        "黄冈",
        "孝感",
        "咸宁",
        "仙桃",
        "潜江",
        "恩施",
        "神农架",
        "天门",
        "随州",
      ],
      [
        "",
        "长沙",
        "株洲",
        "湘潭",
        "衡阳",
        "邵阳",
        "岳阳",
        "常德",
        "张家界",
        "益阳",
        "娄底",
        "郴州",
        "永州",
        "怀化",
        "湘西",
      ],
      [
        "",
        "广州",
        "深圳",
        "珠海",
        "汕头",
        "佛山",
        "东莞",
        "中山",
        "潮州",
        "惠州",
        "湛江",
        "肇庆",
        "江门",
        "茂名",
        "韶关",
        "揭阳",
        "云浮",
        "梅州",
        "汕尾",
        "河源",
        "阳江",
        "清远",
      ],
      [
        "",
        "石家庄",
        "保定",
        "沧州",
        "衡水",
        "邢台",
        "邯郸",
        "张家口",
        "廊坊",
        "唐山",
        "秦皇岛",
        "承德",
      ],
      [
        "",
        "太原",
        "大同",
        "阳泉",
        "长治",
        "晋城",
        "朔州",
        "晋中",
        "运城",
        "忻州",
        "临汾",
        "吕梁",
      ],
      [
        "",
        "沈阳",
        "大连",
        "鞍山",
        "抚顺",
        "本溪",
        "丹东",
        "锦州",
        "营口",
        "阜新",
        "辽阳",
        "盘锦",
        "铁岭",
        "朝阳",
        "葫芦岛",
      ],
      [
        "",
        "长春",
        "吉林",
        "四平",
        "辽源",
        "通化",
        "白山",
        "白城",
        "松原",
        "延边",
        "长白山",
        "梅河口",
        "公主岭",
      ],
      [
        "",
        "呼和浩特",
        "包头",
        "乌海",
        "赤峰",
        "通辽",
        "鄂尔多斯",
        "呼伦贝尔",
        "巴彦淖尔",
        "乌兰察布",
        "兴安盟",
        "锡林郭勒",
        "阿拉善",
      ],
      [
        "",
        "哈尔滨",
        "齐齐哈尔",
        "鸡西",
        "鹤岗",
        "双鸭山",
        "大庆",
        "伊春",
        "佳木斯",
        "七台河",
        "牡丹江",
        "黑河",
        "绥化",
        "大兴安岭",
      ],
      [
        "",
        "南京",
        "无锡",
        "徐州",
        "常州",
        "苏州",
        "南通",
        "连云港",
        "淮安",
        "盐城",
        "扬州",
        "镇江",
        "秦州",
        "宿州",
      ],
      [
        "",
        "杭州",
        "宁波",
        "温州",
        "绍兴",
        "湖州",
        "嘉兴",
        "金华",
        "衢州",
        "舟山",
        "台州",
        "丽水",
      ],
      [
        "",
        "合肥",
        "芜湖",
        "蚌埠",
        "马鞍山",
        "宿州",
        "安庆",
        "淮南",
        "铜陵",
        "黄山",
        "宣城",
        "池州",
        "滁州",
        "淮北",
        "阜阳",
        "六安",
        "毫州",
      ],
      [
        "",
        "福州",
        "厦门",
        "漳州",
        "泉州",
        "三明",
        "莆田",
        "南平",
        "龙岩",
        "宁德",
        "平潭",
      ],
      [
        "",
        "南昌",
        "九江",
        "上饶",
        "抚州",
        "宜春",
        "吉安",
        "赣州",
        "景德镇",
        "萍乡",
        "新余",
        "鹰潭",
      ],
      [
        "",
        "成都",
        "绵阳",
        "自贡",
        "攀枝花",
        "泸州",
        "德阳",
        "广元",
        "遂宁",
        "内江",
        "乐山",
        "资阳",
        "宜宾",
        "南充",
        "达州",
        "雅安",
        "阿坝",
        "甘孜",
        "凉山",
        "广安",
        "巴中",
        "眉山",
      ],
      [
        "",
        "贵阳",
        "六盘水",
        "遵义",
        "铜仁",
        "黔西",
        "毕节",
        "安顺",
        "黔东",
        "黔南",
      ],
      [
        "",
        "昆明",
        "曲靖",
        "玉溪",
        "保山",
        "昭通",
        "丽江",
        "普洱",
        "临沧",
        "德宏",
        "怒江",
        "迪庆",
        "大理",
        "楚雄",
        "红河",
        "文山",
        "西双版纳",
      ],
      [
        "",
        "西安",
        "宝鸡",
        "咸阳",
        "渭南",
        "铜川",
        "治中",
        "安康",
        "商洛",
        "榆林",
        "延安",
        "汉中",
        "杨陵",
      ],
      [
        "",
        "兰州",
        "嘉峪关",
        "金昌",
        "白银",
        "天水",
        "酒泉",
        "张掖",
        "武威",
        "定西",
        "陇南",
        "平凉",
        "庆阳",
        "临夏",
        "甘南",
      ],
      ["", "西宁", "海东", "海北", "黄南", "海南", "果洛", "玉树", "海西"],
      [
        "",
        "南宁",
        "柳州",
        "桂林",
        "梧州",
        "北海",
        "防城港",
        "钦州",
        "贵港",
        "玉林",
        "百色",
        "贺州",
        "河池",
        "来宾",
        "崇左",
      ],
      ["", "拉萨", "昌都", "日喀则", "山南", "那曲", "阿里", "林芝"],
      ["", "银川", "石嘴山", "吴忠市", "固原市", "中卫"],
      [
        "",
        "乌鲁木齐",
        "克拉玛依",
        "吐鲁番",
        "哈密",
        "昌吉",
        "博尔塔",
        "巴音郭楞",
        "阿克苏",
        "克孜勒苏柯尔克",
        "喀什",
        "和田",
        "伊犁",
        "塔城",
        "阿勒泰",
        "石河子",
        "阿拉尔",
        "图木舒克",
        "五家渠",
        "北屯",
        "铁门关",
        "双河市",
      ],
      ["", "海口", "三亚", "三沙"],
      [
        "",
        "中西区",
        "湾仔区",
        "东区",
        "南区",
        "油尖旺",
        "深水埗",
        "九龙城",
        "黄大仙",
        "观塘",
        "葵青",
        "荃湾",
        "屯门",
        "元朗",
        "北区",
        "大埔",
        "沙田",
        "西贡",
        "离岛",
      ],
      [
        "",
        "花地玛堂",
        "圣安多尼堂",
        "大堂",
        "望德堂",
        "风顺堂",
        "嘉模堂",
        "圣方济各堂",
      ],
      [
        "",
        "台北",
        "新北",
        "桃园",
        "台中",
        "台南",
        "高雄",
        "基隆",
        "新竹",
        "嘉义",
      ],
    ],
  };
  checkAge = (rule: any, value: unknown, callback: any) => {
    if (!value) {
      return callback(new Error("姓名不能为空"));
    }
    setTimeout(() => {
      if (!value) {
        callback(new Error("姓名不能为空"));
      } else {
        callback();
      }
    }, 1000);
  };
  validatePass = (rule: any, value: string, callback: any) => {
    if (!/^1[3456789]\d{9}$/.test(value)) {
      callback(new Error("格式错误"));
    } else {
      callback();
    }
  };
  validatePass2 = (rule: any, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("请输入社会背景"));
    } else {
      callback();
    }
  };
  validateAdder = (rule: any, value: any, callback: any) => {
    console.log(value)
    if (!value.city || !value.province) {
      callback(new Error("请选择省份地址"));
    } else {
      callback();
    }
  };
  status = false
  index = 0
  ruleForm = {
    pass: "",
    checkPass: "",
    age: "",
    adder: {
      province:'',
      city: ''
    }
  };
  loadingInstance: any = {}
  rules = {
    pass: [{ validator: this.checkAge, trigger: "blur" }],
    checkPass: [{ validator: this.validatePass, trigger: "blur" }],
    age: [{ validator: this.validatePass2, trigger: "blur" }],
    adder: [{ validator: this.validateAdder, trigger: "blur" }],
  };
  @Watch('ruleForm.adder.province')
  provinceLis(val: string){
    console.log(val)
    this.index = 0
    this.ruleForm.adder.city = ''
    this.list.p.find((item, index) => {
      if (item === val){
        console.log(index);
        this.index = index
      }
    })
  }
  submitForm(formName: string) {
    if (this.status) {
      return;
    }
    this.status = true;
    (this as any).$refs.ruleForm.validate((valid: any) => {
      if (valid) {
        this.updata();
      } else {
        console.log("error submit!!");
        this.status = false;
        return false;
      }
    });
  }

  updata() {
    this.loadingInstance = Loading.service({});
    const myform = new FormData();
    myform.append("name",this.ruleForm.pass);
    myform.append("mobile",this.ruleForm.checkPass);
    myform.append("shbj",this.ruleForm.age);
    myform.append("province",this.ruleForm.adder.province);
    myform.append("city",this.ruleForm.adder.city);
    myform.append("recommUid",(this as any).$route.query.uid ? (this as any).$route.query.uid : '');
    axios({
      method: "post",
      url: "http://bbd.manlongdyf.com/activity/babao_dan/save",
      data: myform,
      // {
      //   name: this.ruleForm.pass,
      //   mobile: this.ruleForm.checkPass,
      //   shbj: this.ruleForm.age,
      //   province: this.ruleForm.adder.province,
      //   city: this.ruleForm.adder.city,
      //   uid: (this as any).$route.query.uid || '',
      // },
    }).then((res) => {
      this.loadingInstance.close();
      if (+res.data.status === 10000) {
          Toast({
            message: '提交成功',
          });
      }  else {
        Toast({
          message: res.data.msg || '请求失败',
        })
      }
      this.loadingInstance.close();
      this.status = false;
      console.log(res);
        this.ruleForm = {
          pass: "",
          checkPass: "",
          age: "",
          adder: {
            province:'',
            city: ''
          }
        };
    }).catch((err)=>{
      this.loadingInstance.close();
      Toast({
        message: err.data.msg || '请求失败',
      })
      this.status = false;
    })
  }

  // created(){
  //   Toast({
  //     message: '操作成功',
  //   });
  // }
}
</script>

<style lang="less">
.vip {
  background: rgb(255, 204, 40);
  min-height: 100%;
  width: 100%;
  position: absolute;
}
.img {
  width: 100%;
  background: rgb(242, 166, 83);
}
.img-style {
  width: 100%;
}
.new-text {
  color: rgb(255, 84, 72);
  font-size: 28px;
  font-weight: bold;
  height: 40px;
  width: 100%;
  line-height: 7px;
}
.main {
  width: 96%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .el-form-item__label{
    text-align: left;
    clear: both;
    // float: right;
    
    display: block;

  }
}
    .el-form-item__content{
      // margin-left: 0!important;
      position: relative;
      left: -20px!important;
    }
.vip-btn {
  width: 250px;
}
.el-input__inner {
  width: 250px;
  color: #999;
}
.list {
  display: flex;
  .el-input__inner{
    width: 125px;
  }
}

</style>
