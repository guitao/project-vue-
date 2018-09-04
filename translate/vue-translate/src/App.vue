<template>
  <div id="app">
    <h1 class="display-5 text-primary">在线翻译</h1>
    <h5 class="text-small text-muted mb-3">简单 / 方便 / 便捷</h5>
    <translateForm @formSubmit='translateText'></translateForm>
    <translateoutput v-text="translatedText" class="font-weight-bold text-success"></translateoutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'app',
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
    translateText (text, language) {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180728T132648Z.a19690555c74058f.183f70676dd5af3480c8531f4a861ba6bc99aa3f&lang='+ language+'&text='+text)
      .then(response => {
        this.translatedText = response.body.text[0];
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
