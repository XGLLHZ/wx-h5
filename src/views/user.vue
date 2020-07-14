<template>
    <div>叫三声沫沫</div>
</template>

<script>
export default {
    name: 'user',
    data() {
        return {
            url: 'http://wx.xgllhz.top/user?code=001eNaZe03mgex1McTZe0aCjZe0eNaZ6&state=STATE'
        }
    },

    created() {
        this.getCode()
    },

    methods: {
        getCode() {
            //console.log(window.location.href)
            // var reg = new RegExp("(^|&)" + 'code' + "=([^&]*)(&|$)");
            // var r = window.location.search.substr(1).match(reg);
            // if (r != null) return decodeURIComponent(r[2]); return null;
            console.log(this.$route.query.code)
        }
    }
    
}
</script>

<style scoped>

</style>
