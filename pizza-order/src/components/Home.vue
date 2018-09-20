<template>
    <div class="row">
        <div id="home" class="col-sm-10 text-center">
            <div class="background">
                <h1>桂氏Pizza</h1>
                <h2>欢迎品尝Pizza!</h2>
                <button class="btn btn-success" @click='gotoMenu'>Let's order</button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  methods: {
    gotoMenu() {
      //跳转到上一次浏览的页面
      // this.$router.go(-1);

      //跳转道指定的页面
      // this.$router.replace('/menu');
      // this.$router.replace({name: 'menuLink'});

      //常用的--> 通过push进行跳转
      // this.$router.push('/menu');
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>

<style scoped>
#home {
  background: url(../../src/assets/pizza.jpg);
  background-size: 100% 100%;
  height: 85vh;
  margin: 10px auto;
}
h1, h2 {
    margin: 5%;
}
.background {
  background-color: #eee;
  opacity: 0.8;
  max-width: 50vw;
  margin: 10% auto;
}
</style>
