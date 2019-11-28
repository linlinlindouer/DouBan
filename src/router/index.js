import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Music from '../pages/Music.vue'
import Movie from '../pages/Movie.vue'
import Book from '../pages/Book.vue'
import Demo from '../components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
    {
      path: '/Movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
