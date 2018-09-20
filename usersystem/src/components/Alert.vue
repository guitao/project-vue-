<template>
    <div id="message-alert" class="alert alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss='alert'>&times;</button>
        {{ message }}
    </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'message-alert',
  props: ["message"]
}
</script>

<style>

</style>


