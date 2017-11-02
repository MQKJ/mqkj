<template>
  <div class="hello">
    <div class="page-navbar .content-bx"> 
      <mt-navbar class="page-part" v-model="selected">  
        <mt-tab-item id="1">
          <div class="wen">文章</div>
        </mt-tab-item>  
        <mt-tab-item id="2">
          <div class="shi">视频</div>
        </mt-tab-item> 
      </mt-navbar> 
      <!-- tabcontainer -->  
      <mt-tab-container v-model="selected">  
        <mt-tab-container-item id="1">
            <div class="wz-bx">
              <div class="cont-bx">
                <ul class="wen-bx">
                  <li class="left wen-l">
                    <div class="">
                      <img src="../assets/images/timg5.jpg" alt="" class="">
                    </div>
                  </li>
                  <li class="left wen-r">
                    <div class="cot-s">
                      <p class="top">汽车保险营销技巧全GET</p>
                      <p class="miao">多个营销技巧</p>
                    </div>
                  </li>
                  <div class="claer"></div>
                </ul>
              </div>
              <div class="cont-bx">
                <ul class="wen-bx">
                  <li class="left wen-l">
                    <div class="">
                      <img src="../assets/images/timg5.jpg" alt="" class="">
                    </div>
                  </li>
                  <li class="left wen-r">
                    <div class="cot-s">
                      <p class="top">汽车保险营销技巧全GET</p>
                      <p class="miao">多个营销技巧</p>
                    </div>
                  </li>
                  <div class="claer"></div>
                </ul>
              </div>
              <div class="cont-bx">
                <ul class="wen-bx">
                  <li class="left wen-l">
                    <div class="">
                      <img src="../assets/images/timg5.jpg" alt="" class="">
                    </div>
                  </li>
                  <li class="left wen-r">
                    <div class="cot-s">
                      <p class="top">汽车保险营销技巧全GET</p>
                      <p class="miao">多个营销技巧</p>
                    </div>
                  </li>
                  <div class="claer"></div>
                </ul>
              </div>
              <div class="cont-bx">
                <ul class="wen-bx">
                  <li class="left wen-l">
                    <div class="">
                      <img src="../assets/images/timg5.jpg" alt="" class="">
                    </div>
                  </li>
                  <li class="left wen-r">
                    <div class="cot-s">
                      <p class="top">汽车保险营销技巧全GET</p>
                      <p class="miao">多个营销技巧</p>
                    </div>
                  </li>
                  <div class="claer"></div>
                </ul>
              </div>
              <div class="cont-bx">
                <ul class="wen-bx">
                  <li class="left wen-l">
                    <div class="">
                      <img src="../assets/images/timg5.jpg" alt="" class="">
                    </div>
                  </li>
                  <li class="left wen-r">
                    <div class="cot-s">
                      <p class="top">汽车保险营销技巧全GET</p>
                      <p class="miao">多个营销技巧</p>
                    </div>
                  </li>
                  <div class="claer"></div>
                </ul>
              </div>
            </div>
        </mt-tab-container-item>  
        <mt-tab-container-item id="2"> 
            <div class="wz-bx">
              <div class="vio-bx">
                <div class="tou-bx">
                  <img src="../assets/images/timg5.jpg" alt="" class="">
                </div>
                <div class="shum">
                  <p class="top-d">投保流程</p>
                  <p class="bot-d">车险投保演示</p>
                </div>
              </div>
              <div class="vio-bx">
                <div class="tou-bx">
                  <img src="../assets/images/timg5.jpg" alt="" class="">
                </div>
                <div class="shum">
                  <p class="top-d">投保流程</p>
                  <p class="bot-d">车险投保演示</p>
                </div>
              </div>
              <div class="vio-bx">
                <div class="tou-bx">
                  <img src="../assets/images/timg5.jpg" alt="" class="">
                </div>
                <div class="shum">
                  <p class="top-d">投保流程</p>
                  <p class="bot-d">车险投保演示</p>
                </div>
              </div>
            </div> 
        </mt-tab-container-item> 
      </mt-tab-container>  
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      selected: '1' 
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #FF5722;
    color: #FF5722;
    margin-bottom: 2px;
}
.mint-navbar .mint-tab-item {
    padding: 10px 0;
    font-size: 15px;
}
.mint-tab-item-label {
    color: inherit;
    font-size: 22px;
    line-height: 1;
}
.wen,
.shi {
    color: inherit;
    font-size: 4.5vw;
    line-height: 5vw;
}
.wz-bx{
    position: relative;
    width: 100vw;
}
.cont-bx{
    position: relative;
    width: 100vw;
    height: 23vw;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
    border-top: 0.3vw solid#ccc;
}
.wen-bx{
    position: relative;
    width: 100%;
    list-style: none;
}
.wen-bx .wen-l{
    position: relative;
    width: 30%;
}
.wen-bx .wen-l>div{
    position: relative;
    width: 100%;
}
.wen-bx .wen-l>div>img{
    position: relative;
    width: 100%;
    height: 20vw;
}
.wen-bx .wen-r{
    position: relative;
    width: 70%;
}
.wen-bx .wen-r .cot-s{
position: relative;
    width: 88%;
    left: 6%;
}
.wen-bx .wen-r .cot-s .top{
    position: relative;
    width: 100%;
    font-size: 4vw;
    line-height: 10vw;
    font-weight: bold;
    text-align: left;
}
.wen-bx .wen-r .cot-s .miao{
    position: relative;
    width: 100%;
    font-size: 4vw;
    color: #8e8a8a;
    line-height: 10vw;
    text-align: left;
}
.content-bx{
    position: relative;
    width: 100vw;
}
.vio-bx{
    position: relative;
    width: 100vw;
    height: 42vw;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
    background: #fff;
    border-top: 0.2vw solid#ccc;
}
.vio-bx .tou-bx{
    position: relative;
    width: 100%;
}
.vio-bx .tou-bx>img{
    position: relative;
    width: 100%;
    height: 25vw;
}
.vio-bx .shum{
position: relative;
    width: 100%;
    padding-left: 2%;
    background: #fffafa;
        top: -1vw;
}
.vio-bx .shum .top-d{
position: relative;
    width: 100%;
    font-size: 4vw;
    line-height: 7vw;
    font-weight: bold;
    text-align: left;
    color: #424141;
}
.vio-bx .shum .bot-d{
position: relative;
    width: 100%;
    font-size: 4vw;
    color: #8e8a8a;
    line-height: 6vw;
    text-align: left;;
}
.left{
    float: left;
}
.clear{
    clear:both;
}
</style>