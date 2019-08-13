<template>
    <div class="container-fluid">
        <b-nav pill> 
            <b-nav-item active ><router-link to='/home' id="navs" >Home</router-link> </b-nav-item>
   <b-nav-item  id="navspan"><router-link to='/logined' disabled > login</router-link> </b-nav-item>
   <b-nav-item  id="navspan"><router-link to='/registered' disabled > Register</router-link> </b-nav-item>
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

