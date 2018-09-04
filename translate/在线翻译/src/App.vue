<template>
  <div id="app" class="container text-center mt-5">
    <h2 class="page-header">在线翻译</h2>
    <h5 class="text-small text-muted">简单 / 方便 / 便捷</h5>
    <TranslateForm @formSubmit='translateText'></TranslateForm>
    <TranslateOutput v-text="translatedText"></TranslateOutput>
  </div>
</template>

<script>

import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'App',
  data() {
    return {
      translatedText: ''
    }
  },
  components: {
    TranslateForm,
    TranslateOutput
  },
  methods: {
    translateText(text, language) {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180728T132648Z.a19690555c74058f.183f70676dd5af3480c8531f4a861ba6bc99aa3f&lang='+ language+'&text='+text)
        .then(res => {
          // console.log(res);
          this.translatedText = res.body.text[0];
        })
    }
  }
}
</script>

<style>
  .container {
    max-width: 600px;
  }
</style>
