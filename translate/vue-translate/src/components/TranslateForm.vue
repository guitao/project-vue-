<template>
  <div id="translateForm" class="row">
    <div class="col-md-6 d-flex offset-md-3 justify-content-center">
      <form @submit="formSubmit" class="form-inline p-3 box-shadow" id="form">
        <input type="text" placeholder="请输入要翻译的内容" v-model="textToTranslate" class="form-control">
        <select v-model="language" class="form-control">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Janpenese</option>
        </select>
        <input type="submit" value="翻译" class="btn btn-primary">
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "translateForm",
  data() {
    return {
      textToTranslate: "",
      language: ""
    };
  },
  methods: {
    formSubmit(e) {
      // alert(this.textToTranslate);
      e.preventDefault();
      this.$emit("formSubmit", this.textToTranslate, this.language);
    }
  },
  created() {
    this.language = 'en'
  }
};
</script>

<style>
#form {
  border: 1px solid #ccc;
  border-radius: 10px;
}
.box-shadow{
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
}
</style>
