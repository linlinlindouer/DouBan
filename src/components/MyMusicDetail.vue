<template>
<div>
    <Row>
      <Row>
        <Col span="12">
        <li class="enum_list">
            <h2 id="title">{{site.name}}</h2>
            <img :src="'https://images.weserv.nl/?url='+site.coverUrl"  id="m_pic">
            <div class="detail">
              <p v-if='site.player'><span class="d_title">表演者：</span>{{' '+site.player}}</p>
              <p v-if='site.genre'>
                <span class="d_title">流派：</span>{{' '+site.genre}}
              </p>
              <p v-if='site.albumType'>
                <span class="d_title">专辑类型: </span>{{' '+site.albumType}}
              </p>
              <p v-if='site.medium'>
              <span class="d_title">介质: </span>{{' '+site.medium}}
              </p>
              <p v-if='site.publisher'>
              <span class="d_title">出版社:</span>{{' '+site.publisher}}
              </p>
              <p v-if='site.recordNum'>
              <span class="d_title">唱片数:</span>{{' '+site.recordNum}}
              </p>
              <p v-if='site.barcode'>
              <span class="d_title">条形码:</span>{{' '+site.barcode}}
              </p>
            </div>
          </li>
        </Col>
        <Col span="8" offset="4"  class="p_right">
            <p>豆瓣评分</p>
            <Rate show-text allow-half v-model="star" disabled>
              <span style="color: #f5a623">{{star*2}}</span>
            </Rate>
        </Col>
        </Row>
        <Row class="b_introduction">
         <p class="intro_title">简介</p>
         <p class="intro_content">{{site.intro}}</p>
        </Row>
    </Row>
    <div class="footer">
    <div class="gotop" v-show="gotop" @click="toTop">Top</div>
</div>
</div>
</template>
<script>
export default {
  name: 'MyMusicDetail',
  data () {
    return {
      valueCustomText: 0,
      gotop: true
    }
  },
  props: ['site', 'star'],
  mounted () {
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false)
    },
    toTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    }
  }
}
</script>
<style lang="css">
.text{
  width:21.8rem;
  height:37.5rem;
  margin-left: 1.725rem;
  float:left;
}
.d_title{
  font-size: 0.75rem;
  font-weight:bold;
}
ul,li{
  list-style: none;
}
.enum_list{
  width:21.875rem;
  height:12.5rem;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
}
#m_pic{
  width:8.4375rem;
  height:8.4375rem;
  float:left;
  margin-top:.625rem;
}
.detail{
  width:10rem;
  height:10rem;
  margin-left: .9375rem;
  float:right;
}
.detail p{
  font-size: 0.75rem;
  margin: .125rem;
}
.p_right{
  margin-top: 3.75rem;
  border-left: .0625rem solid #eee;
  padding-left:.625rem
}
.b_introduction{
  margin-top: 40px;
  border-top: 1px solid #eee;
}
.intro_title{
  font-weight: bold;
  font-size: 1.25rem;
  margin: 2px;
}
.intro_content{
  font-size:.875rem;
  text-indent:2rem;
  line-height:1.875rem;
}
</style>
