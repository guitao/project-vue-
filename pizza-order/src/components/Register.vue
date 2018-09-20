<template>
  <div id="register">
    <form class="form-register text-center" @submit.prevent='onSubmit'>
      <a class="py-2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
      </a>
      <h3 class="my-3 text-center">Please register.</h3>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">用户名:</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" v-model="username" required>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">邮箱:</span>
        </div>
        <input type="email" class="form-control" placeholder="Email" v-model="email" required>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">密码:</span>
        </div>
        <input type="password" class="form-control" placeholder="Password" v-model="password" required>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">确认密码:</span>
        </div>
        <input type="password" class="form-control" placeholder="Password" v-model="confirmPassword" required>
      </div>
      <button type="submit" class="btn btn-primary btn-lg btn-block">注册</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.password === this.confirmPassword) {
        const formData = {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }

        axios.post('/users.json', formData)
          .then(res => this.$router.push({name: 'loginLink'}));
      } else {
        alert('两次输入的密码不一致！');
      }
    }
  }
}
</script>

<style>
.form-register {
  width: 100%;
  max-width: 600px;
  padding: 40px;
  margin: 0 auto;
}
</style>

