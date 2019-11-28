<template>
  <div class="headertext">
    <table >
      <tr>
        <td>豆瓣内容偏好榜单</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'MyHeader'
  }
</script>
<style scoped>
  .headertext{
    background-color: grey;
    background-size: 100%,100%;
    color:#fff;
  }
  table{
    height:300px
  }
  td{
    width: 1430px;
    color: black;
    font-weight: bold;
    font-size:40px;
    text-align: center;
    vertical-align:middle;
  }

</style>
