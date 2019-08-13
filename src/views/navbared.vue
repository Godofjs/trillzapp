<template>
    <div class="container-fluid">
        <b-nav pills> 
            <b-nav-item active ><router-link to='/home' id="navs" >Home</router-link> </b-nav-item>
   <b-nav-item  id="navspan"><router-link to='/login' disabled > Login</router-link> </b-nav-item>
   <b-nav-item  id="navspan"><router-link to='/register' disabled > Register</router-link> </b-nav-item>
    <b-nav-item  id="navspan"><router-link to='/homed' disabled > home-2</router-link> </b-nav-item>
        </b-nav>
    <router-view> </router-view>
    </div>
</template>
<script>


</script>
<style>

#navs{
    color: whitesmoke;
    padding-top: 10px;
}
</style>

