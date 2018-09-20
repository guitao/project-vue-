<template>
    <div id="userdetails">
        <hr>
        <h1 class="page-header d-flex">{{user.name}}
            <span class="ml-auto">
                <router-link class="btn btn-primary" v-bind:to="'/edit/' + user.id">编辑</router-link>
                <button class="btn btn-danger" @click='deleteUser(user.id)'>删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <i class="zi zi_phone mr-2" zico="话筒黑"></i>{{ user.phone }}
            </li>
            <li class="list-group-item">
                <i class="mr-2 zi zi_envelope" zico="信封"></i>{{ user.email }}
            </li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">
                <i class="mr-2 zi zi_graduationcap" zico="学士帽"></i>{{ user.education }}
            </li>
            <li class="list-group-item">
                <i class="mr-2 zi zi_school" zico="学校黑"></i>{{ user.graducationSchool }}
            </li>
            <li class="list-group-item">
                <i class="mr-2 zi zi_barcode"></i>{{ user.prefession }}
            </li>
            <li class="list-group-item">
                <i class="mr-2 zi zi_comment" zico="评论"></i>{{ user.comment }}
            </li>
            <li class="list-group-item">
                <router-link to="/" class="btn btn-secondary">返回</router-link>
            </li>
        </ul>
        
    </div>
</template>

<script>

export default {
    name: 'userdetails',
    data() {
        return {
            user: {}
        }
    },
    methods: {
        getUser(id) {
            this.$http.get('http://localhost:3000/users/' + id)
                .then(res => {
                    // console.log(res);
                    this.user = res.body;
                })
        },
        deleteUser(id) {
            this.$http.delete('http://localhost:3000/users/' + id)
                .then(res => {
                    this.$router.push({path: '/', query: {alert: '用户删除成功！'}});
                })
        }
    },
    created() {
        this.getUser(this.$route.params.id);
    }
}

</script>

<style scoped>

</style>
