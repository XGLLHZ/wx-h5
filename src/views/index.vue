<template>
    <div class="index">
        <el-button class="auth-but" @click="authorize()">确认授权</el-button>
    </div>
</template>

<script>
import { getUrl, getUserInfo } from '@/api/index'
export default {
    name: 'index',
    data() {
        return {
            authorizeUrl: '',
            redirectUrl: 'http://192.168.3.7:1226'
        }
    },

    created() {
        this.initPage()
    },

    methods: {

        initPage() {
            // var url = window.location.href
            // var url = 'http://wx.xgllhz.top/user?code=001eNaZe03mgex1McTZe0aCjZe0eNaZ6&state=STATE'
            // console.log(url)
            // var code = this.getUrlParam('code')
            // console.log(code + 'qq')
            // if (!code) {
            //     getUrl({ redirectUrl: this.redirectUrl }).then(response => {
            //         console.log(response.data.body.dataInfo)
            //         window.location.href = response.data.body.dataInfo
            //     })
            // } else {
            //     getUserInfo({ code: code }).then(response => {
            //         console.log(response.data.body.dataInfo)
            //     })
            // }
            getUserInfo({ code: '061TQoQ21v2Z0U1WL2Q21HrgQ21TQoQb' }).then(response => {
                console.log(response.data.body.dataInfo)
            })
        },

        getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        },

        authorize() {
            console.log('s')
        }

    }

}
</script>

<style scoped>
.index {
    margin: 0%;
    padding: 0%;
    width: 100%;
    text-align: center;
}
.auth-but {
    margin-top: 60%;
    width: 50%;
    border: none;
    background-color: greenyellow;
    color: white;
}

</style>

