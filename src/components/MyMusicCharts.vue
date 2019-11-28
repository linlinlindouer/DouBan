<template>
    <div>
        <List>
            <ListItem class='listitem' v-for="(item,index) in content" :key="item.index">
                {{index+1+'、'+item.name+" by"+item.player}}
            </ListItem>
        </List>
    </div>
</template>
<script>
export default {
  name: 'MyMusicCharts',
  props: ['content']
}
</script>
<style scoped>
.listitem{
    border: none;
}
</style>
