<template>
  <nav>
      <ul class="row">
          <li class="col"><router-link to="/" exact>Home</router-link></li>
          <li class="col"><router-link to="/aboutUs" exact>About Us</router-link></li>
          <li class="col"><router-link to="/rooms" exact>Rooms</router-link></li>
          <li class="col"><router-link to="/contactUs" exact>Contact Us</router-link></li>
          <li class="col"><router-link to="/card" exact>Card</router-link></li>
      </ul>
  </nav>
</template>

<script>



export default {
  components:{ 

 
},
  data () {
    return {
    
    }
  }
}
</script>

<style>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active{
  background: #eee;
  color: #444;
}
</style>