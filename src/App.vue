<template>
  <div >
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  components:{
'app-header' : Header,
'app-footer' : Footer,

  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
