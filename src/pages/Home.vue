<template>
<div class="layout">
    <Layout>
        <Header></Header>
        <Layout>
            <Content class="content">
                <Row>
                    <Col span="16">
                        <Row>
                            <Col span="3"><span style="line-height:2rem">亚洲热评视频</span></Col>
                            <Col span="2" offset="19">
                                <Button size='small' type="text" :to='{path:"/Movie"}'>更多</Button>
                            </Col>
                        </Row>
                        <hr/>
                        <MyMovieList :content='movies' :num='more'></MyMovieList>
                    </Col>
                    <Col span="7" offset='1' style="margin-top:1.2rem">
                        <Row>
                            <Col span="6" ><span class='title' style="line-height:2rem">音乐排行榜</span></Col>
                            <Col span="6" offset="12"><Button size='small' type="text" :to='{path:"/Music"}'>更多</Button></Col>
                        </Row>
                        <hr/>
                        <MyMusicCharts :content='musics'></MyMusicCharts>
                    </Col>
                </Row>
                 <Row style="margin-top:2rem">
                    <Col span="3"><span>亚洲热评书籍</span></Col>
                    <Col span="2" offset="12">
                      <Button size='small' type="text" :to='{path:"/Book"}'>更多</Button>
                    </Col>
                 </Row>
                 <Row>
                    <Col span="16"><hr/><MyBookList :content='books'></MyBookList></Col>
                 </Row>
            </Content>
        </Layout>
    </Layout>
</div>
</template>
<script>
import MyHeader from '../components/MyHeader'
import MyMovieList from '../components/MyMovieList'
import MyMusicCharts from '../components/MyMusicCharts'
import MyBookList from '../components/MyBookList'
import Axios from 'axios'
export default {
  name: 'Home',
  components: {
    MyMovieList: MyMovieList,
    Header: MyHeader,
    MyMusicCharts: MyMusicCharts,
    MyBookList: MyBookList
  },
  data () {
    return {
      movies: [

      ],
      musics: [

      ],
      books: [

      ],
      more: 8
    }
  },
  methods: {
    OutputMore () {
      const msg = this.$Message.loading({
        content: 'Loading...',
        duration: 0
      })
      setTimeout(msg, 3000)
      setTimeout(() => {
        this.more = 0
      }, 3000)
    },

    getMusicData () {
      return Axios({
        method: 'get',
        baseURL: 'api',
        url:'/music/rankingList'
      })
    },
    getData () {
      Axios.all(this.getMusicData())
        .then(Axios.spread((music) => {
          this.musics = music.data
        }))
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style scoped>
.content{
    padding:2em 3rem 0 3rem;
    background-color: #fff;
}
.content hr{
    padding: 0;
    margin:0;
}
.title{
    position: relative;
    top: -.3rem;
}
</style>
