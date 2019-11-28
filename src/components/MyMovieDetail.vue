<template>
    <Row>
      <Row>
        <Col span="12">
        <li class="enum_list">
            <h3 id="title">{{site.name}}</h3>
            <img :src="'https://images.weserv.nl/?url='+site.coverUrl"  id="m_pic">
            <div class="detail">
              <p>{{'导演：'+site.director}}</p>
              <p>
                {{'编剧：'+site.scriptwriter.substring(0,20)}}
              </p>
              <p>
                {{'主演: '+site.actor.substring(0,20)}}
              </p>
              <p>
              {{'类型: '+site.genre}}
              </p>
              <p>
              {{'制片国家/地区:'+site.area}}
              </p>
              <p>
              {{'语言:'+site.language}}
              </p>
              <p>
              {{'片长:'+site.mins}}
              </p>
              <p>
                {{'IMDb链接'+site.imdb}}
              </p>
            </div>
          </li>
        </Col>
        <Col span="8" offset="4"  class="p_right">
            <p>豆瓣评分</p>
            <Rate show-text allow-half v-model="star" disabled>
              <span style="color: #f5a623">{{star*2}}</span>
            </Rate>
            <p>{{site.scoreNumber+"评价"}}</p>
        </Col>
        </Row>
        <Row class="b_introduction">
         <p class="intro_title">简介</p>
         <p class="intro_content">{{site.introduction}}</p>
        </Row>
    </Row>
</template>
<script>
export default {
  name: 'MyMovieDetail',
  data () {
    return {
    }
  },
  props: ['site', 'star']
}
</script>
<style lang="css">
.text{
  width:21.8rem;
  height:37.5rem;
  margin-left: 1.725rem;
  float:left;
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
  height:12.65625rem;
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
  margin-top: 4.6875rem;
  border-top: .0625rem solid #eee;
}
.intro_title{
  font-weight: bold;
  font-size: 1.25rem;
  margin: .125rem;
}
.intro_content{
  font-size:.875rem;
  text-indent:2rem;
  line-height:1.875rem;
}
</style>
