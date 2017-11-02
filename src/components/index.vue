<template>
  <div class="content">
    <div class="banr">
      <div class="ban-bx">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
             <img src="../assets/images/timg.jpg" alt="" class=""@click="handleClick">
          </mt-swipe-item>
          <mt-swipe-item>
             <img src="../assets/images/timg.jpg" alt="" class=""@click="handleClick">
          </mt-swipe-item>
          <mt-swipe-item>
             <img src="../assets/images/timg.jpg" alt="" class="" @click="handleClick">
          </mt-swipe-item>
          <mt-swipe-item>
             <img src="../assets/images/timg.jpg" alt="" class=""@click="handleClick">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="part">
      <div class="part-bx">
        <ul class="bao-bx">
          <li class="left">
            <router-link to='skill' class='a'>
              <div class="pro">
                <div class="pro-img">
                  <img src="../assets/images/bao1.jpg" alt="" class="">
                </div>
                <div class="pro-p">技能培训</div>
              </div>
            </router-link>
          </li>
          <li class="left">
            <router-link to='good' class='a'>
              <div class="pro">
                <div class="pro-img">
                  <img src="../assets/images/bao2.jpg" alt="" class="">
                </div>
                <div class="pro-p">兑换好礼</div>
              </div>
            </router-link>
          </li>
          <li class="left">
            <router-link to='insurance' class='a'>
              <div class="pro">
                <div class="pro-img">
                  <img src="../assets/images/bao3.jpg" alt="" class="">
                </div>
                <div class="pro-p">投保演示</div>
              </div>
            </router-link>
          </li>
          <li class="left">
            <router-link to='friends' class='a'>
              <div class="pro">
                <div class="pro-img">
                  <img src="../assets/images/bao4.jpg" alt="" class="">
                </div>
                <div class="pro-p">邀请好友</div>
              </div>
            </router-link>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
    </div>
    <div class="kong"></div>
    <div class="type">
      <div class="type-bx">
        <div class="ty-on">
          <div class="blank">
            <div class="b-bg">
              <p class="">中华车险</p>
            </div>
          </div>
          <div class="ty-cot">
            <div class="cot-bg">
              <router-link to='toubao' class='a'>
                  <button class="">
                    立即投保
                  </button>
              </router-link>
            </div>
          </div>
          <div class="blank">
            <div class="b-bg">
              <p class="">新品推荐</p>
            </div>
          </div>
        </div>
        <div class="ty-pu">
          <div class="pu-top">
            <div class="top-bg">
              <p class="">“翱翔无忧”航空意外险</p>
            </div>
          </div>
          <div class="pu-down">
            <ul class="dow-bx">
              <li class="left">
                <div class="dow-left">
                  <p class="">￥3元起</p>
                </div>
              </li>
              <li class="left">
                <div class="dow-right">
                  <div class="tg-bx">
                    <div class="left zuo">
                      <p class="">推广奖励</p>
                    </div>
                    <div class="left">
                      <p class="ty-b">最高35%</p>
                    </div>
                    <p class="clear"></p>
                  </div>
                </div>
              </li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="ty-pu">
          <div class="pu-top">
            <div class="top-bg">
              <p class="">“家多保”家庭财产火灾保险</p>
            </div>
          </div>
          <div class="pu-down">
            <ul class="dow-bx">
              <li class="left">
                <div class="dow-left">
                  <p class="">￥100元起</p>
                </div>
              </li>
              <li class="left">
                <div class="dow-right">
                  <div class="tg-bx">
                    <div class="left zuo">
                      <p class="">推广奖励</p>
                    </div>
                    <div class="left">
                      <p class="ty-b">最高35%</p>
                    </div>
                    <p class="clear"></p>
                  </div>
                </div>
              </li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
        <div class="ty-pu">
          <div class="pu-top">
            <div class="top-bg">
              <p class="">“智护30”成人重疾保险</p>
            </div>
          </div>
          <div class="pu-down">
            <ul class="dow-bx">
              <li class="left">
                <div class="dow-left">
                  <p class="">￥845元起</p>
                </div>
              </li>
              <li class="left">
                <div class="dow-right">
                  <div class="tg-bx">
                    <div class="left zuo">
                      <p class="">推广奖励</p>
                    </div>
                    <div class="left">
                      <p class="ty-b">最高35%</p>
                    </div>
                    <p class="clear"></p>
                  </div>
                </div>
              </li>
              <div class="clear"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="kong"></div>
    <div class="Insu">
      <div class="Insu-bx">
        <div class="shou-bx">
          <ul class="xian">
            <li class="left img-bx">
              <div class="">
                <img src="../assets/images/timg5.jpg" alt="" class="">
              </div>
            </li>
            <li class="left int-bx">
              <div class="xiazg">
                <p class="title">
                  新驾乘无忧意外险
                </p>
                <p class="cont-sh">
                  驾乘、乘坐私家车意外全年保障车险补充，倍享安全
                </p>
                <div class="cot-bx">
                  <ul class="dow-bx">
                    <li class="left ty-l">
                      <div class="dow-left">
                        <p class="">￥168元</p>
                      </div>
                    </li>
                    <li class="left ty-r">
                      <div class="dow-right">
                        <div class="tg-bx">
                          <div class="left zuo">
                            <p class="">推广奖励</p>
                          </div>
                          <div class="left ">
                            <p class="ty-b">最高35%</p>
                          </div>
                          <p class="clear"></p>
                        </div>
                      </div>
                    </li>
                    <div class="clear"></div>
                  </ul>
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="shou-bx">
          <ul class="xian">
            <li class="left img-bx">
              <div class="">
                <img src="../assets/images/timg5.jpg" alt="" class="">
              </div>
            </li>
            <li class="left int-bx">
              <div class="xiazg">
                <p class="title">
                  摩托车乘驾综合意外险
                </p>
                <p class="cont-sh">
                  摩托车乘驾小伙伴的专属人身意外险，出行无忧，勇敢释放
                </p>
                <div class="cot-bx">
                  <ul class="dow-bx">
                    <li class="left ty-l">
                      <div class="dow-left">
                        <p class="">￥280元</p>
                      </div>
                    </li>
                    <li class="left ty-r">
                      <div class="dow-right">
                        <div class="tg-bx">
                          <div class="left zuo">
                            <p class="">推广奖励</p>
                          </div>
                          <div class="left ">
                            <p class="ty-b">最高35%</p>
                          </div>
                          <p class="clear"></p>
                        </div>
                      </div>
                    </li>
                    <div class="clear"></div>
                  </ul>
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="shou-bx">
          <ul class="xian">
            <li class="left img-bx">
              <div class="">
                <img src="../assets/images/timg5.jpg" alt="" class="">
              </div>
            </li>
            <li class="left int-bx">
              <div class="xiazg">
                <p class="title">
                  “四海逍遥”旅游意外险
                </p>
                <p class="cont-sh">
                  转为短期出行设计的保障，承保国内旅游期间遭受的各种意外伤害
                </p>
                <div class="cot-bx">
                  <ul class="dow-bx">
                    <li class="left ty-l">
                      <div class="dow-left">
                        <p class="">￥0.24元起</p>
                      </div>
                    </li>
                    <li class="left ty-r">
                      <div class="dow-right">
                        <div class="tg-bx">
                          <div class="left zuo">
                            <p class="">推广奖励</p>
                          </div>
                          <div class="left ">
                            <p class="ty-b">最高35%</p>
                          </div>
                          <p class="clear"></p>
                        </div>
                      </div>
                    </li>
                    <div class="clear"></div>
                  </ul>
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="shou-bx">
          <ul class="xian">
            <li class="left img-bx">
              <div class="">
                <img src="../assets/images/timg5.jpg" alt="" class="">
              </div>
            </li>
            <li class="left int-bx">
              <div class="xiazg">
                <p class="title">
                  “关爱英才”学平险
                </p>
                <p class="cont-sh">
                  专为儿童和学生定制的全年综合意外保障计划，保费低、保障全
                </p>
                <div class="cot-bx">
                  <ul class="dow-bx">
                    <li class="left ty-l">
                      <div class="dow-left">
                        <p class="">￥845元起</p>
                      </div>
                    </li>
                    <li class="left ty-r">
                      <div class="dow-right">
                        <div class="tg-bx">
                          <div class="left zuo">
                            <p class="">推广奖励</p>
                          </div>
                          <div class="left ">
                            <p class="ty-b">最高35%</p>
                          </div>
                          <p class="clear"></p>
                        </div>
                      </div>
                    </li>
                    <div class="clear"></div>
                  </ul>
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="shou-bx">
          <ul class="xian">
            <li class="left img-bx">
              <div class="">
                <img src="../assets/images/timg5.jpg" alt="" class="">
              </div>
            </li>
            <li class="left int-bx">
              <div class="xiazg">
                <p class="title">
                  摩托车乘驾综合意外险
                </p>
                <p class="cont-sh">
                  摩托车乘驾小伙伴的专属人身意外险，出行无忧，勇敢释放
                </p>
                <div class="cot-bx">
                  <ul class="dow-bx">
                    <li class="left ty-l">
                      <div class="dow-left">
                        <p class="">￥280元</p>
                      </div>
                    </li>
                    <li class="left ty-r">
                      <div class="dow-right">
                        <div class="tg-bx">
                          <div class="left zuo">
                            <p class="">推广奖励</p>
                          </div>
                          <div class="left ">
                            <p class="ty-b">最高35%</p>
                          </div>
                          <p class="clear"></p>
                        </div>
                      </div>
                    </li>
                    <div class="clear"></div>
                  </ul>
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="shou-bx">
          <ul class="xian">
            <li class="left img-bx">
              <div class="">
                <img src="../assets/images/timg5.jpg" alt="" class="">
              </div>
            </li>
            <li class="left int-bx">
              <div class="xiazg">
                <p class="title">
                  “四海逍遥”旅游意外险
                </p>
                <p class="cont-sh">
                  转为短期出行设计的保障，承保国内旅游期间遭受的各种意外伤害
                </p>
                <div class="cot-bx">
                  <ul class="dow-bx">
                    <li class="left ty-l">
                      <div class="dow-left">
                        <p class="">￥0.24元起</p>
                      </div>
                    </li>
                    <li class="left ty-r">
                      <div class="dow-right">
                        <div class="tg-bx">
                          <div class="left zuo">
                            <p class="">推广奖励</p>
                          </div>
                          <div class="left ">
                            <p class="ty-b">最高35%</p>
                          </div>
                          <p class="clear"></p>
                        </div>
                      </div>
                    </li>
                    <div class="clear"></div>
                  </ul>
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="shou-bx">
          <ul class="xian">
            <li class="left img-bx">
              <div class="">
                <img src="../assets/images/timg5.jpg" alt="" class="">
              </div>
            </li>
            <li class="left int-bx">
              <div class="xiazg">
                <p class="title">
                  “关爱英才”学平险
                </p>
                <p class="cont-sh">
                  专为儿童和学生定制的全年综合意外保障计划，保费低、保障全
                </p>
                <div class="cot-bx">
                  <ul class="dow-bx">
                    <li class="left ty-l">
                      <div class="dow-left">
                        <p class="">￥845元起</p>
                      </div>
                    </li>
                    <li class="left ty-r">
                      <div class="dow-right">
                        <div class="tg-bx">
                          <div class="left zuo">
                            <p class="">推广奖励</p>
                          </div>
                          <div class="left ">
                            <p class="ty-b">最高35%</p>
                          </div>
                          <p class="clear"></p>
                        </div>
                      </div>
                    </li>
                    <div class="clear"></div>
                  </ul>
                </div>
              </div>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
      </div>
    </div>
    <div class="kong"></div>
    <div class="prop">
      <div class="prop-bx">
        <img src="../assets/images/timg4.jpg" alt="" class="">
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {
    handleClick: function() {
        Toast('此功能暂未开放！');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
  margin:0;
}
.content{
    position: relative;
    width: 100vw;
}
.banr{
    position: relative;
    width: 100vw;
    height: 50vw;
}
.kong{
  position: relative;
  height: 3vw;
  width: 100vw;
background: #f3efef;
}
.banr .ban-bx{
    position: relative;
    width: 100vw;
    height: 100%;
}
.mint-swipe-item>img{
    position: relative;
    width: 100%;
    height: 100%;
}
.part{
    position: relative;
    width: 100vw;
    margin-top: 7vw;
}
.part-bx{
    position: relative;
    margin-bottom: 1vw;
}
.bao-bx{
position: relative;
    /* width: 100%; */
    text-align: center;
    list-style: none;
    margin: auto;
    width: 92vw;
}
.bao-bx>li{
    position: relative;
    width: 23vw;
}
.pro{
    position: relative;
    margin: 0 auto;
}
.pro-img{
    position: relative;
    width: 15vw;
    margin: 0 auto;
}
.pro-img>img{
    position: relative;
    width: 100%;
    height: 15vw;
}
.pro-p{
position: relative;
    width: 100%;
    text-align: center;
    font-size: 3.8vw;
    line-height: 7vw;
    color: #000;
}
.type{
    position: relative;
    width: 100vw;
}
.type-bx{
    position: relative;
    width: 100vw;
}
.ty-on{
    position: relative;
    width: 100vw;
    height: 50vw;
}
.blank{
    position: relative;
    width: 100vw;
    height: 10vw;
}
.b-bg{
    position: relative;
    width: 50vw;
    margin: 0 auto;
}
.b-bg>p{
  position: relative;
    text-align: center;
    font-size: 4vw;
    line-height: 10vw;
    color: #000;
}
.ty-cot{
    position: relative;
    width: 100%;
    height: 30vw;
    background: url(../assets/images/timg2.jpg) no-repeat center center;
    background-size: 100% 100%;
}
.ty-cot .cot-bg{
  float: right;
  margin-right: 15vw;
}
.ty-cot .cot-bg .a>button{
    position: relative;
    width: 24vw;
    border: 0;
    background: #FF5722;
    text-align: center;
    font-size: 4vw;
    line-height: 8vw;
    color: #fff;
    top: 17vw;
    border-radius: 1vw;
}
.ty-pu{
    position: relative;
    width: 100vw;
    height: 41vw;
}
.pu-top{
    position: relative;
    width: 100vw;
    height: 33vw;
}
.pu-top .top-bg{
    position: relative;
    width: 100%;
    height: 100%;
    position: relative;
    width: 100%;
    height: 30vw;
    background: url(../assets/images/timg3.jpg) no-repeat center center;
    background-size: 100% 100%;
}
.pu-top .top-bg>p{
    position: relative;
    text-align: center;
    font-size: 5vw;
    line-height: 7vw;
    color: #fff;
    top: 20vw;
}
.pu-down{
    position: relative;
    width: 100vw;
}
.dow-bx{
    position: relative;
    width: 100vw;
    list-style: none;
}
.dow-bx>li{
    position: relative;
    width: 50%;
}
.dow-left{
    position: relative;
    width: 30vw;
}
.dow-left>p{
    position: relative;
    text-align: center;
    font-size: 4.5vw;
    line-height: 5vw;
    color: #FF5722;
}
.dow-right{
    position: relative;
    width: 40vw;
    float: right;
    margin-right: 5vw;
    border-radius: 1vw;
    border: 0.5vw solid#FF5722;
}
.tg-bx{
    position: relative;
    width: 100%;
    border-radius: 1vw;
}
.tg-bx>div{
    position: relative;
    width: 50%;
}
.zuo{
    background: #FF5722;
}
.tg-bx>div>p{
position: relative;
    text-align: center;
    font-size: 3.5vw;
    line-height: 5vw;
    color: #fff;
}
.left{float: left;}
.clear{clear: both;}
.Insu{
    position: relative;
    width: 100vw;
}
.Insu-bx{
    position: relative;
    width: 100vw;
}
.shou-bx{
    position: relative;
    width: 100vw;
    border-top: 0.1vw solid#ccc;
    padding-top: 2vw;
    padding-bottom: 2vw;
}
.shou-bx .xian{
    position: relative;
    width: 100vw;
}
.shou-bx .xian .img-bx{
    position: relative;
    width: 40vw;
}
.shou-bx .xian .img-bx>div{
    position: relative;
    width: 35vw;
    margin:0 auto;
    border-radius: 3vw;
}
.shou-bx .xian .img-bx>div>img{
position: relative;
    width: 100%;
    height: 21vw;
    border-radius: 1.5vw;
}
.int-bx{
    position: relative;
    width: 60vw;
}
.xiazg{
    position: relative;
    width: 100%;
}
.xiazg .title{
    position: relative;
    width: 100%;
    text-align: left;
    font-size: 4vw;
    font-weight: bold;
    line-height: 6vw;
    color: #000;
        padding-left: 2vw;
}
.xiazg .cont-sh{
    position: relative;
    width: 87%;
    text-align: left;
    font-size: 3.5vw;
    line-height: 5vw;
    color: #4f5152;
    text-indent: 1vw;
    text-align: justify;
}
.xiazg .cot-bx{
    position: relative;
    width: 100%;
        margin-top: 2vw;
}
.xiazg .cot-bx .dow-bx{
    position: relative;
    width: 100%;
}
.prop{
    position: relative;
    width: 100%;
}
.prop-bx{
    position: relative;
    width: 100%;
}
.prop-bx>img{
    position: relative;
    width: 100%;
    height: 25vw;
}
.dow-bx>li.ty-l{
    position: relative;
    width: 40%;
    float: left;
}
.ty-l .dow-left{
    position: relative;
    width: 100%;
}
.ty-l .dow-left>p{
    position: relative;
    width: 100%;
    text-align: left;
    font-size: 3.5vw;
    line-height: 5vw;
}
.dow-bx>li.ty-r{
    position: relative;
    width: 60%;
    float: right;
}
.ty-r .dow-right{
    position: relative;
    width: 32vw;
    border: 0.5vw solid#FF5722;
    border-radius: 1vw;
}
.ty-r .dow-right .tg-bx{
    position: relative;
}
.ty-r .dow-right .tg-bx>div{
    position: relative;
    width: 50%;
}
.ty-r .dow-right .tg-bx>div>p{
    position: relative;
    width: 100%;
    font-size: 2vw;
    line-height: 4vw;
    color: #fff;
}
.ty-r .dow-right .tg-bx>div>p.ty-b{
  color: #FF5722;
}
.tg-bx>div>p.ty-b{
  color: #FF5722;
}

</style>
