<template>
    <div id="app-header">
        <nav class="navbar navbar-expand-sm bg-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">飞凡用户管理系统</a>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">主页</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">关于我们</router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/adduser" class="nav-link">添加用户</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'app-header'
    }
</script>

<style scoped>

</style>

