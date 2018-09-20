<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- 添加Pizza -->
            <NewPizza></NewPizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 菜单栏 -->
            <h3 class="text-muted h3">菜单：</h3>
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.id">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button @click="deleteData(item)" class="btn btn-sm btn-outline-danger">x</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import NewPizza from './NewPizza'

    export default {
        data() {
            return {
                // getMenuItems: []
            }
        },
        components: {
            NewPizza
        },
        created() {
            fetch('https://wd8046869294gzpsht.wilddogio.com/menu.json')
                .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                let menuArray = []
                for(let key in data){
                // console.log(key)
                // console.log(data[key])
                data[key].id = key
                menuArray.push(data[key])
                }
                // this.getMenuItems = menuArray
                
                //数据同步到Vuex
                this.$store.commit('setMenuItems', menuArray)
            })
        },
        computed: {
            getMenuItems: {
                // 在vuex中获取数据
                get(){
                // return this.$store.state.menuItems
                // 通过getters获取数据
                return this.$store.getters.getMenuItems
                },
                set(){

                }
            }
        },
        methods: {
            deleteData(item){
                fetch("https://wd8046869294gzpsht.wilddogio.com/menu/"+item.id+"/.json",{
                    method:"DELETE",
                    headers:{
                        'Content-type':'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    // this.$router.push({name:"menuLink"});
                    this.$store.commit('removeMenuItems', item)
                })
                .catch(err => console.log(err))
            }
        }
        // beforeRouteEnter: (to, from, next) => {
        //     next(vm => {
        //         alert( 'hello' + vm.name);
        //     });
        // }
    }
</script>

<style scoped>

</style>
