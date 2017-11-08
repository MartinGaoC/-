<style lang="stylus">
  @import "../../common/stylus/mixin.styl"
  .tabs
    display flex
    width 100%
    height 40px
    background white
    border-1px (rgba(7, 17, 27, 0.1))
    .tab
      flex 1
      text-align center
      line-height 34px
      color: rgb(77, 85, 93)
    .router-link-exact-active
      color rgb(240, 20, 20)
</style>
<template>
  <div class="wrap">
    <div class="tabs">
      <router-link to="../../page/seller/seller" class="tab">商品</router-link>
      <router-link to="../../page/goods/goods"  class="tab">评论</router-link>
      <router-link  to="../../page/ratings/ratings" class="tab">商家</router-link>
    </div>
  </div>
</template>
<script>

</script>
