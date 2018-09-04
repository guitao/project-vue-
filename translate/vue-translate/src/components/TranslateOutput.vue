<template>
  <div id="translateOutput" class="container">
    <h2>{{ this.translatedText }}</h2>
  </div>
</template>

<script>
export default {
  name: 'translateOutput',
  props: [
    'translatedText'
  ],
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
