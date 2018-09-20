<template>
  <div id="app-adduser" class="jumbotron pt-4">
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      <h3 class="page-header">编辑用户</h3>
      <form v-on:submit='updateUsers'>
          <div class="form-group">
              <label for="name">姓名</label>
              <input type="text" class="form-control" placeholder="name" id="name" v-model="user.name">
          </div>
          <div class="form-group">
              <label for="phone">电话</label>
              <input type="text" class="form-control" placeholder="Phone" id="phone" v-model="user.phone">
          </div>
          <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" placeholder="Email" id="email" v-model="user.email">
          </div>
          <div class="form-group">
              <label for="education">学历</label>
              <input type="text" class="form-control" id="education" placeholder="Education" v-model="user.education">
          </div>
          <div class="form-group">
              <label for="graduationSchool">毕业学校</label>
              <input type="text" class="form-control" id="graduationSchool" placeholder="graduationSchool" v-model="user.graducationSchool">
          </div>
          <div class="form-group">
              <label for="prefession">职业</label>
              <input type="text" class="form-control" id="prefession" placeholder="prefession" v-model="user.prefession">
          </div>
          <div class="form-group">
              <label for="comment">评论</label>
              <textarea id="comment" cols="30" rows="10" class="form-control" v-model="user.comment"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">确认</button>
          <router-link to="/" class="btn btn-secondary">返回</router-link>
      </form>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'app-adduser',
  data() {
      return {
          user: {},
          alert: ''
      }
  },
  component: {
      Alert
  },
  methods: {
      fetchUser(id) {
          this.$http.get('http://localhost:3000/users/' + id)
            .then(res => {
                this.user = res.body;
            })
      },
      updateUsers(e) {
          e.preventDefault();
          if(!this.user.name || !this.user.email || !this.user.phone) {
              this.alert = '请添加对应信息!';
          }else {
              let newUser = this.user;
              this.$http.put('http://localhost:3000/users/' + this.$route.params.id, newUser)
                .then(() => {
                    this.$router.push({path:"/",query:{alert:"用户信息更新成功!"}});
                })
          }
        
      }
  },
  created() {
      this.fetchUser(this.$route.params.id);
  }
}
</script>

<style>
  
</style>
