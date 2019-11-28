<template>
<div class="mylist">
    <List item-layout="vertical">
        <ListItem v-for="(item,index) in content.slice(num,10)" :key="index" class="list">
            <ListItemMeta>
                <template slot="avatar">
                    <img :src="'https://images.weserv.nl/?url='+item.cover" class="list_img" @click="sendToparent(item.id)"/>
                </template>
                <template slot="title">
                    {{item.name}}
                </template>
                <template slot="description">
                    <li>{{'书籍名称:'+item.name}}</li>
                    <li>{{"作者:"+item.author}}</li>
                </template>
        </ListItemMeta>
        </ListItem>
    </List>
</div>
</template>
<script>
export default {
  name: 'MyBookList',
  data () {
    return {
    }
  },
  methods: {
    sendToparent: function (value) {
      this.$emit('acceptfromchild', value)
      console.log(value)
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
