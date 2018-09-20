<template>
  <div id="login">
    <form class="form-signin text-center" @submit.prevent='onSubmit'>
      <a class="py-2" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
      </a>
      <h3 class="my-3 text-center">Please sign in.</h3>
      <input type="text" class="form-control" placeholder="Email" v-model="email" required >
      <input type="password" class="form-control" placeholder="Password" v-model="password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="Remember me">Remember me
        </label>
      </div>
      <button class="btn btn-primary btn-lg btn-block">Sign in</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.$store.dispatch('setUser', null))
  },
  methods: {
    onSubmit() {
      axios.get('/users.json')
        .then(res => {
          const data = res.data;
          const users = [];
          for(let key in data) {
            const user = data[key];
            // console.log(user);
            users.push(user);
          }
          // console.log(users);

          //实现过滤
          let result = users.filter((user) => {
            return user.email === this.email && user.password === this.password;
          });

          //通过判断result的长度来确定输入是否有误
          if (result != null && result.length > 0) {
            this.$store.dispatch('setUser', result[0].email)
            this.$router.push({name: 'homeLink'});
            this.$store.dispatch('setLogin', true);
          } else {
            alert('你输入的邮箱或者密码有误！');
            this.$store.dispatch('setUser', null)
            this.$store.dispatch('setLogin', false)
          }
        })
    }
  }
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
}
input {
  padding: 10px;
}
</style>


