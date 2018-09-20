<template>
    <div>
        <form>
            <h3 class="text-muted mb-4 h3">添加新的Pizza</h3>
            <div class="form-group row">
                <div class="col-sm-1">
                    <label for="newPizzaName">品种</label>
                </div>
                <div class="col-sm-11">
                    <input type="text" id="newPizzaName" class="form-control" v-model="newPizza.name">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-1">
                    <label>描述</label>
                </div>
                <div class="col-sm-11">
                    <textarea class="form-control" rows="5" v-model="newPizza.description"></textarea>
                </div>
            </div>
            <p>选项一:</p>
            <div class="form-group row">
                <div class="col-sm-1">
                    <label>尺寸</label>
                </div>
                <div class="col-sm-11">
                    <input type="text" id="newPizzaName" class="form-control" v-model="newPizza.size1">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-1">
                    <label>价格</label>
                </div>
                <div class="col-sm-11">
                    <input type="text" id="newPizzaName" class="form-control" v-model="newPizza.price1">
                </div>
            </div>
            <p>选项二:</p>
            <div class="form-group row">
                <div class="col-sm-1">
                    <label>尺寸</label>
                </div>
                <div class="col-sm-11">
                    <input type="text" id="newPizzaName" class="form-control" v-model="newPizza.size2">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-1">
                    <label>价格</label>
                </div>
                <div class="col-sm-11">
                    <input type="text" id="newPizzaName" class="form-control" v-model="newPizza.price2">
                </div>
            </div>
            <div class="form-group">
                <button @click="addMenuItem" type="button" class="btn btn-primary btn-block">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
      return{
        newPizza:{}
      }
    },
    methods:{
      addMenuItem(){
        // console.log(this.newPizza)
        let data = {
          name:this.newPizza.name,
          description:this.newPizza.description,
          options:[
            {
              size:this.newPizza.size1,
              price:this.newPizza.price1
            },
            {
              size:this.newPizza.size2,
              price:this.newPizza.price2
            }
          ]
        }

        // axios vue-resource es6 fetch
        // fetch("https://wd8046869294gzpsht.wilddogio.com/menu.json",{
        //   method:"POST",
        //   headers:{
        //     "Content-type":'application/json'
        //   },
        //   body:JSON.stringify(data)
        // })
        //   .then(res => res.json())
        //   .then(data => this.$router.push({name:"menuLink"}))
        //   .catch(err => console.log(err))

        //axios
        // this.http.post('menu.json', data)
        //          .then(res => this.$router.push({name: 'menuLink'}))

        //数据同步到Vuex
        this.http.post('menu.json', data)
                 .then(res => this.$store.commit('pushToMenuItems', data))
      }
    }
    }

</script>
