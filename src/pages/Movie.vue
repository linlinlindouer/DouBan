<template>
<div class="layout">
    <Layout>
        <Header></Header>
        <Layout>
            <Content class="content">
                <Row>
                    <Col span="16">
                        <Row>
                            <Col span="3"><span>电影热评榜</span></Col>
                            <Col span="2" offset="19">
                                <Button size='small' type="text" @click="OutputMore" v-show="show">更多</Button>
                                <Button size='small' type="text" @click="back" v-show="!show">返回</Button>
                            </Col>
                        </Row>
                        <hr><hr>
                        <MyMovieList :content='movies' :num='more' @accepttochild="showId" v-show='show'></MyMovieList>
                        <MyMovieDetail v-show='!show' :site='movieDetail' :star='movieDetail.score/2'></MyMovieDetail>
                    </Col>
                    <Col span="7" offset='1' style="margin-top:1.2rem">
                        <span class='title'>电影排行榜</span>
                        <hr><hr>
                        <MyMovieCharts :content='movies'></MyMovieCharts>
                    </Col>
                </Row>
            </Content>
        </Layout>
    </Layout>
</div>
</template>
<script>
import MyHeader from '../components/MyHeader'
import MyMovieList from '../components/MyMovieList'
import MyMovieCharts from '../components/MyMovieCharts'
import MyMovieDetail from '../components/MyMovieDetail'
import Axios from 'axios'
export default {
  name: 'Movie',
  components: {
    MyMovieList: MyMovieList,
    Header: MyHeader,
    MyMovieCharts: MyMovieCharts,
    MyMovieDetail
  },
  data () {
    return {
      movies: [

      ],
      more: 8,
      moreback: '更多',
      show: true,
      movieDetail: [

      ]
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
    getData () {
      Axios.get('api/movie/get/top50').then((movie) => {
        this.movies = movie.data
        console.log(movie.data)
      })
    },
    showId (value) {
      console.log(value)
      Axios.get('api/movie/get/' + value).then((movieDetail) => {
        this.movieDetail = movieDetail.data
        this.show = false
        this.moreback = '返回'
        console.log(this.movieDetail)
      })
    },
    back () {
      this.show = true
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
    border: solid 0.01em #dcdee2;
}
.title{
    position: relative;
    top: -.3rem;
}
</style>
