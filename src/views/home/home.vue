<template>
    <div class="me-home-view">
        this is home view
        <div class="go" @click="goAbout">跳转</div>
    </div>
</template>
<script>
import date from 'common/date';
export default {
    methods: {
        goAbout() {
           this.$router.push('/about');
        }
    }
}
</script>
<style lang="less" scoped>
    @import './home.less';
</style>