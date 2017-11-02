<template>
  <div class="tcontent">
    <div class="img-bx">
      <img src="../assets/images/timg6.jpg" alt="" class="">
    </div>
    <div class="content-bx">
      <div class="news-bx">
        <ul class="new">
          <li class="left new-l">
            <div class="">
              <img src="../assets/images/timg7.jpg" alt="" class="">
            </div>
          </li>
          <li class="left new-r">
            <div class="">
              <p class="">车险产品由中华保险承保与理赔，目前仅支持9座以下非营业私家车。车险销售服务由兴民保险经纪有限公司提供。</p>
            </div>
          </li>
          <div class="clear"></div>
        </ul>
      </div>
      <div class="policy">
        <div class="are-bx">
          <div class="fenlan">
            <div class="left l-bx">
              <p class="fen-p">投保城市</p>
            </div>
            <div class="left r-bx">
              <input type="text" class="fen-inp">
            </div>
            <div class="clear"></div>
          </div>
          <div class="fenlan">
            <div class="left l-bx">
              <p class="fen-p">出单机构</p>
            </div>
            <div class="left r-bx">
              <input type="text" class="fen-inp">
            </div>
            <div class="clear"></div>
          </div>
          <div class="fenlan">
            <div class="left l-bx">
              <p class="fen-p">车牌号码</p>
            </div>
            <div class="left r-bx">
              <input type="text" class="fen-inp">
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="car-bx">
          <div class="left">
              <img src="../assets/images/timg8.jpg" alt="" class="car-img">
              <router-link to='toubao' class='a'>
                  <p class="car-p">最近询价车辆</p>
              </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Good',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>