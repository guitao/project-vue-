<template>
  <div id="app-home">
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      <h3 class="page-header">用户管理系统:</h3>
      <input type="text" class="form-control mt-2 mb-4" placeholder="搜索" v-model="filterInput">
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>姓名</th>
                  <th>电话</th>
                  <th>邮箱</th>
                  <th>
                      
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in filterBy(users, filterInput)" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.email}}</td>
                  <td>
                      <router-link class="btn btn-sm btn-info" v-bind:to="'/userdetails/' + user.id">详情</router-link>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'app-home',
  components: {
      Alert
  },
  data() {
      return {
          users: [],
          alert: '',
          filterInput: ''
      }
  },
  methods: {
      getUser() {
          this.$http.get('http://localhost:3000/users')
            .then(res => {
                this.users = res.body;
            })
      },
      filterBy(users, value) {
          return users.filter((user) => user.name.match(value));
      }
  },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.getUser();
  },
  updated() {
    this.getUser();
  }
}
</script>

<style>

</style>

