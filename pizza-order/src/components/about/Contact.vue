<template>
    <div>
        <div class="card text-dark bg-light">
            <div class="card-header">联系我们</div>
            <div class="card-body">
                <h4 class="card-title">联系我们</h4>
                <p class="card-text text-success">happyevey_day@163.com</p>
                <router-link class="btn btn-info" :to='{name: "personNameLink"}'>姓名</router-link>
                <router-link class="btn btn-info" :to='{name: "phoneLink"}'>电话号码</router-link>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
