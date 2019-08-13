<template>
  <div>
    <div class="container-fluid" id="container">
    <b-form @submit="onSubmit" name="form">
      <b-form-group id="input-group-2" label="Username:" label-for="input-2">
        <b-form-input id= "input-2" v-model= "this.username" placeholder="Username" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Password" label-for="input-group-3">
        <b-form-input id="input-3" v-model= "password" placeholder= "Password" type= "password" name="password"
         required></b-form-input>
      </b-form-group>
   <b-button type="submit" variant="primary" id="btn">submit</b-button>
    </b-form>
    </div>

  </div>
</template>
<style>
#container{
  box-shadow:  5px 3px 15px rgba(0, 0, 0, 0.3);
  background-color: beige;
width: 500px;
margin-top: 100px;
padding: 50px;

}
#btn{
  margin-right: 150px;
  margin-left: 120px;
  width: 150px;
}
</style>

<script>
export default {
  data(){
    return {
      email: "",
      username: "",
      password: "",
      
    }

  },
  methods: {
    onSubmit() {
      const password = document.form.password; 
      const pass = "password must be more than 6";
      if(password.length < 6) {
        return pass;
      }
    }
  }
}
</script>
