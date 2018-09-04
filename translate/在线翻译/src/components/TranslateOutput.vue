<template>
    <div id="translateOut" class="jumbotron mt-4">
        {{ this.translatedText }}   
    </div>
</template>

<script>
    
export default {
    name: 'translateOut',
    props: [
        'translatedText'
    ]
}
</script>
