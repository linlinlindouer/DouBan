<template>
<div class="mylist">
    <List item-layout="vertical">
        <ListItem v-for="(item,index) in content" :key="index" class="list">
            <ListItemMeta>
                <template slot="avatar">
                    <img :src="'https://images.weserv.nl/?url='+item.coverUrl" class="list_img" @click="sendIdToparent(item.id)"/>
                </template>
                <template slot="title">
                    {{item.name}}
                </template>
                <template slot="description">
                    <li>{{'导演:'+item.director}}</li>
                    <li>{{"编剧:"+item.scriptwriter.substring(0,10)}}<span style="color:#555"> 更多</span></li>
                    <li>{{"主演:"+item.actor.substring(0,16)}}<span style="color:#555"> 更多</span></li>
                    <li>{{"类型："+item.genre}}</li>
                    <li>{{"时长："+item.mins}}</li>
                </template>
        </ListItemMeta>
        </ListItem>
    </List>
</div>
</template>
<script>
export default {
  name: 'MyMovieList',
  data () {
    return {
    }
  },
  methods: {
    sendIdToparent (value) {
      console.log(value)
      this.$emit('accepttochild', value)
    }
  },
  props: ['content', 'num']
}
</script>
<style scoped>
.list{
    width: 26rem;
    float: left;
    border: none;
    align-content: left;
}
.list_img{
    width:7rem;
    height: 8rem;
    margin-right:2rem
}
</style>
