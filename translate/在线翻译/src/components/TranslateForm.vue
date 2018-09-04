<template>
    <div id="translateForm">
        <form class="form-inline d-flex justify-content-center mt-4" @submit="formSubmit">
            <input type="text" id="formInput" class="form-control" placeholder="请输入要翻译的内容" v-model="textToTranslate">
            <select class="form-control" v-model="language">
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="ko">Korean</option>
                <option value="ja">Janpenese</option>
            </select>
            <button class="btn btn-primary">翻译</button>
        </form>
    </div>
</template>

<script>
    
export default {
    name: 'translateForm',
    data() {
        return {
            textToTranslate: '',
            language: ''
        }
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            this.$emit('formSubmit', this.textToTranslate, this.language);
        }
    },
    created() {
        this.language = 'en';
    }
}

</script>

<style scoped>

</style>
